import React from 'react'
import { useForm } from 'react-hook-form'

function index() {
    const { register, handleSubmit, formState: { errors }} = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }

    console.log(errors)

  return (
    <>
        <h3>React Hook Form</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input 
                type="email" 
                placeholder="Enter email" 
                {...register("email", {
                    required: true,
                })}
            />
            {errors.email && errors.email.type === "required" && (
                <p>Email is required</p>
            )}
            <input 
                type="password" 
                placeholder="Enter password" 
                {...register("password", {
                    required: true,
                    minLength: 6
                })}
            />
            <button type="submit">Submit</button>
        </form>
    </>
  )
}

export default index