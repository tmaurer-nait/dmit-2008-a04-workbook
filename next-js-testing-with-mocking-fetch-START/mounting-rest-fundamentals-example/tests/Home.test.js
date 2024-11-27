import "isomorphic-fetch"; // Needed to prevent fetch is not defined errors

import { render, screen, act } from "@testing-library/react";
import "@testing-library/jest-dom";

import Home from "../pages/index.js";
import { BASE_URL } from "../utils/api/base.js"; // needed for the mock server

// import the mock service worker stuff
import { http, HttpResponse } from "msw"; // mocks the rest calls
import { setupServer } from "msw/node"; // sets up our mock server

// Create constants for quote data
const QUOTE = "The only thing we have to fear is fear itself";
const AUTHOR = "Franklin D. Roosevelt";

// Intercept the necessary requests and mock the responses
const server = setupServer(
  http.get(`${BASE_URL}/random`, (res, req, ctx) => {
    return HttpResponse.json({ content: QUOTE, author: AUTHOR });
  })
);

beforeAll(() => {
  server.listen();
});

afterAll(() => {
  server.close();
});

// Write the actual tests
test("home loads a quote on load", async () => {
  // wait for the home page to render
  await act(() => {
    render(<Home />);
  });

  // get the quote and author elements
  let quoteElement = screen.getByTestId("quote");
  let authorElement = screen.getByTestId("author");

  // Check that the elements have the correct text content
  expect(quoteElement).toHaveTextContent(QUOTE);
  expect(authorElement).toHaveTextContent(AUTHOR);
});

test("home loads a new quote when clicking the button", async () => {
  // wait for the home page to render
  await act(() => {
    render(<Home />);
  });

  // Replace the quote that the server returns
  const NEW_QUOTE = "I can shoot 3s with my eyes closed.";
  const NEW_AUTHOR = "Dan Mouris";

  // Update our mock server to return a new quote and new author
  server.use(
    http.get(`${BASE_URL}/random`, (res, req, ctx) => {
      return HttpResponse.json({ content: NEW_QUOTE, author: NEW_AUTHOR });
    })
  );

  // Get the elements
  let quoteElement = screen.getByTestId("quote");
  let authorElement = screen.getByTestId("author");
  let buttonElement = screen.getByText("Get New Quote");

  // Click the button
  await act(() => {
    buttonElement.click();
  });

  // Check that the new quote and author are shown
  expect(quoteElement).toHaveTextContent(NEW_QUOTE);
  expect(authorElement).toHaveTextContent(NEW_AUTHOR);
});
