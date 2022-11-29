import React, { useState, Fragment } from 'react';
import { useForm } from "react-hook-form";

const FormHooks_2 = () => {
    const { register,  formState: { errors } , handleSubmit } = useForm();
    
    const [Entradas, setEntradas] = useState([])

    const onSubmit = (data, e) => {
        console.log(data)
        setEntradas([...Entradas,data])
        e.target.reset()
    }
    
    return (
        <Fragment>
        <h2>Formulario Hook 2</h2>
        <form onSubmit = {handleSubmit(onSubmit)}>
            <input name="titulo" placeholder="Ingrese titulo" className="form-control my-2"
                    {...register(
                        "titulo", {
                            required: {value: true, message: 'Campo Obligatorio'},
                            minLength: {value: 2, message: 'Minimo 2 letras'}
                        })
                    }   
                //{...register("titulo", { required: true, message:'titulo obligatorio arriba' })}
                //aria-invalid={errors.titulo ? "true" : "false"} 
            />
            {errors.titulo && 
            <span className="text-danger text-small d-block mb-2">
                {errors.titulo?.message}
            </span>}
            <input name="descripcion" placeholder="Ingrese descripcion" className="form-control my-2" 
                {...register(
                    "descripcion", {
                        required: {value: true, message: 'Campo Obligatorio'},
                        minLength: {value: 10, message: 'Minimo 2 letras'}
                    })
                }   
                //{...register("titulo", { required: true, message:'titulo obligatorio arriba' })}
                //aria-invalid={errors.descripcion ? "true" : "false"} 
            />
            {errors.titulo && 
            <span className="text-danger text-small d-block mb-2">
                {errors.descripcion?.message}
            </span>}

            <button className="btn btn-primary" onSubmit={handleSubmit(onSubmit)}>Agregar</button>
        </form>

        <ul className="mt-2">
            {Entradas.map((item, index) => 
            <li key={index}>
                {item.titulo} - {item.descripcion}
            </li>)
            }
        </ul>
        </Fragment>
    );
}

export default FormHooks_2;