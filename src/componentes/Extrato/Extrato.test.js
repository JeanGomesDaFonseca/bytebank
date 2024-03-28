import { render, screen } from "@testing-library/react";
import Extrato from "./index";

describe("Teste do componente Extrato", () => {
  test("Deve renderizar uma lista de transação", () => {
    const transacoes = [
      {
        transaco: "Depósito",
        valor: "R$ 100",
      },
    ];

    render(<Extrato transacoes={transacoes}/>);
    const lista = screen.getByRole("listitem");
    expect(lista).toBeInTheDocument();
  });
});
