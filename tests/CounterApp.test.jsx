import { render, screen, fireEvent } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe("CounterApp component", () => {
    Button = ({ onClick, children }) => (
    <button onClick={onClick}>{children}</button>
  );

  test("Should match snapshot", () => {
    const { container } = render(<CounterApp />);

    expect(container).toMatchSnapshot();
  });

  test("calls onClick prop when clicked +1", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>+1</Button>);
    fireEvent.click(screen.getByText("+1"));
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('Should trigger handleClick in -1 button', ()=>{
    render(<CounterApp />);
    const decreaseButton = screen.getByText("-1");
    fireEvent.click(decreaseButton);
    fireEvent.click(decreaseButton);
    expect( screen.getByText('-2') ).toBeTruthy();
  });
});
