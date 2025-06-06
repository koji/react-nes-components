import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { NesRadio as Radio } from './index';

describe('Radio', () => {
  it('renders without crashing', () => {
    render(<Radio items={["test"]} />);
  });
});
