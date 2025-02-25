import SettingsIcon from "../../../../src/components/icons/SettingsIcon";
import { render } from "@testing-library/react-native";
import React from "react";

describe("SettingsIcon", () => {
  it("snapshot", () => {
    const { toJSON } = render(<SettingsIcon />);
    expect(toJSON()).toMatchSnapshot();
  });
});
