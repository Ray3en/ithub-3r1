
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { authAction } from '../store/asyncActions/auth.actions'

const LoginPage = () => {

    const dispatch = useDispatch()
    const auth = useSelector(store => store.auth)

    console.log(auth)
    const {
        register,
        handleSubmit,
    } = useForm()


    const onSubmit = (data) => {
        dispatch(authAction(data))
    }

    return (
        <div className="content">
            <form className='login_form' onSubmit={handleSubmit(onSubmit)}>
                <label>
                    Login
                    <input {...register('username', { required: true })} />
                </label>
                <label>
                    Password
                    <input {...register('password', { required: true })} />
                </label>
                <input type='submit' />
            </form>
        </div>
    )
}

export default LoginPage