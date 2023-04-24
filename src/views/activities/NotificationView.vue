<template>
    <div>
        <div class="card">
            <div class="card-header">
                Alerts Center
            </div>
            <div class="card-body">
                <div class="row">
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="d-flex justify-content-center">
                                    <div class="icon-circle bg-primary mr-2">
                                        <i class="fas fa-user-plus text-white"></i>
                                    </div>
                                </td>
                                <td>
                                    <div class="small text-gray-500 fs-9">January 12, 2023 8:21 AM</div>
                                    <span class="font-weight-bold fs-8">A new user has sign up!</span>
                                </td>
                                <td>
                                    <a class="btn btn-sm btn-primary">View</a>
                                </td>
                            </tr>
                            <tr><td colspan="3"><hr></td></tr>
                            <tr>
                                <td class="d-flex justify-content-center ">
                                    <div class="icon-circle bg-warning mr-2">
                                        <i class="fas fa-exclamation-triangle text-white"></i>
                                    </div>
                                </td>
                                <td class="">
                                    <div class="small text-gray-500 fs-9">January 12, 2023 12:23 PM</div>
                                    <div>
                                        <span class="fs-8">
                                        Spending Alert: We've noticed unusually high spending for your account.
                                    </span>
                                    </div>
                                </td>
                                <td>
                                    <a class="btn btn-sm btn-primary">View</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

import DataTable from 'datatables.net-vue3';
import DataTablesCore from 'datatables.net-bs5';

DataTable.use(DataTablesCore);
const notifyTable = ref()
const columns = [
    { data: 'role', title: 'Role', class: 'text-capitalize fs-8 text-center align-middle' },
    { data: 'fullname', title: 'Fullname', class: 'text-capitalize fs-8 text-center align-middle' },
    { data: 'address', title: 'Address', class: 'text-capitalize fs-8 align-middle', },
    { data: 'report_made', title: 'Total Report', class: 'text-capitalize fs-8 align-middle' },
    { data: 'created_at', title: 'Sign-up Date', class: 'text-capitalize fs-8 align-middle' },
    {
        data: 'id',
        class: '',
        sortable: false,
        render: function (o) {
            var a = `<a data-id="` + o + `" id="btn-view-user" role="button"
            class="btn btn-sm btn-primary mb-1 mx-1">
                                    View
                                </a>`
            var aa = `<a data-id="` + o + `" id="btn-view-user" role="button"
                                    class="btn btn-sm btn-primary mb-1 mx-1">
                                    View
                                </a>
                                <div class="btn-group mb-1 mx-1">
                                    <button type="button" class="btn btn-sm btn-danger dropdown-toggle"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        Mark As
                                    </button>
                                    <ul class="dropdown-menu position-fixed" style="z-index: 20;">
                                        <li><a data-id="`+ o + `" id="btn-deactivate-user" class="dropdown-item" role="button">Deactivate</a></li>
                                        <li>
                                            <hr class="dropdown-divider">
                                        </li>
                                        <li><a data-id="`+ o + `" id="btn-delete-user" class="dropdown-item text-danger" role="button">Delete</a></li>
                                    </ul>
                                </div>`
            return a;
        }
    },
];
const options = {
    select: false,
    responsive: true,
    scrollY: '100%',
    scrollX: '100%',
}
</script>

<style scoped>

</style>