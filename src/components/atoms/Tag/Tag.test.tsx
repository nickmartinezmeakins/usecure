import { render, screen } from '@testing-library/react';

import { Tag } from '.';

describe('Tag', () => {
  it('should render the heading', () => {
    render(<Tag />);

    // Assert
    screen.getByRole('heading', { name: /Tag/i });
  });
});
