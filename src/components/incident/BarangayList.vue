<template>
    <div class="m-md-4">
        <div class="card m-sm-1 mt-4 mb-4">
            <div class="card-header">

            </div>
            <div class="card-body">
                <div class="row">
                    <label class="form-label" for="">Add New Barangay</label>
                    <div class="input-group mb-3">
                        <input v-model="form.name" type="text" class="form-control" placeholder="Barangay name" aria-label="Barangay name" aria-describedby="button-addon2">
                        <button @click="onAdd" class="btn btn-outline-secondary" type="button" id="btn-add">
                            <span id="btn-add-span">Save</span>
                            <div id="btn-add-spinner" class="spinner-border spinner-border-sm d-none" role="status">
                                <span class="sr-only"></span>
                            </div>
                        </button>
                    </div>
                    <div class="row" v-if="errors.name">
                            <p class="text-danger fs-7">{{ errors.name[0] }}</p>
                    </div>
                </div>
                <div class="row">
                    <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(barangay, i) in barangays" :key="barangay.id">
                            <th scope="row">{{ i + 1 }}</th>
                            <td>{{ barangay.name }}</td>
                            <td class="d-flex justify-content-end">
                                <a @click="onDelete(barangay.id)" :data-id="barangay.id" class="btn btn-sm btn-danger d-inline ml-1">
                                    <span>Delete</span>
                                        <div class="spinner-border spinner-border-sm d-none" role="status">
                                            <span class="sr-only"></span>
                                        </div>
                                </a>
                            </td>
                        </tr>
                        <tr v-if="barangays.length <= 0">
                            <td colspan="3" class="text-center">No Record Found</td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import { onMounted } from 'vue';
import useBarangay from '../../composables/barangay'
const { getAllBrgy, addBrgy, deleteBrgy, barangay, barangays, errors } = useBarangay()

const form = {
    id: "",
    name: ""
}
async function onDelete(id) {
    var el = $("a[data-id='"+ id + "']")
    el.attr("disabled", "disabled");
    el.children('span').addClass('d-none')
    el.children('div').removeClass('d-none')
    //console.log(id, el)
    await deleteBrgy(id)
}
async function onAdd() {

    $('#btn-add').attr("disabled", "disabled");
    $('#btn-add-span').addClass('d-none')
    $('#btn-add-spinner').removeClass('d-none')

    await addBrgy(form.name)

    form.name = ''
    $('#btn-add').removeAttr("disabled", "disabled");
    $('#btn-add-span').removeClass('d-none')
    $('#btn-add-spinner').addClass('d-none')
}

onMounted( async () => {
    await getAllBrgy()
})

</script>

<style lang="scss" scoped>

</style>