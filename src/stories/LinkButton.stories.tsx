import type { Meta, StoryObj } from '@storybook/react';
import { NesLinkButton } from '../Button';

const meta = {
  title: 'nes-components/NesLinkButton',
  component: NesLinkButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NesLinkButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    link: 'https://google.com',
    label: 'default',
  },
};

export const Primary: Story = {
  args: {
    buttonType: 'primary',
    link: 'https://google.com',
    label: 'primary',
  },
};

export const Success: Story = {
  args: {
    buttonType: 'success',
    link: 'https://google.com',
    label: 'success',
  },
};

export const Warning: Story = {
  args: {
    buttonType: 'warning',
    link: 'https://google.com',
    label: 'warning',
  },
};

export const Error: Story = {
  args: {
    buttonType: 'error',
    link: 'https://google.com',
    label: 'error',
  },
};

export const Disabled: Story = {
  args: {
    buttonType: 'disabled',
    link: 'https://google.com',
    label: 'disabled',
  },
};
