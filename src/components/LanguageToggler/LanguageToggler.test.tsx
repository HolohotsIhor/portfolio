import '@testing-library/jest-dom';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { LanguageToggler } from './LanguageToggler';

// Mock Redux-hook useAppSelector
vi.mock('../../hooks/useRedux.ts', () => ({
    useAppSelector: vi.fn()
}));

// Mock hook
vi.mock('../../hooks/useActions.ts', () => ({
    useAction: vi.fn()
}));

import { useAppSelector } from '../../hooks/useRedux.ts';
import { useAction } from '../../hooks/useActions.ts';
import { LANG_EN, LANG_UA } from '../../helpers/constant.ts';

describe('LanguageToggler component', () => {
    it('renders correctly and allows language switching', () => {
        const mockChangeLanguage = vi.fn();

        // @ts-ignore
        useAppSelector.mockReturnValue({ language: LANG_EN });
        // @ts-ignore
        useAction.mockReturnValue({ changeLanguage: mockChangeLanguage });

        render(<LanguageToggler />);

        const select = screen.getByRole('combobox');
        expect(select).toBeInTheDocument();
        expect(select).toHaveValue(LANG_EN);

        // Change to UA lang
        fireEvent.change(select, { target: { value: LANG_UA } });

        expect(mockChangeLanguage).toHaveBeenCalledWith(LANG_UA);
    });
});
