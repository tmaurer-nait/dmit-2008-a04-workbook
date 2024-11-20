// Import testing code
import { render, screen, act, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

// Import the component to test
import TodoList from "../components/TodoList";

// Start like this for a test
// test("", () => {});

test("todo list title renders correctly", () => {
  // Render the component
  render(<TodoList />);
  // find the title element by it's text
  const titleElement = screen.getByText("Our Todo List");
  // check that the element is in the document
  expect(titleElement).toBeInTheDocument();
});

test("todo added successfully", () => {
  // render the component
  render(<TodoList />);

  // Find the list, button, and input
  const listElement = screen.getByTestId("todo-item-list");
  const buttonElement = screen.getByText("Add Todo");
  const inputElement = screen.getByLabelText("New Todo");

  // Create a string constant for the input
  const EXPECTED_STRING = "Learn Jest Testing";

  // Change the input to the string
  fireEvent.change(inputElement, {
    target: {
      value: EXPECTED_STRING,
    },
  });

  // Verify the input value
  expect(inputElement.value).toBe(EXPECTED_STRING);

  // Click the button
  // This will change the state of the app so we will need to act
  act(() => {
    buttonElement.click();
  });

  // Verify that the list has the new todo item
  expect(listElement).toHaveTextContent(EXPECTED_STRING);

  // Verify that the input is empty again
  expect(inputElement.value).toBe("");
});
