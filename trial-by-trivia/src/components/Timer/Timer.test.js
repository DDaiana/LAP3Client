
 import { render, screen } from '@testing-library/react';
 import { BrowserRouter } from 'react-router-dom';
  import Timer from './index';
  
  describe ("Timer", () => {

 test(`There is a title`, async () => {  
  render (<BrowserRouter><Timer/></BrowserRouter>);
  const title = screen.getByTitle("Header");
  expect(title).toBeTruthy();
})

  })
  
  