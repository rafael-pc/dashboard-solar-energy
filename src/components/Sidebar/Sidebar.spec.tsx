import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Sidebar from './Sidebar';
import "@testing-library/jest-dom";

describe('Sidebar', () => {
  it('renders correctly', () => {
    const { asFragment } = render(
      <BrowserRouter>
        <Sidebar />
      </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();

    expect(screen.getByTestId('logo')).toBeInTheDocument();
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Unidade consumidora')).toBeInTheDocument();
    expect(screen.getByText('Cadastro de enérgia gerada')).toBeInTheDocument();
  });
});
