import { useScroll, useTransform, motion, useInView } from "framer-motion";
import { useRef } from "react";

const Video = () => {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 700], [0, 1]);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div className="h-full bg-gradient-to-b from-kappa-bluetwo to-kappa-bluethree shadow-none overflow-hidden px-10">
      <motion.div
        ref={ref}
        initial={{ scale: 0 }}
        animate={{ scale: isInView ? 1 : 0 }}
        transition={{ duration: 1.7 }}
      >
        <motion.video
          style={{ scale }}
          className="flex justify-center w-full items-center rounded-lg object-cover"
          autoPlay
          muted
        >
          <source src="/lollapalooza.mp4" />
        </motion.video>
      </motion.div>
    </div>
  );
};

export default Video;
