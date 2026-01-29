import React from 'react';
import { render, screen } from '@testing-library/react';
import Panel from '../../components/Panel/Panel';

describe('Panel', () => {
  it('should render children', () => {
    render(
      <Panel>
        <span data-testid="child">Test Content</span>
      </Panel>
    );
    
    expect(screen.getByTestId('child')).toBeInTheDocument();
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('should apply custom className', () => {
    const { container } = render(
      <Panel className="custom-class">
        <span>Content</span>
      </Panel>
    );
    
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('should render multiple children', () => {
    render(
      <Panel>
        <div data-testid="section1">Section 1</div>
        <div data-testid="section2">Section 2</div>
      </Panel>
    );
    
    expect(screen.getByTestId('section1')).toBeInTheDocument();
    expect(screen.getByTestId('section2')).toBeInTheDocument();
  });
});
