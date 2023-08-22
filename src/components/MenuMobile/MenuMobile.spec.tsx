import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import MenuMobile from './MenuMobile';
import "@testing-library/jest-dom";

describe('MenuMobile', () => {
  it('renders links when open', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <MenuMobile isOpen={true} id="menu-mobile" />
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();

    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Unidade consumidora')).toBeInTheDocument();
    expect(screen.getByText('Cadastro de enérgia gerada')).toBeInTheDocument();
  });
});
