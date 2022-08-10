
 import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
 import PlayerCount from './index';
  
  describe ("PlayerCount", () => {
 
    test(`There is an "One" button`, async () => {  
     render (<BrowserRouter><PlayerCount/></BrowserRouter>);
     const startButton = screen.getByRole("button", { "name": "One" });
     expect(startButton).toBeTruthy();
 })

    test(`There is an "Two" button`, async () => {  
     render (<BrowserRouter><PlayerCount/></BrowserRouter>);
     const leaderBoardButton = screen.getByRole("button", { "name": "Two" });
     expect(leaderBoardButton).toBeTruthy();
 })

 test(`There is a title`, async () => {  
  render (<BrowserRouter><PlayerCount/></BrowserRouter>);
  const title = screen.getByTitle("Header");
  expect(title).toBeTruthy();
})

  })
  
  