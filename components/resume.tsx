'use client';
import { useState, useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import styles from "./resume.module.css";
import { Paper } from "@mui/material";
//import resumeImage from "../public/images/resume.png"; // Картинка резюме
//import resumeIcon from "../public/icons/arrow-icon.svg"; // Иконка стрелки

export function Resume() {
  
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
          staggerChildren: 0.01,
        },
      },
    };
  
    const childVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
      },
    };
  

  const textResume = [
'◾ Языки программирования: Уверенное владение JavaScript и TypeScript, опыт разработки на Python.',
'◾ Веб-технологии: Глубокие знания HTML5 и CSS3, включая адаптивную и кроссбраузерную верстку.',
'◾ Фреймворки и библиотеки: Опыт работы с React, Angular и Next.js для создания динамичных и отзывчивых пользовательских интерфейсов. Знание Vite для оптимизации сборки проектов.',
'◾ Серверная разработка: Базовые знания Node.js, что позволяет интегрировать фронтенд с бэкенд-решениями.',
'◾ Базы данных: Опыт работы с SQL и PostgreSQL для управления данными и взаимодействия с серверной частью. Знание ORM Prisma.',
'◾ Дополнительные навыки: Умение работать в команде, навыки делового письма, опыт использования систем контроля версий (Git), понимание принципов Agile и Scrum.'
  ];
  
  const textAboutMe = [
   'Мое хобби - спорт, поэтому, как любому спортсмену, мне характеры такие качества как дисциплинированность, исполнительность, взаимовыручка, отзывчивость, упорство, умение довести начатую работу до конца.', 
    'Могу работать как в команде, так и самостоятельно.', 'Люблю и умею учиться, узнавать новое, "добывать" информацию. '
  ];
  
  return <>
    <section id="resume" className={styles.section} ref={ref}>
      <div className={styles.content}>
      <Paper elevation={12} square={false} style={{ backgroundColor: '#f7f3ec', color: '#2c3e50', width: '100%', height: '100%', gap: '30px', minHeight: '400px', padding: '10px'  }} >
          <motion.h3
             className={styles.title}
            initial={{ opacity: 0}}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.05, duration: 0.6 }}>
            Резюме
          </motion.h3>

          <motion.h5
             className={styles.titleSmall}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.9 }}>
            Знания и навыки
          </motion.h5>

          <motion.div
            className={styles.paragraph}
            variants={containerVariants}
            initial="hidden"
            animate={visible ? "visible" : "hidden"}>
            {textResume.map((text, index) =>
              <p key={index}  className={styles.paragraph}>
               
                    {text}
                
              </p>
            )
            }
          </motion.div>

            <motion.h5
             className={styles.titleSmall}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}>
            Обо мне
          </motion.h5>
<motion.div
            className={styles.paragraph}
            variants={containerVariants}
            initial="hidden"
            animate={visible ? "visible" : "hidden"}>
            {textAboutMe.map((text, index) =>
              <p key={index}  className={styles.paragraph}>{
                text.split('').map((char, index) =>
                (
                  <motion.span key={index} variants={childVariants}>
                    {char}
                  </motion.span>
                ))
              }</p>
            )
            }
          </motion.div>


        </Paper>
      </div>


    </section>
  </>
};

