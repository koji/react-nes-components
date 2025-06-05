import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Table } from './index';

describe('Table', () => {
  it('renders without crashing', () => {
    render(<Table />);
  });
});
