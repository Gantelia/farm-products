import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { AppRoute, MAIN_PAGE_VISITS_BEFORE_SHOW_HELP_TIP } from "../const.js";
import Singleton from "../components/singleton/singleton.js";
import HelpTip from "../components/ui/help-tip/help-tip.jsx";

const pageVisitsSingleton = new Singleton(AppRoute);

const useSingleton = () => {
  const [needTip, setNeedTip] = useState(false);
  const { pathname } = useLocation();

  // useEffect срабатывает 2 раза только в development mode. Причина: <StrictMode/>(index.js)
  useEffect(() => {
    pageVisitsSingleton.incSingleton(pathname);

    const pageVisitCounter = pageVisitsSingleton.getSingleton();

    pageVisitCounter[AppRoute.MAIN] > MAIN_PAGE_VISITS_BEFORE_SHOW_HELP_TIP &&
      setNeedTip(true);
  }, []);

  return needTip ? <HelpTip /> : null;
};

export default useSingleton;
