<template>
    <!-- DataTales Example -->
    <div class="card shadow mb-4">
        <div class="card-header py-3 d-flex align-items-center justify-content-between">
            <h6 class="m-0 font-weight-bold text-primary">Active User Accounts</h6>
            <!-- <a class="btn btn-sm bg-danger shadow-sm">
                <i class="fas fa-plus fa-sm text-white-50"></i> <span class="d-none d-sm-inline-block text-white ml-1">Add New</span></a> -->
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
                            <th>Report Made</th>
                            <th>Joined At</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(userr, count) in users" :key="userr.id">
                            <td>{{ count }}</td>
                            <td>{{ userr.role }}</td>
                            <td>{{ userr.fullname }}</td>
                            <td>{{ userr.address }}</td>
                            <td>{{ userr.report_made }}</td>
                            <td>{{ userr.created_at }}</td>
                            <td>
                                <RouterLink :to="{ name: 'userdetail', params: { id: userr.id } }" type="button"
                                    class="btn btn-sm btn-primary mb-1 mx-1">
                                    View
                                </RouterLink>
                                <div class="btn-group mb-1 mx-1">
                                    <button type="button" class="btn btn-sm btn-danger dropdown-toggle"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        Mark As
                                    </button>
                                    <ul class="dropdown-menu position-fixed" style="z-index: 20;">
                                        <li><a @click="onDeactivateAccount(userr.id)" class="dropdown-item" role="button">Deactivate</a></li>
                                        <li>
                                            <hr class="dropdown-divider">
                                        </li>
                                        <li><a @click="onDeleteAccount(userr)" class="dropdown-item text-danger" role="button">Delete</a></li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <!-- The Modal -->
        <div class="modal fade" id="myModal">
            <div class="modal-dialog">
                <div class="modal-content">

                    <!-- Modal Header -->
                    <div class="modal-header">
                        <h4 class="modal-title">Delete User Account</h4>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <!-- Modal body -->
                    <div class="modal-body">
                        <p class="fs-7">
                            Are you sure you want to delete this account?
                        </p>

                        <p class="fs-8">
                            {{ selectedUser.fullname }}
                        </p>
                        <p class="fs-8">
                            {{ selectedUser.address }}
                        </p>
                        <p class="fs-8">
                            {{ selectedUser.email }}
                        </p>
                    </div>

                    <!-- Modal footer -->
                    <div class="modal-footer">
                        <button @click="onConfirmDeleteAccount" type="button" class="btn btn-danger">Confirm</button>
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import { onMounted } from 'vue'
import useUser from '../../composables/user'
const { user, users, getAllUser, getUser, activateUser, deactivateUser, deleteUser } = useUser()
const selectedUser = []

onMounted(async () => {
    await getAllUser('active')
    console.log(users)
    $('#dataTable').DataTable()
})

async function onDeactivateAccount(id){
    await deactivateUser(id)
    await getAllUser('active')
}

async function onDeleteAccount(user) {
    selectedUser.value = user
    $('#myModal').modal('show')
}
async function onConfirmDeleteAccount(){
    await deleteUser(selectedUser.value.id)
    $('#myModal').modal('hide')
    await getAllUser('deactivated')
}

</script>

<style scoped></style>