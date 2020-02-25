import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Cards from './components/ComponentDidMount';

test('name, country, rendered search', () => {
    const {getbyTestId} = render(<Cards />)
    const nameText = getByTestId(/someName/i)
    expect(nameText).toBeInTheDocument()
})