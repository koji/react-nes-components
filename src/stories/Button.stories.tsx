import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { NesButton } from '../Button';

const handleClick = (msg: string) => {
  console.log(`clicked ${msg}`);
};

const meta: Meta<typeof NesButton> = {
  title: 'nes-components/NesButton',
  component: NesButton,
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <Story />
      </div>
    ),
  ],
  parameters: {
    // Add any story parameters here
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <NesButton onClick={() => handleClick('default')}>default</NesButton>
  ),
};

export const Primary: Story = {
  render: () => (
    <NesButton buttonType={'primary'} onClick={() => handleClick('primary')}>
      primary
    </NesButton>
  ),
};

export const Success: Story = {
  render: () => (
    <NesButton buttonType={'success'} onClick={() => handleClick('success')}>
      success
    </NesButton>
  ),
};

export const Warning: Story = {
  render: () => (
    <NesButton buttonType={'warning'} onClick={() => handleClick('warning')}>
      warning
    </NesButton>
  ),
};

export const Error: Story = {
  render: () => (
    <NesButton buttonType={'error'} onClick={() => handleClick('error')}>
      error
    </NesButton>
  ),
};

export const Disabled: Story = {
  render: () => (
    <NesButton
      buttonType={'disabled'}
      onClick={() => handleClick('will not be clickable')}
    >
      disabled
    </NesButton>
  ),
};
