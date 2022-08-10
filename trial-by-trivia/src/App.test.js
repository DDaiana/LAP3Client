import {  screen } from '@testing-library/react';
import App from './App';

describe ("App", () => {

  beforeEach(() => {
    render(<App />);
})

  test('It displays a header with appropriate text', () => {
    
    throw "not implemeted" 
    // const heading = screen.getByE("heading");
    // expect(heading).toBeInTheDocument();
    // expect(heading.textContent).toEqual("test"); 
  });
})

