import useBase from "./base"

export default function useChart() {

    const { ref, axios } = useBase()

    const errors = ref([])
    const charts = ref([])
    const report = ref([])
    const barangay = ref([])

    const getChart = async () => {
        await axios.get('/chart/accidents')
            .then((e) => {
                if (e.data.success) {
                    charts.value = e.data.data
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
    const getReport = async () => {
        await axios.get('/chart/reportdata')
            .then((e) => {
                if (e.data.success) {
                    report.value = e.data.data
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
    const getBarangay = async () => {
        await axios.get('/chart/barangay')
            .then((e) => {
                if (e.data.success) {
                    barangay.value = e.data.data
                    errors.value = []
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

    return {
        getChart,getReport,getBarangay,
        charts,report,barangay,
    }
}