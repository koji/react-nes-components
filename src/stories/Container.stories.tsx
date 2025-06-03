import type { Meta, StoryObj } from '@storybook/react';
import { NesContainer } from '../Container';

const meta = {
  title: 'nes-components/NesContainer',
  component: NesContainer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NesContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: 'This is nes-components container',
  },
};

export const Centered: Story = {
  args: {
    containerTitle: 'nes-components',
    isCentered: true,
    content: 'This is nes-components container',
  },
};

export const Dark: Story = {
  args: {
    containerTitle: 'nes-components',
    isCentered: false,
    isRounded: true,
    darkMode: true,
    content: 'This is nes-components container',
  },
};

export const WithTitle: Story = {
  args: {
    containerTitle: 'nes-components',
    isCentered: true,
    isRounded: true,
    content: 'This is nes-components container',
  },
};
