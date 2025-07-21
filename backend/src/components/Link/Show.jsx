import axios from 'axios';
import React, { useState } from 'react';

export default function Show() {
    const [result, setResult] = useState(null);

    if (result == null) {
        axios.get("http://localhost:1006/User", {})
        .then((res) => {
            setResult(res.data);
        });

        return (
            <div>Data is Fetching...</div>
        );
    } else {
        return (
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody>
                    {result.map((element, index) => (
                        <tr key={index}>
                            <td>{element.id}</td>
                            <td>{element.username}</td>
                            <td>{element.email}</td>
                            <td>{element.password}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }
}
