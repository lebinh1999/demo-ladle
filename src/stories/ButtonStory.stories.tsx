import Button from "@/components/Button";
import { Story, StoryDefault } from "@ladle/react";
import { useState } from "react";

type IButtonSize = "sm" | "md" | "lg";
type IButtonType = "primary" | "outline" | "disabled";

interface Props {
  size: IButtonSize;
  type: IButtonType;
  label: string;
}

export default {
  title: "Components",
  args: {
    label: "Increase",
  },
  argTypes: {
    size: {
      defaultValue: "lg",
      options: ["sm", "md", "lg"],
      label: "Button type",
      control: {
        type: "select",
        labels: {
          sm: "small",
          md: "medium",
          lg: "large",
        },
      },
    },
    type: {
      defaultValue: "primary",
      options: ["primary", "outline", "disabled"],
      label: "Button type",
      control: {
        type: "inline-radio",
      },
    },
  },
} satisfies StoryDefault<Props>;

export const ButtonStory: Story<Props> = ({ size, type, label }) => {
    const [count, setCount] = useState<number>(0);
    const handleSubmit = () => {
        setCount((prev)=> prev + 1);
    }
  return (
    <div className="flex flex-col items-center">
        <h1 className="text-xl p-5 text-red-500 ">Test ladle component button</h1>
      <Button onClick={handleSubmit} type={type} size={size}>
        {label}
      </Button>
      <h3 className="mt-10 text-[4rem] font-bold text-orange-500">{count}</h3>
    </div>
  );
};
