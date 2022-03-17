import {getUsers} from "./user_services.js";

getUsers()
    .then( users => {
        let html =  users.map(u => {
            return /*html*/ `
            <div class="user">
                <div class="FirstInf">
                    <img src="${u.thumbnail}" id="profilP">
                    <h4>${u.first} ${u.last}</h4>
                </div>
                <div class="SecInf">
                    <p class="age">
                        <span class="material-icons">
                            cake
                        </span>
                        ${u.age} ans
                    </p>
                    <p class="location">
                        <span class="material-icons">
                            location_city
                        </span>
                        ${u.location}
                    </p>
                    <p class="phone">
                        <span class="material-icons">
                        phone_in_talk
                        </span>
                    ${u.phone}
                    </p>
                </div>
            </div>`
        })  
        
        document.getElementById('users').innerHTML = html.join("");
    })


