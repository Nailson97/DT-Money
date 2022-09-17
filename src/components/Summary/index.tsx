import EntradasImg from "../../assets/Entradas.svg";
import SaidasImg from "../../assets/Saidas.svg";
import TotalImg from "../../assets/Total.svg";
import { useTransactions } from "../../hooks/useTransactions";
import { Container } from "./styles";

export function Summary() {
 const { transactions } = useTransactions()

 const sumary = transactions.reduce((acc, transaction) => {
     if (transaction.type == "deposit") {
       acc.deposit += transaction.amount;
       acc.total += transaction.amount;
     } else {
       acc.withdraw += transaction.amount;
       acc.total -= transaction.amount;
     }

     return acc
   }, {
     deposit: 0,
     withdraw: 0,
     total: 0,
   }
 );

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={EntradasImg} alt="Entradas" />
        </header>
        <strong>
        {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
           }).format(sumary.deposit)}</strong>
      </div>
      <div>
        <header>
          <p>Saidas</p>
          <img src={SaidasImg} alt="Saidas" />
        </header>
        <strong> - {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
           }).format(sumary.withdraw)}</strong>
      </div>
      <div className="green-background">
        <header>
          <p>Total</p>
          <img src={TotalImg} alt="Total" />
        </header>
        <strong> {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
           }).format(sumary.total)}</strong>
      </div>
    </Container>
  );
}
