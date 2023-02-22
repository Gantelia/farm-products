import React from "react";
import { useLocation } from "react-router-dom";

import { AppRoute } from "../../../const.js";
import Button from "../../ui/button/button";
import { StyledLink } from "./styles.js";

const links = [
  {
    to: AppRoute.MAIN,
    element: (
      <StyledLink key={AppRoute.MAIN} link={AppRoute.MAIN}>
        Главная
      </StyledLink>
    ),
  },
  {
    to: AppRoute.ORDER,
    element: (
      <Button key={AppRoute.ORDER} link={AppRoute.ORDER}>
        Купить
      </Button>
    ),
  },
];

function Nav() {
  const { pathname } = useLocation();

  return (
    <nav>
      {links.filter((link) => link.to !== pathname).map((link) => link.element)}
    </nav>
  );
}

export default Nav;
