import useBase from "./base";

export default function useUser(){
    const { ref, axios } = useBase()
    const errors = ref([]);

    const users = ref([])    
    const user = ref([])

    const getAllUser = async (req) => {
        await axios.get('users?request='+ req)
        .then((res) => {
            if(res.data.success){
                users.value = res.data.data
                console.log(res.data)
            }else{
                errors.value = res.data.data
            }
        })
        .catch((res) => {
            errors.value = res.data.data
        })
    }
    const getUser = async (id) => {
        await axios.get('users/' + id)
        .then((res) => {
            if(res.data.success){
                user.value = res.data.data
                console.log(res.data)
            }else{
                errors.value = res.data.data
            }
        })
        .catch((res) => {
            console.warn(res)
            errors.value = res.data.data
        })
    }
    const activateUser = async (id) => {
        await axios.put('activate/'+ id)
        .then((res) => {
            if(res.data.success){
                console.log("User has been activated.")
                user.value = res.data.data
            }else{
                errors.value = res.data.data
            }
        })
        .catch((res) => {
            errors.value = res.data.data
        })
    }
    const deactivateUser = async (id) => {
        await axios.put('deactivate/'+ id)
        .then((res) => {
            if(res.data.success){
                console.log("User has been deactivated.")
                user.value = res.data.data
            }else{
                errors.value = res.data.data
            }
        })
        .catch((res) => {
            errors.value = res.data.data
        })
    }
    const deleteUser = async (id) => {
        await axios.delete('users/'+ id)
        .then((res) => {
            if(res.data.success){
                console.log("User has been deleted.")
                user.value = res.data.data
            }else{
                errors.value = res.data.data
            }
        })
        .catch((res) => {
            errors.value = res.data.data
        })
    }

    

    return {
        errors, users, user,
        getUser, getAllUser, activateUser, deactivateUser, deleteUser
    }

}