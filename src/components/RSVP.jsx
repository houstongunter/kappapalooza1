import Countdown from "./Countdown";

const RSVP = () => {
  return (
    <div className="h-fit py-40 lg:py-24 bg-gradient-to-b from-kappa-bluefour to-kappa-bluefive flex flex-col justify-center items-center">
      <div className="pb-3">
        <Countdown />
      </div>
        <a
          href="https://posh.vip/e/kappapalooza"
          className="text-7xl lg:text-9xl text-kappa-red rounded-full p-8 bg-black hover:text-kappa-blue"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          RSVP NOW
        </a>
    </div>
  );
};

export default RSVP;
