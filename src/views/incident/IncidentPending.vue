<template>
    <!-- DataTales Example -->
    <div class="card shadow mb-4">
        <div class="card-header py-3 d-flex align-items-center justify-content-between mb-4">
            <h6 class="m-0 font-weight-bold text-primary">Pending Report</h6>
            <RouterLink to="/incident/new" class="btn btn-sm bg-danger shadow-sm">
                <i class="fas fa-plus fa-sm text-white-50"></i> <span class="d-none d-sm-inline-block text-white ml-1">Add
                    New</span>
            </RouterLink>
        </div>
        <div class="card-body mt-0 pt-0">
            <div class="row mb-2 d-flex justify-content-between">
                <div class="col-md-3 col-sm- input-group-sm">
                    <label for="filter" class="form-label">Filter</label>
                    <select id="filter" v-model="currentFilter" @change="loadIncidents"
                        class="form-select form-select-sm text-muted" aria-label=".form-select-sm example">
                        <option disabled>Filter list:</option>
                        <option value="today" selected>Today</option>
                        <option value="week">This Week</option>
                        <option value="month">This Month</option>
                        <option value="year">This Year</option>
                        <option value="all">All</option>
                        <option value="custom">Custom</option>
                    </select>
                </div>
                <div v-if="currentFilter == 'custom'"
                    class="col-lg-6 col-md-8 col-sm-12 d-flex justify-content-end fs-8 mt-1">
                    <div class=" input-group-sm">
                        <label for="startDate">Start</label>
                        <input @change="loadIncidents" v-model="customDateStart" id="startDate"
                            class="form-control text-muted" type="date" />
                    </div>
                    <div class=" input-group-sm ml-1">
                        <label for="endDate">End</label>
                        <input @change="loadIncidents" v-model="customDateEnd" id="endDate" class="form-control text-muted"
                            type="date" />
                    </div>
                </div>
            </div>
            <div class="">
                <DataTable :data="incidents" id="pending-table" class="display" :columns="columns" :options="options"
                    :ref="pendingTable">
                </DataTable>
            </div>
        </div>

        <!-- view detail modal -->
        <div class="modal fade" id="view-item-modal-pending" tabindex="99999" role="dialog" aria-labelledby="myLargeModalLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Report Detail</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <IncidentDetail :incident-item="selectedItemRef" @onapprove="onConfirmApprove"
                        @ondelete="onConfirmDelete" />
                </div>
            </div>
        </div>
        <!-- edit item modal -->
        <div class="modal fade" id="edit-item-modal-pending" tabindex="9999" role="dialog" aria-labelledby="myLargeModalLabel2"
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
        <!-- modal -->
        <div class="modal fade" tabindex="-1" id="confirm-approve-modal-pending">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Approve Report</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p>Please confirm to approve the report?</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        <button @click="onConfirmApprove" type="button" class="btn btn-success btn-approve-item-pending">
                            <span>Approve</span>
                            <div class="spinner-border spinner-border-sm d-none" role="status">
                                <span class="sr-only"></span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" tabindex="-1" id="confirm-delete-modal-pending">
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
                        <button @click="onConfirmDelete" type="button" class="btn btn-danger btn-delete-item-pending">
                            <span>Delete</span>
                            <div class="spinner-border spinner-border-sm d-none" role="status">
                                <span class="sr-only"></span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- taost -->
        <div class="position-fixed bottom-0 end-0 p-3" style="z-index: 11">
            <div id="toast-approve-pending" class="toast hide bg-success d-flex" data-bs-delay="1000" role="alert"
                aria-live="assertive" aria-atomic="true">
                <div class="toast-body text-primary">
                    Report has been approved!
                </div>
                <div class="toast-header d-flex justify-content-end">
                    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
            </div>
        </div>
        <div class="position-fixed bottom-0 end-0 p-3" style="z-index: 11">
            <div id="toast-delete-pending" class="toast hide bg-danger" role="alert" aria-live="assertive" data-bs-delay="1000"
                aria-atomic="true">
                <div class="toast-body text-primary col">
                    Report has been deleted!
                </div>
                <div class="toast-header col d-flex justify-content-end">
                    <button type="button" class="btn-close btn-sm" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import IncidentDetail from '../incident/IncidentDetails.vue'
import EditReport from '../incident/EditReport.vue'

import useIncident from '../../composables/incident'
import { onMounted, ref } from 'vue';
import router from '../../router';
import { Modal, Toast } from 'bootstrap'

import DataTable from 'datatables.net-vue3';
import DataTablesCore from 'datatables.net-bs5';

DataTable.use(DataTablesCore);
const columns = [
    { data: 'report_inf.name', title: 'Informant', class: 'text-capitalize fs-8' },
    { data: 'type', title: 'Type of Accident', class: 'text-capitalize fs-8' },
    { data: 'fulllocation', title: 'Location', class: 'text-capitalize fs-8' },
    { data: 'datetime', title: 'Datetime', class: 'text-capitalize fs-8' },
    {
        data: 'severity', title: 'Severity',
        render: function (d) {
            return `<span class="fs-8 fw-bold text-capitalize s-` + d + `">` + d + `</span>`
        }
    },
    {
        data: 'status', title: 'Status', class: 'text-capitalize fs-8',
        render: function (d) {
            return `<span class="fs-8 fw-bold text-capitalize">` + d + `</span>`
        }
    },
    {
        data: 'id',
        title: '',
        sortable: false,
        render: function (o) {
            var action = `<a data-id="` + o + `" type="button" id="btn-view-detail-pending"
                                    class="btn btn-sm btn-primary">
                                    View
                                </a>
                                <a data-id="` + o + `" type="button" id="btn-edit-item-pending"
                                    class="btn btn-sm btn-secondary">
                                    Edit
                                </a>
                                <button data-id="`+ o + `" type="button" class="btn btn-sm btn-success m-1" id="btn-approve-item-pending">
                                    Approve
                                </button>
                                <button data-id="`+ o + `" type="button" class="btn btn-sm btn-danger" id="btn-delete-item-pending">
                                    Delete
                                </button>`
            return action;
        }
    },
];
const options = {
    select: true,
    responsive: true,
    scrollY: 400,
    scrollX: '100%',
    scrollCollapse: true
}

const currentFilter = ref([])
const selectedItemRef = ref([])
var selectedItem = ""
var viewModalEl = ""
var viewModal = ""
var editModalEl = ""
var editModal = ""
var approveModal = ""
var approveModalEl = ""
var deleteModal = ""
var deleteModalEl = ""
var approveToaste = ""
var deleteToaste = ""
var approveToastel = ""
var deleteToastel = ""

const { getAllIncident, errors, incidents, deleteIncident, approveIncident } = useIncident()
let dtpending = null

onMounted(async () => {

    currentFilter.value = 'today'
    await getAllIncident('today', 'pending')

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

    viewModalEl = $('#view-item-modal-pending')
        viewModal = Modal.getOrCreateInstance(viewModalEl)
        editModalEl = $('#edit-item-modal-pending')
        editModal = Modal.getOrCreateInstance(editModalEl)
        approveModalEl = $('#confirm-approve-modal-pending')
        approveModal = Modal.getOrCreateInstance(approveModalEl)
        deleteModalEl = $('#confirm-delete-modal-pending')
        deleteModal = Modal.getOrCreateInstance(deleteModalEl)

        approveToastel = $('#toast-approve-pending')
        approveToaste = Toast.getOrCreateInstance(approveToastel)
        deleteToastel = $('#toast-delete-pending')
        deleteToaste = Toast.getOrCreateInstance(deleteToastel)

    $('#pending-table').on('click', 'a#btn-view-detail-pending', function (e) {
        e.preventDefault();
        var id = $(this).attr('data-id')
        selectedItem = id
        selectedItemRef.value = id
        viewModal.show()
        //router.push('/incident/' + id + '/details')
    });
    $('#pending-table').on('click', 'a#btn-edit-item-pending', function (e) {
        e.preventDefault();
        var id = $(this).attr('data-id')
        selectedItem = id
        selectedItemRef.value = id
        editModal.show()
        //router.push('/incident/' + id + '/details')
    });
    $('#pending-table').on('click', 'button#btn-approve-item-pending', function (e) {
        e.preventDefault();
        var id = $(this).attr('data-id')
        //alert(id)
        selectedItem = id
        approveModal.show()
    });
    $('#pending-table').on('click', 'button#btn-delete-item-pending', function (e) {
        e.preventDefault();
        var id = $(this).attr('data-id')
        //alert(id)
        selectedItem = id
        deleteModal.show()
    });
})

async function loadIncidents() {
    if (currentFilter.value == 'custom') {
        var d1 = Date.parse(customDateStart.value) / 1000
        var d2 = Date.parse(customDateEnd.value) / 1000
        await getAllIncident(currentFilter.value,'pending', d1 , d2)
    }else{
        await getAllIncident(currentFilter.value,'pending')
    }
}

async function onConfirmApprove() {
    $('.btn-approve-item-pending').attr("disabled", "disabled");
    $('.btn-approve-item-pending').children('span').addClass('d-none')
    $('.btn-approve-item-pending').children('div').removeClass('d-none')

    await approveIncident(selectedItem)
    await getAllIncident('all', 'pending')

    $('.btn-approve-item-pending').removeAttr("disabled", "disabled");
    $('.btn-approve-item-pending').children('span').removeClass('d-none')
    $('.btn-approve-item-pending').children('div').addClass('d-none')

    approveModal.hide()
    approveToaste.show()
    viewModal.hide()
    dtpending.draw()
}
async function onConfirmDelete() {
    $('.btn-delete-item-pending').attr("disabled", "disabled");
    $('.btn-delete-item-pending').children('span').addClass('d-none')
    $('.btn-delete-item-pending').children('div').removeClass('d-none')

    await deleteIncident(selectedItem)
    await getAllIncident('all', 'pending')

    $('.btn-delete-item-pending').removeAttr("disabled", "disabled");
    $('.btn-delete-item-pending').children('span').removeClass('d-none')
    $('.btn-delete-item-pending').children('div').addClass('d-none')

    deleteModal.hide()
    deleteToaste.show()
    viewModal.hide()
    dtpending.draw()
}
</script>

<style scoped></style>