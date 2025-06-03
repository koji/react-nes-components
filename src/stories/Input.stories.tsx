import type { Meta, StoryObj } from '@storybook/react';
import { NesInput } from '../Input';

const handleChange = (
  event: React.ChangeEvent<HTMLInputElement>,
  value: string | number
) => {
  console.log('onChange', value);
};

const meta = {
  title: 'nes-components/NesInput',
  component: NesInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NesInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    darkMode: true,
    isInline: true,
    fieldType: 'success',
    label: 'NesInput Test',
    placeHolder: 'put something here',
    onChange: (e) => handleChange(e, e.target.value),
  },
};
