import Settings from "../../../src/screens/Settings";
import { render } from "@testing-library/react-native";
import React from "react";

describe("Settings", () => {
  it("snapshot", () => {
    const { toJSON } = render(<Settings />);
    expect(toJSON()).toMatchSnapshot();
  });
});
