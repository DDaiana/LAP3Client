
 import { render, screen } from '@testing-library/react';
 import { BrowserRouter } from 'react-router-dom';
  import Question from './index';
  
  describe ("Question", () => {

 test(`There is a title`, async () => {  
  render (<BrowserRouter><Question/></BrowserRouter>);
  const title = screen.getByTitle("Header");
  expect(title).toBeTruthy();
})

  })
  
  