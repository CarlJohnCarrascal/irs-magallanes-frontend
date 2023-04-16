import useBase from "./base"

import { useRouter } from 'vue-router';
import router from '../router'


export default function useAccount() {

    const { ref, axios, getCookie2 } = useBase()
    const fullname = ref([])
    const role = ref([])
    const imagesrc = ref([])
    const getUser = async () => {
        fullname.value = getCookie2('name')
        role.value = getCookie2('role')
        imagesrc.value = getCookie2('imagesrc')
    }

    const userDetails = ref([])
    const getUserDetails = async () => {
        try {
            await axios
                .get('mydetails')
                .then(async (e) => {
                    //console.log("then", e)
                    userDetails.value = e.data.data
                })
                .catch(async (err) => {
                    //console.log("catch", err)
                    errors.value = err.data.data
                })
        } catch (error) {
            //console.log(error)
        }
    }

    const isLogin = ref(false);
    const errors = ref([]);

    const checkLoginStatus = async () => {
        try {
            var res = await axios.get('checkstatus')

            isLogin.value = true;
            if (router.currentRoute.value.name == 'login'
                || router.currentRoute.value.name == 'signup'
                || router.currentRoute.value.path == '/') {
                router.push('/dashboard');
            }
        } catch (error) {
            if (error.response.status == 401) {
                // console.log(isLogin.value);
                isLogin.value = false;
                if (router.currentRoute.value.name == 'signup') {
                    router.push('/signup');
                } else {
                    router.push('/login')
                }
            } else {
                console.log(error)
                router.push('/login')
            }
        }
    }
    const loginAccount = async (email, pass, remember) => {
        try {
            var data = {
                'email': email,
                'password': pass,
                'remeberme': remember
            };

            var res = await axios.post('login', data);
            if (res.data.success) {
                if (remember) {
                    var future = new Date();
                    future.setDate(future.getDate() + 30);

                    document.cookie = `token=${encodeURIComponent(res.data.data.token)}; expires=` + future + ``
                    document.cookie = `name=${(res.data.data.name)}; expires=` + future + ``
                    document.cookie = `role=${(res.data.data.role)};expires=` + future + ``
                    document.cookie = `imagesrc=${(res.data.data.imagesrc)};expires=` + future + ``
                    document.location.href = "/";
                } else {
                    document.cookie = `token=${encodeURIComponent(res.data.data.token)};`;// expires=Sun, 14 August 2022 03:11:45 UTC`
                    document.cookie = `name=${(res.data.data.name)};`;// expires=Sun, 14 August 2022 03:11:45 UTC`
                    document.cookie = `role=${(res.data.data.role)};`;// expires=Sun, 14 August 2022 03:11:45 UTC`
                    document.cookie = `imagesrc=${(res.data.data.imagesrc)};`;// expires=Sun, 14 August 2022 03:11:45 UTC`
                    document.location.href = "/";
                }
            } else {
                //console.log("12" + res.data);
                errors.value = res.data.data;
                isLogin.value = false;
            }
        } catch (error) {
            //console.log(error.response.data.data);
            errors.value = error.response.data.data;
            isLogin.value = false;
            //console.log(error);
        }

    }
    const createAccount = async (role, fname, lname, address, email, pass, pass2) => {
        var data = {
            'role': role,
            'firstname': fname,
            'lastname': lname,
            'address': address,
            'email': email,
            'password': pass,
            'confirm_password': pass2,
            'barangay': 'siuton'
        };

        try {
            var res = await axios.post('register', data);
            if (res.data.success) {
                document.cookie = `token=${encodeURIComponent(res.data.data.token)};`;// expires=Sun, 14 August 2022 03:11:45 UTC`
                document.cookie = `name=${(res.data.data.name)};`;// expires=Sun, 14 August 2022 03:11:45 UTC`
                document.cookie = `role=${(res.data.data.role)};`;// expires=Sun, 14 August 2022 03:11:45 UTC`
                document.cookie = `imagesrc=${(res.data.data.imagesrc)};`;// expires=Sun, 14 August 2022 03:11:45 UTC`
                document.location.href = "/";
            } else {
                console.log(res.data.data);
                errors.value = res.data.data;
                isLogin.value = false;
            }
        } catch (error) {
            errors.value = error.response.data.data;
            isLogin.value = false;
            console.log(error);
        }
    }
    const updateAccount = async (user) => {
        var data = {
            'firstname': user.firstname,
            'lastname': user.lastname,
            'phone': user.phone,
            'address': user.address
        };

        try {
            var res = await axios.put('updateaccount/' + user.id, data);
            if (res.data.success) {
                document.cookie = `name=${(user.firstname + ' ' + user.lastname)};`;
                alert('updated successfully!')
            } else {
                errors.value = res.data.data;
            }
        } catch (error) {
            console.log(error)
        }
    }
    const changePassword = async (user) => {

        var data = {
            'password': user.password,
            'new_password': user.newPassword,
            'confirm_new_password': user.confirmNewPassword
        };
        try {
            var res = await axios.put('changepassword/' + user.id, data);
            if (res.data.success) {
                document.cookie = `name=${(user.firstname + ' ' + user.lastname)};`;
                console.log(res.data.data)
                alert('password changed successfully!')
            } else {
                errors.value = res.response.data.data;
            }
        } catch (error) {
            errors.value = error.response.data.data;
            console.log(error)
        }
    }
    const logoutAccount = async () => {
        //deleteAllCookies();
        await axios.post('logout');

        window.location.href = window.location.protocol;
    }
    function deleteAllCookies() {
        var cookies = document.cookie.split(";");

        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i];
            var eqPos = cookie.indexOf("=");
            var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
            document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
        }
    }
    function deleteCookies() {
        var allCookies = document.cookie.split(';');

        // The "expire" attribute of every cookie is 
        // Set to "Thu, 01 Jan 1970 00:00:00 GMT"
        for (var i = 0; i < allCookies.length; i++) {
            console.log(allCookies[i])
            document.cookie = allCookies[i] + "=;expires=Thursday, March 23, 2020 at 9:42:37 AM";
        }
    }

    return {
        loginAccount,
        createAccount,
        updateAccount,
        logoutAccount,
        isLogin, errors,
        checkLoginStatus,
        getUser, getUserDetails, changePassword,
        userDetails, fullname, role, imagesrc,
    };
}