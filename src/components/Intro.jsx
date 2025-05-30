const Intro = () => {
  return (
    <div className="flex flex-col overflow-hidden h-fit w-full">
      <div className="py-2 bg-kappa-orangesky">
        <p className="text-center text-xl text-white font-bowlby lg:text-6xl">
          PROJECT RIV PRESENTS
        </p>
      </div>
      <div className="h-full w-full lg:flex lg:justify-center lg:items-center z-10">
        <img
          src="/kappapalooza2_gif.GIF"
          alt="Intro animation"
          className="w-full lg:inset-0 lg:object-cover lg:w-full lg:h-full"
        />
      </div>
      <div className="py-16 bg-kappa-blue" />
    </div>
  );
};

export default Intro;