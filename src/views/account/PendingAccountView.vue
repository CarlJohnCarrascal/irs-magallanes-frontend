<template>
    <!-- DataTales Example -->
    <div class="card shadow mb-4">
        <div class="card-header py-3 d-flex align-items-center justify-content-between">
            <h6 class="m-0 font-weight-bold text-primary">Pending Approval Accounts</h6>
        </div>
        <div class="card-body">
            <div class="table-responsive">
                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Role</th>
                            <th>Full name</th>
                            <th>Address</th>
                            <th>Status</th>
                            <th>Joined At</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(user, i) in users" :key="user.id">
                            <td>{{ i }}</td>
                            <td>{{ user.role }}</td>
                            <td>{{ user.fullname }}</td>
                            <td>{{ user.address }}</td>
                            <td>{{ user.status }}</td>
                            <td>{{ user.created_at }}</td>
                            <td>
                                <button type="button" class="btn btn-sm btn-primary mb-1 mx-1">
                                        View
                                    </button>
                                <div class="btn-group mb-1 mx-1">
                                    <button type="button" class="btn btn-sm btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                        Mark As
                                    </button>
                                    <ul class="dropdown-menu position-fixed" style="z-index: 20;">
                                        <li><a class="dropdown-item" role="button" >Activate</a></li>
                                        <li><hr class="dropdown-divider"></li>
                                        <li><a class="dropdown-item text-danger" role="button">Delete</a></li>
                                    </ul>
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

import { onMounted } from 'vue'
import useUser from '../../composables/user'
const { user, users, getAllUser, getUser, activateUser, deactivateUser, deleteUser } = useUser()

onMounted(async () => {
    await getAllUser('pending')
    $('#dataTable').DataTable()
})

</script>

<style scoped>
@import url('../../assets/vendor/datatables/dataTables.bootstrap4.min.css');

</style>