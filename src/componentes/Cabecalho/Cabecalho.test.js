import { render, screen } from "@testing-library/react";
import Cabecalho from './index';


test('Deve renderizar o componente', () => {
  render(<Cabecalho />);
  const nomeUsuario = screen.getByText('Jean Gomes da Fonseca');
  expect(nomeUsuario).toBeInTheDocument();
});
