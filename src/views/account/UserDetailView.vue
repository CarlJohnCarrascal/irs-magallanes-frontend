<script setup>
import { onMounted } from 'vue';
import { useRoute } from "vue-router";
import useUser from '../../composables/user';
import router from '../../router';

const route = useRoute()
const { user, errors, users, getUser, activateUser, deactivateUser, deleteUser } = useUser()

const selectedUser = []

onMounted(async () => {
    const id = route.params.id
    console.log(id)
    await getUser(id)
})

async function onActivateAccount(){
    await activateUser(user.value.id)
    router.back()
}
async function onDeactivateAccount(){
    await deactivateUser(user.value.id)
    router.back()
}

async function onDeleteAccount() {
    $('#myModal').modal('show')
}
async function onConfirmDeleteAccount(){
    await deleteUser(user.id)
    $('#myModal').modal('hide')
    router.back()
}

</script>

<template>
    <div>
        <div class="d-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Profile</h1>
            <a @click="$router.go(-1)" class="btn btn-sm m-2">
                <i class="fas fa-times fa-md text-black-50"></i>
            </a>
        </div>
        <section class="mb-4" style="background-color: #eee;">
            <div class="container py-4">
                <div class="row">
                    <div class="col-lg-4">
                        <div class="card mb-4">
                            <div class="card-body text-center">
                                <img src="../../assets/img/undraw_profile.svg" alt="avatar" class="rounded-circle img-fluid"
                                    style="width: 150px;">
                                <h5 class="my-3">{{ user.fullname }}</h5>
                                <p class="text-muted mb-4">{{ user.address }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-8">
                        <div class="card mb-4">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-sm-3">
                                        <p class="mb-0">Full Name</p>
                                    </div>
                                    <div class="col-sm-9">
                                        <p class="text-muted mb-0">{{ user.fullname }}
                                        </p>
                                    </div>
                                </div>
                                <hr>
                                <div class="row">
                                    <div class="col-sm-3">
                                        <p class="mb-0">Email</p>
                                    </div>
                                    <div class="col-sm-9">
                                        <p class="text-muted mb-0">{{ user.email }}</p>
                                    </div>
                                </div>
                                <hr>
                                <div class="row">
                                    <div class="col-sm-3">
                                        <p class="mb-0">Phone</p>
                                    </div>
                                    <div class="col-sm-9">
                                        <p class="text-muted mb-0">{{ user.phone }}</p>
                                    </div>
                                </div>
                                <hr>
                                <div class="row">
                                    <div class="col-sm-3">
                                        <p class="mb-0">Address</p>
                                    </div>
                                    <div class="col-sm-9">
                                        <p class="text-muted mb-0">{{ user.address }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card mb-2">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-sm-5">
                                        <p class="mb-0">Total Report Made</p>
                                    </div>
                                    <div class="col-sm-7">
                                        <p class="text-muted mb-0">{{ user.report_made }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="card-body">
                                <div class="d-flex justify-content-end">
                                    <button @click="onDeactivateAccount" v-if="user.status == 'active'" class="btn btn-danger">Deactivate Account</button>
                                    <button @click="onActivateAccount" v-if="user.status == 'deactivated'" class="btn btn-success">Activate Account</button>
                                    <button @click="onDeleteAccount" class="btn btn-danger mx-1">Delete Account</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
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
                            {{ user.fullname }}
                        </p>
                        <p class="fs-8">
                            {{ user.address }}
                        </p>
                        <p class="fs-8">
                            {{ user.email }}
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

<style lang="scss" scoped></style>