/* eslint-disable max-len */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import ListContainer from './ListContainer';

// const server = setupServer(
//   rest.get('https://hey-arnold-api.herokuapp.com/api/v1/characters', (req, res, ctx) => {
//     return res (
//       ctx.json({
//         '_id': '5da237699734fdcb7bef8f51',
//         'name': 'Arnold Shortman',
//         'image': 'https://vignette.wikia.nocookie.net/heyarnold/images/f/f5/Arnold.png/revision/latest?cb=20181027162333'
//       })
//     );
//   })
// );
const server = setupServer(
  rest.get('api url', (req, res, ctx) => {
    return res(ctx.json({ some: 'json' }));
  })
);

describe('', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());
  it('should display a list of all Hey Arnold characters', async () => {
    render(<MemoryRouter><ListContainer /></MemoryRouter>);

    screen.findByText('Loading...');
    await screen.findByText('Arnold Shortman');
  });
});
