<template>
    <!-- DataTales Example -->
    <div class="card shadow mb-4">
        <div class="card-header py-3 d-flex align-items-center justify-content-between mb-4">
            <h6 class="m-0 font-weight-bold text-primary">Report History</h6>
            <RouterLink to="/incident/new" class="btn btn-sm bg-danger shadow-sm">
                <i class="fas fa-plus fa-sm text-white-50"></i> <span class="d-none d-sm-inline-block text-white ml-1">Add
                    New</span>
            </RouterLink>
        </div>
        <div class="card-body mt-0 pt-0">
            <div class="row mb-2">
                <div class="col-md-3 col-sm-">
                    <label for="filter" class="form-label">Filter</label>
                    <select id="filter" v-model="currentFilter" @change="loadIncidents"
                        class="form-select form-select-sm text-muted" aria-label=".form-select-sm example">
                        <option disabled>Filter list:</option>
                        <option value="today" selected>Today</option>
                        <option value="week">This Week</option>
                        <option value="month">This Month</option>
                        <option value="year">This Year</option>
                        <option value="all">All</option>
                    </select>
                </div>
            </div>
            <div class="table-responsive h-auto">
                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                </table>
            </div>
        </div>

        <!-- view detail modal -->
        <div class="modal fade" id="view-item-modal" tabindex="99999" role="dialog" aria-labelledby="myLargeModalLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Report Detail</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <IncidentDetail :view-only="false" :incident-item="selectedItemRef" @onedit="onEditItem" @ondelete="onConfirmDelete" />
                </div>
            </div>
        </div>
        <!-- edit item modal -->
        <div class="modal fade" id="edit-item-modal" tabindex="99999" role="dialog" aria-labelledby="myLargeModalLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Update Report Detail</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <EditReport :incident-item="selectedItemRef" />
                </div>
            </div>
        </div>
        <div class="modal fade" tabindex="-1" id="confirm-delete-modal">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Delete Report</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p>Are you sure to delete this item?</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        <button @click="onConfirmDelete" type="button" class="btn btn-danger btn-delete-item">
                            <span>Delete</span>
                            <div class="spinner-border spinner-border-sm d-none" role="status">
                                <span class="sr-only"></span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div class="position-fixed bottom-0 end-0 p-3" style="z-index: 11">
            <div id="toast-delete" class="toast hide bg-danger" role="alert" aria-live="assertive" data-bs-delay="1000"
                aria-atomic="true">
                <div class="toast-body text-primary">
                    Report has been deleted!
                </div>
                <div class="toast-header d-flex justify-content-end">
                    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import IncidentDetail from '../incident/IncidentDetails.vue'
import EditReport from './EditReport.vue'

import '../../assets/vendor/jquery/jquery.min.js'
import '../../assets/vendor/datatables/jquery.dataTables.min.js'
import '../../assets/vendor/datatables/dataTables.bootstrap4.min.js'

import useIncident from '../../composables/incident'
import { onMounted, ref } from 'vue';
import router from '../../router';
import { Modal, Toast } from 'bootstrap'

const currentFilter = ref([])
const selectedItemRef = ref([])
var selectedItem = ""
var viewModalEl = ""
var viewModal = ""
var editModalEl = ""
var editModal = ""
var deleteModal = ""
var deleteModalEl = ""
var approveToaste = ""
var deleteToaste = ""
var approveToastel = ""
var deleteToastel = ""

const { getAllIncident, errors, incidents, deleteIncident, updateIncidentStatus } = useIncident()
var dt = null

onMounted(async () => {

    var f = router.currentRoute.value.query.f
    switch (f) {
        case 'undefined':
            currentFilter.value = 'today'
            break;
        case '':
            currentFilter.value = 'today'
            break;
        case 'today':
            currentFilter.value = 'today'
            break;
        case 'month':
            currentFilter.value = 'month'
            break;
        case 'year':
            currentFilter.value = 'year'
            break;
        default:
            currentFilter.value = 'today'
            break;
    }

    await getAllIncident('all', '')
    console.log(incidents.value, errors.value)
    var item = incidents.value
    dt = new $('#dataTable').DataTable({
        "data": item,
        "bProcessing": true,
        "sPaginationType": "full_numbers",
        "aoColumns": [
            { "mData": "report_inf.name", "sTitle": "Informant" },
            { "mData": "type", "sTitle": "Type Of Accident" },
            { "mData": "fulllocation", "sTitle": "Location" },
            { "mData": "datetime", "sTitle": "Datetime" },
            {
                "mData": "severity", "sTitle": "Severity",
                "mRender": function (o) {
                    return `<span class="fs-8 fw-bold text-capitalize s-` + o + `">` + o + `</span>`
                }
            },
            {
                "mData": "status", "sTitle": "Status",
                "mRender": function (o) {
                    return `<span class="fs-8 fw-bold text-capitalize">` + o + `</span>`
                }
            },
            {
                "mData": 'id',
                "bSortable": false,
                "mRender": function (o) {
                    var action = `<a data-id="` + o + `" type="button" id="btn-view-detail"
                                    class="btn btn-sm btn-primary m-1">
                                    View
                                </a>
                                <div class="dropdown m-1">
                                    <button type="button" class="btn btn-sm btn-primary dropdown-toggle" data-bs-toggle="dropdown">
                                        Mark As
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" data-id="`+ o + `" id="btn-process-item" role="button">On Process</a></li>
                                        <li><a class="dropdown-item" data-id="`+ o + `" id="btn-responding-item" role="button">Responding</a></li>
                                        <li><a class="dropdown-item" data-id="`+ o + `" id="btn-resolved-item" role="button">Resolved</a></li>
                                        <li><hr class="dropdown-divider"></li>
                                        <li><a class="dropdown-item text-danger" data-id="`+ o + `" id="btn-delete-item" role="button">Delete</a></li>
                                    </ul>
                                </div>`
                    return action;
                }
            }
        ]
    });

    $.fn.dataTable.ext.search.push(function (settings, data, dataIndex) {
        var startdate = ""
        var enddate = ""
        var datenow = new Date()
        var d = new Date(data[3])
        if (currentFilter.value == 'today') {
            if (
                d.getDate() == datenow.getDate()
            ) {
                return true
            }
            return false
        }
        if (currentFilter.value == 'week') {
            var day = datenow.getDay(),
                diff = datenow.getDate() - day + (day == 0 ? -6 : 1); // adjust when day is sunday
            var startweek = new Date(datenow.setDate(diff))
            var endweek = new Date(datenow.setDate(diff + 6))

            //console.log(startweek, endweek)

            if (
                (d >= startweek) &&
                (d <= endweek)
            ) {
                return true
            }
            return false
        }
        if (currentFilter.value == 'month') {
            var firstDay = new Date(datenow.getFullYear(), datenow.getMonth(), 1);
            var lastDay = new Date(datenow.getFullYear(), datenow.getMonth() + 1, 0);

            //console.log(firstDay, lastDay)

            if (
                (d >= firstDay) &&
                (d <= lastDay)
            ) {
                return true
            }
            return false
        }
        if (currentFilter.value == 'year') {
            //console.log(d.getFullYear, datenow.getFullYear)
            if (
                (d.getFullYear() == datenow.getFullYear())
            ) {
                return true
            }
            return false
        }
        if (currentFilter.value == 'all') {
            return true
        }
    });

    try {
        viewModalEl = $('#view-item-modal')
        viewModal = Modal.getOrCreateInstance(viewModalEl)
        editModalEl = $('#edit-item-modal')
        editModal = Modal.getOrCreateInstance(editModalEl)
        deleteModalEl = $('#confirm-delete-modal')
        deleteModal = Modal.getOrCreateInstance(deleteModalEl)
        deleteToastel = $('#toast-delete')
        deleteToaste = Toast.getOrCreateInstance(deleteToastel)
    } catch (error) {
        console.log(error)
    }

    $('#dataTable').on('click', 'a#btn-view-detail', function (e) {
        e.preventDefault();
        var id = $(this).attr('data-id')
        selectedItem = id
        selectedItemRef.value = id
        viewModal.show()
        //router.push('/incident/' + id + '/details')
    });
    $('#dataTable').on('click', 'a#btn-process-item', async function (e) {
        e.preventDefault();
        var id = $(this).attr('data-id')
        await updateIncidentStatus('on process', id)
    });
    $('#dataTable').on('click', 'a#btn-responding-item', async function (e) {
        e.preventDefault();
        var id = $(this).attr('data-id')
        await updateIncidentStatus('responding', id)
    });
    $('#dataTable').on('click', 'a#btn-resolved-item', async function (e) {
        e.preventDefault();
        var id = $(this).attr('data-id')
        await updateIncidentStatus('resolved', id)
    });

    $('#dataTable').on('click', 'button#btn-delete-item', function (e) {
        e.preventDefault();
        var id = $(this).attr('data-id')
        //alert(id)
        selectedItem = id
        deleteModal.show()
    });

    dt.draw()

})

async function loadIncidents() {
    //await getAllIncident(currentFilter.value, 'new')
    //console.log(incidents.value, errors.value)
    dt.draw()
    // $('#dataTable').DataTable();
}

function onViewIncident(id) {
    router.push('incident/12/details')
}

async function onEditItem() {
    viewModal.hide()
    editModal.show()
}
async function onConfirmDelete() {
    $('.btn-delete-item').attr("disabled", "disabled");
    $('.btn-delete-item').children('span').addClass('d-none')
    $('.btn-delete-item').children('div').removeClass('d-none')

    await deleteIncident(selectedItem)
    await getAllIncident('all', 'pending')

    $('.btn-delete-item').removeAttr("disabled", "disabled");
    $('.btn-delete-item').children('span').removeClass('d-none')
    $('.btn-delete-item').children('div').addClass('d-none')

    deleteModal.hide()
    deleteToaste.show()
    viewModal.hide()
    dt.draw()
}
</script>

<style scoped></style>