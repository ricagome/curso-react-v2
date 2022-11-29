import React, { Fragment } from 'react';
import { useForm } from "react-hook-form";

const FormHook = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    //const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data,e) => {
        console.log(data)
        e.target.reset()
    }

    return (
        <Fragment>
        <h2>Formulario Hook</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input name="titulo" className="form-control my-2" 
                {...register("titulo", { required: true, message:'titulo obligatorio arriba' })}
                aria-invalid={errors.titulo ? "true" : "false"} 
            />
            <span className="text-danger text-small d-block mb-2">
                {errors.titulo?.type === 'required' && <p role="alert">titulo es obligatorio</p>}
                {errors.titulo && <p role="alert">{errors?.titulo?.message}</p>} 
            </span>
            <button className="btn btn-primary" onClick={handleSubmit(onSubmit)}>Enviar</button>
        </form>
        </Fragment>
    );
}

export default FormHook;