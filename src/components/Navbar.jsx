/* eslint-disable react/prop-types */
import { motion, useAnimation, useScroll } from "framer-motion";
import { useEffect } from "react";

const Navbar = ({ isVisible }) => {
  const { scrollYProgress } = useScroll();
  const controls = useAnimation();

  useEffect(() => {
    if (isVisible) {
      controls.start({
        y: 0,
        transition: { type: "spring", stiffness: 100 }
      });
    } else {
      controls.start({ y: -100 });
    }
  }, [isVisible, controls]);

  return (
    <motion.div
      className="bg-kappa-orange h-[7vh] w-full fixed top-0"
      animate={controls}
      initial={{ y: -100 }}
    >
      <div className="flex flex-row justify-center items-center gap-5">
        <img src="kappapalooza.png" height={100} width={200} />
        <div className="text-white text-xl flex flex-col">
          <p>June 1st, 2024</p>
          <p>Riverside, CA</p>
        </div>
      </div>
      <motion.div
        className="h-[5px] bg-white w-full"
        style={{ scaleX: scrollYProgress, transformOrigin: 0 }}
      />
    </motion.div>
  );
};

export default Navbar;
