import CustomButton from "../../../src/components/CustomButton"
import {render} from "@testing-library/react-native"
import React from "react"

describe("CustomButton", () => {
  it("snapshot", () => {
    const {toJSON} = render(<CustomButton title="test" onPress={() => {}} />)
    expect(toJSON()).toMatchSnapshot()
  })
})
