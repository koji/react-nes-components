import type { Meta, StoryObj } from '@storybook/react';
import { NesRadio } from '../Radio';

const meta = {
  title: 'nes-components/NesRadio',
  component: NesRadio,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NesRadio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    items: ['developer', 'designer', 'manager'],
  },
};

export const DarkMode: Story = {
  args: {
    darkMode: true,
    items: ['developer', 'designer', 'manager'],
  },
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: '#212529' }}>
        <Story />
      </div>
    ),
  ],
};
