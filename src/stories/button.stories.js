import React from "react";

import Button from "../components/ui/button/button.jsx";

export default {
  title: "components/ui/button",
  component: Button,
  argTypes: { onClick: { action: "button-click" } },
  args: {
    isMaxWidth: false,
    children: "Нажми на меня",
    link: void 0,
  },
};

const Template = (args) => <Button {...args} />;

export const MaxWidth = Template.bind({});
MaxWidth.args = {
  isMaxWidth: true,
};

export const LongLabel = Template.bind({});
LongLabel.args = {
  children: "Кнопка с достаточно длинной надписью",
};

export const Link = Template.bind({});
Link.args = {
  link: "/order",
};
