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
                            <tr>
                                <td class="d-flex justify-content-center">
                                    <div class="icon-circle bg-primary mr-2">
                                        <i class="fas fa-user-plus text-white"></i>
                                    </div>
                                </td>
                                <td>
                                    <div class="small text-gray-500 fs-9">January 12, 2023 8:21 AM</div>
                                    <span class="font-weight-bold fs-8">A new user has sign up!</span>
                                </td>
                                <td>
                                    <a class="btn btn-sm btn-primary">View</a>
                                </td>
                            </tr>
                            <tr><td colspan="3"><hr></td></tr>
                            <tr>
                                <td class="d-flex justify-content-center ">
                                    <div class="icon-circle bg-warning mr-2">
                                        <i class="fas fa-exclamation-triangle text-white"></i>
                                    </div>
                                </td>
                                <td class="">
                                    <div class="small text-gray-500 fs-9">January 12, 2023 12:23 PM</div>
                                    <div>
                                        <span class="fs-8">
                                        Spending Alert: We've noticed unusually high spending for your account.
                                    </span>
                                    </div>
                                </td>
                                <td>
                                    <a class="btn btn-sm btn-primary">View</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>

</style>