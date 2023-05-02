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
                            <div v-for="n in notifications" :key="n.id">
                                <tr class="d-flex justify-content-between">
                                    <div class="d-flex justify-content-center gap-2">
                                    <td>
                                        <div v-if="n.type == 'Report'" class="icon-circle bg-warning mr-2">
                                            <i class="fas fa-exclamation-triangle text-white"></i>
                                        </div>
                                        <div v-if="n.type == 'New User'" class="icon-circle bg-primary mr-2">
                                            <i class="fas fa-user-plus text-white"></i>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="small text-gray-500">{{ n.created_at }}</div>
                                        <span v-if="n.isalreadyseen">{{ n.message }}</span>
                                        <span v-if="!n.isalreadyseen" class="font-weight-bold ">{{ n.message }}</span>
                                    </td>
                                        
                                    </div>
                                    <td>
                                        <a @click="viewDetails(n)" class="btn btn-sm btn-primary">View</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="3">
                                        <hr>
                                    </td>
                                </tr>
                            </div>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <!-- view detail modal -->
        <div class="modal fade" id="xview1-item-modal" tabindex="99999" role="dialog" aria-labelledby="myLargeModalLabel"
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
                        <button @click="onDeactivateAccount" class="btn btn-sm btn-danger">Deactivate Account</button>
                        <button @click="onDeleteAccount" class="btn btn-sm btn-danger mx-1">Delete Account</button>
                        <button type="button" class="btn btn-sm btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
                <!-- view detail modal -->
                <div class="modal fade" id="xview1-item2-modal" tabindex="99999" role="dialog" aria-labelledby="myLargeModalLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Report Detail</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <IncidentDetails :view-only="false" :incident-item="selectedItemRef" @onedit="onEditItem"
                        @ondelete="onConfirmDelete" @onchangestatus="onChangeStatus" />
                </div>
            </div>
        </div>
        
        <!-- edit item modal -->
        <div class="modal fade" id="xedit1-item-modal" tabindex="99999" role="dialog" aria-labelledby="myLargeModalLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Update Report Detail</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <EditReport :incident-item="selectedItemRef" />
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
import { Modal } from 'bootstrap'
import { onMounted, ref } from 'vue'
import useNotification from '../../composables/notification';

import UserDetailView from '../account/UserDetailView.vue';
import IncidentDetails from '../incident/IncidentDetails.vue';
import EditReport from '../incident/EditReport.vue';

import useIncident from '../../composables/incident';

const { getNotifications, notifications, nerrors, markSeen } = useNotification()
const { errors, deleteIncident, updateIncidentStatus } = useIncident()

let title = ref([])
const notif = ref([])
const selectedUser = ref([])
const selectedItemRef = ref([])

var xviewModalEl = ""
var xviewModal = ""
var xviewModalEl2 = ""
var xviewModal2 = ""
var xeditModalEl = ""
var xeditModal = ""

onMounted(async () => {
    xviewModalEl = $('#xview1-item-modal')
    xviewModal = Modal.getOrCreateInstance(xviewModalEl)
    xviewModalEl2 = $('#xview1-item2-modal')
    xviewModal2 = Modal.getOrCreateInstance(xviewModalEl2)
    xeditModalEl = $('#xedit1-item-modal')
    xeditModal = Modal.getOrCreateInstance(xeditModalEl)

    await getNotifications(false)
})

async function viewDetails(n) {

if (n.type == 'New User') {
    await getUser(n.notif_id)
    selectedUser.value = user.value
    xviewModal.show()
}
if (n.type == 'Report') {
    selectedItemRef.value = n.notif_id
    xviewModal2.show()
}
n.isalreadyseen = true;
await markSeen(n.id)
}


async function onEditItem() {
xviewModal2.hide()
xeditModal.show()
}

async function onConfirmDelete() {

await deleteIncident(selectedItemRef.value)
xviewModal2.hide()
//dt.draw()
}

async function onChangeStatus(d) {
await updateIncidentStatus(d, selectedItemRef.value)
}
</script>

<style scoped></style>