/* eslint-disable max-len */
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import ListDetailContainer from './ListDetailContainer';
import mockData from '../../fixtures/mockData';
import { MemoryRouter, Route } from 'react-router-dom';

const server = setupServer(
  rest.get('https://hey-arnold-api.herokuapp.com/api/v1/characters', (req, res, ctx) => {
    return res (ctx.json(mockData));
  })
);

describe('Hey Arnold detail container', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());
  it('should display the character that was clicked on based on its id', async () => {
    render(
      <MemoryRouter initialEntries={['/5da237699734fdcb7bef8f51']}><Route path="/:id"><ListDetailContainer/></Route> </MemoryRouter>);

    const loading = screen.getByText('Loading...');
    expect(loading).toMatchSnapshot();

    const figure = await screen.findByText('Arnold Shortman');

    expect(figure).toMatchSnapshot();
  });
});
