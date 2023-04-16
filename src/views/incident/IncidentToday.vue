<template>
    <!-- DataTales Example -->
    <div class="card shadow mb-4">
        <div class="card-header py-3 d-flex align-items-center justify-content-between mb-4">
            <h6 class="m-0 font-weight-bold text-primary">Report Today</h6>
                <a class="btn btn-sm bg-danger shadow-sm">
                    <i class="fas fa-plus fa-sm text-white-50"></i> 
                    <span class="d-none d-sm-inline-block text-white ml-1">Add New</span>
                </a>
            
        </div>
        <div class="card-body h-auto">
            <div class="table-responsive h-auto">
                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                            <th>From</th>
                            <th>Type of Accident</th>
                            <th>Cause</th>
                            <th>Location</th>
                            <th>Datetime</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Siuton</td>
                            <td>Injury</td>
                            <td>Car, Motor</td>
                            <td>
                                Purok 5. Siuton - (12.794803,123.874976)
                            </td>
                            <td>12:34 PM</td>
                            <td class="text-center">
                                <span class="fs-8 fw-bold">New</span>
                            </td>
                            <td class="">
                                <div class="btn-group mr-1 mb-1">
                                    <button type="button" class="btn btn-sm btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                        View
                                    </button>
                                    <ul class="dropdown-menu position-fixed" style="z-index: 21;">
                                        <li>
                                            <RouterLink :to="{ name: 'reportdetails', params: { id: 12 } }" class="dropdown-item">Details</RouterLink>
                                        </li>
                                        <li>
                                            <RouterLink :to="{ name: 'reportedit', params: { id: 12 } }" class="dropdown-item">Modify</RouterLink>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" 
                                                href="https://www.google.com/maps/@12.794803,123.874976,25z"
                                                target="_blank">Pin Map
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <!-- Example single danger button -->
                                <div class="btn-group mb-1">
                                    <button type="button" class="btn btn-sm btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                        Mark As
                                    </button>
                                    <ul class="dropdown-menu position-fixed" style="z-index: 20;">
                                        <li><a class="dropdown-item" href="#">Responding</a></li>
                                        <li><a class="dropdown-item" href="#">Responded</a></li>
                                        <li><a class="dropdown-item" href="#">Fake Report</a></li>
                                        <li><a class="dropdown-item" href="#">Resolved</a></li>
                                        <li><hr class="dropdown-divider"></li>
                                        <li><a class="dropdown-item text-danger" href="#">Remove</a></li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Siuton</td>
                            <td>Injury</td>
                            <td>Car, Motor</td>
                            <td>
                                Purok 5. Siuton - (12.794803,123.874976)
                            </td>
                            <td>10:34 AM</td>
                            <td class="text-center">
                                <span class="fs-8 fw-bold">New</span>
                            </td>
                            <td class="">
                                <div class="btn-group mr-1 mb-1">
                                    <button type="button" class="btn btn-sm btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                        View
                                    </button>
                                    <ul class="dropdown-menu position-fixed" style="z-index: 21;">
                                        <li>
                                            <RouterLink :to="{ name: 'reportdetails', params: { id: 12 } }" class="dropdown-item">Details</RouterLink>
                                        </li>
                                        <li>
                                            <RouterLink :to="{ name: 'reportedit', params: { id: 12 } }" class="dropdown-item">Modify</RouterLink>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" 
                                                href="https://www.google.com/maps/@12.794803,123.874976,25z"
                                                target="_blank">Pin Map
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <!-- Example single danger button -->
                                <div class="btn-group mb-1">
                                    <button type="button" class="btn btn-sm btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                        Mark As
                                    </button>
                                    <ul class="dropdown-menu position-fixed" style="z-index: 20;">
                                        <li><a class="dropdown-item" href="#">Responding</a></li>
                                        <li><a class="dropdown-item" href="#">Responded</a></li>
                                        <li><a class="dropdown-item" href="#">Fake Report</a></li>
                                        <li><a class="dropdown-item" href="#">Resolved</a></li>
                                        <li><hr class="dropdown-divider"></li>
                                        <li><a class="dropdown-item text-danger" href="#">Remove</a></li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div id="map"></div>
            </div>
        </div>
    </div>
</template>

<script setup>
import '../../assets/vendor/jquery/jquery.min.js'
import '../../assets/vendor/bootstrap/js/bootstrap.bundle.min.js'
import '../../assets/vendor/jquery-easing/jquery.easing.min.js'
import '../../assets/js/sb-admin-2.min.js'
import '../../assets/vendor/datatables/jquery.dataTables.min.js'
import '../../assets/vendor/datatables/dataTables.bootstrap4.min.js'

$(document).ready(function() {
  $('#dataTable').DataTable();
});

</script>

<style scoped>
@import url('../../assets/vendor/datatables/dataTables.bootstrap4.min.css');

</style>