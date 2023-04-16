<template>
    <div class="d-flex justify-content-center h-100 gradient-custom">
        <div class="container m-0 p-0">
            <div class="row">
                <div class="col">
                    <form>
                        <div class="card mb-4 ">
                            <div class="card-body overflow-auto">
                                <h3 class="pb-2 text-center">New Incident Report</h3>

                                <!-- Informant Information -->
                                <div class="section-item active-section" data="first" style="display: none;">
                                    <div class="card shadow">
                                        <div class="card-header">
                                            <h6 class="m-0 font-weight-bold text-primary">Enter Informant Information</h6>
                                        </div>
                                        <div class="card-body">
                                            <div class="row  d-flex justify-content-center">
                                                <div class="col">
                                                    <div class="row">
                                                        <!-- Informant Name input -->
                                                        <div class="col-md-6 form-outline mb-2">
                                                            <label class="form-label" for="informant_name">Name of
                                                                Informant</label>
                                                            <input v-model="informantForm.name" type="text" id="informant_name"
                                                                class="form-control" required />
                                                        </div>

                                                        <!-- Informant Address input -->
                                                        <div class="col-md-6 form-outline mb-2">
                                                            <label class="form-label"
                                                                for="informant_address">Address</label>
                                                            <input v-model="informantForm.address" type="text"
                                                                id="informant_address" class="form-control" />
                                                        </div>
                                                    </div>

                                                    <div class="row">
                                                        <!-- Informant Phone Number input -->
                                                        <div class="col-md-6 form-outline mb-2">
                                                            <label class="form-label" for="informant_number">Phone
                                                                Number</label>
                                                            <input v-model="informantForm.phone" type="tel"
                                                                id="informant_number" class="form-control" />
                                                        </div>
                                                        <!-- Date of Call input -->
                                                        <div class="col-md-6 form-outline mb-2">
                                                            <label class="form-label" for="informant_date_of">Date</label>
                                                            <input v-model="informantForm.date_of_call" type="date"
                                                                id="informant_date_of" class="form-control" />
                                                        </div>
                                                        <!-- Time of Call input -->
                                                        <div class="col-md-6 form-outline mb-2">
                                                            <label class="form-label" for="informant_time_of">Time of
                                                                Call</label>
                                                            <input v-model="informantForm.time_of_call" type="time"
                                                                id="informant_time_of" class="form-control" />
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Type of Accident -->
                                <div class="section-item" data="required" style="display: none;">
                                    <div class="card shadow">
                                        <div class="card-header">
                                            <h6 class="m-0 font-weight-bold text-primary">Type of Accident</h6>
                                        </div>
                                        <div class="card-body">
                                            <div class="row  d-flex justify-content-center">
                                                <button id="accident_type_medical_id" @click="onChooseType(0)" type="button"
                                                    class="btn col-xl-3 col-md-4 col-sm-6 btn-outline-primary m-1">MEDICAL</button>
                                                <button id="accident_type_trauma_id" @click="onChooseType(1)" type="button"
                                                    class="btn col-xl-3 col-md-4 col-sm-6 btn-outline-primary m-1">TRAUMA</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <!-- Patients Details-->
                                <div class="section-item" style="display: none;">
                                    <div class="card shadow">
                                        <div class="card-header">
                                            <h6 class="m-0 font-weight-bold text-primary">Patients Details</h6>
                                        </div>
                                        <div class="card-body">
                                            <div class="row d-flex justify-content-center">
                                                <div class="row">
                                                    <!-- Patient Name input -->
                                                    <div class="col-md-6 form-outline mb-2">
                                                        <label class="form-label d-inline-block" for="patient_name">Name</label>
                                                        <input v-model="patient_name" type="text" id="patient_name"
                                                            class="form-control" required />
                                                    </div>
                                                    <!-- Address of patient input -->
                                                    <div class="col-md-6 form-outline mb-2">
                                                            <label class="form-label" for="patient_address">Address</label>
                                                            <input v-model="patient_address" type="text" id="patient_address"
                                                            class="form-control" required />
                                                        </div>
                                                </div>
                                                <div class="row">
                                                    <!-- Patient Age Name input -->
                                                    <div class="col-sm-3 form-outline mb-2">
                                                        <label class="form-label d-inline-block" for="patient_age">Age</label>
                                                        <input v-model="patient_age" type="number" id="patient_age"
                                                            class="form-control form-control-sm" required />
                                                    </div>
                                                    <!-- Patient Gender Name input -->
                                                    <div class="col-sm-4 form-outline mb-2">
                                                        <label class="form-label d-inline-block" for="patient_gender">Gender</label>
                                                        <select v-model="patient_gender"
                                                                class="form-select form-select-sm mb-1 text-muted"
                                                                aria-label=".form-select-sm example">
                                                                <option value="0" selected disabled>Select Gender</option>
                                                                <option value="1">Male</option>
                                                                <option value="2">Female</option>
                                                                <option value="3">Unknown</option>
                                                            </select>
                                                    </div>
                                                    <!-- Patient Status input -->
                                                    <div class="col-sm-5 form-outline mb-2" >
                                                            <label class="form-label" for="patient_status">Status</label>
                                                            <select v-model="patient_status"
                                                                class="form-select form-select-sm mb-1 text-muted"
                                                                aria-label=".form-select-sm example">
                                                                <option selected disabled>Select Status</option>
                                                                <option value="1">One</option>
                                                                <option value="2">Two</option>
                                                                <option value="3">Three</option>
                                                            </select>
                                                        </div>
                                                </div>
                                                <div class="row d-flex justify-content-evenly">
                                                    <!-- MEdical Type -->
                                                    <div class="col-sm-12 col-md-6 form-outline mb-2">
                                                            <label class="form-label" for="patient_status">Cause</label>
                                                            <select v-model="patient_cause"
                                                                class="form-select form-select-sm mb-1 text-muted"
                                                                aria-label=".form-select-sm example">
                                                                <option selected disabled>Select medical type:</option>
                                                                <option value="1">One</option>
                                                                <option value="2">Two</option>
                                                                <option value="3">Three</option>
                                                                <option value="other">Other</option>
                                                            </select>
                                                            <!-- Address of patient input -->
                                                    <div class="col-12 p-0 form-outline mb-2" v-if="patient_cause == 'other'">
                                                            <input v-model="patient_causeOther" placeholder="enter cause" type="text" id="patient_address"
                                                            class="form-control" required />
                                                        </div>
                                                        </div>
                                                      <!-- Trauma Type -->
                                                    <div class="col-sm-12 col-md-6 form-outline mb-2 d-none">
                                                            <label class="form-label" for="patient_status">Trauma Type</label>
                                                            <select v-model="patient_status"
                                                                class="form-select form-select-sm mb-1 text-muted"
                                                                aria-label=".form-select-sm example">
                                                                <option selected disabled>Select trauma type:</option>
                                                                <option value="1">One</option>
                                                                <option value="2">Two</option>
                                                                <option value="3">Three</option>
                                                            </select>
                                                        </div>  
                                                        <div class="col-sm-12 col-md-6 mt-md-4 mb-2 d-flex justify-content-end">
                                                            <a class="btn btn-md btn-primary">Add Patient</a>
                                                        </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col">
                                                        <hr>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-12 m-2 text-center">
                                                        Patient list
                                                    </div>
                                                    <div class="col">
                                                        <div class="row overflow-auto">
                                                            <table class="table">
                                                                <thead>
                                                                    <td class="p-0 py-1 px-2">Name</td>
                                                                    <td class="p-0 py-1 px-2">Address</td>
                                                                    <td class="p-0 py-1 px-2">Age</td>
                                                                    <td class="p-0 py-1 px-2">Gender</td>
                                                                    <td class="p-0 py-1 px-2">Cause</td>
                                                                    <td class="p-0 py-1 px-2">Status</td>
                                                                    <td class="p-0 py-1 px-2"></td>
                                                                </thead>
                                                                <tbody class=" font-weight-normal">
                                                                    <tr>
                                                                        <td class="p-0 pt-1">John Doe</td>
                                                                        <td class="p-0 pt-1">Siuton</td>
                                                                        <td class="p-0 pt-1">20</td>
                                                                        <td class="p-0 pt-1">Male</td>
                                                                        <td class="p-0 pt-1">Electricuted</td>
                                                                        <td class="p-0 pt-1">Critical</td>
                                                                        <td class="p-0 pt-1">
                                                                            <a class="btn btn-sm">
                                                                                <i class="fas fa-fw fa-times"></i>
                                                                            </a>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td class="p-0 pt-1">John Doe</td>
                                                                        <td class="p-0 pt-1">Siuton</td>
                                                                        <td class="p-0 pt-1">20</td>
                                                                        <td class="p-0 pt-1">Male</td>
                                                                        <td class="p-0 pt-1">Electricuted</td>
                                                                        <td class="p-0 pt-1">Critical</td>
                                                                        <td class="p-0 pt-1">
                                                                            <a class="btn btn-sm">
                                                                                <i class="fas fa-fw fa-times"></i>
                                                                            </a>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Date and Time Of Accident -->
                                <div class="section-item" style="display: none;">
                                    <div class="card shadow">
                                        <div class="card-header">
                                            <h6 class="m-0 font-weight-bold text-primary">Accident Details</h6>
                                        </div>
                                        <div class="card-body">
                                            <div class="row  d-flex justify-content-center">
                                                <div class="col">
                                                    <div class="row">
                                                        <!-- Location of Incident input -->
                                                        <div class="col-md-6 form-outline mb-2">
                                                            <label class="form-label" for="Accident_datetime">Location Of
                                                                Accident</label>
                                                            <select v-model="accident_location_brgy"
                                                                class="form-select form-select-sm mb-1 text-muted"
                                                                aria-label=".form-select-sm example">
                                                                <option selected disabled>Select Barangay</option>
                                                                <option value="1">One</option>
                                                                <option value="2">Two</option>
                                                                <option value="3">Three</option>
                                                            </select>
                                                            <select v-model="accident_location_brgy_purok"
                                                                class="form-select form-select-sm mb-1 text-muted"
                                                                aria-label=".form-select-sm example">
                                                                <option selected>Select Purok</option>
                                                                <option value="1">One</option>
                                                                <option value="2">Two</option>
                                                                <option value="3">Three</option>
                                                            </select>
                                                            <textarea v-model="accident_location_specific"
                                                                id="Accident_location" class="form-control"></textarea>
                                                        </div>

                                                        <div class="col col-md-6">
                                                            <!-- Date of Incident input -->
                                                            <div class="col-sm-12 col-lg-7 form-outline mb-2 mb-lg-4">
                                                                <label class="form-label" for="Accident_date">Date Of
                                                                    Accident</label>
                                                                <input v-model="accident_date" type="date"
                                                                    id="Accident_date" class="form-control" />
                                                            </div>
                                                            <!-- Time of Incident input -->
                                                            <div class="col-sm-12 col-lg-5 form-outline mb-2 align-top">
                                                                <label class="form-label" for="Accident_time">Time of
                                                                    Accident</label>
                                                                <input v-model="accident_time" type="time"
                                                                    id="Accident_time" class="form-control" />
                                                            </div>
                                                            
                                                        </div>

                                                        <!-- Incident Severity -->
                                                        <div class="col-md-6 form-outline mb-2">
                                                            <label class="form-label" for="Accident_datetime">Severity Of
                                                                Accident</label>
                                                            <select v-model="accident_location_brgy"
                                                                class="form-select form-select-sm mb-1 text-muted"
                                                                aria-label=".form-select-sm example">
                                                                <option selected>Select Severity</option>
                                                                <option value="1">One</option>
                                                                <option value="2">Two</option>
                                                                <option value="3">Three</option>
                                                            </select>
                                                        </div>

                                                        <!-- Description of Incident input -->
                                                        <div class="col-md-12 form-outline mb-4">
                                                            <label class="form-label" for="Accident_description">Description
                                                                Of
                                                                Accident</label>
                                                            <textarea v-model="accident_description"
                                                                id="Accident_description" class="form-control"></textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Responder Info for admin only-->
                                <div class="section-item" style="display: none;">
                                    <div class="card shadow">
                                        <div class="card-header">
                                            <h6 class="m-0 font-weight-bold text-primary">Responder Details</h6>
                                        </div>
                                        <div class="card-body">
                                            <div class="row d-flex justify-content-center">
                                                <div class="row">
                                                    <!-- Leader Name input -->
                                                    <div class="col-md-6 form-outline mb-2">
                                                        <label class="form-label d-inline-block" for="responder_team_leader">Team Leader</label>
                                                        <input v-model="responder_team_leader_name" type="text" id="responder_team_leader"
                                                            class="form-control" required />
                                                    </div>
                                                    <!-- Driver Name input -->
                                                    <div class="col-md-6 form-outline mb-2">
                                                        <label class="form-label d-inline-block" for="responder_team_driver">Driver</label>
                                                        <input v-model="responder_team_driver_name" type="text" id="responder_team_driver"
                                                            class="form-control" required />
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <!-- Member Name input -->
                                                    <div class="col-md-6 form-outline mb-2">
                                                        <label class="form-label" for="responder_team_member">Member's</label>
                                                        <input v-model="responder_team_member1_name" type="text" id="responder_team_member"
                                                            class="form-control" required />
                                                    </div>
                                                    <!-- Member Name input -->
                                                    <div class="col-md-6 form-outline mb-2">
                                                        <label class="form-label d-none d-md-block" for="responder_team_member"> &nbsp; </label>
                                                        <input v-model="responder_team_member2_name" type="text" id="responder_team_member2"
                                                            class="form-control" required />
                                                    </div>
                                                    <!-- Member Name input -->
                                                    <div class="col-md-6 form-outline mb-2">
                                                        <input v-model="responder_team_member3_name" type="text" id="responder_team_member3"
                                                            class="form-control" required />
                                                    </div>
                                                    <!-- Member Name input -->
                                                    <div class="col-md-6 form-outline mb-2">
                                                        <input v-model="responder_team_member4_name" type="text" id="responder_team_member4"
                                                            class="form-control" required />
                                                    </div>
                                                    <!-- Member Name input -->
                                                    <div class="col-md-6 form-outline mb-2">
                                                        <input v-model="responder_team_member5_name" type="text" id="responder_team_member5"
                                                            class="form-control" required />
                                                    </div>
                                                    <!-- Member Name input -->
                                                    <div class="col-md-6 form-outline mb-2">
                                                        <input v-model="responder_team_member6_name" type="text" id="responder_team_member6"
                                                            class="form-control" required />
                                                    </div>
                                                    <!-- Member Name input -->
                                                    <div class="col-md-6 form-outline mb-2">
                                                        <input v-model="responder_team_member7_name" type="text" id="responder_team_member7"
                                                            class="form-control" required />
                                                    </div>
                                                    <!-- Member Name input -->
                                                    <div class="col-md-6 form-outline mb-2">
                                                        <input v-model="responder_team_member8_name" type="text" id="responder_team_member8"
                                                            class="form-control" required />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!--Summary || Submit and Print report -->
                                <div class="section-item" style="display: none;" data="last">
                                    <div class="card shadow">
                                        <div class="card-header d-flex justify-content-between">
                                            <h6 class="m-0 font-weight-bold text-primary">Summary Report</h6>
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
                                                                <td
                                                                    class="fs-8 text-muted font-weight-bold pl-4 text-nowrap">
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
                                                                <td colspan="4"
                                                                    class="fs-8 text-muted pl-2 mx-auto d-md-none pl-5">
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
                                                            <td  class="fs-8 text-muted font-weight-bold pl-4">
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
                            <div class="card-footer d-flex justify-content-between">
                                <a class="btn btn-sm btn-facebook btn-prev" @click="goBack()">Prev</a>
                                <a class="btn btn-sm btn-facebook btn-next" @click="goForward()">Next</a>
                                <button type="button" @click="submitReport()" class="btn btn-sm btn-facebook btn-submit"
                                    style="display: none;">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Saved successfully!</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        Print the report?
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button @click="printReport()" type="button" class="btn btn-primary">Print</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { Modal } from 'bootstrap'
import useAccount from '../../composables/account';
const { role, getUser } = useAccount()

const informantForm = {
    name: '',
    address: '',
    phone: '',
    date_of_call: '',
    time_of_call: ''
}
var accidentType = ''
const patientForm = {
    name: '',
    address: '',
    age: '',
    gender: '',
    status: ''
}
const patientList = []
const accidentDetailForm = {
    barangay: '',
    specific_location: '',
    date: '',
    time: '',
    severity: '',
    description: ''
}
const responderForm = {
    leader: '',
    driver: '',
    member: [
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        [''],
        ['']
    ]
}
const isMed = ref([])

var mymodalEl = ""
var myModal = ""

onMounted(async () => {

    await getUser()

    mymodalEl =  $('#exampleModal')
    myModal = Modal.getOrCreateInstance(mymodalEl)

    var currentDate = new Date()
    var h = currentDate.getHours()
    if(h < 10) h = "0" + h
    var m = currentDate.getMinutes()
    if(m < 10) h = "0" + m

    var currentTime = h + ":" + m
    var strDate = currentDate.getFullYear() + "-0" + (currentDate.getMonth()+1) + "-" + currentDate.getDate()
    var cd = (new Date()).toISOString().split('T')[0]
    document.getElementById('informant_time_of').value = currentTime
    document.getElementById('informant_date_of').value = cd
    document.getElementById('Accident_time').value = currentTime
    document.getElementById('Accident_date').value = cd

    $('.section-item').hide()
    $('.section-item[data=first]').show()
    $('.medical-item div').removeClass('bg-info text-white')
    $('.trauma-item div').removeClass('bg-info text-white')
   
    //Select Medical Type
    $('.medical-item').on('click', event => {
        const clickedElement = $(event.target);
        const targetElement = clickedElement.closest('.medical-item');
        $('.medical-item div').removeClass('bg-info text-white')
        targetElement.find('.card').addClass('bg-info text-white')
        goForward()
    });

    //Select Trauma Type
    $('.trauma-item').on('click', event => {
        const clickedElement = $(event.target);
        const targetElement = clickedElement.closest('.trauma-item');
        $('.trauma-item .card').removeClass('bg-info text-white')
        targetElement.find('.card').addClass('bg-info text-white')
        goForward()
    });

})

function goForward() {
    var c = $('.active-section')
    if (c.next('.section-item').length > 0) {
        c.removeClass('active-section')
        c.hide()
        c.next('.section-item').addClass('active-section')
        c.next('.section-item').show('section-item')
    }
    if (c.next('.section-item').attr('data') == 'last') {
        $('.btn-next').hide()
        $('.btn-submit').show()
    } else {
        $('.btn-next').show()
    }
    if (c.next().attr('data') == 'required' && accidentType == "") {
        $('.btn-next').hide()
    }

}
function goBack() {
    var c = $('.active-section')
    if (c.prev('.section-item').length > 0) {
        c.removeClass('active-section')
        c.hide()
        c.prev('.section-item').addClass('active-section')
        c.prev('.section-item').show('section-item')
    }
    $('.btn-next').show()
    $('.btn-submit').hide()
}

function onChooseType(a) {
    if (a == 0) {
        $('.section-item-trauma').hide()
        $('.section-item-medical').show()
        //accidentType = 'medical'
        $('#accident_type_medical_id').addClass('btn-danger bg-gradient-danger text-white')
        $('#accident_type_trauma_id').removeClass('btn-danger bg-gradient-danger text-white')
    }
    if (a == 1) {
        $('.section-item-medical').hide()
        $('.section-item-trauma').show()
        //accidentType = 'trauma'
        $('#accident_type_medical_id').removeClass('btn-danger bg-gradient-danger text-white')
        $('#accident_type_trauma_id').addClass('btn-danger bg-gradient-danger text-white')
    }
    goForward()
}

function submitReport() {
    myModal.show()
}
function printReport() {

}

</script>

<style scoped>
hr {
    border-top: 1px solid red;
}

/* form .card .card-body{
    max-height: 70dvh;
} */

.section-item {
    display: none;
    /* opacity: 0; */
}

.active-section {
    display: block;
    /* opacity: 1; */
}

.medical-item .card {
    height: 70px;
    min-height: 70px;
    max-height: 70px;
}

.medical-item :hover :not(.text-xs) {
    background-color: rgb(163, 163, 164);
    color: white;
    transition: .1s all ease;
}

/* .d-flex.justify-content-center {

} */


</style>