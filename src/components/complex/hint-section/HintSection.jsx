"use client";

import styles from "./hint-section.module.scss";
import { BsFillGearFill, BsFillLightbulbFill, BsWindowDock, BsNewspaper} from 'react-icons/bs';

export const HintSection = () => {
	return (
		<>
            <div className={styles.hint_wrapper}>
                <section className={styles.hint_container}>
                <div className={styles.hint_card}>
                     <BsFillGearFill className={styles.hint_icon}/>
                    <h2 className={styles.hint_card__title}>Quiz</h2>
                    <p className={styles.hint_card__paragraph}>
                       Con estos retos vas a poder poner en practica tus habilidades de desarrollo y confirmar lo que vas aprendiendo.
                    </p>
                </div>
                <div className={styles.hint_card}>
                    <BsWindowDock className={styles.hint_icon}/>
                    <h2 className={styles.hint_card__title}>Snippets</h2>
                    <p className={styles.hint_card__paragraph}>
                        Te proporcionamos un conjunto de recursos y componentes que podrás utilizar en tus propios proyectos.
                    </p>
                </div>

                <div className={styles.hint_card}>
                <BsNewspaper className={styles.hint_icon}/>
                    <h2 className={styles.hint_card__title}>Articulos</h2>
                    <p className={styles.hint_card__paragraph}>
                    Te mantendrán actualizado sobre las últimas tendencias, tips y herramientas de diseńo y desarrollo web.
                    </p>
                </div>
                <div className={styles.hint_card}>
                <BsFillLightbulbFill className={styles.hint_icon}/>
                    <h2 className={styles.hint_card__title}>Documentación</h2>
                    <p className={styles.hint_card__paragraph}>
                        Te brindamos links a documentación, libros y articulos para que aprendas de fuentes confiables.
                    </p>
                </div>
                </section>
            </div>
		</>
	);
};


