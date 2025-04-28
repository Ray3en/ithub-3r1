import { Outlet, useLocation } from "react-router-dom"
import Header from "./components/header"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { verifyAction } from "./store/asyncActions/auth.actions"


const Layout = () => {

    const dispatch = useDispatch()

    const path = useLocation()

    useEffect(() => {
        dispatch(verifyAction())
    }, [dispatch, path])

    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    )
}

export default Layout