export const validateEmail = (email) => {
    return String(email)
    .toLowerCase()
    .trim()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

export const validatePassword = (password) => {

    //validate lower case
    if(!password.trim().match(/[a-z]/g)){
        return "Password requires lowercase letters"
    }
    //validate uppers case
    if(!password.trim().match(/[A-Z]/g)){
        return "Password requires uppercase letters"
    }
    //validate numbers
    if(!password.trim().match(/[0-9]/g)){
        return "Password requires numerical values"
    }
    //validate special characters
    if(!password.trim().match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)){
        return "Password requires special character(s)"
    }
    //validate password length
    if(password.trim().length < 8){
        return "Password requires minimum length of 8 characters"
    }

    return null
}


export default function MainFunction(){
    return "I am main!!!"
}