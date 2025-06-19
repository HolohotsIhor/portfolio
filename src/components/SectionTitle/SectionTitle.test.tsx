import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { SectionTitle } from './SectionTitle.tsx';
import { describe } from 'vitest';

describe('SectionTitle Component', () => {
    it('Renders the given text inside an <h1> element', () => {
        const textProps = 'Simple text';

        render(<SectionTitle text={textProps} />);

        const heading = screen.getByRole('heading', { name: textProps});

        expect(heading).toBeInTheDocument();
        expect(heading.tagName).toBe('H1');
        expect(heading).toHaveTextContent(textProps);
    });
});
