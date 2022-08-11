import { NavLink } from 'react-router-dom';
import classes from './Header.module.css'


const Header = (props) => {
  return <header className={classes.header}>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxgm1359KRSO4_B8r4SslV9kmMUPQsF_49ow&usqp=CAU"></img>

    <div className={classes.loginBlock}>
      {props.isAuth
        ? <div> {props.login} <button onClick={props.logout}>Log out</button> </div>
        : <NavLink to={'/login'}>Login</NavLink>}
    </div>
  </header>
}



export default Header; 