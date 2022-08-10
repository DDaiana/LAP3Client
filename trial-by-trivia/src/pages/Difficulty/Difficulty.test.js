
 import { render, screen } from '@testing-library/react';
 import { BrowserRouter } from 'react-router-dom';
  import Difficulty from './index';
  
  describe ("Difficulty", () => {
 
   // shows error with render forbiden in the context of beforeEach
   //  beforeEach(() => {
   //   render(
   //     <BrowserRouter>
   //        <Score />
   //     </BrowserRouter>
   //   );
   //  })

 test(`There is a title for difficulty`, async () => {  
  render (<BrowserRouter><Difficulty/></BrowserRouter>);
  const title = screen.getByTitle("HeaderDifficulty");
  expect(title).toBeTruthy();
})

test(`There is a title for number of questions`, async () => {  
  render (<BrowserRouter><Difficulty/></BrowserRouter>);
  const title = screen.getByTitle("HeaderNoQuestions");
  expect(title).toBeTruthy();
})

  })
  
  