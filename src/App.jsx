import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

import Intro from "./components/Intro";
import Question from "./components/Question";
import Video from "./components/Video";
import Information from "./components/Information";
import RSVP from "./components/RSVP";
import Sponsor from "./components/Sponsor";
import Navbar from "./components/Navbar";

const App = () => {
  const introRef = useRef(null);
  const isInView = useInView(introRef, { amount: 0 });
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  useEffect(() => {
    setIsNavbarVisible(!isInView);
  }, [isInView]);

  return (
    <>
      <Navbar isVisible={isNavbarVisible} />
      <div className="h-[93vh] bg-kappa-orange-sky" ref={introRef}>
        <Intro />
      </div>
      <Question />
      <Video />
      <Information />
      <RSVP />
      <Sponsor />
    </>
  );
};

export default App;
