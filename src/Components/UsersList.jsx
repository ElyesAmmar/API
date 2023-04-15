import React, { useState } from 'react';



function Users({data}) {
    const [user,setUser] = useState(data);
    const styleus = {
        border: "5px solid blue",
        backgroundColor: "#21E2D6",
    }
    return (
        <>
     {user.map(us=>(
         <div style={styleus}>
        <h1>User N°: {us.id}</h1>
        <p>Name: {us.name}</p>
        <p>Username: {us.username}</p>
        </div>
     ))}
       </>
       
    )

}


export default Users;