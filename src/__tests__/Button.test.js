import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { Button } from '../components/layout/styled';

afterEach(cleanup)
test('button has background color of prop', () => {
  const { getByTestId } = render(
    <Button backgroundColor='rgb(226, 52, 40)' data-testid="test-button" />
  );
  const button = getByTestId('test-button');
  const style = window.getComputedStyle(button);
  expect(style.backgroundColor).toBe('rgb(226, 52, 40)');
})