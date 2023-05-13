import useBase from "./base"

export default function useNotification() {
    const { ref, axios, getCookie2 } = useBase()

    const notifications = ref([])
    const nnotifications = ref([])
    const nerrors = ref([])
    const count = ref([])

    const getNotifications = async (f, p) => {
        await axios
            .get('notifications/?unread='+ f + '&p='+ p)
            .then(async (e) => {
                nerrors.value = []
                //console.log("then", e)
                notifications.value = e.data.data
            })
            .catch(async (err) => {
                //console.log("catch", err)
                nerrors.value = err.response.data
            })
    }

    const getNewNotifications = () => {
        axios
            .get('notifications/getnew')
            .then(async (e) => {
                nerrors.value = []
                //console.log("then", e)
                nnotifications.value = e.data.data
            })
            .catch(async (err) => {
                //console.log("catch", err)
                nerrors.value = err.response.data
            })
    }

    const getNotificationsCount = () => {
        axios
            .get('notifications/getnot')
            .then(async (e) => {
                nerrors.value = []
                //console.log("then", e)
                count.value = e.data.data
            })
            .catch(async (err) => {
                nerrors.value = err.response.data
                //console.log(err.response.data)
            })
    }
    const markSeen = async (id) => {
        await axios
            .put('notifications/' + id)
            .then(async (e) => {
                nerrors.value = []
            })
            .catch(async (err) => {
                nerrors.value = err.response.data
                //console.log(err.response.data)
            })
    }

    return {
        getNotifications, getNewNotifications, getNotificationsCount, markSeen,
        notifications, nnotifications, nerrors,count,
    }
}