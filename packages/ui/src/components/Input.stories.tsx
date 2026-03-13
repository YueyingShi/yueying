import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
    title: "Atoms/Input",
    component: Input,
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
    args: {
        label: "Default Input",
        placeholder: "Type something...",
    },
};