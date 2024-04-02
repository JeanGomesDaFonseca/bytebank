import { render, screen } from "@testing-library/react";
import Transacoes from "./index";
import estilos from "../Extrato.module.css";

describe("Componente de Transações", () => {
  it("Deve renderizar o mesmo componente com props atulizadas", () => {
    const transacao = {
      transacao: "Depósito",
      valor: 100,
    };
    const { rerender } = render(
      <Transacoes estilos={estilos} transacao={transacao} />
    );
    let tipoTransacao = screen.getByTestId("tipoTransacao");
    let valorTransacao = screen.getByTestId("valorTransacao");

    expect(tipoTransacao).toHaveTextContent("Depósito");
    expect(valorTransacao).toHaveTextContent(" R$ 100");

    const Newtransacao = {
      transacao: "Transferência",
      valor: 50,
    };

    rerender(<Transacoes estilos={estilos} transacao={Newtransacao} />);

    tipoTransacao = screen.getByTestId("tipoTransacao");
    valorTransacao = screen.getByTestId("valorTransacao");

    expect(tipoTransacao).toHaveTextContent("Transferência");
    expect(valorTransacao).toHaveTextContent(" -R$ 50");
  });
});