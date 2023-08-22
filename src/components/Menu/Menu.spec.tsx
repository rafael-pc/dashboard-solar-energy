import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Menu from './Menu';
import "@testing-library/jest-dom";

describe('Menu', () => {
  it('renders correctly', () => {
    const { container } = render(
      <MemoryRouter>
        <Menu />
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });
});
