import type { Meta, StoryObj } from '@storybook/react';
import { NesIcon } from '../Icon';

const meta = {
  title: 'nes-components/NesIcon',
  component: NesIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NesIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Close: Story = {
  args: {
    iconType: 'close',
    iconSize: 'large',
  },
};

export const Trophy: Story = {
  args: {
    iconType: 'trophy',
    iconSize: 'large',
  },
};

export const Coin: Story = {
  args: {
    iconType: 'coin',
    iconSize: 'large',
  },
};
