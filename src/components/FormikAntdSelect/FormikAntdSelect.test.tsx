import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
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

        // Проверяем, что плейсхолдер есть
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
