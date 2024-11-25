import { render, screen } from '@testing-library/react';

import { NavigationButtons } from '.';

describe('NavigationButtons', () => {
  it('should render the heading', () => {
    render(<NavigationButtons />);

    // Assert
    screen.getByRole('heading', { name: /NavigationButtons/i });
  });
});
