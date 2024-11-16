import React from 'react';
import {IUser} from "@/app/Models/IUser";

type Params = { id: string }

const UserPage = async ({params}: { params: Params }) => {
    const user:IUser = await fetch('https://jsonplaceholder.typicode.com/users/' + params.id).then(response => response.json());
    return (
        <div>
            <div>{user.username} - {user.id}</div>
        </div>
    );
};

export default UserPage;