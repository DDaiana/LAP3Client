
 import { render, screen } from '@testing-library/react';
 import { BrowserRouter } from 'react-router-dom';
  import Usernames from './index';
  
  describe ("Usernames", () => {
 
   // shows error with render forbiden in the context of beforeEach
   //  beforeEach(() => {
   //   render(
   //     <BrowserRouter>
   //        <Score />
   //     </BrowserRouter>
   //   );
   //  })
 
    test(`There is an "Start game" button`, async () => {  
     render (<BrowserRouter><Usernames/></BrowserRouter>);
     const exitButton = screen.getByRole("button", { "name": "Start game" });
     expect(exitButton).toBeTruthy();
 })

     test(`There is a title`, async () => {  
        render (<BrowserRouter><Usernames/></BrowserRouter>);
        const exitButton = screen.getByText(/Set Username/i);
    expect(exitButton).toBeTruthy();
 })


 
  })
  
  