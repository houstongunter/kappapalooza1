/* eslint-disable react/prop-types */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Section = ({ title, content }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <p className="text-6xl text-kappa-orangeyellow flex justify-center">
        {title}
      </p>
      <div className="flex flex-row w-full space-x-12 justify-center pt-3 font-bowlby text-6xl">
        {content.map((e, idx) => (
          <motion.p
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0, scale: 0.5 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: { duration: e.duration || 0.5 },
              },
            }}
            className={`${e.color}`}
            key={idx}
          >
            {e.name}
          </motion.p>
        ))}
      </div>
    </>
  );
};

const DJs = [
  { name: "DJ KevKev", color: "text-kappa-pinkish", duration: 1.5 },
  { name: "SPECIAL GUEST", color: "text-kappa-lightcyan", duration: 0.3 },
  { name: "DJ Ferb", color: "text-kappa-lime", duration: 1.2 },
];
const activities = [
  { name: "Surprise", color: "text-kappa-pinkish", duration: 0.3 },
  { name: "Dunk Tank", color: "text-kappa-lime", duration: 1.3 },
  { name: "10 ft Water Slide", color: "text-kappa-lightcyan", duration: 0.4 },
];
const food = [
  { name: "Tacos", color: "text-kappa-lime", duration: 1 },
  { name: "Snow Cones", color: "text-kappa-pinkish", duration: 0.7 },
  { name: "Hot Dogs", color: "text-kappa-lightcyan", duration: 1.1 },
];
const drinks = [
  { name: "Moscow", color: "text-kappa-pinkish", duration: 0.5 },
  { name: "Screwdriver", color: "text-kappa-lime", duration: 1.3 },
  { name: "Mule & JJ", color: "text-kappa-lightcyan", duration: 0.9 },
];

const Information = () => {
  return (
    <div className="h-full flex flex-col bg-gradient-to-b from-kappa-bluethree to-kappa-bluefour shadow-none justify-evenly">
      <Section title="Featuring" content={DJs} />
      <Section title="Activities" content={activities} />
      <Section title="Food" content={food} />
      <Section title="Drinks" content={drinks} />
    </div>
  );
};

export default Information;
