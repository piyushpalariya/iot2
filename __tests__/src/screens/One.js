import One from "../../../src/screens/One"
import {render} from "@testing-library/react-native"
import React from "react"

describe("One", () => {
  it("snapshot", () => {
    const {toJSON} = render(<One />)
    expect(toJSON()).toMatchSnapshot()
  })
})
