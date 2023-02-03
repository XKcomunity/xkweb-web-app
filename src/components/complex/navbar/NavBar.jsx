import styles from "./navbar.module.scss";
export const NavBar = () => {
	return (
		<>
			<nav className={styles.navbar_wrapper}>
				<div className={styles.navbar_logo}>Xk Web</div>
				<div className={styles.navbar_pages}>
					<ul className={styles.navbar_list}>
						<li className={styles.navbar_item}>Home</li>
						<li className={styles.navbar_item}>Blog</li>
						<li className={styles.navbar_item}>Cursos</li>
						<li className={styles.navbar_item}>About us</li>
						<li className={styles.navbar_item}>Login</li>
						<li className={styles.navbar_item}>Register</li>
					</ul>
				</div>
			</nav>
		</>
	);
};
