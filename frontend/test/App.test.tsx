
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import { expect, it } from 'vitest';
import App from '../src/App';

it('zeigt !!! Hallo !!! in einem div', () => {
    const { container } = render(<App />);

    expect(screen.getByText('!!! Hallo !!!')).toBeInTheDocument();

    const element = container.querySelector('div.ticks');
    expect(element).not.toBeNull();
    expect(element).toHaveTextContent('!!! Hallo !!!');


});
