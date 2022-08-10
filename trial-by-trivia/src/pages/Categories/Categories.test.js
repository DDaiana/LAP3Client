
 import { render, screen } from '@testing-library/react';
 import { BrowserRouter } from 'react-router-dom';
import Categories from './index';
  
  describe ("Categories", () => {
 
   // shows error with render forbiden in the context of beforeEach
   //  beforeEach(() => {
   //   render(
   //     <BrowserRouter>
   //        <Score />
   //     </BrowserRouter>
   //   );
   //  })
 
    test(`There is an "Random" button`, async () => {  
     render (<BrowserRouter><Categories/></BrowserRouter>);
     const startButton = screen.getByRole("button", { "name": "Random" });
     expect(startButton).toBeTruthy();
 })

 test(`There is a title`, async () => {  
  render (<BrowserRouter><Categories/></BrowserRouter>);
  const title = screen.getByTitle("Header");
  expect(title).toBeTruthy();
})

  })
  
  