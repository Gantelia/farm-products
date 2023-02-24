import Stack from "../components/ui/stack/stack.jsx";

export default {
  title: "components/ui/stack",
  component: Stack,
  argTypes: {
    numberOfChildren: { type: "number" },
  },
  args: {
    direction: "row",
    spacing: 2,
    wrap: false,
    numberOfChildren: 4,
  },
};

const Template = ({ numberOfChildren, ...args }) => (
  <Stack {...args}>
    {[...Array(numberOfChildren).keys()].map((number) => (
      <div
        style={{
          width: "50px",
          height: "50px",
          backgroundColor: "red",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        key={number}
      >
        {number + 1}
      </div>
    ))}
  </Stack>
);

export const Horizontal = Template.bind({});
Horizontal.args = {
  direction: "row",
};

export const Vertical = Template.bind({});
Vertical.args = {
  direction: "column",
};

export const NoSpacing = Template.bind({});
NoSpacing.args = {
  spacing: 0,
};

export const WrapOverflow = Template.bind({});
WrapOverflow.args = {
  wrap: true,
  numberOfChildren: 40,
};

export const Empty = Template.bind({});
Empty.args = {
  numberOfChildren: 0,
};
