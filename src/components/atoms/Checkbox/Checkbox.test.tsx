import { render, screen } from '@testing-library/react';

import { Checkbox } from '.';

describe('Checkbox', () => {
  it('should render the heading', () => {
    render(<Checkbox />);

    // Assert
    screen.getByRole('heading', { name: /Checkbox/i });
  });
});
