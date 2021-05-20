/* eslint-disable max-len */
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import ListDetailContainer from './ListDetailContainer';

const server = setupServer(
  rest.get('https://hey-arnold-api.herokuapp.com/api/v1/characters/5da237699734fdcb7bef8f51', (req, res, ctx) => {
    return res (
      ctx.json({
        '_id': '5da237699734fdcb7bef8f51',
        'name': 'Arnold Shortman',
        'image': 'https://vignette.wikia.nocookie.net/heyarnold/images/f/f5/Arnold.png/revision/latest?cb=20181027162333'
      })
    );
  })
);

describe('Hey Arnold detail container', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());
  it('should display the character that was clicked on based on its id', async () => {
    render(
      <MemoryRouter>
        <ListDetailContainer 
          match={
            { params: 
              { 
                _id: '5da237699734fdcb7bef8f51' 
              } 
            }}
        />
      </MemoryRouter>
    );

    screen.getByText('Loading...');
    

    await screen.findByText('Arnold Shortman');
    
  });
});
