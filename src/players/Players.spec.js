import React from 'react';
import { render, getByText } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Players from './Players';


describe('<Players />', () => {
  it('should render "no players avaialble" when no players provided', () => {
    const { getByText } = render(<Players />);

    expect(getByText(/no players/i)).toBeInTheDocument();
  });
});


//should display "no players available" when no players provided

