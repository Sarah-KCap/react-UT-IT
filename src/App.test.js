import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
const mockSubmit=jest.fn()

test("Stimulate login flow", () => {
  render(<App onSubmit={mockSubmit}/>);

  const userNameText=screen.getByLabelText("Username");
  const passWordText=screen.getByLabelText("Password");

  fireEvent.change(userNameText,{target:{value:"sarah"}})

  fireEvent.change(passWordText,{target:{value:"12345"}})

  const submitButton=screen.getByRole("button",{name:"Submit"})

  fireEvent.click(submitButton)
  
  expect(userNameText.value).toBe("sarah")

  expect(passWordText.value).toBe("12345")

  expect(mockSubmit).toHaveBeenCalledWith({
    username:"sarah",
    password:"12345"
  })

  
  /*
   TODO:
    1. Fill in the username and password fields getByLabelText
    2. type user name and password - fireEvent.change or userEvent.type
    3. find the submit button - getByRole/findByRole
    4. click the submit button - fireEvent.click or userEvent.click
    5. add a assertion to check if submitted data is correct
    6. mock onSubmit function to the App component and check if its getting called with correct username and password
  */
});
