import { render, screen } from '@testing-library/react';
import Modal from './Modal';
import "@testing-library/jest-dom";

describe('Modal', () => {
  it('renders message and close button when open', () => {
    const handleClose = jest.fn();
    const { asFragment } = render(
      <Modal
        isOpen={true}
        message="Success!"
        isSuccessful={true}
        setOpen={() => {""}}
        handleClose={handleClose}
      />
    );
    expect(asFragment()).toMatchSnapshot();

    expect(screen.getByText('Success!')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'close' })).toBeInTheDocument();
  });

  it('does not render message and close button when closed', () => {
    const handleClose = jest.fn();
    render(
      <Modal
        isOpen={false}
        message="Success!"
        isSuccessful={true}
        setOpen={() => {""}}
        handleClose={handleClose}
      />
    );
    expect(screen.queryByText('Success!')).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'close' })).not.toBeInTheDocument();
  });
});
