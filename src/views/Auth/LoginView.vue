<script setup>
import useAccount from '../../composables/account'
import { onMounted, ref } from 'vue';
const { loginAccount,errors } = useAccount();

var myEmail = "";
var myPassword = "";
var rememberMe = false;

async function LogMeIn(){
    var res = await loginAccount(myEmail, myPassword, rememberMe);
    //console.log(errors.value.error)
}
</script>

<template>
    <div class="">
        <!-- Section: Design Block -->
    <div class="background-radial-gradient">
        <div class="container py-5 text-center text-lg-start">
            <div class="row  align-items-center d-flex justify-content-center">
                <div class="col-lg-6 mb-5 mb-lg-0 position-relative">
                    <div id="radius-shape-1" class="position-absolute rounded-circle shadow-5-strong"></div>
                    <div id="radius-shape-2" class="position-absolute shadow-5-strong"></div>
                    <div class="card bg-glass">
                        <div class="card-body py-4 px-md-5">
                            
                            <form @submit.prevent="LogMeIn">
                                <div class="row mb-4">
                                    <h3>Login</h3>
                                </div>
                                <!-- Email input -->
                                <div class="form-outline mb-4">
                                    <div v-if="errors.email">
                                        <span class="text-danger fst-italic" style="font-size: 10px;">{{ errors.email[0] }}</span>
                                    </div>
                                    <input v-model="myEmail" type="email" id="form3Example3" class="form-control" />
                                    <label class="form-label" for="form3Example3">Email address</label>
                                </div>

                                <!-- Password input -->
                                <div class="form-outline mb-4">
                                    <div v-if="errors.password">
                                        <span class="text-danger fst-italic" style="font-size: 10px;">{{ errors.password[0] }}</span>
                                    </div>
                                    <input v-model="myPassword" type="password" id="form3Example4" class="form-control" />
                                    <label class="form-label" for="form3Example4">Password</label>
                                    <div v-if="errors.error">
                                        <span class="text-danger fst-italic" style="font-size: 10px;">{{ errors.error }}</span>
                                    </div>
                                </div>
                                

                                <!-- Checkbox -->
                                <div class="form-check d-flex justify-content-start mb-4">
                                    <input class="form-check-input me-2" type="checkbox" v-model="rememberMe" id="form2Example33" />
                                    <label class="form-check-label" for="form2Example33">
                                        Remember me?
                                    </label>
                                </div>

                                <!-- Submit button -->
                                <button type="submit" class="btn btn-primary btn-block mb-4">
                                    Sign in
                                </button>

                                <RouterLink to="/signup" class="btn btn-link">Don't have account? Sign up here</RouterLink>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Section: Design Block -->
    </div>
</template>

<style scoped>
body {
    min-height: 100dvh;
}

.background-radial-gradient {
    height: calc(100dvh - 1px);
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
}
</style>