
<script setup>

import { onMounted } from 'vue';
import useAccount from '../../composables/account';
const { getUserDetails, userDetails, errors, changePassword } = useAccount()
const form = {
    password: '',
    newPassword: '',
    confirmNewPassword: '',
    id: ''
}

onMounted(async () => {
    await getUserDetails()
})

async function changeMyPassword(){
    form.id = userDetails.value.id
    await changePassword(form)
}

</script>

<template>
    <div class="card bg-glass">
        <div class="card-body px-4 px-md-5">
            <form  autocomplete="off" autosave="off" @submit.prevent="changeMyPassword">
                <div class=" mb-4  d-flex justify-content-between">
                    <h3>Change Password</h3>
                    <a @click="$router.go(-1)" class="btn btn-icon btn-lg">
                        <i class="fas fa-times fa-sm text-black-50"></i>
                    </a>
                </div>

                <div class="row">
                    <div class="col">
                        <div class="mb-3 row">
                            <label for="staticEmail" class="col-sm-3 col-form-label">Email</label>
                            <div class="col-sm-10">
                                <input v-model="userDetails.email" type="text" class="form-control" id="staticEmail" readonly>
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label for="staticCurrentPassword" class="col-sm-3 col-form-label">Current Password</label>
                            <div class="col-sm-10">
                                <input v-model="form.password" type="text" class="form-control" id="staticCurrentPassword">
                            </div>
                            <div v-if="errors.password">
                                <span class="text-danger fst-italic" style="font-size: 10px;">{{ errors.password[0]
                                }}</span>
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label for="staticCurrentPassword" class="col-sm-3 col-form-label">New Password</label>
                            <div class="col-sm-10">
                                <input v-model="form.newPassword" type="text" class="form-control" id="staticCurrentPassword">
                            </div>
                            <div v-if="errors.new_password">
                                <span class="text-danger fst-italic" style="font-size: 10px;">{{ errors.new_password[0]
                                }}</span>
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label for="staticCurrentPassword" class="col-sm-3 col-form-label">Confirm New Password</label>
                            <div class="col-sm-10">
                                <input v-model="form.confirmNewPassword" type="text" class="form-control" id="staticCurrentPassword">
                            </div>
                            <div v-if="errors.confirm_new_password">
                                <span class="text-danger fst-italic" style="font-size: 10px;">{{ errors.confirm_new_password[0]
                                }}</span>
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <div class="col-sm-10  d-flex justify-content-end">
                            <!-- Submit button -->
                            <button type="submit" class="btn btn-primary">
                                Change Password
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            </form>
        </div>
    </div>
</template>

<style scoped>
.background-radial-gradient {
    background-color: hsl(218, 41%, 15%);
    background-image: radial-gradient(650px circle at 0% 0%,
            hsl(218, 41%, 35%) 15%,
            hsl(218, 41%, 30%) 35%,
            hsl(218, 41%, 20%) 75%,
            hsl(218, 41%, 19%) 80%,
            transparent 100%),
        radial-gradient(1250px circle at 100% 100%,
            hsl(218, 41%, 45%) 15%,
            hsl(218, 41%, 30%) 35%,
            hsl(218, 41%, 20%) 75%,
            hsl(218, 41%, 19%) 80%,
            transparent 100%);
}

#radius-shape-12 {
    height: 220px;
    width: 220px;
    top: -60px;
    left: -130px;
    background: radial-gradient(#44006b, #ad1fff);
    overflow: hidden;
}

#radius-shape-22 {
    border-radius: 38% 62% 63% 37% / 70% 33% 67% 30%;
    bottom: -60px;
    right: -110px;
    width: 300px;
    height: 300px;
    background: radial-gradient(#44006b, #ad1fff);
    overflow: hidden;
}

.bg-glass {
    background-color: hsla(0, 0%, 100%, 0.9) !important;
    backdrop-filter: saturate(200%) blur(25px);
}
</style>