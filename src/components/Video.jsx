import { useScroll, useTransform, motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const Video = () => {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 700], [0, 1]);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0 });

  const [isMuted, setIsMuted] = useState(true);

  const handleUnmute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className="bg-gradient-to-b from-kappa-bluetwo to-kappa-bluethree shadow-none px-5 md:px-10 py-20">
      <motion.div
        ref={ref}
        initial={{ scale: 0 }}
        animate={{ scale: isInView ? 1 : 0 }}
        transition={{ duration: 1.7 }}
        className="flex flex-col justify-center items-center"
      >
        <motion.video
          style={{ scale }}
          className="flex justify-center items-center rounded-lg object-cover md:h-1/5 md:w-1/4 border-4 mb-2"
          autoPlay
          muted={isMuted}
          playsInline
          loop
        >
          <source src="/frfrfrfr.mp4" />
        </motion.video>
        <button
          className="text-white rounded-full p-2 bg-kappa-orangeyellow"
          onClick={handleUnmute}
        >
          {isMuted ? "UNMUTE" : "MUTE"}
        </button>
      </motion.div>
    </div>
  );
};

export default Video;
