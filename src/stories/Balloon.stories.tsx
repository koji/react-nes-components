import type { Meta, StoryObj } from '@storybook/react';
import { NesBalloon } from '../Balloon';

const meta = {
  title: 'nes-components/NesBalloon',
  component: NesBalloon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NesBalloon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Left: Story = {
  args: {
    isLeft: true,
    content: 'Hello! This is NesBalloon!',
  },
};

export const Right: Story = {
  args: {
    isLeft: false,
    content: 'Hello! This is NesBalloon!',
  },
};
