import axios from 'axios';
import React from 'react';

export default function Update() {
    function updateData() {
        var id = document.getElementsByName("id")[0].value;
        var username = document.getElementsByName("username")[0].value;
        var email = document.getElementsByName("email")[0].value;
        var password = document.getElementsByName("password")[0].value;

        axios.put("http://localhost:1006/User", {
            "id": parseInt(id),
            "username": username,
            "email": email,
            "password": password
        }).then((res) => {
            alert(res.data);
        });
    }

    return (
        <div>
            ID: <input type="text" name="id" />
            <br/><br/>
            Username: <input type="text" name="username" />
            <br/><br/>
            Email: <input type="text" name="email" />
            <br/><br/>
            Password: <input type="text" name="password" />
            <br/><br/>
            <button onClick={updateData}>Update</button>
        </div>
    );
}
