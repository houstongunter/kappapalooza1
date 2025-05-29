const Sponsor = () => {
  return (
    <div className="h-fit bg-gradient-to-b from-kappa-bluefive to-black flex flex-col justify-center">
      <p className="w-full text-6xl text-center text-kappa-lightcyan pb-3">
        Sponsored By:
      </p>
      <div className="flex justify-center items-center">
        <img src="/redbull.png" height={323} width={309} alt="Red Bull" />
      </div>
    </div>
  );
};

export default Sponsor;
