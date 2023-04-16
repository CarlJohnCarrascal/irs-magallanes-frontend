<template>
    <div class="m-md-4">
        
        <div class="d-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Account Rules</h1>
        </div>
        <div class="card m-sm-1 mt-4 mb-4">
            <div class="card-header d-flex justify-content-end">
                <a class="btn btn-sm btn-success" @click="showToast">Save</a>
            </div>
            <div class="card-body">
                <div class="row ml-2">
                    <div class="form-check form-control-lg form-check-inline mb-3">
                        <input type="checkbox" class="form-check-input" checked> 
                        <label class="form-check-label fs-5 ml-2 form-check-inline" for="">New Account Approval</label>
                    </div>
                </div>
            </div>
        </div>

        <div class="position-fixed bottom-0 end-0 p-3 ">
            <div id="liveToast" class="toast toast-sm hide bg-success w-auto" role="alert" aria-live="assertive" aria-atomic="true">
                <div class="toast-header">
                <strong class="me-auto">Account Rule Updated!</strong>
                <small></small>
                <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
                <div class="toast-body">
                    Account approval has successfully disabled!
                </div>
            </div>
        </div>
    </div>
</template>
 
<script setup>
import { Toast } from 'bootstrap';
import { onMounted } from 'vue';

var mytoast;

function showToast(){

    mytoast.show()
    
}
onMounted(async () => {
    mytoast = Toast.getOrCreateInstance($('#liveToast'),{})
})


</script>

<style lang="scss" scoped>

</style>