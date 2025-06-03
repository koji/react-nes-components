import type { Meta, StoryObj } from '@storybook/react';
import { NesList } from '../List';

const contents = ['hell', 'nes', 'components', 'storybook'];

const meta = {
  title: 'nes-components/NesList',
  component: NesList,
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
          fontSize: '30px',
        }}
      >
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof NesList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Circle: Story = {
  args: {
    items: contents,
    isDisc: false,
  },
};

export const Disc: Story = {
  args: {
    items: contents,
    isDisc: true,
  },
};
