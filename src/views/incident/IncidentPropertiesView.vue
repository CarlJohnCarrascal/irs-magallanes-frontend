<template>
    <div>
        <div class="d-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Properties</h1>
        </div>
        <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
                <button class="nav-link active" id="barangay-tab" 
                data-bs-toggle="tab" data-bs-target="#brgylist" 
                type="button" role="tab" aria-controls="barangay" aria-selected="true">Barangay List</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="incidenttypes-tab"
                 data-bs-toggle="tab" data-bs-target="#incidenttypes" 
                 type="button" role="tab" aria-controls="incidenttypes" aria-selected="false">Incident Types</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="incidentcauses-tab"
                 data-bs-toggle="tab" data-bs-target="#incidentcauses" 
                 type="button" role="tab" aria-controls="incidentcauses" aria-selected="false">Causes</button>
            </li>
            <!-- <li class="nav-item" role="presentation">
                <button class="nav-link" id="severity-tab" data-bs-toggle="tab" data-bs-target="#severity" type="button" role="tab" aria-controls="contact" aria-selected="false">Severities</button>
            </li> -->
            </ul>
            <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="brgylist" role="tabpanel" aria-labelledby="barangay-tab">
                    <BarangayList />
                </div>
                <div class="tab-pane fade" id="incidenttypes" role="tabpanel" aria-labelledby="incidenttypes-tab">
                    <IncidentTypes />
                </div>
                <div class="tab-pane fade" id="incidentcauses" role="tabpanel" aria-labelledby="incidentcauses-tab">
                    <Causes />
                </div>
                <!-- <div class="tab-pane fade" id="severity" role="tabpanel" aria-labelledby="severity-tab">
                    <Severities />
                </div> -->
            </div>
    </div>
</template>

<script setup>
import BarangayList from '../../components/incident/BarangayList.vue';
import IncidentTypes from '../../components/incident/IncidentTypes.vue';
import Causes from '../../components/incident/Causes.vue';
//import Severities from '../../components/incident/Severities.vue';

</script>

<style lang="scss" scoped>

</style>