import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Formulario from "./index";

describe("Teste do componente Formulario", () => {
  test("campo de input", () => {
    render(<Formulario />);
    const campoTexto = screen.getByPlaceholderText("Digite um valor");
    expect(campoTexto).toBeInTheDocument();
  });

  test("input com um type number", () => {
    render(<Formulario />);
    const campoTexto = screen.getByPlaceholderText("Digite um valor");
    expect(campoTexto).toHaveAttribute("type", "number");
  });
  test("input que pode ser preenchido", () => {
    render(<Formulario />);
    const campoTexto = screen.getByPlaceholderText("Digite um valor");
    userEvent.type(campoTexto, "50");
    expect(campoTexto).toHaveValue(50);
  });
});
