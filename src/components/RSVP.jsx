import Countdown from "./Countdown";

const RSVP = () => {
  return (
    <div className="h-full bg-gradient-to-b from-kappa-bluefour to-kappa-bluefive flex flex-col justify-center items-center">
      <div className="pb-3">
        <Countdown />
      </div>
        <a href="https://posh.vip/e/kappapalooza-24" className="text-7xl lg:text-9xl text-kappa-red rounded-full p-8 bg-black">
          RSPV NOW
        </a>
    </div>
  );
};

export default RSVP;
