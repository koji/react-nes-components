import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Text } from './index';

describe('Text', () => {
  it('renders without crashing', () => {
    render(<Text>Test</Text>);
  });
});
