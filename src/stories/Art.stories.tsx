import type { Meta, StoryObj } from '@storybook/react';
import { NesArt } from '../Icon';

const meta = {
  title: 'nes-components/NesArt',
  component: NesArt,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NesArt>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NesLogo: Story = {
  args: {
    iconType: 'nes-logo',
  },
};

export const NesJpLogo: Story = {
  args: {
    iconType: 'nes-jp-logo',
  },
};

export const SnesLogo: Story = {
  args: {
    iconType: 'snes-logo',
  },
};

export const SnesJpLogo: Story = {
  args: {
    iconType: 'snes-jp-logo',
  },
};

export const NesOctocat: Story = {
  args: {
    iconType: 'nes-octocat',
    isAnimated: true,
  },
};

export const NesSmartphone: Story = {
  args: {
    iconType: 'nes-smartphone',
  },
};

export const NesPhone: Story = {
  args: {
    iconType: 'nes-phone',
  },
};
