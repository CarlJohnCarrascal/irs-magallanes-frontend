import useBase from "./base"
import useIncidentType from "./incidenttype"

export default function useIncidenCause() {
    
    const { ref, axios } = useBase()
    const { getAllTypes, itype, itypes } = useIncidentType()
    

    const cause = ref([])
    const causes = ref([])
    const errors = ref([])

    const getAllCauses = async (id) => {
        var data = {
            'typeid': id
        }
        await axios.get('/indexbytype/' + id)
            .then((e) => {
                if (e.data.success) {
                    causes.value = e.data.data
                    errors.value = e.data.data
                } else {
                    errors.value = e.data.data
                    //console.log('An error happen fetching data.', e)
                }
            })
            .catch((e) => {
                errors.value = e.response.data.data
                console.log('An error happen fetching data.', e)
            })
    }

    const addCause = async (form) => {
        var data = { 
            'name': form.name,
            'description': form.description,
            'type_id': form.id
        };
        await axios.post('/incident_causes', data)
            .then((e) => {
                if (e.data.success) {
                    getAllCauses(form.id)
                    //errors.value = e.data.data
                } else {
                    errors.value = e.data.data
                    //console.log('An error happen fetching data.', e)
                }
            })
            .catch((e) => {
                errors.value = e.response.data.data
                console.log('An error happen fetching data.', e)
            })
    }

    const deleteCause = async (id, form) => {
        await axios.delete('/incident_causes/' + id)
            .then((e) => {
                if (e.data.success) {
                    getAllCauses(form.id)
                    //errors.value = e.data.data
                } else {
                    errors.value = e.data.data
                }
               // console.log('An error happen fetching data.',e)
            })
            .catch((e) => {
                errors.value = e.response.data.data
                console.log('An error happen fetching data.',e)
            })
    }

    return {
        getAllTypes, getAllCauses, addCause, deleteCause,
        cause, causes,
        itype,itypes,errors,
    }
}