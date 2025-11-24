import "../css/sectionWhatsapp/sectionWhats.css";
import iconWhatsapp from "../css/images/ri-whatsapp-line.svg";
import { motion } from "motion/react";

export function SectionWhatsapp() {
  return (
    <>
      <div className="box-section" id="home">
        <div className="titles">
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            Quer montar uma equipe de{" "}
            <span style={{ color: "#51d15bff" }}>louvor</span> na sua igreja?
          </motion.h1>
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.7,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            Aprenda no seu ritmo, com apoio dos nossos professores e um método
            feito para você avançar de verdade.
          </motion.span>
        </div>
        <div className="buttons">
          <div className="whatsappButton">
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.9,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <a href="https://wa.me/5521994563568?text=%22Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20planos%20de%20aulas.%20Tenho%20interesse%20em%20entender%20as%20op%C3%A7%C3%B5es%2C%20valores%20e%20o%20que%20est%C3%A1%20inclu%C3%ADdo.%20Pode%20me%20ajudar%3F%22">
                <img src={iconWhatsapp} width={20} alt="" />
                Falar com um professor
              </a>
            </motion.button>
          </div>
        </div>
      </div>
    </>
  );
}
