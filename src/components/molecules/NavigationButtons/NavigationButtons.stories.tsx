import type { Meta, StoryObj } from '@storybook/react';

import { NavigationButtons } from './NavigationButtons';

const meta: Meta<typeof NavigationButtons> = {
  title: 'Molecules/NavigationButtons',
  component: NavigationButtons,
  tags: ['autodocs'],
  args: {
    children: 'Example',
    variant: 'default'
  }
};

export default meta;

type Story = StoryObj<typeof NavigationButtons>;

export const Default: Story = {};
