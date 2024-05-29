const Intro = () => {
  return (
    <div className="flex flex-col overflow-hidden h-full w-full">
      {/* <div className="h-1/4 w-full bg-kappa-orangesky" /> */}
      <div className="lg:h-full lg:w-full lg:flex lg:justify-center lg:items-center z-10">
        <video
          className="lg:absolute lg:inset-0 lg:object-cover lg:w-full lg:h-full"
          autoPlay
          muted
          playsInline
          loop
        >
          <source src="/kappapalooza_intro.mov" />
        </video>
      </div>
      <div className="h-full w-full bg-kappa-blue" />
    </div>
  );
};

export default Intro;
