const BASE_URL = "https://nextopay.com/appapi/public/api/"
import Auth from '../services/Auth';

var bearerToken = "";
var phoneNumber = "";
var userToken = "";
Auth.getLocalStorageData('bearerToken').then((val) => {
    console.log("bearerToken: ", val)
    if (val !== null) {
        bearerToken = val;
    }
});
Auth.getLocalStorageData('phoneNumber').then((val) => {
    console.log("phoneNumber: ", val)
    if (val !== null) {
        phoneNumber = val;
    }
});
Auth.getLocalStorageData('usertoken').then((val) => {
    console.log("usertoken: ", val)
    if (val !== null) {
        userToken = val;
    }
});

console.log("Local Storage Data: ", bearerToken, phoneNumber)

export const mobileRegisterPostRequest = async (phoneNumber, successCallBack) => {
    phoneNumber = "+91" + phoneNumber;
    console.log('\n\n mobileRegisterPostRequest Called : ', phoneNumber);

    let formData = new FormData();

    formData.append('mobile', phoneNumber);

    try {
        let response = await fetch(BASE_URL + 'register', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'multipart/form-data',
                // "Authorization" : `Bearer ${token}`
            },
            body: formData,
        });
        let json = await response.json();
        console.log('\n\n mobileRegisterPostRequest success: ', json);
        successCallBack(json);
    } catch (error) {
        console.log('\n\n mobileRegisterPostRequest Failed : ');
        console.error('error', error);
        successCallBack(null);
    }
};

export const loginAPIPostRequest = async (phoneNumber, successCallBack) => {
    console.log('\n\n loginAPIPostRequest Called : ', phoneNumber);

    let formData = new FormData();

    formData.append('mobile', "+91" + phoneNumber);

    try {
        let response = await fetch(BASE_URL + 'mobileLogin', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'multipart/form-data',
                // "Authorization": `Bearer ${bearerToken}`
            },
            body: formData,
        });
        let json = await response.json();
        console.log('\n\n loginAPIPostRequest success: ', json);
        successCallBack(json);
    } catch (error) {
        console.log('\n\n loginAPIPostRequest Failed : ');
        console.error('error', error);
        successCallBack(null);
    }
};

export const validateOTPPostRequest = async (phoneNumber, otpValue, successCallBack) => {
    phoneNumber = "+91" + phoneNumber;

    console.log('\n\n validateOTPPostRequest Called : ', phoneNumber, typeof otpValue);

    let formData = new FormData();

    formData.append('mobile', phoneNumber);
    formData.append('otp', otpValue);

    try {
        let response = await fetch(BASE_URL + 'otpValidate', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'multipart/form-data',
                // "Authorization" : `Bearer ${token}`
            },
            body: formData,
        });
        let json = await response.json();
        console.log('\n\n validateOTPPostRequest success: ', json);
        successCallBack(json);
    } catch (error) {
        console.log('\n\n validateOTPPostRequest Failed : ');
        console.error('error', error);
        successCallBack(null);
    }
};

export const setMPINPostRequest = async (usertoken, bearerToken, mpin, successCallBack) => {
    console.log('\n\n setMPINPostRequest Called : ', usertoken, mpin);

    let formData = new FormData();

    formData.append('usertoken', usertoken);
    formData.append('mpin', mpin);

    try {
        let response = await fetch(BASE_URL + 'setMpin', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'multipart/form-data',
                "Authorization": `Bearer ${bearerToken}`
            },
            body: formData,
        });
        let json = await response.json();
        console.log('\n\n setMPINPostRequest success: ', json);
        successCallBack(json);
    } catch (error) {
        console.log('\n\n setMPINPostRequest Failed : ');
        console.error('error', error);
        successCallBack(null);
    }
};

export const MPINLoginPostRequest = async (phoneNumber, mpin, successCallBack) => {
    console.log('\n\n MPINLoginPostRequest Called : ', phoneNumber, mpin);

    let formData = new FormData();

    formData.append('mobile', phoneNumber);
    formData.append('mpin', mpin);

    try {
        let response = await fetch(BASE_URL + 'mpinLogin', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'multipart/form-data',
                // "Authorization": `Bearer ${bearerToken}`
            },
            body: formData,
        });
        let json = await response.json();
        console.log('\n\n MPINLoginPostRequest success: ', json);
        successCallBack(json);
    } catch (error) {
        console.log('\n\n MPINLoginPostRequest Failed : ');
        console.error('error', error);
        successCallBack(null);
    }
};

export const updateUserPostRequest = async (mobile, full_name, email, qrcode, profile_img, userToken, bearerToken, successCallBack) => {
    console.log('\n\n updateUserPostRequest Called : ', mobile, full_name, email, qrcode, profile_img, userToken, bearerToken);

    let formData = new FormData();

    formData.append('mobile', mobile);
    formData.append('usertoken', userToken);
    formData.append('full_name', full_name);
    formData.append('email', email);
    formData.append('qrcode', qrcode);
    formData.append('profile_img', profile_img);

    try {
        let response = await fetch(BASE_URL + 'updateUser', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'multipart/form-data',
                "Authorization": `Bearer ${bearerToken}`
            },
            body: formData,
        });
        let json = await response.json();
        console.log('\n\n updateUserPostRequest success: ', json);
        successCallBack(json);
    } catch (error) {
        console.log('\n\n updateUserPostRequest Failed : ');
        console.error('error', error);
        successCallBack(null);
    }
};

export const getAllOffersPostAPI = async (mobile, userToken, bearerToken, successCallBack) => {
    console.log('\n\n getAllOffersPostAPI Called : ', mobile, userToken, bearerToken);

    let formData = new FormData();

    formData.append('mobile', mobile);
    formData.append('usertoken', userToken);

    try {
        let response = await fetch(BASE_URL + 'getOffers', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'multipart/form-data',
                "Authorization": `Bearer ${bearerToken}`
            },
            body: formData,
        });
        let json = await response.json();
        console.log('\n\n getAllOffersPostAPI success: ', json);
        successCallBack(json);
    } catch (error) {
        console.log('\n\n getAllOffersPostAPI Failed : ');
        console.error('error', error);
        successCallBack(null);
    }
};

export const getUserProfilePostAPI = async (userToken, successCallBack) => {
    console.log('\n\n getUserProfilePostAPI Called : ', phoneNumber, userToken, bearerToken);

    let formData = new FormData();

    formData.append('mobile', "+918109567166");
    formData.append('usertoken', "EfRbbasqdYyhHOu5tdThNAkdSQTFsiWeV5XGPtErWfroHDhVka4b7P5zngMt");

    try {
        let response = await fetch(BASE_URL + 'getUser', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'multipart/form-data',
                "Authorization": `Bearer ${bearerToken}`
            },
            body: formData,
        });
        let json = await response.json();
        console.log('\n\n getUserProfilePostAPI success: ', json);
        successCallBack(json);
    } catch (error) {
        console.log('\n\n getUserProfilePostAPI Failed : ');
        console.error('error', error);
        successCallBack(null);
    }
};

export const getNotificationsAPI = async (successCallBack) => {
    var userToken2 = await Auth.getLocalStorageData('usertoken')
    var phoneNumber2 = await Auth.getLocalStorageData('phoneNumber')
    var bearerToken2 = await Auth.getLocalStorageData('bearerToken')
    console.log('\n\n getNotificationsAPI Called : ', phoneNumber2, userToken2, bearerToken2);

    let formData = new FormData();

    formData.append('mobile', "+918770389198");
    formData.append('usertoken', "ktuT8uP7o7cWnfXzcF4EHrZe0tFjeVKETfq5x8LKwH5u7Nh6bqrX9Zkjs8Jw");
    formData.append('status', "1");

    try {
        let response = await fetch(BASE_URL + 'notification', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'multipart/form-data',
                "Authorization": `Bearer ${bearerToken2}`
            },
            body: formData,
        });
        let json = await response.json();
        console.log('\n\n getNotificationsAPI success: ', json);
        successCallBack(json);
    } catch (error) {
        console.log('\n\n getNotificationsAPI Failed : ');
        console.error('error', error);
        successCallBack(null);
    }
};

export const getNotificationsCountAPI = async (successCallBack) => {
    var userToken2 = await Auth.getLocalStorageData('usertoken')
    var phoneNumber2 = await Auth.getLocalStorageData('phoneNumber')
    var bearerToken2 = await Auth.getLocalStorageData('bearerToken')
    console.log('\n\n getNotificationsCountAPI Called : ', phoneNumber2, userToken2, bearerToken2);

    let formData = new FormData();

    formData.append('mobile', "+918770389198");
    formData.append('usertoken', "ktuT8uP7o7cWnfXzcF4EHrZe0tFjeVKETfq5x8LKwH5u7Nh6bqrX9Zkjs8Jw");
    formData.append('status', "0");

    try {
        let response = await fetch(BASE_URL + 'countNotification', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'multipart/form-data',
                "Authorization": `Bearer ${bearerToken2}`
            },
            body: formData,
        });
        let json = await response.json();
        console.log('\n\n getNotificationsCountAPI success: ', json);
        successCallBack(json);
    } catch (error) {
        console.log('\n\n getNotificationsCountAPI Failed : ');
        console.error('error', error);
        successCallBack(null);
    }
};

export const getCircleAPI = async (successCallBack) => {
    var phoneNumber2 = await Auth.getLocalStorageData('phoneNumber')
    var bearerToken2 = await Auth.getLocalStorageData('bearerToken')
    console.log('\n\n getCircleAPI Called : ', phoneNumber2, bearerToken2);

    let formData = new FormData();

    formData.append('mobile', phoneNumber2);

    try {
        let response = await fetch(BASE_URL + 'getCircle', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'multipart/form-data',
                "Authorization": `Bearer ${bearerToken2}`
            },
            body: formData,
        });
        let json = await response.json();
        console.log('\n\n getCircleAPI success: ', json);
        successCallBack(json);
    } catch (error) {
        console.log('\n\n getCircleAPI Failed : ');
        console.error('error', error);
        successCallBack(null);
    }
};

export const getPlanAPI = async (circle, operator, successCallBack) => {
    var userToken2 = await Auth.getLocalStorageData('usertoken')
    var bearerToken2 = await Auth.getLocalStorageData('bearerToken')
    console.log('\n\n getPlanAPI Called : ', circle, operator, bearerToken2);

    let formData = new FormData();

    formData.append('usertoken', userToken2);
    formData.append('circle', userToken2);
    formData.append('operator', operator);

    try {
        let response = await fetch(BASE_URL + 'getPlan', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'multipart/form-data',
                "Authorization": `Bearer ${bearerToken2}`
            },
            body: formData,
        });
        let json = await response.json();
        console.log('\n\n getPlanAPI success: ', json);
        successCallBack(json);
    } catch (error) {
        console.log('\n\n getPlanAPI Failed : ');
        console.error('error', error);
        successCallBack(null);
    }
};
