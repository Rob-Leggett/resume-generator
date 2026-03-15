import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ExportPDF from '../../components/ExportPDF/ExportPDF';

// Mock Auth0
const mockUseAuth0 = jest.fn();
jest.mock('@auth0/auth0-react', () => ({
  useAuth0: () => mockUseAuth0(),
}));

// Mock window.print
const mockPrint = jest.fn();
Object.defineProperty(window, 'print', {
  value: mockPrint,
  writable: true,
});

describe('ExportPDF', () => {
  beforeEach(() => {
    mockUseAuth0.mockReset();
    mockPrint.mockReset();
  });

  it('should not render when user is not authenticated', () => {
    mockUseAuth0.mockReturnValue({
      user: undefined,
    });

    const { container } = render(<ExportPDF />);
    expect(container.firstChild).toBeNull();
  });

  it('should render export button when authenticated', () => {
    mockUseAuth0.mockReturnValue({
      user: { name: 'Test User' },
    });

    render(<ExportPDF />);
    expect(screen.getByRole('button', { name: /export pdf/i })).toBeInTheDocument();
  });

  it('should call window.print when button is clicked', async () => {
    const user = userEvent.setup();
    mockUseAuth0.mockReturnValue({
      user: { name: 'Test User' },
    });

    render(<ExportPDF />);
    await user.click(screen.getByRole('button', { name: /export pdf/i }));

    expect(mockPrint).toHaveBeenCalled();
  });
});
