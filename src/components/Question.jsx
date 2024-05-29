import { useScroll, useTransform, motion, useInView } from "framer-motion";
import { useRef } from "react";

const Question = () => {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 700], [0, 1]);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 1 });

  const popInAnimation8xl = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  const popInAnimation9xl = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 0.5 },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="h-[93vh] bg-gradient-to-b from-kappa-blue to-kappa-bluetwo shadow-none"
    >
      <div className="flex flex-col justify-center items-center h-full text-3xl text-white space-y-8">
        <motion.p style={{ scale }}>What is Kappapalooza?</motion.p>
        <motion.p
          className="text-8xl"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={popInAnimation8xl}
        >
          Riverside&apos;s{" "}
          <span className="text-kappa-orangeyellow">BIGGEST</span>
        </motion.p>
        <motion.p
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={popInAnimation9xl}
          className="text-9xl"
        >
          <span className="text-kappa-lightcyan">Dayger</span> of the{" "}
          <span className="text-kappa-pinkish">year!</span>
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Question;
