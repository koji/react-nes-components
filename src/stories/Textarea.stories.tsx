import type { Meta, StoryObj } from '@storybook/react';
import { NesTextarea } from '../Textarea';

const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
  console.log('onChange', e.target.value);
};

const meta = {
  title: 'nes-components/NesTextarea',
  component: NesTextarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NesTextarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    rows: 10,
    cols: 20,
    placeholder: 'tell me more',
    onChange: handleChange,
  },
};
