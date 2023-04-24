<template>
    <div class="m-md-4">
        <div class="card m-sm-1 mt-4 mb-4">
            <div class="card-header">

            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-md-6 mb-3">
                        <label class="form-label" for="report_date">Select Accident Type</label>
                        <select id="incident-type" v-model="form.id" @change="onChange" class="form-select text-muted"
                            :required="true">
                            <option v-for="(itype, i) in itypes" :key="itype.id" :value="itype.id" selected="true">{{
                                itype.name }}
                            </option>
                        </select>
                        <div class="row" v-if="errors.type_id">
                            <p class="text-danger fs-7">{{ errors.type_id[0] }}</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <label class="form-label" for="">Add new item</label>
                    <div class="input-group mb-3">
                        <input v-model="form.name" type="text" class="form-control col-sm-12 col-md-3"
                            placeholder="Cause name" aria-label="incident cause name" aria-describedby="button-addon2">
                        <input v-model="form.description" type="text" class="form-control col-sm-12 col-md-9"
                            placeholder="Description" aria-label="incident cause name" aria-describedby="button-addon2">
                        <button @click="onAdd" class="btn btn-outline-secondary" type="button"
                            id="button-addon2">Add</button>
                    </div>
                    <div class="row" v-if="errors.name">
                        <p class="text-danger fs-7">{{ errors.name[0] }}</p>
                    </div>
                </div>
                <div class="row">
                    <table class="table">
                        <thead>
                            <tr>
                                <!-- <th scope="col"></th> -->
                                <th scope="col">Cause Name</th>
                                <th scope="col">Description</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(cause, ind) in causes" :key="cause.id">
                                <!-- <th scope="row">{{ (ind + 1) }}</th> -->
                                <td>{{ cause.name }}</td>
                                <td>{{ cause.description }}</td>
                                <td>
                                    <button :data-id="cause.id" @click="onDelete(cause.id)" id="btnitem"
                                        class="btn btn-sm btn-danger d-inline ml-1">
                                        <span>Delete</span>
                                        <div class="spinner-border spinner-border-sm d-none" role="status">
                                            <span class="sr-only"></span>
                                        </div>
                                    </button>
                                </td>
                            </tr>
                            <tr v-if="causes.length <= 0">
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
import { onMounted,ref,watch } from 'vue';
import useIncidentCause from '../../composables/incidentcause'
const { getAllTypes, itype, itypes, getAllCauses, addCause, deleteCause, cause, causes, errors } = useIncidentCause()

const props = defineProps({
    reload: ref()
})
watch(() => props.reload,
    async (val) => {
        await getAllTypes()
        var select = document.getElementById("incident-type")
        select.selectedIndex = 0
        await getAllCauses(select.value)
        select.selectedIndex = 0
    }
);

const selectedType = ''
const form = {
    id: "",
    name: "",
    description: ""
}
async function onChange() {
    getAllCauses(form.id)
}

async function onDelete(id) {
    var el = $("button[data-id='" + id + "']")
    el.attr("disabled", "disabled");
    el.children('span').addClass('d-none')
    el.children('div').removeClass('d-none')
    //console.log(id, el)
    await deleteCause(id, form)
}
async function onAdd() {

    $('#btn-add').attr("disabled", "disabled");
    $('#btn-add-span').addClass('d-none')
    $('#btn-add-spinner').removeClass('d-none')

    await addCause(form)

    form.name = ''
    form.description = ''

    $('#btn-add').removeAttr("disabled", "disabled");
    $('#btn-add-span').removeClass('d-none')
    $('#btn-add-spinner').addClass('d-none')
}

onMounted(async () => {
    await getAllTypes()
    var select = document.getElementById("incident-type");
    select.selectedIndex = 0;
    await getAllCauses(select.value)
    select.selectedIndex = 0;

})
</script>

<style lang="scss" scoped></style>