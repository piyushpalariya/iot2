import SignIn from "../../../src/auth/SignIn"
import {render, screen, userEvent} from "@testing-library/react-native"
import React from "react"
import {Provider} from "react-redux"
import store from "../../../src/redux/store"
import {NavigationContainer} from "@react-navigation/native"

const user = userEvent.setup()

describe("SignIn", () => {
  it("snapshot", () => {
    const {toJSON} = render(
      <Provider store={store}>
        <NavigationContainer>
          <SignIn />
        </NavigationContainer>
      </Provider>,
    )
    expect(toJSON()).toMatchSnapshot()
  })
  it("renders correctly", () => {
    render(
      <Provider store={store}>
        <NavigationContainer>
          <SignIn />
        </NavigationContainer>
      </Provider>,
    )
    expect(screen.getByTestId("page title")).toBeOnTheScreen()
    expect(screen.getByTestId("email")).toBeOnTheScreen()
    expect(screen.getByTestId("password")).toBeOnTheScreen()
    expect(screen.getByTestId("login button")).toBeOnTheScreen()
  })
  it("should have correct title", () => {
    render(
      <Provider store={store}>
        <NavigationContainer>
          <SignIn />
        </NavigationContainer>
      </Provider>,
    )
    expect(screen.getByTestId("page title")).toHaveTextContent("Signin")
  })

  it("should have correct placeholders", () => {
    render(
      <Provider store={store}>
        <NavigationContainer>
          <SignIn />
        </NavigationContainer>
      </Provider>,
    )
    expect(screen.getByTestId("email")).toHaveProp("placeholder", "email")
    expect(screen.getByTestId("password")).toHaveProp("placeholder", "password")
  })
  it("button should be pressable ", () => {
    render(
      <Provider store={store}>
        <NavigationContainer>
          <SignIn />
        </NavigationContainer>
      </Provider>,
    )
    const SignInButton = screen.getByTestId("login button")
    user.press(SignInButton)
  })
})
