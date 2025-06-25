'use client';
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useInView, useAnimation } from "framer-motion";
import styles from "./projects.module.css";
import { Paper } from "@mui/material";



export function Projects() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, margin: "-100px" });
    const [visible, setVisible] = useState(false);
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    }, [isInView, controls]);


    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    // const childVariants = {
    //     hidden: { opacity: 0, y: 20 },
    //     visible: {
    //         opacity: 1,
    //         y: 0,
    //     },
    // };


    //   const textJob = [ '2009-2014 - специалист группы технической поддержки АО «Компания ТрансТелеКом» (решение технических проблем клиентов, диагностику неполадок и предоставление консультаций по программному обеспечению, предоставление рекомендаций по устранению проблем)', 
    //     '2014-2025 - главный специалист-эксперт отдела эксплуатации информационных систем, технических средств и каналов связи Управления Росреестра по Алтайскому краю (верификация данных, повышению качества сведений ЕГРН, выявление и устранение ошибок форматно-логического контроля, выявление и устранение системных ошибок ведения ЕГРН, формирование статистических и аналитических запросов, обслуживание серверной части приложения, сверка баз данных)',
    //     ];


    return <>
        <section id="projects" className={styles.section} ref={ref}>
            <div className={styles.content}>
                <Paper elevation={12} square={false} style={{ backgroundColor: '#f7f3ec', color: '#2c3e50', width: '100%', height: '100%', gap: '30px', minHeight: '400px', padding: '10px' }} >
                    <motion.h3
                        className={styles.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}>
                        Мои работы
                    </motion.h3>

                    <motion.div
                        className={styles.info}
                        variants={containerVariants}
                        initial="hidden"
                        animate={visible ? "visible" : "hidden"}>

                        <Paper elevation={5} square={false} style={{ color: '#2c3e50', width: '50%', height: '100%', gap: '30px', padding: '10px' }} >
                            <p> Проекты на github:</p>
                             <div className={styles.info}>
                            <div className={styles.dish_logo}> <a href="https://github.com/aleksandrova22?tab=repositories"><Image src={"/github-50.png"} width={50} height={50} alt="github-50" /> </a> </div>
                            <div><a className={`p-4 text-sm font-semibold text-gray-600 hover:bg-gray-50 rounded`} href="https://github.com/aleksandrova22?tab=repositories"> My github </a></div>
                          
                            </div>
                        </Paper>

                        <Paper elevation={5} square={false} style={{ color: '#2c3e50', width: '50%', height: '100%', gap: '30px', padding: '10px' }} >
                            <p> Сайт о здоровом питании:</p>
                            <div className={styles.info}>
                                <div className={styles.dish_logo}> <a href="https://pp-easy.vercel.app/"><Image className={styles.dish_logo_img} src={"/dish1.png"} width={70} height={70} alt="Picture of the author" /></a> </div>
                                {/* <div className={styles.dish_logo2}> <Image src={"/dish2.png"} width={70} height={70} alt="Picture of the author" /></div> */}
                                <div className={styles.projects}><a className={`p-4 text-sm font-semibold text-green-600 hover:bg-green-50 rounded`} href="https://pp-easy.vercel.app/"> Легкий старт к здоровью</a></div>
                            </div>
                        </Paper>


                    </motion.div>
                </Paper>
            </div>

        </section>





    </>;
};
