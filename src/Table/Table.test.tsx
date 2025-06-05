import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { NesTable as Table } from './index';

describe('Table', () => {
  it('renders without crashing', () => {
    render(<Table headers={["h1"]} items={["item1"]} />);
  });
});
