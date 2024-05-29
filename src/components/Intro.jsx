const Intro = () => {
  return (
    <div className="flex flex-col overflow-hidden h-fit w-full">
      <div className="h-full w-full lg:flex lg:justify-center lg:items-center z-10">
        <video
          className=" lg:inset-0 lg:object-cover lg:w-full lg:h-full"
          autoPlay
          muted
          playsInline
          loop
        >
          <source src="/kappapalooza_intro.mov" />
        </video>
      </div>
      <div className="py-16 bg-kappa-blue" />
    </div>
  );
};

export default Intro;
