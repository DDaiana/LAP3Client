
 import { screen } from '@testing-library/react';
 import Profile from '.';
 
 describe ("Profile", () => {

    beforeEach(() => {
        render(<Profile />);
    })

   test('It displays a header with appropriate text', () => {
    //  throw "not implemeted" 
    const heading = screen.getByRole("header");
    expect(heading).toBeInTheDocument();
    // expect(heading.textContent).toEqual("test");  
   });
 })
 
 