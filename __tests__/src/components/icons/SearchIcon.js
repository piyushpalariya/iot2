import SearchIcon from "../../../../src/components/icons/SearchIcon";
import { render } from "@testing-library/react-native";
import React from "react";

describe("SearchIcon", () => {
  it("snapshot", () => {
    const { toJSON } = render(<SearchIcon />);
    expect(toJSON()).toMatchSnapshot();
  });
});
