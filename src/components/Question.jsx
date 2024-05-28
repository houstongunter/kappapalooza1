const Question = () => {
  return (
    <div className="h-full bg-gradient-to-b from-kappa-blue to-kappa-bluetwo shadow-none">
      <div className="flex flex-col justify-center items-center h-full text-3xl text-white space-y-8">
        <p>What is Kappapalooza?</p>
        <p className="text-8xl">
          Riverside&apos;s{" "}
          <span className="text-kappa-orangeyellow">BIGGEST</span>
        </p>
        <p className="text-9xl">
          <span className="text-kappa-lightcyan">Dayger</span> of the{" "}
          <span className="text-kappa-pinkish">year!</span>
        </p>
      </div>
    </div>
  );
};

export default Question;
