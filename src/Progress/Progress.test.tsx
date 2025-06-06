import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { NesProgress as Progress } from './index';

describe('Progress', () => {
  it('renders without crashing', () => {
    render(<Progress value={50} max={100} />);
  });
});
