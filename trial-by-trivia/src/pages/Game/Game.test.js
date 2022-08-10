
 import { render, screen } from '@testing-library/react';
 import { BrowserRouter } from 'react-router-dom';
  import Game from './index';
  
  describe ("Game", () => {
 
 
    test(`There is an "Start game" button`, async () => {  
     render (<BrowserRouter><Game/></BrowserRouter>);
     const startButton = screen.getByRole("button", { "name": "Start game" });
     expect(startButton).toBeTruthy();
 })

    test(`There is an "Leader Board" button`, async () => {  
     render (<BrowserRouter><Game/></BrowserRouter>);
     const leaderBoardButton = screen.getByRole("button", { "name": "Leader Board" });
     expect(leaderBoardButton).toBeTruthy();
 })

 test(`There is a title`, async () => {  
  render (<BrowserRouter><Game/></BrowserRouter>);
  const title = screen.getByTitle("Header");
  expect(title).toBeTruthy();
})

  })
  
  