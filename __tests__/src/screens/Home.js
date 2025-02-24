import Home from "../../../src/screens/Two"
import {render} from "@testing-library/react-native"
import React from "react"
import {Text} from "react-native"

describe("Home", () => {
  it("snapshot", () => {
    const {toJSON} = render(<Home />)
    expect(toJSON()).toMatchSnapshot()
    expect(toJSON()).toHaveTextContent("hi")
    expect(toJSON()).toContainElement(<Text>Hi</Text>)
    //console.log('hi')
  })
})
