import Footer from './Footer';
import Nav from './Nav';
import styles from '../styles/Layout.module.css';

export default function Layout({ children }: any) {
    return (
        <>
            <Nav />
            <main className={styles.main}>{children}</main>
            <Footer />
        </>
    );
}
