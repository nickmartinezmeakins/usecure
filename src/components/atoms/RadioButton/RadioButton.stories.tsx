import type { Meta, StoryObj } from '@storybook/react';

import { RadioButton } from './RadioButton';

const meta: Meta<typeof RadioButton> = {
  title: 'Atoms/RadioButton',
  component: RadioButton,
  tags: ['autodocs'],
  args: {
    children: 'Example',
    variant: 'default'
  }
};

export default meta;

type Story = StoryObj<typeof RadioButton>;

export const Default: Story = {};
