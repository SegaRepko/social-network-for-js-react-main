import classes from './Navbar.module.css'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return <nav className={classes.nav}>
    <div className={classes.item}>
      <NavLink to='/profile' className = { ActiveLink => ActiveLink.isActive ? classes.active : classes.item }>Profile</NavLink>
    </div>
    <div className={classes.item}>
    <NavLink to='/dialogs' className= { ActiveLink => ActiveLink.isActive ? classes.active : classes.item }>Messages</NavLink>
    </div>
    <div className={classes.item}>
    <NavLink to='/users' className= { ActiveLink => ActiveLink.isActive ? classes.active : classes.item }>Users</NavLink>
    </div>
    <div className={classes.item}>
    <NavLink to='/news' className= { ActiveLink => ActiveLink.isActive ? classes.active : classes.item }>News</NavLink>
    </div>
    <div className={classes.item}>
    <NavLink to='/music' className= { ActiveLink => ActiveLink.isActive ? classes.active : classes.item }>Music</NavLink>
    </div>
    <div className={classes.item}>
    <NavLink to='/settings' className= { ActiveLink => ActiveLink.isActive ? classes.active : classes.item }>Settings</NavLink>
    </div>
  </nav>
}



export default Navbar; 