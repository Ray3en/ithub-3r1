import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const Header = () => {

    const {
        isAuth,
        userName
    } = useSelector(store => store.auth)

    const navs = [
        {id: 1, title: 'Home', path: '/'},
        {id: 2, title: 'About', path: '/about'},
        {id: 3, title: 'Users', path: '/users'},
    ]

    return (
        <div className="header">
            <div className="logo"></div>
            <ul className="menu">
                {navs.map(el => 
                <Link key={el.id} to={el.path}>
                    <li >{el.title}</li>
                </Link>
                )}
            </ul>
            {isAuth && <p>{userName}</p>}
        </div>
    )
}


export default Header