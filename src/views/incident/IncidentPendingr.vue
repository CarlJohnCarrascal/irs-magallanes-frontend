<template>
    <!-- DataTales Example -->
    <div class="card shadow mb-4">
        <div class="card-header py-3 d-flex align-items-center justify-content-between mb-4">
            <h6 class="m-0 font-weight-bold text-primary">Pending Report</h6>
            <a class="btn btn-sm bg-danger shadow-sm">
                <i class="fas fa-plus fa-sm text-white-50"></i> <span class="d-none d-sm-inline-block text-white ml-1">Add
                    New</span></a>
        </div>
        <div class="card-body mt-0 pt-0">
            <div class="row">
                <DataTable class="display" :columns="columns" :data="incidents"/>
            </div>
        </div>
    </div>
</template>

<script setup>
// import '../../assets/vendor/jquery/jquery.min.js'
// import '../../assets/vendor/datatables/jquery.dataTables.min.js'
// import '../../assets/vendor/datatables/dataTables.bootstrap4.min.js'

import useIncident from '../../composables/incident'
import { onMounted, ref } from 'vue';
import DataTable from 'datatables.net-vue3';
import DataTablesCore from 'datatables.net';
 
DataTable.use(DataTablesCore);

const { getAllIncident, errors, incidents } = useIncident()
const columns = [
  { data: 'report_inf.name', title: 'Informant' },
  { data: 'type', title: 'Type of Accident' },
  { data: 'type', title: 'Cause' },
  { data: 'barangay', title: 'Location' },
  { data: 'datetime', title: 'Datetime' },
  { data: 'status', title: 'Status' },
];

onMounted(async () => {
    await getAllIncident('all','new')
})

</script>

<style scoped>
@import 'bootstrap';
@import '../../assets/vendor/datatables/dataTables.bootstrap4.min.css'
</style>