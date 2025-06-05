import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Balloon } from './index';

describe('Balloon', () => {
  it('renders without crashing', () => {
    render(<Balloon>Test</Balloon>);
  });
});
