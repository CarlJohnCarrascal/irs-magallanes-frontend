import useBase from "./base"

export default function useBarangay() {
    const { ref, axios } = useBase()
    const barangay = ref([])
    const barangays = ref([])
    const errors = ref([]);

    const getAllBrgy = async () => {
        try {
            var res = await axios.get('/barangay');
            if (res.data.success) {
                barangays.value = res.data.data
                errors.value = res.data.data;
            } else {
                errors.value = res.data.data;
            }
        } catch (error) {
            errors.value = error.response.data.data;
        }
    }

    const addBrgy = async (name) => {
        var data = { 'name': name };
        await axios.post('/barangay', data)
            .then((e) => {
                if (e.data.success) {
                    getAllBrgy()
                } else {
                    errors.value = e.data.data;
                    console.log('An error happen fetching data.', e)
                }
            })
            .catch((e) => {
                errors.value = e.response.data.data
                console.log('An error happen fetching data.', e)
            })
    }

    const deleteBrgy = async (id) => {
        try {
            var res = await axios.delete('/barangay/' + id);

            if (res.data.success) {
                await getAllBrgy()
            } else {
                errors.value = res.data.data;
            }
        } catch (error) {
            errors.value = error.response.data.data;
        }
    }

    return {
        getAllBrgy,
        addBrgy,
        deleteBrgy,
        errors,
        barangay, barangays,
    };
}