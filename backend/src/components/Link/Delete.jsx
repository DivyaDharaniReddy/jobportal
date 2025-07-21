import axios from 'axios';
import React from 'react';

export default function Delete() {
    function deleteData() {
        var id = document.getElementsByName("id")[0].value;

        axios.delete(`http://localhost:1006/User/${id}`, {})
        .then((res) => {
            alert(res.data);
        });
    }

    return (
        <div>
            ID: <input type="text" name="id" />
            <br /><br />
            <button onClick={deleteData}>Delete</button>
        </div>
    );
}
