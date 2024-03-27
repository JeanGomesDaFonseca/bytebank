import { render, screen } from "@testing-library/react";
import Menu from "./index";

test("Deve renderizar um link para a página inicial", () => {
  render(<Menu />);
  const linkElement = screen.getByText("Inicial");
  expect(linkElement).toBeInTheDocument();
});

test("Deve renderizar uma lista de links", () => {
  render(<Menu />);
  const listaLInks = screen.getAllByRole("link");
  expect(listaLInks).toHaveLength(4);
});
test('Não deve renderizar o link para Extrato', () => {
    render(<Menu />);
    const linkExtrato = screen.queryByText('Extrato');
    expect(linkExtrato).not.toBeInTheDocument();
});
