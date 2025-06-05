import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Icon } from './Icon';

describe('Icon', () => {
  it('renders without crashing', () => {
    render(<Icon icon="close" />);
  });
});
