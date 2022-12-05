import React from 'react'
import { useForm } from "react-hook-form";

const AddUserForm = (props) => {

    const { register,  formState: { errors } , handleSubmit } = useForm();

    const onSubmit = (data, e) => {
        console.log(data)
        //setEntradas([...Entradas,data])
        props.addUser(data)
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
            <button>Add new user</button>
        </form>
  )
}

export default AddUserForm