import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import UserTable from './UserTable'
import AddUserForm from './AddUserForm'
import EditUserForm from './EditUserForm'

const CrudUser = () => {
    const usersData = [
        { id: uuidv4(), name: 'Tania', username: 'floppydiskette' },
        { id: uuidv4(), name: 'Craig', username: 'siliconeidolon' },
        { id: uuidv4(), name: 'Ben', username: 'benisphere' },
    ]

    // state
    const [users, setUsers] = useState(usersData);

    // Add User
    const addUser = (user) => {
        user.id = uuidv4();
        setUsers([
            ...users,
            user
        ]);
    }

    // Delete User
    const deleteUser = (id) => {
        //console.log(id)
        //const arrayFiltrado=users.filter(user => user.id !== id)
        setUsers(users.filter(user => user.id !== id));
    }

    // Edit user
    const [editing, setEditing] = useState(false);
    const [currentUser, setCurrentUser] = useState({
        id:null, name:'', username:''
    });

    const editRow = (user) => {
        setEditing(true);
        setCurrentUser({
            id:user.id, name:user.name, username:user.username
        })
    }

    const updateUser = (id, updateUser) => {
        setEditing(false);

        setUsers(users.map(user => (user.id === id ? updateUser : user)))
    }


    return (
        <div className="container">
            <h1>CRUD App with Hooks</h1>
            <hr />
            <div className="flex-row">
                {
                    editing ? (
                        <div className="flex-large">
                            <h2>Edit user</h2>
                            <EditUserForm currentUser={currentUser} updateUser={updateUser} />
                        </div>
                    ) : (
                        <div className="flex-large">
                            <h2>Add user</h2>
                            <AddUserForm addUser={addUser} />
                        </div>
                    )
                }

                <div className="flex-large">
                    <h2>View users</h2>
                    <UserTable users={users} deleteUser={deleteUser} editRow={editRow} />
                </div>
            </div>
        </div>

    )
}

export default CrudUser