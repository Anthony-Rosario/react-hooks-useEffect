/* eslint-disable max-len */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import ListContainer from './ListContainer';
import mockData from '../../fixtures/mockData';
import { MemoryRouter } from 'react-router';


const server = setupServer(
  rest.get('https://hey-arnold-api.herokuapp.com/api/v1/characters', (req, res, ctx) => {
    return res(ctx.json(mockData));
  })
);

describe('', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());
  it('displays a loading screen', async () => {
    render(<MemoryRouter><ListContainer/></MemoryRouter>);

    const loading = await screen.findByText('Loading...');
    expect(loading).toMatchSnapshot();

    
    const ul = await screen.findByRole('list', { name: 'character list' });
    expect(ul).toMatchSnapshot();
    
  });
});
