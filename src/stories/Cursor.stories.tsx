import type { Meta, StoryObj } from '@storybook/react';
import { NesCursor } from '../Cursor';

const meta = {
  title: 'nes-components/NesCursor',
  component: NesCursor,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NesCursor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Left: Story = {
  args: {
    isLeft: true,
    content: 'Hello! This is nes-components cursor!!',
  },
};

export const Right: Story = {
  args: {
    isLeft: false,
    content: 'Hello! This is nes-components cursor!!',
  },
};
