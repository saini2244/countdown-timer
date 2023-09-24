import { render, screen } from '@testing-library/react';
import { InputTimePicker } from '../components/InputTimePicker';
import { DEFAULT_TIME } from '../utils/constant';

it('component render', () => {
    render(<InputTimePicker time={DEFAULT_TIME} />);
    const textElement = screen.getByTestId("testid-seconds");
    expect(textElement).toBeInTheDocument();
});