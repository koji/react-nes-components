import type { Meta, StoryObj } from '@storybook/react';
import { NesTag } from '../Tag';

const meta = {
  title: 'nes-components/NesTag',
  component: NesTag,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NesTag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    textType: 'primary',
    item: 'nes-components',
  },
};

export const Success: Story = {
  args: {
    textType: 'success',
    item: 'nes-components',
  },
};

export const Warning: Story = {
  args: {
    textType: 'warning',
    item: 'nes-components',
  },
};

export const Error: Story = {
  args: {
    textType: 'error',
    item: 'nes-components',
  },
};
