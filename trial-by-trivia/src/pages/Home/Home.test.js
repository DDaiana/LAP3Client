
 import { screen, render } from '@testing-library/react';
 import { BrowserRouter } from 'react-router-dom';
 import Home from '.';
 
 describe ("Home", () => {
  test(`There is an "Leader Board" button`, async () => {  
    render (<BrowserRouter><Home/></BrowserRouter>);
    const leaderBoardButton = screen.getByRole("button", { "name": "Leader Board" });
    expect(leaderBoardButton).toBeTruthy();
})
 })
 
 