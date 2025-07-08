import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { FormikAntdSelect } from './FormikAntdSelect';
import { Formik } from 'formik';

const mockOptions = [
    { VALUE: 'ua', NAME: 'Ukraine' },
    { VALUE: 'pl', NAME: 'Poland' },
];

describe('FormikAntdSelect', () => {
    it('renders select with placeholder', () => {
        render(
            <Formik
                initialValues={{ location: undefined, name: '', email: '', company: '' }}
                onSubmit={() => {}}
            >
                <FormikAntdSelect
                    name="location"
                    options={mockOptions}
                    placeholder="Please select a region"
                />
            </Formik>
        );

        const placeholder = screen.getByText('Please select a region');
        expect(placeholder).toBeInTheDocument();
    });

    it('shows options when clicked', async () => {
        render(
            <Formik
                initialValues={{ location: undefined, name: '', email: '', company: '' }}
                onSubmit={() => {}}
            >
                <FormikAntdSelect
                    name="location"
                    options={mockOptions}
                    placeholder="Please select a region"
                />
            </Formik>
        );

        // Кликаем по селекту
        const select = screen.getByText('Please select a region');
        fireEvent.mouseDown(select);

        // Проверяем, что выпали опции
        await waitFor(() => {
            expect(screen.getByText('Ukraine')).toBeInTheDocument();
            expect(screen.getByText('Poland')).toBeInTheDocument();
        });
    });
});
