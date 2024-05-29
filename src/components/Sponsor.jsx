const Sponsor = () => {
  return (
    <div className="h-fit bg-gradient-to-b from-kappa-bluefive to-black flex flex-col justify-center">
      <p className="flex w-full text-6xl justify-center text-kappa-lightcyan pb-3">
        Sponsors
      </p>
      <div className="grid grid-cols-3 gap-4 place-items-center">
        <img src="/yerbamate.png" height={323} width={309} />
        <img src="/redbull.png" height={323} width={309} />
        <img src="/passion_tree.png" height={323} width={309} />
      </div>
    </div>
  );
};

export default Sponsor;
