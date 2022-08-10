
 import { render, screen } from '@testing-library/react';
 import { BrowserRouter } from 'react-router-dom';
  import Usercard from './index';
  
  describe ("Usercard", () => {

 test(`There is a title`, async () => {  
  render (<BrowserRouter><Usercard/></BrowserRouter>);
  const title = screen.getByTitle("Header");
  expect(title).toBeTruthy();
})

  })
  
  