import React from "react";
import useSingleton from "../../../hooks/use-singleton.js";

import About from "../../blocks/about/about";
import Features from "../../blocks/features/features";

function MainPage({ features }) {
  const helpMessage = useSingleton();

  return (
    <>
      {helpMessage}
      <About />
      <Features features={features} />
    </>
  );
}

export default MainPage;
