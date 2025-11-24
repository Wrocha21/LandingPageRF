import explicandoImage from "../css/images/ExplicandoAula.webp";
import aula1 from "../css/images/Aula1.webp";
import aulaPratica from "../css/images/AulaPratica.webp";
import "../css/sectionImages/secImages.css";
import { motion } from "motion/react";

export function SectionImages() {
  return (
    <>
      <div className="box-images">
        <motion.div 
        className="exp1"
        
        >
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 1.0,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            src={explicandoImage}
            width={200}
            alt=""
          />
          <div className="titleExp1">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 1.2,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              Aula de piano
            </motion.p>
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 1.4,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              Professor Rodrigo
            </motion.span>
          </div>
        </motion.div>
        <div className="exp3">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 1.0,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            src={aulaPratica}
            width={210}
            alt=""
          />
          <div className="titleExp3">
            <motion.p
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 1.2,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              Aula Prática de piano
            </motion.p>
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 1.4,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              Professor Felipe
            </motion.span>
          </div>
        </div>
        <div className="exp2">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 1.0,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            src={aula1}
            width={210}
            alt=""
          />
          <div className="titleExp2">
            <motion.p
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 1.2,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              Aula de violão
            </motion.p>
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 1.4,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              Professor Rodrigo
            </motion.span>
          </div>
        </div>
      </div>
    </>
  );
}
