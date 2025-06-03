import type { Meta, StoryObj } from '@storybook/react';
import { NesProgress } from '../Progress';

const meta = {
  title: 'nes-components/NesProgress',
  component: NesProgress,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          width: '100vh',
        }}
      >
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof NesProgress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 50,
    max: 100,
  },
};

export const Primary: Story = {
  args: {
    barType: 'primary',
    value: 75,
    max: 100,
  },
};

export const Success: Story = {
  args: {
    barType: 'success',
    value: 10,
    max: 100,
  },
};

export const Warning: Story = {
  args: {
    barType: 'warning',
    value: 25,
    max: 100,
  },
};

export const Error: Story = {
  args: {
    barType: 'error',
    value: 60,
    max: 100,
  },
};

export const Pattern: Story = {
  args: {
    barType: 'pattern',
    value: 100,
    max: 100,
  },
};
