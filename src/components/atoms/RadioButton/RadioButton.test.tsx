import { render, screen } from '@testing-library/react';

import { RadioButton } from '.';

describe('RadioButton', () => {
  it('should render the heading', () => {
    render(<RadioButton />);

    // Assert
    screen.getByRole('heading', { name: /RadioButton/i });
  });
});
