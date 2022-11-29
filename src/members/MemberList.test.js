import React from "react";
import { render } from "@testing-library/react";
import Members from "./MemberList";

it("matches snapshot", function () {
  const { asFragment } = render(<Members />);
  expect(asFragment()).toMatchSnapshot();
});
