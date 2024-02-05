import classes from "../../assets/styles/globalCss/Layout.module.css";
import Nav from "../common/Nav";


// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
    return (
        <>
            <Nav />
            <main className={classes.main}>
                <div className={classes.container}>
                    {children}
                </div>
            </main>
        </>
    );
};

export default Layout;