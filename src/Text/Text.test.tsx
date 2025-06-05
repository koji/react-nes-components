import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { NesText as Text } from './index';

describe('Text', () => {
  it('renders without crashing', () => {
    render(<Text textType="primary" content="Test" fontSize={16} />);
  });
});
