<script setup>
</script>
<template>
  <main  class="d-flex justify-content-center mt-5">
    
    <table>
      <tbody>
        <tr  class="d-flex justify-content-center">
          <td><RouterLink class="btn btn-secondary btn-outline-info text-center" to="/auth/login">Sign In</RouterLink></td>
        </tr>
        <tr  class="d-flex justify-content-center">
          <td><RouterLink class="btn btn-secondary btn-outline-info text-center" to="/dashboard">Home</RouterLink></td>
        </tr>
        <tr  class="d-flex justify-content-center">
          <td><RouterLink class="btn btn-secondary btn-outline-info text-center" to="/report">Reports</RouterLink></td>
        </tr>
        <tr  class="d-flex justify-content-center">
          <td><RouterLink class="btn btn-secondary btn-outline-info text-center" to="/report/incident/new">Report Incident</RouterLink></td>
        </tr>
        <tr class="d-flex justify-content-center">
          <td><RouterLink class="btn btn-secondary btn-outline-info text-center" to="/report/details">Report Details</RouterLink></td>
        </tr>
        <tr class="d-flex justify-content-center">
          <td><RouterLink class="btn btn-secondary btn-outline-info text-center" to="/auth/account">Account</RouterLink></td>
        </tr>
        
        <tr class="d-flex justify-content-center">
          <td><RouterLink class="btn btn-secondary btn-outline-info text-center" to="/about">About</RouterLink></td>
        </tr>
      </tbody>
    </table>
  </main>
</template>
