import { render, screen } from '@testing-library/react';

import { Quiz } from '.';

describe('Quiz', () => {
  it('should render the heading', () => {
    render(<Quiz />);

    // Assert
    screen.getByRole('heading', { name: /Quiz/i });
  });
});
