import { render, screen } from '@testing-library/react';
import InputLogin from './InputLogin';
import "@testing-library/jest-dom";

describe('InputLogin', () => {
  it('renders input and icon', () => {
    const Icon = () => <i data-testid="icon">icon</i>;
    const { asFragment } = render(<InputLogin icon={<Icon />} />);
    expect(asFragment()).toMatchSnapshot();

    expect(screen.getByTestId('icon')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
});
