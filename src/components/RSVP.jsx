import Countdown from "./Countdown";

const RSVP = () => {
  return (
    <div className="h-full bg-gradient-to-b from-kappa-bluefour to-kappa-bluefive flex flex-col justify-center items-center">
      <div className="pb-3">
        <Countdown />
      </div>
      <button className="text-9xl text-kappa-red rounded-full p-8 bg-black">
        RSPV NOW
      </button>
    </div>
  );
};

export default RSVP;
