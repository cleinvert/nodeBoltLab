// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders nodeBolt title', () => {
    render(<App />);
    const titleElement = screen.getByText(/nodeBolt/i);
    expect(titleElement).toBeInTheDocument();
});
