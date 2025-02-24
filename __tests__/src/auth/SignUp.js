import SignUp from "../../../src/auth/SignUp"
import {render, userEvent, screen} from "@testing-library/react-native"
import React from "react"
import {NavigationContainer} from "@react-navigation/native"

const user = userEvent.setup()

describe("SignUp", () => {
  it("snapshot", () => {
    const {toJSON} = render(
      <NavigationContainer>
        <SignUp />
      </NavigationContainer>,
    )
    expect(toJSON()).toMatchSnapshot()
  })
  it("renders correctly", () => {
    render(
      <NavigationContainer>
        <SignUp />
      </NavigationContainer>,
    )
    expect(screen.getByTestId("page title")).toBeOnTheScreen()
    expect(screen.getByTestId("first name")).toBeOnTheScreen()
    expect(screen.getByTestId("last name")).toBeOnTheScreen()
    expect(screen.getByTestId("email")).toBeOnTheScreen()
    expect(screen.getByTestId("mobile")).toBeOnTheScreen()
    expect(screen.getByTestId("signup button")).toBeOnTheScreen()
  })
  it("should have correct title", () => {
    render(
      <NavigationContainer>
        <SignUp />
      </NavigationContainer>,
    )
    expect(screen.getByTestId("page title")).toHaveTextContent("SignUp")
  })

  it("should have correct placeholders", () => {
    render(
      <NavigationContainer>
        <SignUp />
      </NavigationContainer>,
    )
    expect(screen.getByTestId("email")).toHaveProp("placeholder", "email")
    expect(screen.getByTestId("first name")).toHaveProp(
      "placeholder",
      "first name",
    )
    expect(screen.getByTestId("last name")).toHaveProp(
      "placeholder",
      "last name",
    )
    expect(screen.getByTestId("mobile")).toHaveProp(
      "placeholder",
      "mobile number",
    )
  })
  it("button should be pressable ", () => {
    render(
      <NavigationContainer>
        <SignUp />
      </NavigationContainer>,
    )
    const SignUpButton = screen.getByTestId("signup button")
    user.press(SignUpButton)
  })
})
