import { render, screen } from '@testing-library/react';

import { Header } from '.';

describe('Header', () => {
  it('should render the heading', () => {
    render(<Header />);

    // Assert
    screen.getByRole('heading', { name: /Header/i });
  });
});
