import {UserModel} from "./user_models.js";


export const getUsers = async() => {
    const url = await fetch("https://randomuser.me/api/?nat=fr&results=50");
    const response = await url.json();
    return response['results'].map(res => {
        return jsontoUserModel(res);

    })
}

function jsontoUserModel(res) {
    const user = new UserModel();
    user.first = res['name']['first'];
    user.last = res['name']['last'];
    user.phone = res['phone'];
    user.location = res['location']['city'];
    user.dob = res['dob']['date'];
    user.age = res['dob']['age'];
    user.thumbnail = res['picture']['medium'];
    return user;
}

