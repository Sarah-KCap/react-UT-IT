import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("Test counter App", () => {
  render(<App />);
  // assert if initial count value is 0 on render
  const counterText=screen.getByTestId("counter-test")
  expect(counterText).toHaveTextContent(0)

  // assert if increment button is present
  const incrementButton=screen.getByRole("button",{name:"Increment"})
  expect(incrementButton).toBeInTheDocument()


  //assert if decrement button is present
  const decrementButton=screen.getByRole("button",{name:"Decrement"})
  expect(decrementButton).toBeInTheDocument()
  
  //click increment button twice
  fireEvent.click(incrementButton)
  fireEvent.click(incrementButton)

  //assert if count value is 2
  expect(counterText).toHaveTextContent(2)

  //click decrement button once
  fireEvent.click(decrementButton)

  //assert if count value is 1
  expect(counterText).toHaveTextContent(1)

  //click decrement button once
  fireEvent.click(decrementButton)

  //assert if count value is 0
  expect(counterText).toHaveTextContent(0)

  //click decrement button once
  //assert if count value is 0 if below 0 it wont decrement

  fireEvent.click(decrementButton)
  expect(counterText).toHaveTextContent(0)

 
});
