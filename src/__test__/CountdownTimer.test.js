import { render, screen } from '@testing-library/react';
import { CountdownTimer } from '../components/CountdownTimer';

test('renders component', () => {
    render(<CountdownTimer />);
    const textElement = screen.getByTestId("testid-countdown-timer-container");
    expect(textElement).toBeInTheDocument();
});
