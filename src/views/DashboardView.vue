<script setup>

import PageHeading from '../components/dashboard/PageHeading.vue'
import IncidentToday from '../components/dashboard/IncidentToday.vue';
import IncidentThisMonth from '../components/dashboard/IncidentThisMonth.vue'; 
import IncidentThisYear from '../components/dashboard/IncidentThisYear.vue'; 
import IncidentPendingReport from '../components/dashboard/IncidentPendingReport.vue'; 
import IncidentChart from '../components/dashboard/IncidentChart.vue';


</script>

<template>
 <!-- Begin Page Content -->
 <div class="container-fluid p-0">

  <!-- Page Heading -->
  <!-- <PageHeading /> -->

  <!-- Content Row  Cards -->
  <div class="row">

    <IncidentToday />

    <IncidentThisMonth />
    
    <IncidentThisYear />

    <IncidentPendingReport />

  </div>

  <!-- Content Row -->
  <div class="row m-0">
    <!-- Area Chart -->
    <IncidentChart />
  </div>

</div>
<!-- /.container-fluid -->
</template>

<style scoped>

</style>