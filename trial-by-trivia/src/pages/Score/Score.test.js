
 import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
 import Score from './index';
 
 describe ("Score", () => {

  // shows error with render forbiden in the context of beforeEach
  //  beforeEach(() => {
  //   render(
  //     <BrowserRouter>
  //        <Score />
  //     </BrowserRouter>
  //   );
  //  })

   test(`There is an "Exit game" button`, async () => {  
    render (<BrowserRouter><Score/></BrowserRouter>);
    const exitButton = screen.getByRole("button", { "name": "Exit game" });
    expect(exitButton).toBeTruthy();
})
 })
 
 