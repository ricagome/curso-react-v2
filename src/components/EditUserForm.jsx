import React from 'react'
import { useForm } from "react-hook-form";

const EditUserForm = (props) => {
    //console.log(props.currentUser)
    const { register,  formState: { errors } , handleSubmit, setValue } = useForm({
        defaultValues: props.currentUser
    });

    setValue('name',props.currentUser.name);
    setValue('username',props.currentUser.username);

    const onSubmit = (data, e) => {
        console.log(data)
        //setEntradas([...Entradas,data])
        data.id = props.currentUser.id
        props.updateUser(props.currentUser.id, data)
        // Limpiar campos
        e.target.reset()
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Name</label>
            <input type="text" name="name" {
                ...register(
                    "name", {
                    required: { value: true, message: 'Campo Obligatorio' },
                    minLength: { value: 2, message: 'Minimo 2 letras' }
                })
            } />
            {errors.name &&
                <span className="text-danger text-small d-block mb-2">
                    {errors.name?.message}
                </span>}
            <label>Username</label>
            <input type="text" name="username" {
                ...register(
                    "username", {
                    required: { value: true, message: 'Campo Obligatorio' },
                    minLength: { value: 2, message: 'Minimo 2 letras' }
                })
            } />
            {errors.username &&
                <span className="text-danger text-small d-block mb-2">
                    {errors.username?.message}
                </span>}
            <button>Edit user</button>
        </form>
  )
}

export default EditUserForm