import type { Meta, StoryObj } from '@storybook/react';
import { NesReactionIcon } from '../Icon';

const meta = {
  title: 'nes-components/NesReactionIcon',
  component: NesReactionIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NesReactionIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Heart: Story = {
  args: {
    iconType: 'heart',
    iconSize: 'large',
  },
};

export const HeartEmpty: Story = {
  args: {
    iconType: 'heart',
    iconSize: 'large',
    iconReactionType: 'empty',
  },
};

export const Star: Story = {
  args: {
    iconType: 'star',
    iconSize: 'large',
  },
};

export const StarEmpty: Story = {
  args: {
    iconType: 'star',
    iconSize: 'large',
    iconReactionType: 'empty',
  },
};

export const StarHalf: Story = {
  args: {
    iconType: 'star',
    iconSize: 'large',
    iconReactionType: 'half',
  },
};

export const StarTransparent: Story = {
  args: {
    iconType: 'star',
    iconSize: 'large',
    iconReactionType: 'transparent',
  },
};

export const Like: Story = {
  args: {
    iconType: 'like',
    iconSize: 'large',
  },
};

export const LikeEmpty: Story = {
  args: {
    iconType: 'like',
    iconSize: 'large',
    iconReactionType: 'empty',
  },
};
