import Modal from "react-modal";
import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { NewTransactionModal } from "./components/NewTransactionModal";

Modal.setAppElement("#root");

export function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleOpenModal() {
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  return (
    <>
      <Header onOpenModal={handleOpenModal} />
      <Dashboard />

      <NewTransactionModal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
      />
      <GlobalStyle />
    </>
  );
}
