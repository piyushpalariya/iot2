import HomeIcon from "../../../../src/components/icons/HomeIcon"
import {render} from "@testing-library/react-native"
import React from "react"

describe("HomeIcon", () => {
  it("snapshot", () => {
    const {toJSON} = render(<HomeIcon />)
    expect(toJSON()).toMatchSnapshot()
  })
})
