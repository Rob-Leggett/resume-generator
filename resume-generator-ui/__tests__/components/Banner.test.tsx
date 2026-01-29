import React from 'react';
import { render, screen } from '@testing-library/react';
import Banner from '../../components/Banner/Banner';

describe('Banner', () => {
  it('should render children', () => {
    render(
      <Banner>
        <span data-testid="child">Test Child</span>
      </Banner>
    );
    
    expect(screen.getByTestId('child')).toBeInTheDocument();
    expect(screen.getByText('Test Child')).toBeInTheDocument();
  });

  it('should render multiple children', () => {
    render(
      <Banner>
        <span data-testid="child1">First</span>
        <span data-testid="child2">Second</span>
      </Banner>
    );
    
    expect(screen.getByTestId('child1')).toBeInTheDocument();
    expect(screen.getByTestId('child2')).toBeInTheDocument();
  });

  it('should render without children', () => {
    const { container } = render(<Banner />);
    expect(container.firstChild).toBeInTheDocument();
  });
});
