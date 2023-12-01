import { act, render, screen, waitFor } from "@testing-library/react";
import Registration from "./Registration";
import userEvent from "@testing-library/user-event";

describe("Initial Check", () => {
  const sampleRegex = /[`~@$%^ 1234567890*#}[\]{|<>]/;
  test("Check Title", () => {
    render(<Registration />);
    const title = screen.getByText("Registration");
    expect(title).toBeInTheDocument();
  });

  test("Check First Name", async () => {
    act(() => {
      render(<Registration />);
    });
    const firstName = screen.getByLabelText("First Name") as HTMLInputElement;
    expect(firstName).toBeInTheDocument();
    act(() => {
      userEvent.type(firstName, "Nabc");
      expect(firstName.value).not.toMatch(sampleRegex);
    });
  });

  test("Check Last Name", async () => {
    act(() => {
      render(<Registration />);
    });
    const lastName = screen.getByLabelText("Last Name") as HTMLInputElement;
    expect(lastName).toBeInTheDocument();
    act(() => {
      userEvent.type(lastName, "Abcdef");
      expect(lastName.value).not.toMatch(sampleRegex);
    });
  });

  test("Check Email", () => {
    render(<Registration />);

    const email = screen.getByPlaceholderText("Email") as HTMLInputElement;
    expect(email).toBeInTheDocument();
    userEvent.type(email, "aaaa@gmail.com");
    expect(email.value).not.toMatch(/nihal@gmail.com/);
  });

  test("Select Country", () => {
    render(<Registration />);

    const country = screen.getByTestId("country");
    expect(country).toBeInTheDocument();
  });

  test("Select State", () => {
    render(<Registration />);
    const state = screen.getByTestId("state");
    expect(state).toBeInTheDocument();
  });

  test("Select City", () => {
    render(<Registration />);
    const city = screen.getByTestId("city");
    expect(city).toBeInTheDocument();
  });

  test("Check Gender", () => {
    render(<Registration />);
    const gender = screen.getAllByRole("radio");
    expect(gender[0]).toBeInTheDocument();
    expect(gender[1]).toBeInTheDocument();
  });

  test("Test Submit Button", async () => {
    const promise = Promise.resolve();
    const handleUpdateUserData = jest.fn(() => promise);
    act(() => {
      render(<Registration />);
    });

    const submit = screen.getByRole("button", {
      name: "Submit",
    });
    expect(submit).toBeInTheDocument();

    act(() => {
      userEvent.click(submit);
    });
    await act(() => promise);
  });

  test("Test Reset Button", async () => {
    const promise = Promise.resolve();
    const handleUpdateUserData = jest.fn(() => promise);
    act(() => {
      render(<Registration />);
    });

    const reset = screen.getByRole("button", {
      name: "Reset",
    });
    expect(reset).toBeInTheDocument();
    act(() => {
      userEvent.click(reset);
      expect(screen.getByLabelText("First Name")).toHaveValue("");
      expect(screen.getByLabelText("Last Name")).toHaveValue("");
      expect(screen.getByLabelText("Email")).toHaveValue("");
      expect(screen.getByTestId("country")).toHaveValue("select country");
      expect(screen.getByTestId("state")).toHaveValue("select state");
      expect(screen.getByTestId("city")).toHaveValue("select city");
      expect(screen.getAllByRole("radio")[0]).not.toBeChecked();
      expect(screen.getAllByRole("radio")[1]).not.toBeChecked();
    });
    await act(() => promise);
  });
});
