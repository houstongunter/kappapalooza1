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
        transition: { type: "spring", stiffness: 100 },
      });
    } else {
      controls.start({ y: -100 });
    }
  }, [isVisible, controls]);

  return (
    <motion.div
      className="w-full fixed top-0 z-20"
      animate={controls}
      initial={{ y: -100 }}
    >
      <div className="bg-kappa-orange h-fit w-full">
        <div className="flex flex-row justify-center items-center gap-5">
          <img src="kappapalooza.png" height={150} width={250} />
          <div className="text-white text-md flex flex-col">
            <p>June 1st, 2024</p>
            <p>Riverside, CA</p>
          </div>
        </div>
      </div>
      <motion.div
        className="h-[10px] bg-white w-full fixed top-fit"
        style={{ scaleX: scrollYProgress, transformOrigin: 0 }}
      />
    </motion.div>
  );
};

export default Navbar;
