import type { Meta, StoryObj } from '@storybook/react';
import { NesSNSIcon } from '../Icon';

const meta = {
  title: 'nes-components/NesSNSIcon',
  component: NesSNSIcon,
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
} satisfies Meta<typeof NesSNSIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Twitter: Story = {
  args: {
    iconType: 'twitter',
    iconSize: 'medium',
  },
};

export const Facebook: Story = {
  args: {
    iconType: 'facebook',
    iconSize: 'medium',
  },
};

export const Instagram: Story = {
  args: {
    iconType: 'instagram',
    iconSize: 'medium',
  },
};

export const Github: Story = {
  args: {
    iconType: 'github',
    iconSize: 'medium',
  },
};

export const Google: Story = {
  args: {
    iconType: 'google',
    iconSize: 'medium',
  },
};

export const Gmail: Story = {
  args: {
    iconType: 'gmail',
    iconSize: 'medium',
  },
};

export const Medium: Story = {
  args: {
    iconType: 'medium',
    iconSize: 'medium',
  },
};

export const LinkedIn: Story = {
  args: {
    iconType: 'linkedin',
    iconSize: 'medium',
  },
};

export const Twitch: Story = {
  args: {
    iconType: 'twitch',
    iconSize: 'medium',
  },
};

export const Youtube: Story = {
  args: {
    iconType: 'youtube',
    iconSize: 'medium',
  },
};

export const Reddit: Story = {
  args: {
    iconType: 'reddit',
    iconSize: 'medium',
  },
};

export const Whatsapp: Story = {
  args: {
    iconType: 'whatsapp',
    iconSize: 'medium',
  },
};
