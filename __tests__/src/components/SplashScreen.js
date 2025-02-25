import SplashScreen from "../../../src/components/SplashScreen";
import { render } from "@testing-library/react-native";
import React from "react";

describe("SplashScreen", () => {
  it("snapshot", () => {
    const { toJSON } = render(<SplashScreen />);
    expect(toJSON()).toMatchSnapshot();
  });
});
