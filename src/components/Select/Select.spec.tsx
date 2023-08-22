import { render, screen } from '@testing-library/react';
import Select from './Select';
import "@testing-library/jest-dom";

describe('Select', () => {
  it('renders select element', () => {
    const { asFragment } = render(<Select />);
    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders options', () => {
    const options = ['Option 1', 'Option 2'];
    render(<Select>{options.map(option => <option key={option}>{option}</option>)}</Select>);
    options.forEach(option => {
      expect(screen.getByText(option)).toBeInTheDocument();
    });
  });
});
