import useBase from "./base"

export default function useIncidenType() {
    
    const { ref, axios } = useBase()

    const itype = ref([])
    const itypes = ref([])
    const errors = ref([])

    const getAllTypes = async () => {
        await axios.get('/types')
            .then((e) => {
                if (e.data.success) {
                    itypes.value = e.data.data
                    errors.value = e.data.data
                    //console.log(e.data.data)
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

    const addType = async (name) => {
        var data = { 'name': name };
        await axios.post('/types', data)
            .then((e) => {
                if (e.data.success) {
                    getAllTypes()
                    //errors.value = e.data.data
                } else {
                    errors.value = e.data.data;
                    //console.log('An error happen fetching data.', e)
                }
            })
            .catch((e) => {
                errors.value = e.response.data.data
                console.log('An error happen fetching data.', e)
            })
    }

    const deleteType = async (id) => {
        await axios.delete('/deletetypes/' + id)
            .then((e) => {
                if (e.data.success) {
                    getAllTypes()
                    //errors.value = e.data.data
                } else {
                    errors.value = e.data.data;
                }
               // console.log('An error happen fetching data.',e)
            })
            .catch((e) => {
                errors.value = e.response.data.data
                console.log('An error happen fetching data.',e)
            })
    }

    return {
        getAllTypes,addType,deleteType,
        itype,itypes,errors,
    }
}