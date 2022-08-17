import Modal from "react-modal";
import FecharImg from "../../assets/fechar.svg";
import EntradaImg from "../../assets/Entradas.svg";
import SaidasImg from "../../assets/Saidas.svg";
import { Container, TransactionTypeContainer, RadioBox } from "./styles";
import { useState } from "react";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
onRequestClose,
}: NewTransactionModalProps) {

  const [type, setType] = useState('deposit')

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button type="button">
        <img
          src={FecharImg}
          alt="Fechar modal"
          onClick={onRequestClose}
          className="react-modal-close"
        />
      </button>
      <Container>
        <h2>Cadastrar transação</h2>
        <input placeholder="Título" />

        <input type="number" placeholder="Valor" />

        <TransactionTypeContainer>
          <RadioBox type="button"
          onClick={() => { setType('deposit')}}
          isActive={type == 'deposit'}>
            <img src={EntradaImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox type="button"
          onClick={() => { setType('withdraw')}}
          isActive={type == 'withdraw'}>
            <img src={SaidasImg} alt="Saida" />
            <span>Saidas</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input placeholder="Categoria" />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
