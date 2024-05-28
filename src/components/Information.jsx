/* eslint-disable react/prop-types */
const Section = ({ title, content }) => {
  return (
    <>
      <p className="text-6xl text-kappa-orangeyellow flex justify-center">
        {title}
      </p>
      <div className="flex flex-row w-full space-x-12 justify-center pt-3 font-bowlby text-5xl">
        {content.map((e, idx) => (
          <p className={`${e.color}`} key={idx}>
            {e.name}
          </p>
        ))}
      </div>
    </>
  );
};

const DJs = [
  { name: "DJ KevKev", color: "text-kappa-pinkish" },
  { name: "SPECIAL GUEST", color: "text-kappa-lightcyan" },
  { name: "DJ Ferb", color: "text-kappa-lime" },
];
const activities = [
  { name: "Surprise", color: "text-kappa-pinkish" },
  { name: "Dunk Tank", color: "text-kappa-lime" },
  { name: "10 ft Water Slide", color: "text-kappa-lightcyan" },
];
const food = [
  { name: "Tacos", color: "text-kappa-lime" },
  { name: "Snow Cones", color: "text-kappa-pinkish" },
  { name: "Hot Dogs", color: "text-kappa-lightcyan" },
];
const drinks = [
  { name: "Moscow", color: "text-kappa-pinkish" },
  { name: "Screwdriver", color: "text-kappa-lime" },
  { name: "Mule & JJ", color: "text-kappa-lightcyan" },
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
