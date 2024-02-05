import logo from "../../assets/images/AZ-Logo.png";
import classes from "../../assets/styles/navbarCss/Nav.module.css";
import Account from "./Account";


const Nav = () => {
    return (
        <nav className={classes.nav}>
            <ul>
                <li>
                    <a href="index.html" className={classes.brand}>
                        <img src={logo} alt="Learn with Sumit Logo" />
                        <h3>Syed Ittyhadul Islam</h3>
                    </a>
                </li>
            </ul>
            <Account />
        </nav>
    );
};

export default Nav;