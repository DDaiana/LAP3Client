
 import { render, screen } from '@testing-library/react';
 import { BrowserRouter } from 'react-router-dom';
  import Username from './index';
  
  describe ("Username", () => {

 test(`There is a title`, async () => {  
  render (<BrowserRouter><Username/></BrowserRouter>);
  const title = screen.getByTitle("Header");
  expect(title).toBeTruthy();
})

  })
  
  