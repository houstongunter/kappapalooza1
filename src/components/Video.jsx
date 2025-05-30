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
        <motion.iframe
          style={{ scale }}
          className="rounded-lg border-4 mb-2 w-full max-w-[360px] aspect-[9/16]"
          src="https://www.youtube.com/embed/MXgoho66MWs?autoplay=1&mute=0&loop=1&playlist=MXgoho66MWs"
          title="YouTube Short"
          frameBorder="0"
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
          allowFullScreen
        />
      </motion.div>
    </div>
  );
};

export default Video;
