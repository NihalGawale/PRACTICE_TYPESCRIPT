import { render, screen } from "@testing-library/react";
import Register from "./Register";

describe("initial check", () => {
  test("check heading", () => {
    render(<Register />);

    const title = screen.getByText("Register");
    expect(title).toBeInTheDocument();
  });

  test("Checking first name", () => {
    render(<Register />);

    const firstName = screen.getByLabelText("First Name");
    expect(firstName).toBeInTheDocument();
  });

  test("Checking last name", () => {
    render(<Register />);

    const lastName = screen.getByLabelText("Last Name");
    expect(lastName).toBeInTheDocument();
  });

  test("Select country", () => {
    render(<Register />);

    const country = screen.getByTestId("selectCountry");
    expect(country).toBeInTheDocument();
  });

  test("Select state", () => {
    render(<Register />);

    const state = screen.getByTestId("selectState");
    expect(state).toBeInTheDocument();
  });

  test("Select city", () => {
    render(<Register />);

    const city = screen.getByTestId("selectCity");
    expect(city).toBeInTheDocument();
  });

  test("test submit button", () => {
    render(<Register />);

    const submitButton = screen.getByRole("button", {
      name: "Submit",
    });
    expect(submitButton).toBeInTheDocument();
  });

  test("check gender", () => {
    render(<Register />);

    const gender = screen.getAllByRole("radio");
    expect(gender[0]).toBeInTheDocument();
    expect(gender[1]).toBeInTheDocument();
  });
});
