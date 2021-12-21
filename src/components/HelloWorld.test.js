import { unmountComponentAtNode, render } from "react-dom";
import { act } from "@testing-library/react";

let container = null;

beforeEach(() => {
  // Before initialize the test
  // Set the element DOM as target of our test

  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // Clean when the test is over
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

// Tests declarations itself
it("should render a Hello World component", () => {
  act(() => {
    // Render user events or components
    render(<HelloWorld />, container);
  });
  expect(container.textContent).toBe("Hello world!");

  act(() => {
    // Render user events or components
    render(<HelloWorld name="Jane" />, container);
  });
  expect(container.textContent).toBe("Hello world, Jane!");

  act(() => {
    // Render user events or components
    render(<HelloWorld name="Marcus" />, container);
  });
  expect(container.textContent).toBe("Hello world, Marcus!");
});
