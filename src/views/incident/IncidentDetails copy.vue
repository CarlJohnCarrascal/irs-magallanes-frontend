<template>
    <div class="d-flex justify-content-center h-100 gradient-custom">
        <div class="container m-0 p-0">
            <div class="card shadow">
                <div class="card-header d-flex justify-content-between">
                    <h6 class="m-0 font-weight-bold text-primary">Summary Report</h6>
                    <div v-if="$router.currentRoute.value.name == 'reportdetails2'">
                            <button type="button" class="btn btn-sm btn-primary m-1">
                            Approve
                        </button>
                        <button type="button" class="btn btn-sm btn-danger">
                            Delete
                        </button>
                        <a @click="$router.go(-1)" class="btn btn-sm m-2">
                                <i class="fas fa-times fa-md text-black-50"></i>
                        </a>
                    </div>
                    <div v-else>
                        <a @click="$router.go(-1)" class="btn btn-sm m-2">
                                <i class="fas fa-times fa-md text-black-50"></i>
                        </a>
                    </div>
                </div>
                <div class="card-body overflow-auto">
                    <div class="row ml-md-4">
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
                                <tbody>
                                    <tr>
                                        <td colspan="2" class="fs-7 text-muted font-weight-bold">
                                            Informant Details</td>
                                    </tr>
                                    <tr>
                                        <td class="fs-8 text-muted font-weight-bold pl-4">Full name:
                                        </td>
                                        <td class="fs-8 text-muted pl-2">John Doe</td>
                                    </tr>
                                    <tr>
                                        <td class="fs-8 text-muted font-weight-bold pl-4">Address:
                                        </td>
                                        <td class="fs-8 text-muted pl-2">Unknown</td>
                                    </tr>
                                    <tr>
                                        <td class="fs-8 text-muted font-weight-bold pl-4">Time of
                                            Call:</td>
                                        <td class="fs-8 text-muted pl-2">Jul 10, 2023 07:23 AM</td>
                                    </tr>
                                    <tr>
                                        <td class="fs-8 text-muted font-weight-bold pl-4">Phone No.:
                                        </td>
                                        <td class="fs-8 text-muted pl-2">091234546789</td>
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
                                <tbody>
                                    <tr>
                                        <td colspan="2" class="fs-7 text-muted font-weight-bold">
                                            Responder's Details</td>
                                    </tr>
                                    <tr>
                                        <td class="fs-8 text-muted font-weight-bold pl-4">Team Leader:
                                        </td>
                                        <td class="fs-8 text-muted pl-2">John Doe</td>
                                    </tr>
                                    <tr>
                                        <td class="fs-8 text-muted font-weight-bold pl-4 align-top">Member's:
                                        </td>
                                        <td class="fs-8 text-muted pl-2">John Doe <br> John Doe</td>
                                    </tr>
                                    <tr>
                                        <td class="fs-8 text-muted font-weight-bold pl-4">Driver:</td>
                                        <td class="fs-8 text-muted pl-2">John Doe</td>
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
                                <tbody>
                                    <tr>
                                        <td colspan="2" class="fs-7 text-muted font-weight-bold">
                                            Accident Details</td>
                                    </tr>
                                    <tr>
                                        <td class="fs-8 text-muted font-weight-bold pl-4 text-nowrap">
                                            Type of Accident:</td>
                                        <td class="fs-8 text-muted pl-2">Medical</td>
                                    </tr>
                                    <tr>
                                        <td class="fs-8 text-muted font-weight-bold pl-4 align-top">
                                            Cause:</td>
                                        <td class="fs-8 text-muted pl-2">Electrocution</td>
                                    </tr>
                                    <tr>
                                        <td class="fs-8 text-muted font-weight-bold pl-4 align-top">
                                            Severity:</td>
                                        <td class="fs-8 text-muted pl-2">High</td>
                                    </tr>
                                    <tr>
                                        <td class="fs-8 text-muted font-weight-bold pl-4 align-top">
                                            Date and Time:</td>
                                        <td class="fs-8 text-muted pl-2">Jul-10, 2023 07:23 AM</td>
                                    </tr>
                                    <tr>
                                        <td class="fs-8 text-muted font-weight-bold pl-4 align-top">
                                            Location:</td>
                                        <td class="fs-8 text-muted pl-2 mx-auto d-none d-md-block">
                                            Siuton - Near Me dasdsada</td>
                                    </tr>
                                    <tr>
                                        <td colspan="4" class="fs-8 text-muted pl-2 mx-auto d-md-none pl-5">
                                            Siuton - Near Me dasdsada</td>
                                    </tr>
                                    <tr>
                                        <td class="fs-8 text-muted font-weight-bold pl-4 align-top">
                                            Description:</td>
                                        <td class="fs-8 text-muted pl-2 d-none d-md-block">Lorem,
                                            ipsum dolor sit amet consectetur adipisicing elit.
                                            Provident porro facere nobis laborum totam quasi illo,
                                            ex dignissimos dolore soluta tempore quod similique
                                            deserunt repellat eligendi qui placeat sed! Porro?</td>
                                    </tr>
                                    <tr>
                                        <td colspan="4" class="fs-8 text-muted pl-2 d-md-none pl-5">
                                            Lorem, ipsum dolor sit amet consectetur adipisicing
                                            elit. Provident porro facere nobis laborum totam quasi
                                            illo, ex dignissimos dolore soluta tempore quod
                                            similique deserunt repellat eligendi qui placeat sed!
                                            Porro?</td>
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
                                <tbody>
                                    <tr>
                                        <td class="fs-7 text-muted font-weight-bold">
                                            Patient's Details</td>
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
                                                        <td class="p-0">Status</td>
                                                    </thead>
                                                    <tbody class=" font-weight-normal">
                                                        <tr>
                                                            <td class="p-0 pt-1">John Doe</td>
                                                            <td class="p-0 pt-1">Siuton</td>
                                                            <td class="p-0 pt-1">20</td>
                                                            <td class="p-0 pt-1">Male</td>
                                                            <td class="p-0 pt-1">Critical</td>
                                                        </tr>
                                                        <tr>
                                                            <td class="p-0 pt-1">John Doe</td>
                                                            <td class="p-0 pt-1">Siuton</td>
                                                            <td class="p-0 pt-1">20</td>
                                                            <td class="p-0 pt-1">Male</td>
                                                            <td class="p-0 pt-1">Critical</td>
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
                    <!-- <div class="row d-flex justify-content-end mt-4">
                                                <a @click="submitReport" class="col-sm-6 col-md-3 col-lg-2 btn btn-primary mr-1">Submit</a>
                                                <a @click="printReport" class="col-sm-6 col-md-3 col-lg-2 btn btn-primary">Submit and Print</a>
                                            </div> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { watch } from 'vue'
import useIncident from '../../composables/incident';
const { getIncident, incident, errors } = useIncident()

const props = defineProps({
    itemid: {
        required: true,
        type: String,
    },
});


watch(
  () => props.id,
  async () => {
    await getIncident(props.itemid)
    console.log(incident, errors, props.itemid)
  }
);



</script>

<style scoped>
hr {
    border-top: 1px solid red;
}
</style>