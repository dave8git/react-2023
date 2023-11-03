import { Link, NavLink } from 'react-router-dom';
import Container from '../Container/Container';
import styles from './NavBar.module.scss';

const NavBar = () => {
    return (
        <nav className={styles.nav}>
            <Container>
                <div className={styles.navWrapper}>
                    <div className={styles.iconSection}>
                        <a href="/">
                            <i className="fa fa-tasks fa-2x"></i>
                        </a>
                    </div>
                    <ul className={styles.ulNav}>
                        {/* <li><Link to="/">Home</Link></li>
                        <li><Link to="/favorite">Favorite</Link></li>
                        <li><Link to="/about">About</Link></li> */}
                        <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined } to="/">Home</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined } to="/favorite">Favorite</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined } to="/About">About</NavLink></li>
                    </ul>
                </div>
            </Container>
        </nav>
    )

}

export default NavBar;