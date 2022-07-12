import EntradasImg from "../../assets/Entradas.svg";
import SaidasImg from "../../assets/Saidas.svg";
import TotalImg from "../../assets/Total.svg";
import { Container } from "./styles";

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={EntradasImg} alt="Entradas" />
        </header>
        <strong>R$2500,00</strong>
      </div>
      <div>
        <header>
          <p>Saidas</p>
          <img src={SaidasImg} alt="Saidas" />
        </header>
        <strong> -R$500,00</strong>
      </div>
      <div className="green-background">
        <header>
          <p>Total</p>
          <img src={TotalImg} alt="Total" />
        </header>
        <strong>R$2000,00</strong>
      </div>
    </Container>
  );
}
