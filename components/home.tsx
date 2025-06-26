'use client'
import { motion } from 'framer-motion';
import styles from './home.module.css';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Box, Modal } from '@mui/material';

export default function Home() {

  const [isVisible, setIsVisible] = useState(true);
  const [isVisible2, setIsVisible2] = useState(true);
  const [closeModal, setCloseModal] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(prev => !prev);
    }, 3000); // Интервал времени 3c
    const interval2 = setInterval(() => {
      setIsVisible2(prev => !prev);
    }, 6000); // Интервал времени 6c

    return () => { clearInterval(interval); clearInterval(interval2); } // очистка интервала
  }, []);

  const handleDownload = () => {
    window.open('/resume.pdf', '_blank');
  };
  const handleOpen = () => {
    setCloseModal(true);
  };

  const handleClose = () => {
    setCloseModal(false);
  };


  return <>
    <section id="home" className={styles.section}>
      <div className={styles.content}>
        <div className={styles.info}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className={styles.info}
          ><p>Александрова Елена</p><br /> <p>Frontend-разработчик</p>
          </motion.div>

          <div className={styles.profile}>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: isVisible2 ? 1 : 0,
                scale: isVisible2 ? 1 : 0,
                rotateZ: isVisible2 ? 0 : -50,
                transition: {
                  duration: isVisible2 ? 0.8 : 0.4,
                  ease: isVisible2 ? [0.36, 1, 0.13, 1] : [0.43, 0.13, 0.23, 0.96]
                }
              }}

            >
              <Image
                src="/frontend.png"
                alt="frontend"
                className={styles.image}
                width={200}
                height={200}
              />
            </motion.div>

            {/* фото */}
            <motion.img
              whileHover={{ scale: 1.2 }}
              src="/my-photo.jpg"
              alt="photo"
              className={styles.profilePhoto}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, type: 'spring', stiffness: 100 }}
              onClick={handleOpen}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: isVisible ? 1 : 0,
                scale: isVisible ? 1 : 0,
                rotateZ: isVisible ? 0 : -70,
                transition: {
                  duration: isVisible ? 0.6 : 0.9,
                  ease: isVisible ? [0.22, 1, 0.36, 1] : [0.43, 0.13, 0.23, 0.96]
                }
              }}

            >
              <Image
                src="/backend.png"
                alt="backend"
                className={styles.image}
                width={200}
                height={200}
              />
            </motion.div>

          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className={styles.info}
          >

            <button className={styles.downloadButton} onClick={handleDownload}>
              📄 Скачать Резюме
            </button>
          </motion.div>

        </div>

      </div>
    </section>
    {closeModal &&
      <Modal
        open={closeModal}
        onClose={handleClose}
      // aria-labelledby="modal-modal-title"
      // aria-describedby="modal-modal-description"
     
      >
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: '100%'}}>
          <Image
            src="/my-photo-modal.jpg"
            alt="photo"
            className={styles.photoModal}
            width={600}
            height={600}
            onClick={handleClose}
          />
        </Box>
      </Modal>
    }

  </>
};

