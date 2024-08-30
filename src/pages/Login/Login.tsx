import {useForm} from "react-hook-form";
import './Login.css'


const Login = () => {
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm({
        defaultValues: {
            firstName: 'karl',
            lastName: 'frodo',
        }
    })

    console.log(errors);

    return (
        <div>
            <form className={'box'} onSubmit={handleSubmit((data) => console.log(data))}>
                <input {...register("firstName", {required: 'This field is required!'})} type="text"
                       placeholder="First Name"/>
                <p>{errors.firstName?.message}</p>
                <input {...register("lastName", {
                    required: 'This field is required!', minLength: {
                        value: 3,
                        message: 'Min value is 3'
                    }
                })} type="text" placeholder="Last Name"/>
                <p>{errors.lastName?.message}</p>
                <input type="submit"/>
            </form>
        </div>
    );
};

export default Login;