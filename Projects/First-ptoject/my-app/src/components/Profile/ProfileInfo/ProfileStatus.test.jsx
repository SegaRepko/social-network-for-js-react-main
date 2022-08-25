import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
    test("status from props should", () => {
      const component = create(<ProfileStatus status="yo yo yo" />);
      const instance = component.getInstance();
      expect(instance.state.status).toBe("yo yo yo");
    });
  });