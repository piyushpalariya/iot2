import SearchButton from "../../../src/components/SearchButton";
import { render } from "@testing-library/react-native";
import React from "react";

describe("SearchButton", () => {
  it("snapshot", () => {
    const { toJSON } = render(<SearchButton />);
    expect(toJSON()).toMatchSnapshot();
  });
});
