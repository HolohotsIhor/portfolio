import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { describe } from 'vitest';
import { SectionSubtitle } from './SectionSubtitle.tsx';

describe('SectionSubtitle Component', () => {
    it('Renders the given text inside <p> element', () => {
        const textProps = 'Simple text';

        render(<SectionSubtitle text={textProps} />);

        const subHeading = screen.getByText(textProps);

        expect(subHeading).toBeInTheDocument();
        expect(subHeading).toHaveTextContent(textProps);
    });
})
