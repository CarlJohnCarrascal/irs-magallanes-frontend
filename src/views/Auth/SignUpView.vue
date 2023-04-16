
<script setup>
import useAccount from '../../composables/account'
const { createAccount, errors } = useAccount();

var myRole = "user";
var myFname = "";
var myLname = "";
var myAddress = "";
var myEmail = "";
var myPassword = "";
var myPassword2 = "";

async function SignMeUp() {
    var res = await createAccount(myRole, myFname, myLname, myAddress, myEmail, myPassword, myPassword2);
    console.log(errors.value.error)
}
</script>

<template>
    <!-- Section: Design Block -->
    <div class="background-radial-gradient">
        <div class="container px-4 py-5 px-md-5 text-center text-lg-start">
            <div class="row d-flex justify-content-center gx-lg-5 align-items-center mb-5">
                <div class="col-lg-6 mb-5 mb-lg-0 position-relative">
                    <div id="radius-shape-1" class="position-absolute rounded-circle shadow-5-strong"></div>
                    <div id="radius-shape-2" class="position-absolute shadow-5-strong"></div>

                    <div class="card bg-glass">
                        <div class="card-body px-4 py-5 px-md-5">
                            <form @submit.prevent="SignMeUp">
                                <div class="row mb-4">
                                    <h3>Create Account</h3>
                                </div>
                                <!-- User Name -->
                                <div class="row">
                                    <!-- First Name input -->
                                    <div class="col-md-6 form-outline mb-4">
                                        <div v-if="errors.firstname">
                                            <span class="text-danger fst-italic" style="font-size: 10px;">{{
                                                errors.firstname[0] }}</span>
                                        </div>
                                        <input v-model="myFname" type="text" id="form_firstname" class="form-control" />
                                        <label class="form-label" for="form_firstname">First Name</label>

                                    </div>
                                    <!-- Last Name input -->
                                    <div class="col-md-6 form-outline mb-4">
                                        <div v-if="errors.lastname">
                                            <span class="text-danger fst-italic" style="font-size: 10px;">{{
                                                errors.lastname[0] }}</span>
                                        </div>
                                        <input v-model="myLname" type="text" id="form_lastname" class="form-control" />
                                        <label class="form-label" for="form_lastname">Last Name</label>

                                    </div>
                                </div>

                                <!-- address -->
                                <div class="form-outline mb-4">
                                        <div v-if="errors.address">
                                            <span class="text-danger fst-italic" style="font-size: 10px;">{{
                                                errors.address[0] }}</span>
                                        </div>
                                        <input v-model="myAddress" type="text" id="form_address" class="form-control" />
                                        <label class="form-label" for="form_address">Address</label>

                                    </div>

                                <!-- Email input -->
                                <div class="form-outline mb-4">
                                    <div v-if="errors.email">
                                        <span class="text-danger fst-italic" style="font-size: 10px;">{{ errors.email[0]
                                        }}</span>
                                    </div>
                                    <input v-model="myEmail" type="email" id="form_email" class="form-control" />
                                    <label class="form-label" for="form_email">Email address</label>
                                </div>

                            <!-- Password input -->
                            <div class="form-outline mb-4">
                                <div v-if="errors.password">
                                    <span class="text-danger fst-italic" style="font-size: 10px;">{{ errors.password[0]
                                    }}</span>
                                    </div>
                                    <input v-model="myPassword" type="password" id="form_password" class="form-control" />
                                    <label class="form-label" for="form_password">Password</label>
                                </div>
                                <!-- cONFIRM Password input -->
                                <div class="form-outline mb-4">
                                    <div v-if="errors.confirm_password">
                                        <span class="text-danger fst-italic" style="font-size: 10px;">{{
                                            errors.confirm_password[0] }}</span>
                                    </div>
                                    <input v-model="myPassword2" type="password" id="form_password2" class="form-control" />
                                    <label class="form-label" for="form_password2">Confirm Password</label>
                                </div>

                                <!-- Checkbox -->
                                <!-- <div class="form-check d-flex justify-content-start mb-4">
                        <input class="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
                        <label class="form-check-label" for="form2Example33">
                        Remember me?
                        </label>
                    </div> -->

                                <!-- Submit button -->
                                <button type="submit" class="btn btn-primary btn-block mb-4">
                                    Sign Up
                                </button>

                                <RouterLink to="/login" class="btn btn-link">Already have account? Sign in here</RouterLink>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Section: Design Block -->
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
    background-image: url('../../assets/img/1.jpg');
    background-repeat: no-repeat;
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
}</style>