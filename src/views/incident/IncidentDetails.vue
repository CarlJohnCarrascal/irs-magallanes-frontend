<template>
    <div>
        <div class="modal-body">
            <div class="row ml-md-4 ">
                <!-- Informant Info -->
                <div class="col-sm-12 col-md-12 mb-2">
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody v-if="incident.report_inf">
                            <tr>
                                <td colspan="2" class="fs-7 text-muted font-weight-bold">
                                    Informant Details</td>
                            </tr>
                            <tr>
                                <td class="fs-8 text-muted font-weight-bold pl-4">Full name:
                                </td>
                                <td class="fs-8 text-muted pl-2">{{ incident.report_inf.name }}</td>
                            </tr>
                            <tr>
                                <td class="fs-8 text-muted font-weight-bold pl-4">Address:
                                </td>
                                <td class="fs-8 text-muted pl-2">{{ incident.report_inf.address }}</td>
                            </tr>
                            <tr>
                                <td class="fs-8 text-muted font-weight-bold pl-4">Time of
                                    Call:</td>
                                <td class="fs-8 text-muted pl-2">{{ incident.report_inf.date_of + ' ' +
                                    incident.report_inf.time_of }}</td>
                            </tr>
                            <tr>
                                <td class="fs-8 text-muted font-weight-bold pl-4">Phone No.:
                                </td>
                                <td class="fs-8 text-muted pl-2">{{ incident.report_inf.phone }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <!-- Responder info -->
                <div class="col-sm-12 col-md-12 mb-2">
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody v-if="incident.report_res">
                            <tr>
                                <td colspan="2" class="fs-7 text-muted font-weight-bold">
                                    Responder Details</td>
                            </tr>
                            <tr>
                                <td class="fs-8 text-muted font-weight-bold pl-4">Team Leader:
                                </td>
                                <td class="fs-8 text-muted pl-2">{{ incident.report_res.leader }}</td>
                            </tr>
                            <tr>
                                <td class="fs-8 text-muted font-weight-bold pl-4 align-top">Member/s:
                                </td>
                                <td class="fs-8 text-muted pl-2">
                                    <span v-if="incident.report_res.member1">{{ incident.report_res.member1 }}</span> <br
                                        v-if="incident.report_res.member1">
                                    <span v-if="incident.report_res.member1">{{ incident.report_res.member2 }}</span> <br
                                        v-if="incident.report_res.member2">
                                    <span v-if="incident.report_res.member1">{{ incident.report_res.member3 }}</span> <br
                                        v-if="incident.report_res.member3">
                                    <span v-if="incident.report_res.member1">{{ incident.report_res.member4 }}</span> <br
                                        v-if="incident.report_res.member4">
                                    <span v-if="incident.report_res.member1">{{ incident.report_res.member5 }}</span> <br
                                        v-if="incident.report_res.member5">
                                    <span v-if="incident.report_res.member1">{{ incident.report_res.member6 }}</span> <br
                                        v-if="incident.report_res.member6">
                                    <span v-if="incident.report_res.member1">{{ incident.report_res.member7 }}</span> <br
                                        v-if="incident.report_res.member7">
                                    <span v-if="incident.report_res.member1">{{ incident.report_res.member8 }}</span> <br
                                        v-if="incident.report_res.member8">
                                    <!-- {{ incident.report_res.member }} -->
                                    <!-- <div v-for="item in incident.report_res.member">
                                        {{ item }} 
                                    </div> -->
                                </td>
                            </tr>
                            <tr>
                                <td class="fs-8 text-muted font-weight-bold pl-4">Driver:</td>
                                <td class="fs-8 text-muted pl-2">{{ incident.report_res.driver }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <!-- Accident Details -->
                <div class="col-sm-12 col-md-12">
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody v-if="incident">
                            <tr>
                                <td colspan="2" class="fs-7 text-muted font-weight-bold">
                                    Accident Details</td>
                            </tr>
                            <tr>
                                <td class="fs-8 text-muted font-weight-bold pl-4 text-nowrap">
                                    Status:</td>
                                <td class="fs-8 text-muted pl-2 text-capitalize">{{ incident.status }}</td>
                            </tr>
                            <tr>
                                <td class="fs-8 text-muted font-weight-bold pl-4 text-nowrap">
                                    Type of Accident:</td>
                                <td class="fs-8 text-muted pl-2">{{ incident.type }}</td>
                            </tr>
                            <tr>
                                <td class="fs-8 text-muted font-weight-bold pl-4 align-top">
                                    Severity:</td>
                                <td class="fs-8 text-muted pl-2 text-capitalize">{{ incident.severity }}</td>
                            </tr>
                            <tr>
                                <td class="fs-8 text-muted font-weight-bold pl-4 align-top">
                                    Date and Time:</td>
                                <td class="fs-8 text-muted pl-2">{{ incident.datetime }}</td>
                            </tr>
                            <tr>
                                <td class="fs-8 text-muted font-weight-bold pl-4 align-top">
                                    Location:</td>
                                <td class="fs-8 text-muted pl-2 mx-auto d-none d-md-block">
                                    {{ incident.fulllocation }}
                                </td>
                            </tr>
                            <tr>
                                <td colspan="4" class="fs-8 text-muted pl-2 mx-auto d-md-none pl-5">
                                    {{ incident.fulllocation }}
                                </td>
                            </tr>
                            <tr>
                                <td class="fs-8 text-muted font-weight-bold pl-4 align-top">
                                    Description:</td>
                                <td class="fs-8 text-muted pl-2 d-none d-md-block">
                                    {{ incident.description }}
                                </td>
                            </tr>
                            <tr>
                                <td colspan="4" class="fs-8 text-muted pl-2 d-md-none pl-5">
                                    {{ incident.description }}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <!-- Patient's Info -->
                <div class="col-sm-12 col-md-12 mb-2">
                    <table class="w-100">
                        <thead>
                            <tr>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody v-if="incident.report_pat">
                            <tr>
                                <td class="fs-7 text-muted font-weight-bold">
                                    Patient/s Details</td>
                            </tr>
                            <tr>
                                <td class="fs-8 text-muted font-weight-bold pl-4">
                                    <div class="row">
                                        <table class="table">
                                            <thead>
                                                <td class="p-0">Name</td>
                                                <td class="p-0">Address</td>
                                                <td class="p-0">Age</td>
                                                <td class="p-0">Gender</td>
                                                <td class="p-0">Cause</td>
                                                <td class="p-0">Status</td>
                                            </thead>
                                            <tbody class=" font-weight-normal text-capitalize">
                                                <tr v-for="item in incident.report_pat">
                                                    <td class="p-0 pt-1">{{ item.name }}</td>
                                                    <td class="p-0 pt-1">{{ item.address }}</td>
                                                    <td class="p-0 pt-1">{{ item.age }}</td>
                                                    <td class="p-0 pt-1">{{ item.gender }}</td>
                                                    <td class="p-0 pt-1">{{ item.cause }}</td>
                                                    <td class="p-0 pt-1">{{ item.status }}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="modal-footer">
            <div class="row" v-if="!viewOnly">
                <div class="col" v-if="userDetails.role == 'admin'">
                    <div>
                        <label for="">Mark Status</label>
                        <div>
                            <select v-model="incident.status" @change="emit('onchangestatus', incident.status)"
                                class="form-select form-select-sm text-muted" aria-label=".form-select-sm example">
                                <option disabled>Select status of incident</option>
                                <option value="on process">On Process</option>
                                <option value="responding">Responding</option>
                                <option value="resolved">Resolved</option>
                                <option value="pending">Pending</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row m-0" v-if="!viewOnly">
                <div class="col gap-2" v-if="vv">
                    <button @click="generatePDF" type="button" class="btn btn-sm btn-secondary btn-edit-item ml-1">
                        <span>Print</span>
                        <div class="spinner-border spinner-border-sm d-none" role="status">
                            <span class="sr-only"></span>
                        </div>
                    </button>
                    <button @click="emit('onedit')" type="button" class="btn btn-sm btn-primary btn-edit-item ml-1">
                        <span>Edit</span>
                        <div class="spinner-border spinner-border-sm d-none" role="status">
                            <span class="sr-only"></span>
                        </div>
                    </button>
                    <button @click="emit('ondelete')" type="button" class="btn btn-sm btn-danger btn-delete-item ml-1">
                        <span>Delete</span>
                        <div class="spinner-border spinner-border-sm d-none" role="status">
                            <span class="sr-only"></span>
                        </div>
                    </button>
                    <button type="button" class="btn btn-sm btn-secondary ml-1" data-bs-dismiss="modal">Close</button>
                </div>
                <div v-else>
                    <button type="button" class="btn btn-sm btn-secondary ml-1" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
            <div v-else>
                <button type="button" class="btn btn-sm btn-secondary ml-1" data-bs-dismiss="modal">Close</button>
            </div>



        </div>
    </div>
</template>

<script setup>
import { watch, ref } from 'vue';
import useIncident from '../../composables/incident'
import useAccount from '../../composables/account'
import usePrint from '../../composables/print'

const { getIncident, incident, errors } = useIncident()
const { getUserDetails, userDetails } = useAccount()
const { printIncident } = usePrint()
const vv = ref(false)
const props = defineProps({
    incidentItem: ref([]),
    viewOnly: ref(true)
})

const emit = defineEmits(['onapprove', 'ondelete', 'onedit', 'onchangestatus'])

watch(() => props.incidentItem,
    async (val) => {
        await getIncident(val)
        await getUserDetails()
        //incident.value.report_res.member = incident.value.report_res.member.replaceAll('[', "").replaceAll(']', "").toString().split(',')
        //console.log(incident.value.userid, userDetails.value.id, userDetails.value.role, 'admin')
        if (incident.value.userid == userDetails.value.id || userDetails.value.role == 'admin') {
            vv.value = true
        } else {
            vv.value = false
        }
    }
);
async function generatePDF() {
    await printIncident(incident.value)
}


</script>

<style scoped>
hr {
    border-top: 1px solid red;
}
</style>