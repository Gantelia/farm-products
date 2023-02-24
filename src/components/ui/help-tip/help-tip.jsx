import React from "react";

import { helpText } from "../../../const.js";
import { HelpMessage, TipWrapper } from "./help-tip.js";

function HelpTip() {
  return (
    <TipWrapper>
      <HelpMessage>{helpText} ☚</HelpMessage>
    </TipWrapper>
  );
}

export default HelpTip;
