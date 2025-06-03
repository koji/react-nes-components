import type { Meta, StoryObj } from '@storybook/react';
import { NesTable } from '../Table';

const meta = {
  title: 'nes-components/NesTable',
  component: NesTable,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NesTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isBordered: true,
    headers: ['item1', 'item2', 'item3', 'item4'],
    items: ['aaa', 'bbb', 'ccc', 'ddd', 'eee', 'fff', 'ggg', 'hhh'],
  },
};

export const Dark: Story = {
  args: {
    darkMode: true,
    isCentered: true,
    headers: ['itemA', 'itemB', 'itemC', 'itemD'],
    items: ['aaa', 'bbb', 'ccc', 'ddd', 'eee', 'fff', 'ggg', 'hhh'],
  },
};
