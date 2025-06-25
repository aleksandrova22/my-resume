'use client';
import { useState, useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import styles from "./job.module.css";
import { Paper } from "@mui/material";


export function Job() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const textJob = [ '2009-2014 - специалист группы технической поддержки АО «Компания ТрансТелеКом» (решение технических проблем клиентов, диагностику неполадок и предоставление консультаций по программному обеспечению, предоставление рекомендаций по устранению проблем)', 
    '2014-2025 - главный специалист-эксперт отдела эксплуатации информационных систем, технических средств и каналов связи Управления Росреестра по Алтайскому краю (верификация данных, повышению качества сведений ЕГРН, выявление и устранение ошибок форматно-логического контроля, выявление и устранение системных ошибок ведения ЕГРН, формирование статистических и аналитических запросов, обслуживание серверной части приложения, сверка баз данных)',
    ];
  
  return <>
  <section id="education" className={styles.section} ref={ref}>
      <div className={styles.content}>
        <Paper elevation={12} square={false} style={{ backgroundColor: '#f7f3ec', color: '#2c3e50', width: '100%', height: '100%', gap: '30px', minHeight: '400px', padding: '10px'  }} >
          <motion.h3
             className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}>
            Опыт работы
          </motion.h3>

          <motion.div
            className={styles.paragraph}
            variants={containerVariants}
            initial="hidden"
            animate={visible ? "visible" : "hidden"}>
            {textJob.map((text, index) =>
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





  </>;
};
