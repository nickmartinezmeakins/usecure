import type { Meta, StoryObj } from '@storybook/react';

import { Quiz } from './Quiz';

const meta: Meta<typeof Quiz> = {
  title: 'Organisms/Quiz',
  component: Quiz,
  tags: ['autodocs'],
  args: {
    // children: 'Example',
    // variant: 'default'
  }
};

export default meta;

type Story = StoryObj<typeof Quiz>;

export const Default: Story = {};
