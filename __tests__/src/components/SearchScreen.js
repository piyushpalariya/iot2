import SearchScreen from "../../../src/components/SearchScreen";
import { render } from "@testing-library/react-native";
import React from "react";

describe("SearchScreen", () => {
  it("snapshot", () => {
    const { toJSON } = render(<SearchScreen />);
    expect(toJSON()).toMatchSnapshot();
  });
});
