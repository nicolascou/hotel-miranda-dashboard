import React from 'react'
import { render, cleanup, screen } from '@testing-library/react'
import { Button } from '../components/layout/styled';
import '@testing-library/jest-dom';

afterEach(cleanup)
test('button has background color of prop', () => {
  render(
    <Button backgroundColor='rgb(226, 52, 40)' data-testid="test-button" />
  );
  expect(screen.getByTestId('test-button')).toHaveStyle('backgroundColor: rgb(226, 52, 40)');
})