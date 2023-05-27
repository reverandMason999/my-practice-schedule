import { useEffect } from "react"


const LoginSuccess = () => {
    useEffect(() => {
        setTimeout(() => {
            window.close()
        }, 500)
    }, []) 
    return (
        <div>Login Successful!</div>
    )
}

export default LoginSuccess