<script setup>
import { onMounted, watchEffect, ref, watch } from 'vue';
import { useRouter } from 'vue-router';

import UserDetailView from '../views/account/UserDetailView.vue';
import IncidentDetails from '../views/incident/IncidentDetails.vue';
import EditReport from '../views/incident/EditReport.vue';

import useAccount from '../composables/account'
import useNotification from '../composables/notification';
import useIncident from '../composables/incident';

import { Modal } from 'bootstrap'
import useUser from '../composables/user';
const { user, getUser } = useUser()

const { getUserDetails, userDetails } = useAccount()
const { getNewNotifications, getNotificationsCount, count, nnotifications, nerrors, markSeen } = useNotification()
const { errors, deleteIncident, updateIncidentStatus } = useIncident()

const router = useRouter()
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

const onwait = ref([false])

onMounted(() => {

    xviewModalEl = $('#xview-item-modal')
    xviewModal = Modal.getOrCreateInstance(xviewModalEl)
    xviewModalEl2 = $('#xview-item2-modal')
    xviewModal2 = Modal.getOrCreateInstance(xviewModalEl2)
    xeditModalEl = $('#xedit-item-modal')
    xeditModal = Modal.getOrCreateInstance(xeditModalEl)
    getNewNotifications()
    getNotificationsCount()

    getUserDetails()
    setInterval(async () => {
        if (!onwait.value) {
            onwait.value = true
            getNewNotifications()
            getNotificationsCount()
        }
    }, 15000);
})

watchEffect(async () => {
    title.value = router.currentRoute.value.meta['title']
})

watch(() => nnotifications.value,
    async (val) => {
        notif.value = val
        onwait.value = false
        // notif.value.forEach(function (n) {
        //     console.log(n)
        // })
    }
);

async function viewDetails(n) {

    if (n.type == 'New User') {
        getUser(n.notif_id)
        selectedUser.value = user.value
        xviewModal.show()
    }
    if (n.type == 'Report') {
        selectedItemRef.value = n.notif_id
        xviewModal2.show()
    }
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

<template>
    <!-- Topbar -->
<nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

    <!-- Sidebar Toggle (Topbar) -->
    <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3 focus-none">
        <i class="fa fa-bars"><span class="pl-3 top-bar-title">{{ title }}</span></i>
    </button>
    <span class="pl-3 top-bar-title text-primary fw-bolder fst-italic fa-2x d-none d-md-block">{{ title }}</span>

    <!-- Topbar Navbar -->
    <ul class="navbar-nav ml-auto">

        <!-- Nav Item - Alerts -->
        <li class="nav-item dropdown no-arrow mx-1">
            <a class="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-bell fa-fw"></i>
                <!-- Counter - Alerts -->
                <span class="badge badge-danger badge-counter">{{ count }}+</span>
            </a>
            <!-- Dropdown - Alerts -->
            <div class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                aria-labelledby="alertsDropdown">
                <h6 class="dropdown-header">
                    Alerts Center
                </h6>
                    <a v-for="n in notif" :key="n.id" @click="viewDetails(n)"
                        class="dropdown-item d-flex align-items-center" role="button">
                        <div class="mr-3">
                            <div v-if="n.type == 'Report'" class="icon-circle bg-warning">
                                <i class="fas fa-exclamation-triangle text-white"></i>
                            </div>
                            <div v-if="n.type == 'New User'" class="icon-circle bg-primary mr-2">
                                <i class="fas fa-user-plus text-white"></i>
                            </div>
                        </div>
                        <div>
                            <div class="small text-gray-500">{{ n.created_at }}</div>
                            <span v-if="n.isalreadyseen">{{ n.message }}</span>
                            <span v-if="!n.isalreadyseen" class="font-weight-bold ">{{ n.message }}</span>
                        </div>
                    </a>
                    <!-- <div>
                            <a class="dropdown-item d-flex align-items-center" href="#">
                                <div class="mr-3">
                                    <div class="icon-circle bg-primary">
                                        <i class="fas fa-file-alt text-white"></i>
                                    </div>
                                </div>
                                <div>
                                    <div class="small text-gray-500">December 12, 2019</div>
                                    <span class="font-weight-bold">A new monthly report is ready to download!</span>
                                </div>
                            </a>
                            <a class="dropdown-item d-flex align-items-center" href="#">
                                <div class="mr-3">
                                    <div class="icon-circle bg-success">
                                        <i class="fas fa-donate text-white"></i>
                                    </div>
                                </div>
                                <div>
                                    <div class="small text-gray-500">December 7, 2019</div>
                                    $290.29 has been deposited into your account!
                                </div>
                            </a>
                            <a class="dropdown-item d-flex align-items-center" href="#">
                                <div class="mr-3">
                                    <div class="icon-circle bg-warning">
                                        <i class="fas fa-exclamation-triangle text-white"></i>
                                    </div>
                                </div>
                                <div>
                                    <div class="small text-gray-500">December 2, 2019</div>
                                    Spending Alert: We've noticed unusually high spending for your account.
                                </div>
                            </a>
                        </div> -->
                    <RouterLink to="/activities/notifications" class="dropdown-item text-center small text-gray-500">Show
                        All Alerts</RouterLink>
                </div>
            </li>

            <!-- Nav Item - Messages -->
            <li class="nav-item dropdown no-arrow mx-1 d-none">
                <a class="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button" data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false">
                    <i class="fas fa-envelope fa-fw"></i>
                    <!-- Counter - Messages -->
                    <span class="badge badge-danger badge-counter">7</span>
                </a>
                <!-- Dropdown - Messages -->
                <div class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                    aria-labelledby="messagesDropdown">
                    <h6 class="dropdown-header">
                        Message Center
                    </h6>
                    <a class="dropdown-item d-flex align-items-center" href="#">
                        <div class="dropdown-list-image mr-3">
                            <img class="rounded-circle" src="../assets/img/undraw_profile_1.svg" alt="...">
                            <div class="status-indicator bg-success"></div>
                        </div>
                        <div class="font-weight-bold">
                            <div class="text-truncate">Hi there! I am wondering if you can help me with a
                                problem I've been having.</div>
                            <div class="small text-gray-500">Emily Fowler · 58m</div>
                        </div>
                    </a>
                    <a class="dropdown-item d-flex align-items-center" href="#">
                        <div class="dropdown-list-image mr-3">
                            <img class="rounded-circle" src="../assets/img/undraw_profile_2.svg" alt="...">
                            <div class="status-indicator"></div>
                    </div>
                    <div>
                        <div class="text-truncate">I have the photos that you ordered last month, how
                                would you like them sent to you?</div>
                            <div class="small text-gray-500">Jae Chun · 1d</div>
                        </div>
                    </a>
                    <a class="dropdown-item d-flex align-items-center" href="#">
                        <div class="dropdown-list-image mr-3">
                            <img class="rounded-circle" src="../assets/img/undraw_profile_3.svg" alt="...">
                            <div class="status-indicator bg-warning"></div>
                        </div>
                        <div>
                            <div class="text-truncate">Last month's report looks great, I am very happy with
                                the progress so far, keep up the good work!</div>
                            <div class="small text-gray-500">Morgan Alvarez · 2d</div>
                        </div>
                    </a>
                    <a class="dropdown-item d-flex align-items-center" href="#">
                        <div class="dropdown-list-image mr-3">
                            <img class="rounded-circle" src="https://source.unsplash.com/Mv9hjnEUHR4/60x60" alt="...">
                            <div class="status-indicator bg-success"></div>
                        </div>
                        <div>
                            <div class="text-truncate">Am I a good boy? The reason I ask is because someone
                                told me that people say this to all dogs, even if they aren't good...</div>
                            <div class="small text-gray-500">Chicken the Dog · 2w</div>
                        </div>
                    </a>
                    <RouterLink to="/activities/messages" class="dropdown-item text-center small text-gray-500">Read More
                        Messages</RouterLink>
                </div>
            </li>

            <div class="topbar-divider d-none d-sm-block"></div>

            <!-- Nav Item - User Information -->
            <li class="nav-item dropdown no-arrow">
                <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false">
                    <span class="mr-2 d-none d-lg-inline text-gray-600 small">{{ userDetails.firstname + ' ' +
                        userDetails.lastname }}</span>
                    <img class="img-profile rounded-circle" src="../assets/img/undraw_profile.svg">
                </a>
                <!-- Dropdown - User Information -->
                <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                    <RouterLink to="/account/profile" class="dropdown-item" id="btnDashboard">
                        <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                        Profile
                    </RouterLink>
                    <!-- <RouterLink to="/activities/logs" class="dropdown-item" href="#">
                                <i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                                Activity Log
                            </RouterLink> -->
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                        <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                        Logout
                    </a>
                </div>
            </li>

        </ul>

        <!-- view detail modal -->
        <div class="modal fade" id="xview-item-modal" tabindex="99999" role="dialog" aria-labelledby="myLargeModalLabel"
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
                <div class="modal fade" id="xview-item2-modal" tabindex="99999" role="dialog" aria-labelledby="myLargeModalLabel"
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
        <div class="modal fade" id="xedit-item-modal" tabindex="99999" role="dialog" aria-labelledby="myLargeModalLabel"
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
    </nav>
    <!-- End of Topbar -->
</template>
<style>
button,
button:hover,
button:active {
    user-select: none;
}
</style>