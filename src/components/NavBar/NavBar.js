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
                        <li><a href="/">Home</a></li>
                        <li><a href="/favorite">Favorite</a></li>
                        <li><a href="/about">About</a></li>
                    </ul>
                </div>

            </Container>
        </nav>
    )

}

export default NavBar;