<template>
    <!-- DataTales Example -->
    <div class="card shadow mb-4">
        <div class="card-header py-3 d-flex align-items-center justify-content-between">
            <h6 class="m-0 font-weight-bold text-primary">Active User Accounts</h6>
            <!-- <a class="btn btn-sm bg-danger shadow-sm">
                <i class="fas fa-plus fa-sm text-white-50"></i> <span class="d-none d-sm-inline-block text-white ml-1">Add New</span></a> -->
        </div>
        <div class="card-body">
            <div class="">
                <DataTable :data="users" id="user-table" class="table table-hover" :columns="columns" :options="options"
                    :ref="userTable">
                </DataTable>
            </div>
        </div>
        <!-- view detail modal -->
        <div class="modal fade" id="view-item-modal" tabindex="99999" role="dialog" aria-labelledby="myLargeModalLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">User Detail</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <UserDetailView :user="selectedUser" />
                    </div>
                    <div class="modal-footer">
                        <button @click="onDeactivateAccount"
                            class="btn btn-sm btn-danger">Deactivate Account</button>
                        <button @click="onDeleteAccount" class="btn btn-sm btn-danger mx-1">Delete Account</button>
                        <button type="button" class="btn btn-sm btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- delete Modal -->
        <div class="modal fade" id="my-modal" tabindex="99999" role="dialog" aria-labelledby="myLargeModalLabel"
            aria-hidden="true">
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
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import UserDetailView from './UserDetailView.vue';
import { onMounted, ref } from 'vue'
import useUser from '../../composables/user'
import { Modal, Toast } from 'bootstrap'
import DataTable from 'datatables.net-vue3';
import DataTablesCore from 'datatables.net-bs5';

const { user, users, getAllUser, getUser, activateUser, deactivateUser, deleteUser } = useUser()
const selectedUser = ref([])
const selectedItem = ref([])
const userTable = ref()

var viewModalEl = ""
var viewModal = ""
var delModalEl = ""
var delModal = ""

DataTable.use(DataTablesCore);
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
    select: true,
    responsive: true,
    scrollY: '100%',
    scrollX: '100%',
}

onMounted(async () => {
    await getAllUser('active')

    viewModalEl = $('#view-item-modal')
    viewModal = Modal.getOrCreateInstance(viewModalEl)
    delModalEl = $('#my-modal')
    delModal = Modal.getOrCreateInstance(delModalEl)
    
    $('#user-table').on('click', 'a#btn-view-user',async function (e) {
        e.preventDefault();
        var id = $(this).attr('data-id')
        //alert(id)
        await getUser(id)
        selectedUser.value = user.value
        selectedItem.value = id
        viewModal.show()
    });
})

async function onDeleteAccount() {
    viewModal.hide()
    delModal.show()
}
async function onConfirmDeleteAccount() {
    await deleteUser(selectedItem.value)
    delModal.hide()
    await getAllUser('active')
}
async function onDeactivateAccount() {
    await deactivateUser(selectedItem.value)
    viewModal.hide()
    await getAllUser('active')
}
</script>

<style scoped></style>