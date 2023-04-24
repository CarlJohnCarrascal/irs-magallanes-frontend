<template>
    <div class="d-flex justify-content-center h-100 gradient-custom">
        <div class="container m-0 p-0">
            <div class="row">
                <div class="col">
                    <form>
                        <div class="card mb-4 ">
                            <div class="card-body overflow-auto">
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
                                                            <input v-model="informantForm.name" type="text"
                                                                id="informant_name" class="form-control" required />
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
                                            <div class="row d-flex justify-content-center">
                                                <button id="accident-type-items" v-for="item in itypes" :data-id="item.id"
                                                    :data-value="item.name" :key="item.id" @click="onChooseType(item.id)"
                                                    type="button"
                                                    class="btn col-xl-3 col-md-4 col-sm-6 btn-outline-primary m-1">{{
                                                        item.name }}</button>
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
                                                        <label class="form-label d-inline-block"
                                                            for="patient_name">Name</label>
                                                        <input v-model="patientForm.name" type="text" id="patient_name"
                                                            class="form-control" required />
                                                    </div>
                                                    <!-- Address of patient input -->
                                                    <div class="col-md-6 form-outline mb-2">
                                                        <label class="form-label" for="patient_address">Address</label>
                                                        <input v-model="patientForm.address" type="text"
                                                            id="patient_address" class="form-control" required />
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <!-- Patient Age Name input -->
                                                    <div class="col-sm-3 form-outline mb-2">
                                                        <label class="form-label d-inline-block"
                                                            for="patient_age">Age</label>
                                                        <input v-model="patientForm.age" type="number" id="patient_age"
                                                            class="form-control form-control-sm" required />
                                                    </div>
                                                    <!-- Patient Gender Name input -->
                                                    <div class="col-sm-4 form-outline mb-2">
                                                        <label class="form-label d-inline-block"
                                                            for="patient_gender">Gender</label>
                                                        <select v-model="patientForm.gender"
                                                            class="form-select form-select-sm mb-1 text-muted"
                                                            aria-label=".form-select-sm example">
                                                            <option value="0" selected disabled>Select Gender</option>
                                                            <option value="male">Male</option>
                                                            <option value="female">Female</option>
                                                        </select>
                                                    </div>
                                                    <!-- Patient Status input -->
                                                    <div class="col-sm-5 form-outline mb-2">
                                                        <label class="form-label" for="patient_status">Status</label>
                                                        <select v-model="patientForm.status"
                                                            class="form-select form-select-sm mb-1 text-muted"
                                                            aria-label=".form-select-sm example">
                                                            <option value="0" selected disabled>Select Status</option>
                                                            <option value="critical">Critical</option>
                                                            <option value="high">High</option>
                                                            <option value="medium">Medium</option>
                                                            <option value="low">Low</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="row d-flex justify-content-evenly">
                                                    <!-- MEdical Type -->
                                                    <div class="col-sm-12 col-md-6 form-outline mb-2">
                                                        <label class="form-label" for="patient_status">Cause</label>
                                                        <select v-model="patientForm.cause"
                                                            class="form-select form-select-sm mb-1 text-muted"
                                                            aria-label=".form-select-sm example">
                                                            <option value="0" selected disabled>Select medical type:
                                                            </option>
                                                            <option v-for="cause in causes" :value="cause.name">{{
                                                                cause.name }}</option>
                                                            <!-- <option :value="'other'">Other</option> -->
                                                        </select>
                                                        <!-- other cause of patient input -->
                                                        <!-- <div class="col-12 p-0 form-outline mb-2"
                                                            v-if="patientForm.cause == 'other'">
                                                            <input v-model="patientForm.otherCause"
                                                                placeholder="enter cause" type="text" class="form-control"
                                                                required />
                                                        </div> -->
                                                    </div>
                                                    <div class="col-sm-12 col-md-6 mt-md-4 mb-2 d-flex justify-content-end">
                                                        <a @click="onAddPatient" class="btn btn-md btn-primary">Add
                                                            Patient</a>
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
                                                                    <tr v-for="(patient, i) in patientList"
                                                                        :key="patient.id">
                                                                        <td class="p-0 pt-1 px-2">{{ patient.name }}</td>
                                                                        <td class="p-0 pt-1 px-2">{{ patient.address }}</td>
                                                                        <td class="p-0 pt-1 px-2">{{ patient.age }}</td>
                                                                        <td class="p-0 pt-1 px-2">{{ patient.gender }}</td>
                                                                        <td class="p-0 pt-1 px-2">{{ patient.cause }}</td>
                                                                        <td class="p-0 pt-1 px-2"
                                                                            :class="'s-' + patient.status">{{ patient.status
                                                                            }}</td>
                                                                        <td class="p-0 pt-1 px-2">
                                                                            <a @click="onRemovePatient(i)"
                                                                                class="btn btn-sm">
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
                                                            <select v-model="accidentDetailForm.barangay"
                                                                class="form-select form-select-sm mb-1 text-muted"
                                                                aria-label=".form-select-sm example">
                                                                <option value="" selected disabled>Select Barangay</option>
                                                                <option v-for="brgy in barangays" :value="brgy.name">{{
                                                                    brgy.name }}</option>
                                                            </select>
                                                            <select v-model="accidentDetailForm.purok"
                                                                class="form-select form-select-sm mb-1 text-muted"
                                                                aria-label=".form-select-sm example">
                                                                <option value="" selected>Select Purok</option>
                                                                <option v-for="i in 20" :value="'Purok ' + i">Purok {{ i }}
                                                                </option>
                                                            </select>
                                                            <textarea v-model="accidentDetailForm.specific_location"
                                                                id="Accident_location" placeholder="speacific location"
                                                                class="form-control"></textarea>
                                                        </div>

                                                        <div class="col col-md-6">
                                                            <!-- Date of Incident input -->
                                                            <div class="col-sm-12 col-lg-7 form-outline mb-2 mb-lg-4">
                                                                <label class="form-label" for="Accident_date">Date Of
                                                                    Accident</label>
                                                                <input v-model="accidentDetailForm.date" type="date"
                                                                    id="Accident_date" class="form-control" />
                                                            </div>
                                                            <!-- Time of Incident input -->
                                                            <div class="col-sm-12 col-lg-5 form-outline mb-2 align-top">
                                                                <label class="form-label" for="Accident_time">Time of
                                                                    Accident</label>
                                                                <input v-model="accidentDetailForm.time" type="time"
                                                                    id="Accident_time" class="form-control" />
                                                            </div>

                                                        </div>

                                                        <!-- Incident Severity -->
                                                        <div class="col-md-6 form-outline mb-2">
                                                            <label class="form-label" for="Accident_datetime">Severity Of
                                                                Accident</label>
                                                            <select v-model="accidentDetailForm.severity"
                                                                class="form-select form-select-sm mb-1 text-muted"
                                                                aria-label=".form-select-sm example">
                                                                <option value="" selected disabled>Select Severity</option>
                                                                <option value="critical">Critical</option>
                                                                <option value="high">High</option>
                                                                <option value="medium">Medium</option>
                                                                <option value="low">Low</option>
                                                            </select>
                                                        </div>

                                                        <!-- Description of Incident input -->
                                                        <div class="col-md-12 form-outline mb-4">
                                                            <label class="form-label" for="Accident_description">Description
                                                                Of
                                                                Accident</label>
                                                            <textarea v-model="accidentDetailForm.description"
                                                                id="Accident_description" class="form-control"></textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Responder Info for admin only-->
                                <div v-if="role == 'admin'" class="section-item" style="display: none;">
                                    <div class="card shadow">
                                        <div class="card-header">
                                            <h6 class="m-0 font-weight-bold text-primary">Responder Details</h6>
                                        </div>
                                        <div class="card-body">
                                            <div class="row d-flex justify-content-center">
                                                <div class="row">
                                                    <!-- Leader Name input -->
                                                    <div class="col-md-6 form-outline mb-2">
                                                        <label class="form-label d-inline-block"
                                                            for="responder_team_leader">Team Leader</label>
                                                        <input v-model="responderForm.leader" type="text"
                                                            id="responder_team_leader" class="form-control" required />
                                                    </div>
                                                    <!-- Driver Name input -->
                                                    <div class="col-md-6 form-outline mb-2">
                                                        <label class="form-label d-inline-block"
                                                            for="responder_team_driver">Driver</label>
                                                        <input v-model="responderForm.driver" type="text"
                                                            id="responder_team_driver" class="form-control" required />
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <!-- Member Name input -->
                                                    <div class="col-md-6 form-outline mb-2">
                                                        <label class="form-label"
                                                            for="responder_team_member">Member's</label>
                                                        <input v-model="responderForm.member1" type="text"
                                                            id="responder_team_member" class="form-control" required />
                                                    </div>
                                                    <!-- Member Name input -->
                                                    <div class="col-md-6 form-outline mb-2">
                                                        <label class="form-label d-none d-md-block"
                                                            for="responder_team_member"> &nbsp; </label>
                                                        <input v-model="responderForm.member2" type="text"
                                                            id="responder_team_member2" class="form-control" required />
                                                    </div>
                                                    <!-- Member Name input -->
                                                    <div class="col-md-6 form-outline mb-2">
                                                        <input v-model="responderForm.member3" type="text"
                                                            id="responder_team_member3" class="form-control" required />
                                                    </div>
                                                    <!-- Member Name input -->
                                                    <div class="col-md-6 form-outline mb-2">
                                                        <input v-model="responderForm.member4" type="text"
                                                            id="responder_team_member4" class="form-control" required />
                                                    </div>
                                                    <!-- Member Name input -->
                                                    <div class="col-md-6 form-outline mb-2">
                                                        <input v-model="responderForm.member5" type="text"
                                                            id="responder_team_member5" class="form-control" required />
                                                    </div>
                                                    <!-- Member Name input -->
                                                    <div class="col-md-6 form-outline mb-2">
                                                        <input v-model="responderForm.member6" type="text"
                                                            id="responder_team_member6" class="form-control" required />
                                                    </div>
                                                    <!-- Member Name input -->
                                                    <div class="col-md-6 form-outline mb-2">
                                                        <input v-model="responderForm.member7" type="text"
                                                            id="responder_team_member7" class="form-control" required />
                                                    </div>
                                                    <!-- Member Name input -->
                                                    <div class="col-md-6 form-outline mb-2">
                                                        <input v-model="responderForm.member8" type="text"
                                                            id="responder_team_member8" class="form-control" required />
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
                                                                <td class="fs-8 text-muted pl-2">
                                                                    {{ informantForm.name }}
                                                                    <span class="fs-8 text-danger" v-if="errors.name">{{
                                                                        errors.name[0] }}</span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td class="fs-8 text-muted font-weight-bold pl-4">Address:
                                                                </td>
                                                                <td class="fs-8 text-muted pl-2">
                                                                    {{ informantForm.address }}
                                                                    <span class="fs-8 text-danger" v-if="errors.address">{{
                                                                        errors.address[0] }}</span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td class="fs-8 text-muted font-weight-bold pl-4">Time of
                                                                    Call:</td>
                                                                <td class="fs-8 text-muted pl-2">
                                                                    {{ informantForm.date_of_call + ' ' +
                                                                        informantForm.time_of_call }}
                                                                    <span class="fs-8 text-danger"
                                                                        v-if="errors.date_of_call">{{ errors.date_of_call[0]
                                                                        }}</span>
                                                                    <span class="fs-8 text-danger"
                                                                        v-if="errors.time_of_call">{{ errors.time_of_call[0]
                                                                        }}</span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td class="fs-8 text-muted font-weight-bold pl-4">Phone No.:
                                                                </td>
                                                                <td class="fs-8 text-muted pl-2">
                                                                    {{ informantForm.phone }}
                                                                    <span class="fs-8 text-danger" v-if="errors.phone">{{
                                                                        errors.phone[0] }}</span>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <!-- Responder info -->
                                                <div v-if="role == 'admin'" class="col-sm-12 col-md-12 mb-2">
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
                                                                <td class="fs-8 text-muted font-weight-bold pl-4">Team
                                                                    Leader:
                                                                </td>
                                                                <td class="fs-8 text-muted pl-2">{{ responderForm.leader }}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td class="fs-8 text-muted font-weight-bold pl-4 align-top">
                                                                    Member's:
                                                                </td>
                                                                <td class="fs-8 text-muted pl-2">
                                                                    {{ responderForm.member1 }} <br v-if="responderForm.member1">
                                                                    {{ responderForm.member2 }} <br v-if="responderForm.member2">
                                                                    {{ responderForm.member3 }} <br v-if="responderForm.member3">
                                                                    {{ responderForm.member4 }} <br v-if="responderForm.member4">
                                                                    {{ responderForm.member5 }} <br v-if="responderForm.member5">
                                                                    {{ responderForm.member6 }} <br v-if="responderForm.member6">
                                                                    {{ responderForm.member7 }} <br v-if="responderForm.member7">
                                                                    {{ responderForm.member8 }} <br v-if="responderForm.member8">
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td class="fs-8 text-muted font-weight-bold pl-4">Driver:
                                                                </td>
                                                                <td class="fs-8 text-muted pl-2">{{ responderForm.driver }}
                                                                </td>
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
                                                                <td class="fs-8 text-muted pl-2">
                                                                    {{ accidentType }}
                                                                    <span class="fs-8 text-danger" v-if="errors.type">{{
                                                                        errors.type[0] }}</span>
                                                                </td>
                                                            </tr>
                                                            <!-- <tr>
                                                                <td class="fs-8 text-muted font-weight-bold pl-4 align-top">
                                                                    Cause:</td>
                                                                <td class="fs-8 text-muted pl-2">{{ accidentDetailForm. }}</td>
                                                            </tr> -->
                                                            <tr>
                                                                <td class="fs-8 text-muted font-weight-bold pl-4 align-top">
                                                                    Severity:</td>
                                                                <td class="fs-8 text-muted pl-2">
                                                                    {{ accidentDetailForm.severity }}
                                                                    <span class="fs-8 text-danger" v-if="errors.severity">{{
                                                                        errors.severity[0] }}</span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td class="fs-8 text-muted font-weight-bold pl-4 align-top">
                                                                    Date and Time:</td>
                                                                <td class="fs-8 text-muted pl-2">
                                                                    {{ accidentDetailForm.date + ' ' +
                                                                        accidentDetailForm.time }}
                                                                    <span class="fs-8 text-danger" v-if="errors.datetime">{{
                                                                        errors.datetime[0] }}</span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td class="fs-8 text-muted font-weight-bold pl-4 align-top">
                                                                    Location:</td>
                                                                <td class="fs-8 text-muted pl-2 mx-auto d-none d-md-block">
                                                                    {{ accidentDetailForm.barangay + ' - ' +
                                                                        accidentDetailForm.purok }}
                                                                    <div v-if="errors.barangay">
                                                                        <span class="fs-8 text-danger">{{ errors.barangay[0]
                                                                        }}</span>
                                                                    </div>
                                                                    <div v-if="errors.purok">
                                                                        <span class="fs-8 text-danger">{{ errors.purok[0]
                                                                        }}</span>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td colspan="4"
                                                                    class="fs-8 text-muted pl-2 mx-auto d-md-none pl-5">
                                                                    {{ accidentDetailForm.specific_location }}</td>
                                                            </tr>
                                                            <tr>
                                                                <td class="fs-8 text-muted font-weight-bold pl-4 align-top">
                                                                    Description:</td>
                                                                <td class="fs-8 text-muted pl-2 d-none d-md-block">
                                                                    {{ accidentDetailForm.description }}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td colspan="4" class="fs-8 text-muted pl-2 d-md-none pl-5">
                                                                    {{ accidentDetailForm.description }}
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
                                                                                <td class="p-0 py-1 px-2">Name</td>
                                                                                <td class="p-0 py-1 px-2">Address</td>
                                                                                <td class="p-0 py-1 px-2">Age</td>
                                                                                <td class="p-0 py-1 px-2">Gender</td>
                                                                                <td class="p-0 py-1 px-2">Cause</td>
                                                                                <td class="p-0 py-1 px-2">Status</td>
                                                                            </thead>
                                                                            <tbody class=" font-weight-normal">
                                                                                <tr v-for="(patient, i) in patientList"
                                                                                    :key="patient.id">
                                                                                    <td class="p-0 pt-1 px-2">{{
                                                                                        patient.name }}</td>
                                                                                    <td class="p-0 pt-1 px-2">{{
                                                                                        patient.address }}</td>
                                                                                    <td class="p-0 pt-1 px-2">{{ patient.age
                                                                                    }}</td>
                                                                                    <td class="p-0 pt-1 px-2">{{
                                                                                        patient.gender }}</td>
                                                                                    <td class="p-0 pt-1 px-2">{{
                                                                                        patient.cause }}</td>
                                                                                    <td class="p-0 pt-1 px-2"
                                                                                        :class="'s-' + patient.status">{{
                                                                                            patient.status }}</td>
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
                                <button type="button" @click="onSubmitReport()" class="btn btn-sm btn-facebook btn-submit"
                                    style="display: none;">
                                    <span>Update</span>
                                    <div class="spinner-border spinner-border-sm d-none" role="status">
                                        <span class="sr-only"></span>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <!-- Modal -->
        <div class="modal fade" id="succes-report-modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
import { watch, onMounted, ref, getCurrentInstance } from 'vue'
import { Modal } from 'bootstrap'
import useAccount from '../../composables/account';
import useBarangay from '../../composables/barangay';
import useIncidenCause from '../../composables/incidentcause';
import useIncident from '../../composables/incident'

const props = defineProps({
    incidentItem: ref([])
})

const emit = defineEmits(['onapprove', 'ondelete'])

watch(() => props.incidentItem,
    async (val) => {
        await getIncident(val)
        console.log(val, incident.value)
        informantForm.value.name = incident.value.report_inf.name
        informantForm.value.address = incident.value.report_inf.address
        informantForm.value.phone = incident.value.report_inf.phone
        informantForm.value.date_of_call = incident.value.report_inf.date_of
        informantForm.value.time_of_call = incident.value.report_inf.time_of

        $('#accident-type-items[data-value="' + incident.value.type + '"]').addClass('btn-danger bg-gradient-danger text-white')
        var id = $('#accident-type-items[data-value="' + incident.value.type + '"]').attr('data-id')
        await getAllCauses(id)
        accidentType.value = incident.value.type
        var result = []
        var json = incident.value.report_pat
        var keys = Object.keys(json)
        keys.forEach(function(key){
            result.push(json[key])
        })
        console.log("patient lsit", incident.value.report_pat, result)
        patientList.value = result

        accidentDetailForm.value.barangay = incident.value.barangay
        accidentDetailForm.value.purok = incident.value.purok
        accidentDetailForm.value.specific_location = incident.value.specific_location
        accidentDetailForm.value.date = new Date(incident.value.datetime).toISOString().split('T')[0]
       
        var currentDate = new Date(incident.value.datetime)
        var h = currentDate.getHours()
        //if (h < 10) h = "0" + h
        var m = currentDate.getMinutes()
        //if (m < 10) h = "0" + m

        h = h.toString().padStart(2, "0")
        m = m.toString().padStart(2, "0")

        var currentTime = h + ":" + m
        accidentDetailForm.value.time = currentTime
        accidentDetailForm.value.severity = incident.value.severity
        accidentDetailForm.value.description = incident.value.description

        responderForm.value.leader = incident.value.report_res.leader
        responderForm.value.driver = incident.value.report_res.driver
        responderForm.value.member1 = incident.value.report_res.member1
        responderForm.value.member2 = incident.value.report_res.member2
        responderForm.value.member3 = incident.value.report_res.member3
        responderForm.value.member4 = incident.value.report_res.member4
        responderForm.value.member5 = incident.value.report_res.member5
        responderForm.value.member6 = incident.value.report_res.member6
        responderForm.value.member7 = incident.value.report_res.member7
        responderForm.value.member8 = incident.value.report_res.member8
        responderForm.value.member9 = incident.value.report_res.member9
        responderForm.value.member10 = incident.value.report_res.member10

    }
);
const instance = getCurrentInstance();
const { role, userDetails, getUser, getUserDetails } = useAccount()
const { getAllBrgy, barangays } = useBarangay()
const { getAllTypes, getAllCauses, itypes, causes } = useIncidenCause()
const { updateIncident, getIncident, incident, errors } = useIncident()

const informantForm = ref({
    name: '',
    address: '',
    phone: '',
    date_of_call: '',
    time_of_call: ''
})
const accidentType = ref([])
const patientForm = ref({
    name: '',
    address: '',
    age: '',
    gender: '0',
    status: '0',
    cause: '0',
    otherCause: ''
})
const patientList = ref([])
async function onAddPatient() {
    if (patientForm.value.name == '') return
    if (patientForm.value.address == '') return
    if (patientForm.value.age == '') return
    if (patientForm.value.gender == '') return
    if (patientForm.value.status == '0') return
    if (patientForm.value.cause == '0') return
    if (patientForm.value.cause == 'other' && patientForm.value.otherCause == '') return

    var patient = {
        name: patientForm.value.name,
        address: patientForm.value.address,
        age: patientForm.value.age,
        gender: patientForm.value.gender,
        status: patientForm.value.status,
        cause: patientForm.value.cause,
        otherCause: patientForm.value.otherCause
    }

    patientList.value.push(patient)

    patientForm.value.name = ''
    patientForm.value.address = ''
    patientForm.value.age = ''
    patientForm.value.gender = '0'
    patientForm.value.status = '0'
    patientForm.value.cause = '0'
}
function onRemovePatient(id) {
    alert(id)
    patientList.value.splice(id, 1)
}
const accidentDetailForm = ref({
    barangay: '',
    purok: '',
    specific_location: '',
    date: '',
    time: '',
    severity: '',
    description: ''
})
const responderForm = ref({
    leader: '',
    driver: '',
    member1: '',
    member2: '',
    member3: '',
    member4: '',
    member5: '',
    member6: '',
    member7: '',
    member8: '',
    member9: '',
    member10: ''
})
const isMed = ref([])

var mymodalEl = ""
var myModal = ""

onMounted(async () => {
    await getUser()
    await getAllBrgy()
    await getAllTypes()

    $('.section-item').hide()
    $('.section-item[data=first]').show()

    mymodalEl = $('#succes-report-modal')
    myModal = Modal.getOrCreateInstance(mymodalEl)

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
    if (c.next().attr('data') == 'required' && accidentType.value == "") {
        $('.btn-next').hide()
    }
    $('.btn-prev').removeAttr('disabled')

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

async function onChooseType(id) {

    $('#accident-type-items').removeClass('btn-danger bg-gradient-danger text-white')
    $('#accident-type-items[data-id="' + id + '"]').addClass('btn-danger bg-gradient-danger text-white')

    accidentType.value = $('#accident-type-items[data-id="' + id + '"]').attr('data-value')
    await getAllCauses(id)
    goForward()
}

async function onSubmitReport() {

    var el = $('.btn-submit')
    el.attr("disabled", "disabled")
    el.children('span').addClass('d-none')
    el.children('div').removeClass('d-none')

    let incidentval = {
        'id': incident.value.id,
        'informant': informantForm.value,
        'patients': patientList.value,
        'responder': responderForm.value,
        'type': accidentType.value,
        'severity': accidentDetailForm.value.severity,
        'barangay': accidentDetailForm.value.barangay,
        'purok': accidentDetailForm.value.purok,
        'datetime': accidentDetailForm.value.date + ' ' + accidentDetailForm.value.time,
        'status': incident.value.status
    }
    console.log(incidentval)

    await updateIncident(incidentval)

    el.removeAttr('disabled')
    el.children('span').removeClass('d-none')
    el.children('div').addClass('d-none')

    if (errors.value.length <= 0) {
        myModal.show()
        //reset()
    }
}
function printReport() {

}

function reset() {

    if (role == 'admin') {
        informantForm.value.name = ''
        informantForm.value.address = ''
        informantForm.value.phone = ''
    }
    getCurrentDateTime()

    accidentType.value = []
    patientList.value = []
    accidentDetailForm.value.barangay = ''
    accidentDetailForm.value.purok = ''
    accidentDetailForm.value.specific_location = ''
    accidentDetailForm.value.severity = ''
    accidentDetailForm.value.description = ''
    responderForm.value.leader = ''
    responderForm.value.driver = ''
    responderForm.value.member1 = ''
    responderForm.value.member2 = ''
    responderForm.value.member3 = ''
    responderForm.value.member4 = ''
    responderForm.value.member5 = ''
    responderForm.value.member6 = ''
    responderForm.value.member7 = ''
    responderForm.value.member8 = ''
    responderForm.value.member9 = ''
    responderForm.value.member10 = ''


    $('#accident-type-items').removeClass('btn-danger bg-gradient-danger text-white')

    $('.btn-next').show()
    $('.btn-prev').attr('disabled', 'disabled')
    $('.btn-submit').hide()

    $('.section-item').hide()
    $('.section-item').removeClass('active-section')
    $('.section-item[data=first]').addClass('active-section')
    $('.section-item[data=first]').show()
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

} */</style>