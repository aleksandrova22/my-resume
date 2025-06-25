'use client'

import styles from "./header.module.css";
import { Breadcrumbs, Link } from '@mui/material';
// import 'fontsource-roboto';


export function Header() {
    // const [activeSection, setActiveSection] = useState<string>("home"); //activeSection — подсвечивает текущую секцию в меню
  
 
    //useEffect для подсветки активной секции, определяет, какая секция сейчас в центре экрана, и подсвечивает соответствующую ссылку в меню.
    // useEffect(() => {
    //     const handleScroll = () => {
    //         const sections = ["home", "education", "job", "resume", "projects", "contact"];
    //         for (let i = 0; i < sections.length; i++) {
    //             const section = document.getElementById(sections[i]);
    //             if (section) {
    //                 const rect = section.getBoundingClientRect();
    //                 if (rect.top <= 150 && rect.bottom >= 150) {
    //                     setActiveSection(sections[i]);
    //                     break;
    //                 }
    //             }
    //         }
    //     };

    //     window.addEventListener("scroll", handleScroll);
    //     handleScroll();
    //     return () => window.removeEventListener("scroll", handleScroll);
    // }, []);

    
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
              

                <Breadcrumbs maxItems={2} aria-label="breadcrumb">
                    <Link color="inherit" href="#home"
                        sx={{
                            '&:hover': {
                                backgroundColor: "grey",
                            },
                            fontSize: "small"
                        }}>
                        ОБО МНЕ
                    </Link>
                    <Link color="inherit" href="#education"
                        sx={{
                            '&:hover': {
                                backgroundColor: "grey",
                            },
                            fontSize: "small"
                        }}>
                        ОБРАЗОВАНИЕ
                    </Link>

                    <Link color="inherit" href="#job"
                        sx={{
                            '&:hover': {
                                backgroundColor: "grey",
                            },
                            fontSize: "small"
                        }}>
                        КАРЬЕРА
                    </Link>
                    <Link color="inherit" href="#resume"
                        sx={{
                            '&:hover': {
                                backgroundColor: "grey",
                            },
                            fontSize: "small"
                        }}>
                        АНКЕТА
                    </Link>
                     <Link color="inherit" href="#projects"
                        sx={{
                            '&:hover': {
                                backgroundColor: "grey",
                            },
                            fontSize: "small"
                        }}>
                        МОИ РАБОТЫ
                    </Link>
                    <Link color="inherit" href="#footer"
                        sx={{
                            '&:hover': {
                                backgroundColor: "grey",
                            },
                            fontSize: "small"
                        }}>
                        КОНТАКТЫ
                    </Link>
                    {/* <Typography color="textPrimary">Breadcrumb</Typography> */}
                </Breadcrumbs>



                {/* Разметка меню */}
                {/* <ul className={styles.menu} >
                    <li>
                        <a
                            href="#home"
                            className={activeSection === "home" ? styles.active : ""}
                        >
                            Главная
                        </a>
                    </li>
                    <li>
                        <a href="#aboutme" className={activeSection === "aboutme" ? styles.active : ""}> Обо мне</a>
                    </li>
                    <li>/</li>
                    <li>
                        <a href="#education" className={activeSection === "education" ? styles.active : ""}> Образование</a>
                    </li>
                    <li>/</li>
                    <li>
                        <a href="#job" className={activeSection === "job" ? styles.active : ""}> Карьера </a>
                    </li>
                    <li>/</li>
                    <li>
                        <a href="#works" className={activeSection === "job" ? styles.active : ""}> Мои работы </a>
                    </li>
                   
                </ul> */}


            </nav>



        </header>
    );


}