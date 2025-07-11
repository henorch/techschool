import { useForm } from 'react-hook-form'
import './auth.css'
import Button from '../../components/button'
const Signup = () => {
    const { register, handleSubmit, formState:{errors}} = useForm()

    const onsubmit = (data) => {
        console.log(data);
        
    }

    return(

        <form onSubmit={handleSubmit(onsubmit)} className='auth'>
            <h1>Sign Up</h1>
            <i>Fill the form below to register</i>
             <input {...register("FirstName", {required:true})} placeholder='FirstName'/>
            {errors.FirstName  && <span>FirstName is required</span>}

             <input {...register("Lastname", {required:true})} placeholder='Lastname'/>
            {errors.Lastname  && <span>Lastname is required</span>}

            <input {...register("email", {required:true})} placeholder='email'/>
            {errors.email  && <span>Email is required</span>}

            <input {...register("password", {required:true})} placeholder='password'/>
            {errors.password  && <span>password is required</span>}
           
            <Button type='signup' btnname='submit'/>
                        <p>New to Henorch Alliance Tech?</p>
            <Button type='signin' btnname='Login'/>
        
        </form>
    )
}
export default Signup