import type { Meta, StoryObj } from '@storybook/react';
import { NesAvatar } from '../Avatar';
import TestImage from './test.png';

const meta = {
  title: 'nes-components/NesAvatar',
  component: NesAvatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NesAvatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    iconSize: 'large',
    isRounded: true,
    imgSrc: TestImage,
  },
};
