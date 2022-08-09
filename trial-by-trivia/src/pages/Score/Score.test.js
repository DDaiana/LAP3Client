
 import { screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
 import Score from './index';
 
 describe ("Score", () => {

  //  beforeEach(() => {
  //   render(<Score />);
  //  })
  
  const MockScore =() => {
    return (
      <BrowserRouter>
      <Score/>
      </BrowserRouter>
    )
  }

   test(`The user is redirected to the Profile page if the "Exit game" button is clicked`, async () => {  
    render ( <MockScore/>)      
    const exitButton = screen.getByText(/Exit game/i);
    expect(exitButton).toBeInTheDocument();
})
 })
 
 