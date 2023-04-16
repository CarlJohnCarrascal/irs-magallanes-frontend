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
                <div class="col-sm-6 col-md-4 col-lg-3">
                    <label for="filter" class="form-label">Filter</label>
                    <select id="filter" v-model="currentFilter" class="form-select form-select-sm text-muted" aria-label=".form-select-sm example">
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
                    <thead>
                        <tr>
                            <th>Informant</th>
                            <th>Type of Accident</th>
                            <th>Cause</th>
                            <th>Location</th>
                            <th>Datetime</th>
                            <th>Severity</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="">
                            <td>John Doe</td>
                            <td>Medical</td>
                            <td>Motor Accident</td>
                            <td>
                                Purok 1. Siuton - near gibalon shrine
                            </td>
                            <td>Mar 23, 2023 at 10:34 AM</td>
                            <td class="text-center">
                                <span class="fs-8 fw-bold text-primary">Minor</span>
                            </td>
                            <td class="">
                                    <RouterLink :to="{ name: 'reportdetails', params: { id: 12 } }" type="button"
                                        class="btn btn-sm btn-primary mb-1">
                                        View Details
                                    </RouterLink>
                                    <!-- Example single danger button -->
                                    <!-- Show if user is admin or the report is reported by the user -->
                                    <div class="btn-group mb-1" v-if="getCookie2('role') == 'admin'">
                                        <button type="button" class="btn btn-sm btn-danger dropdown-toggle"
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                            Mark As
                                        </button>
                                        <ul class="dropdown-menu position-fixed" style="z-index: 20;">
                                            <li><a class="dropdown-item" href="#">Responding</a></li>
                                            <li><a class="dropdown-item" href="#">Responded</a></li>
                                            <li><a class="dropdown-item" href="#">Fake Report</a></li>
                                            <li>
                                                <hr class="dropdown-divider">
                                            </li>
                                            <li><a class="dropdown-item text-danger" href="#">Remove</a></li>
                                        </ul>
                                    </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Nick Jonas</td>
                            <td>Medical</td>
                            <td>Electrocution</td>
                            <td>
                                Purok 4. Biton - near 
                            </td>
                            <td>Mar 20, 2023 at 12:34 PM</td>
                            <td class="text-center">
                                <span class="fs-8 fw-bold text-danger">Critical</span>
                            </td>
                            <td class="">
                                <div class="">
                                    <RouterLink :to="{ name: 'reportdetails', params: { id: 12 } }" type="button"
                                        class="btn btn-sm btn-primary mb-1">
                                        View Details
                                    </RouterLink>
                                    <!-- Example single danger button -->
                                    <!-- Show if user is admin or the report is reported by the user -->
                                    <div class="btn-group mb-1" v-if="getCookie2('role') == 'admin'">
                                        <button type="button" class="btn btn-sm btn-danger dropdown-toggle"
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                            Mark As
                                        </button>
                                        <ul class="dropdown-menu position-fixed" style="z-index: 20;">
                                            <li><a class="dropdown-item" href="#">Responding</a></li>
                                            <li><a class="dropdown-item" href="#">Responded</a></li>
                                            <li><a class="dropdown-item" href="#">Fake Report</a></li>
                                            <li>
                                                <hr class="dropdown-divider">
                                            </li>
                                            <li><a class="dropdown-item text-danger" href="#">Remove</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref} from 'vue'
import useBase from '../../composables/base'

import '../../assets/vendor/jquery/jquery.min.js'
import '../../assets/vendor/datatables/jquery.dataTables.min.js'
import '../../assets/vendor/datatables/dataTables.bootstrap4.min.js'
import router from '../../router'

const { getCookie2 } = useBase()
const currentFilter = ref([])

onMounted(async () => {
    $(document).ready(function () {
        $('#dataTable').DataTable({
        });
    });

    var f = router.currentRoute.value.query.f
    if (f == 'undefied') {
        currentFilter.value = 'today'
    }else{
        currentFilter.value = f
    }

})
</script>

<style scoped></style>