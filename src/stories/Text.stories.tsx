import type { Meta, StoryObj } from '@storybook/react';
import WebFont from 'webfontloader';
import { NesText } from '../Text';

WebFont.load({
  google: {
    families: ['Press+Start+2P'],
  },
});

const meta = {
  title: 'nes-components/NesText',
  component: NesText,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NesText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    textType: 'primary',
    content: 'Hello nes-components primary',
    fontSize: 30,
  },
};

export const Success: Story = {
  args: {
    textType: 'success',
    content: 'Hello nes-components success',
    fontSize: 30,
  },
};

export const Warning: Story = {
  args: {
    textType: 'warning',
    content: 'Hello nes-components warning',
    fontSize: 30,
  },
};

export const Error: Story = {
  args: {
    textType: 'error',
    content: 'Hello NES.css error',
    fontSize: 50,
  },
};

export const Disabled: Story = {
  args: {
    textType: 'disabled',
    content: 'Hello nes-components disabled',
    fontSize: 30,
  },
};
