<template>
    <!-- DataTales Example -->
    <div class="card shadow mb-4">
        <div class="card-header py-3 d-flex align-items-center justify-content-between mb-4">
            <h6 class="m-0 font-weight-bold text-primary">Patients</h6>
        </div>
        <div class="card-body mt-0 pt-0">
            <div class="row mb-2 d-flex justify-content-between">
                <div class="col-md-3 col-sm- input-group-sm">
                    <label for="filter" class="form-label">Filter</label>
                    <select id="filter" v-model="currentFilter" @change="loadIncidents" class="form-select form-select-sm text-muted" aria-label=".form-select-sm example">
                        <option disabled>Filter list:</option>
                        <option value="today" selected>Today</option>
                        <option value="week">This Week</option>
                        <option value="month">This Month</option>
                        <option value="year">This Year</option>
                        <option value="all">All</option>
                        <option value="custom">Custom</option>
                    </select>
                </div>
                <div v-if="currentFilter == 'custom'" class="col-lg-6 col-md-8 col-sm-12 d-flex justify-content-end fs-8 mt-1">
                    <div class=" input-group-sm">
                        <label for="startDate">Start</label>
                        <input @change="loadIncidents" v-model="customDateStart" id="startDate" class="form-control text-muted" type="date" />
                    </div>
                    <div class=" input-group-sm ml-1">
                        <label for="endDate">End</label>
                        <input @change="loadIncidents" v-model="customDateEnd" id="endDate" class="form-control text-muted" type="date" />
                    </div>
                </div>
            </div>
            <div class="">
                <DataTable :data="patients"
                        id="patient-table"
                        class="display" 
                        :columns="columns"
                        :options="options"
                        :ref="patientTable">
                </DataTable>
            </div>
        </div>
        <!-- view detail modal -->
        <div class="modal fade" id="view-item-modal-patient" tabindex="99999" role="dialog" aria-labelledby="myLargeModalLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Report Detail</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <IncidentDetail :view-only="true" :incident-item="selectedItemRef"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import DataTable from 'datatables.net-vue3';
import DataTablesCore from 'datatables.net-bs5';
 
import IncidentDetail from './IncidentDetails.vue'

import { onMounted, ref } from 'vue'
import useIncident from '../../composables/incident'
import { Modal } from 'bootstrap'   

DataTable.use(DataTablesCore);

const columns = [
  { data: 'name', title: 'Name', class: 'text-capitalize fs-8' },
  { data: 'address', title: 'Address', class: 'text-capitalize fs-8' },
  { data: 'age', title: 'Age', class: 'text-capitalize fs-8'  },
  { data: 'incident_type', title: 'Type', class: 'text-capitalize fs-8' },
  { data: 'cause', title: 'Cause', class: 'text-capitalize fs-8'},
  { data: 'incident_date', title: 'Date', class: 'fs-8' },
  { data: 'status', title: 'Status', class: 'text-capitalize fs-8 text-center' ,
    align: 'center',
    render: function(d){
        return `<span class="fs-8 fw-bold text-capitalize s-` + d + `">` + d + `</span>`
    }
  },
  { 
    data: 'incidentid', 
    title: '',
    sortable: false,
    class: 'fs-8',
    render: function(d) {
        return `<a data-id="` + d + `" type="button" id="btn-view-detail-patient"
                    class="btn btn-sm btn-primary m-1">
                   View
                </a>`
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

const { getAllPatient, patients, errors } = useIncident()

const currentFilter = ref([])
const selectedItemRef = ref([])
const patientTable = ref()

const customDateStart = ref()
const customDateEnd = ref()

var selectedItem = ""
var viewModalEl = ""
var viewModal = ""
var dtpatient = null
onMounted(async () => {

    initDate()
    currentFilter.value = 'today'
    await getAllPatient('today')
    let item = patients.value
    // dtpatient = new $('#dataTable2').DataTable({
    //     "data": item,
    //     "bProcessing": true,
    //     "sPaginationType": "full_numbers",
    //     "aoColumns": [
    //         { "mData": "name", "sTitle": "Name" },
    //         { "mData": "address", "sTitle": "Address" },
    //         { "mData": "age", "sTitle": "Age" },
    //         { "mData": "incident_type", "sTitle": "Cause" },
    //         { "mData": "cause", "sTitle": "Cause" },
    //         { "mData": "incident_date", "sTitle": "Date" },
    //         {
    //             "mData": "status", "sTitle": "Status",
    //             "mRender": function (o) {
    //                 return `<span class="fs-8 fw-bold text-capitalize">` + o + `</span>`
    //             }
    //         },
    //         {
    //             "mData": 'incidentid',
    //             "bSortable": false,
    //             "mRender": function (o) {
    //                 var action = `<a data-id="` + o + `" type="button" id="btn-view-detail-patient"
    //                                 class="btn btn-sm btn-primary m-1">
    //                                 View
    //                             </a>`
    //                 return action;
    //             }
    //         }
    //     ]
    // });
    $.fn.dataTable.ext.search.push(function (settings, data, dataIndex) {
        var startdate = ""
        var enddate = ""
        var datenow = new Date()
        var d = new Date(data[5])
        console.log("patients",data)
        //return true
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

    viewModalEl = $('#view-item-modal-patient')
    viewModal = Modal.getOrCreateInstance(viewModalEl)

    $('#patient-table').on('click', 'a#btn-view-detail-patient', function (e) {
        e.preventDefault();
        var id = $(this).attr('data-id')
        selectedItem = id
        selectedItemRef.value = id
        viewModal.show()
        //router.push('/incident/' + id + '/details')
    });
    //dtpatient.draw()

})

function initDate() {
    var currentDate = new Date()
    var strDate = currentDate.getFullYear() + "-0" + (currentDate.getMonth() + 1) + "-" + currentDate.getDate()
    var cd = (new Date()).toISOString().split('T')[0]

    customDateStart.value = cd
    customDateEnd.value = cd
}
async function loadIncidents() {
    if (currentFilter.value == 'custom') {
        var d1 = Date.parse(customDateStart.value) / 1000
        var d2 = Date.parse(customDateEnd.value) / 1000
        await getAllPatient(currentFilter.value, d1 , d2)
    }else{
        await getAllPatient(currentFilter.value)
    }
}
</script>

<style scoped>
@import 'bootstrap';
@import 'datatables.net-bs5';
</style>