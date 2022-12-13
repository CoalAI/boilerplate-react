import React from 'react';
import { render, screen } from '@testing-library/react';
import TokenService from './TokenService';
import getLocalRefreshToken from './TokenService';

describe('Test the TokenService', () => {
  test('Test the getLocalRefreshToken', async () => {
    expect(getLocalRefreshToken).toBeTruthy();
    const token1 = jest.fn(getLocalRefreshToken);
    expect(token1).toHaveBeenCalledTimes(0);
    expect(token1).toHaveLength(0);
  });
  test('Test the TokenService', async () => {
    expect(TokenService).toBeTruthy();
    const token2 = jest.fn(TokenService);
    expect(token2).toHaveBeenCalledTimes(0);
    expect(token2).toHaveLength(0);
  });
});
