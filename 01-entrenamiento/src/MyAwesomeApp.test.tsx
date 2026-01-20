import { describe, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import { MyAwesomeApp } from './MyAwesomeApp';

describe('MyAwesomeApp Component', () => {
  test('should render correctly', () => {
    console.log(document.body)
    const { container } = render(<MyAwesomeApp />);
    console.log(container)
    screen.debug()
  });
});