
<script setup>
import { onMounted } from 'vue';
import useAccount from '../../composables/account';
const { getUserDetails, userDetails, errors, updateAccount } = useAccount()

async function updateMe() {
    await updateAccount(userDetails.value)
}

async function changeImage() {

}

onMounted(async () => {

    await getUserDetails()
    console.log(userDetails)

    $('.fileimage').change(function (e) {
        var file = document.getElementById('fileimage').files[0]
        var reader = new FileReader();
        // it's onload event and you forgot (parameters)
        reader.onload = function (e) {
            var image = document.getElementById("myimage");
            // the result image data
            image.src = e.target.result;
        }
        // you have to declare the file loading
        reader.readAsDataURL(file);
    })

})


</script>

<template>
    <div class="card bg-glass mb-2">
        <div class="card-body px-md-5">
            <form @submit.prevent="updateMe">
                <div class="d-flex justify-content-between">
                    <h3>Update Account</h3>
                    <a @click="$router.go(-1)" class="btn btn-icon btn-lg">
                        <i class="fas fa-times fa-sm text-black-50"></i>
                    </a>
                </div>

                <div class="row mb-0">
                    <div class="col-md-4 col-sm-12">
                        <div class="mb-3 row">
                            <div class="card-body text-center">
                                <img id="myimage" src="../../assets/img/undraw_profile.svg" alt="avatar"
                                    class="rounded-circle img-fluid" style="width: 150px;">
                                <input id="fileimage" class="fileimage btn-sm align-bottom" type="file" name="a" />
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-8">
                        <div class="mb-3 row">
                            <label for="staticFirstname" class="col-sm-3 col-form-label">Firstname</label>
                            <div class="col-sm-10">
                                <input v-model="userDetails.firstname" type="text" class="form-control"
                                    id="staticFirstname">
                            </div>
                            <div v-if="errors.firstname">
                                <span class="text-danger fst-italic" style="font-size: 10px;">{{ errors.firstname[0]
                                }}</span>
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label for="staticLastname" class="col-sm-3 col-form-label">Lastname</label>
                            <div class="col-sm-10">
                                <input v-model="userDetails.lastname" type="text" class="form-control" id="staticLastname">
                            </div>
                            <div v-if="errors.lastname">
                                <span class="text-danger fst-italic" style="font-size: 10px;">{{ errors.lastname[0]
                                }}</span>
                            </div>
                        </div>

                        <div class="mb-3 row">
                            <label for="staticPhone" class="col-sm-3 col-form-label">Phone</label>
                            <div class="col-sm-10">
                                <input v-model="userDetails.phone" type="tel" class="form-control" id="staticPhone">
                            </div>
                        </div>

                        <div class="mb-3 row">
                            <label for="staticAddress" class="col-sm-3 col-form-label">Address</label>
                            <div class="col-sm-10">
                                <input v-model="userDetails.address" type="text" class="form-control" id="staticAddress">
                            </div>
                            <div v-if="errors.address">
                                <span class="text-danger fst-italic" style="font-size: 10px;">{{ errors.address[0] }}</span>
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <div class="col-sm-10  d-flex justify-content-end">
                            <!-- Submit button -->
                            <button type="submit" class="btn btn-primary">
                                Update
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