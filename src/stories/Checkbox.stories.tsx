import type { Meta, StoryObj } from '@storybook/react';
import { NesCheckbox } from '../Checkbox';

const meta = {
  title: 'nes-components/NesCheckbox',
  component: NesCheckbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NesCheckbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    items: ['a', 'b', 'c', 'd'],
  },
};

export const DarkMode: Story = {
  args: {
    darkMode: true,
    items: ['a', 'b', 'c', 'd'],
  },
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: '#212529' }}>
        <Story />
      </div>
    ),
  ],
};
