import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { NesIcon as Icon } from './index';

describe('Icon', () => {
  it('renders without crashing', () => {
    render(<Icon icon="close" />);
  });
});
