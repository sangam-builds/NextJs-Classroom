

import React from 'react';

 export default async function User({}) {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    return (
        <div>
            <h1>Users</h1>
            {data.map((item) => (
                <ul key={item.id}>
                    <li><strong>ID:</strong> {item.id}</li>
                    <li><strong>Name:</strong> {item.name}</li>
                    <li><strong>Username:</strong> {item.username}</li>
                    <hr/>
                </ul>
            ))}
        </div>
    );
}