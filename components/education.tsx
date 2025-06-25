'use client'
import { useState, useRef, useEffect } from "react"; 
import { motion, useInView, useAnimation } from "framer-motion"; 
import styles from "./education.module.css";
import { Paper } from "@mui/material";


export function Education() {

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


  const textedu = ['2003-2008 - Алтайский государственный университет', 'специальность: Прикладная математика и информатика, специализация: Вычислительные машины, комплексы, системы и сети, квалификация: Математик. Системный программист', '2024-2025 - АНО ДПО "Академия TOП"', 'Web-разработка, специализация: Front-End-разработка'];


  return <>
    <section id="education" className={styles.section} ref={ref}>
      <div className={styles.content}>
        <Paper elevation={12} square={false} style={{ backgroundColor: '#f7f3ec', color: '#2c3e50', width: '100%', height: '100%', gap: '30px', minHeight: '400px', padding: '10px' }} >

          <motion.h3
             className={styles.title}
            initial={{ opacity: 0, y: 20}}
            animate={{ opacity: 1, y: 0}}
            transition={{ delay: 0.2, duration: 0.6 }}>
            Образование
          </motion.h3>

          <motion.div
            className={styles.paragraph}
            variants={containerVariants}
            initial="hidden"
            animate={visible ? "visible" : "hidden"}

          >
            {textedu.map((text, index) =>

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