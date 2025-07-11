import { useForm } from 'react-hook-form'
import './auth.css'
import Button from '../../components/button'
const Signin = () => {
    const { register, handleSubmit, formState:{errors}} = useForm()

    const onsubmit = (data) => {
        console.log(data);
        
    }

    return(

        <form onSubmit={handleSubmit(onsubmit)} className='auth'>
            <h1>Sign In</h1>
            <input {...register("email", {required:true})} placeholder='email'/>
            {errors.email  && <span>Email is required</span>}

            <input {...register("password", {required:true})} placeholder='password'/>
            {errors.password  && <span>password is required</span>}
            <Button type='signin' btnname='submit'/>
        </form>
    )
}
export default Signin