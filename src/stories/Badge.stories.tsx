import type { Meta, StoryObj } from '@storybook/react';
import { NesBadge } from '../Badge';

const meta = {
  title: 'nes-components/NesBadge',
  component: NesBadge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NesBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
  args: {
    badgeType: ['dark'],
    contents: ['nes-components'],
  },
};

export const DarkSuccessSplited: Story = {
  args: {
    badgeType: ['dark', 'success'],
    contents: ['nes-components', '0.0.1'],
  },
};

export const Primary: Story = {
  args: {
    badgeType: ['primary'],
    contents: ['nes-components'],
  },
};

export const DarkPrimarySplited: Story = {
  args: {
    badgeType: ['dark', 'primary'],
    contents: ['npm', '1.1.1'],
  },
};

export const Success: Story = {
  args: {
    badgeType: ['success'],
    contents: ['nes-components'],
  },
};

export const Warning: Story = {
  args: {
    badgeType: ['warning'],
    contents: ['nes-components'],
  },
};

export const Error: Story = {
  args: {
    badgeType: ['error'],
    contents: ['nes-components'],
  },
};
