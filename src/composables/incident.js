import { param } from "jquery";
import useBase from "./base";
export default function useIncident(){
    const { axios, ref } = useBase()

    const incidents = ref([])
    const incident = ref([])
    const errors = ref([])
    const patients = ref([])

    const getAllIncident = async (r,t, cd1 = '', cd2 = '', my = false) => {
        var form = {
            'r': r,
            't': t,
            'cd1': cd1,
            'cd2': cd2
        }
        await axios.get('incidents',{ params: {
            'r': r,
            't': t,
            'cd1': cd1,
            'cd2': cd2,
            'my': my
        } })
        .then((res) => {
            if(res.data.success){
                errors.value = []
                incidents.value = res.data.data
                //console.log(res.data)
            }else{
                errors.value = res.data.data
            }
        })
        .catch((err) => {
            errors.value = err.response
        })
    }
    const getIncident = async (id) => {
        await axios.get('incidents/' + id)
        .then((res) => {
            if(res.data.success){
                incident.value = res.data.data
            }else{
                errors.value = res.data.data
            }
        })
        .catch((err) => {
            errors.value = err.data.data
        })
    }
    const addIncident = async (incident) => {
        await axios.post('incidents', incident)
        .then((res) => {
            //console.log(13,res)
            if(res.data.success){
                incident.value = res.data.data
                errors.value = []
            }else{
                errors.value = res.data.data
            }
        })
        .catch((err) => {
            errors.value = err.response.data.data
            //console.log(11111,err)
        })
    }
    const updateIncident = async (incident) => {
        //console.log(incident)
        await axios.put('incidents/' + incident.id, incident)
        .then((res) => {
            //console.log(res)
            if(res.data.success){
                incident.value = res.data.data
                errors.value = []
            }else{
                errors.value = res.data.data
            }
        })
        .catch((err) => {
            errors.value = err.response.data.data
            //console.log(err)
        })
    }
    const updateIncidentStatus = async (status, id) => {
        status = {
            'status': status
        }
        await axios.put('incident/updatestatus/' + id, status)
        .then((res) => {
            //console.log(res)
            if(res.data.success){
                incident.value = res.data.data
                errors.value = []
            }else{
                errors.value = res.data.data
            }
        })
        .catch((err) => {
            errors.value = err.response
            //console.log(err)
        })
    }
    const deleteIncident = async (id) => {
        await axios.delete('incidents/' + id)
        .then((res) => {
            if(res.data.success){
                incident.value = res.data.data
            }else{
                errors.value = res.data.data
            }
        })
        .catch((err) => {
            errors.value = err.response
            console.log(err.response)
        })
    }
    const approveIncident = async (id) => {
        await axios.put('incident/accept/' + id)
        .then((res) => {
            if(res.data.success){
                incident.value = res.data.data
            }else{
                errors.value = res.data.data
            }
        })
        .catch((err) => {
            errors.value = err.response
        })
    }
    const getAllPatient = async (r, cd1 = null, cd2 = null) => {
        await axios.get('incident/patients',{ params: {
            'r': r,
            'cd1': cd1,
            'cd2': cd2
        } })
        .then((res) => {
            if(res.data.success){
                errors.value = []
                patients.value = res.data.data
            }else{
                errors.value = res.data.data
            }
        })
        .catch((err) => {
            errors.value = err.response
        })
    }

    return {
        getAllIncident, getIncident, addIncident, deleteIncident, approveIncident, updateIncident, updateIncidentStatus, getAllPatient,
        incidents, incident, patients,
        errors,
    }

}