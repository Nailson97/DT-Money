import { createContext, useEffect, useState, ReactNode } from "react";
import { api } from "./services/api";


interface Transactions {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
  }

 interface TransactionProviderProps {
    children: ReactNode;
 } 

 interface TransactionInput {
   title: string;
   amount: number;
   type: string;
   category: string;
 }

 interface TransactionContext {
    transactions: Transactions[],
    createTransaction: (transaction: TransactionInput) => Promise<void>;
 }

 export const TransactionsContext = createContext<TransactionContext>(
  {} as TransactionContext
);

 export function TransactionsProvider({children}: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transactions[]>([]);

    useEffect(() => {
      api.get("transactions")
        .then((response) => setTransactions(response.data.transactions));
    }, []);

    async function createTransaction(transactionInput: TransactionInput) {
      const response = await api.post('/transactions', {
        ...transactionInput,
        createdAt: new Date()

      })
      const { transaction } = response.data

      setTransactions([
        ...transactions,
        transaction,
      ])
    }

    return (
        <TransactionsContext.Provider value={{transactions, createTransaction}}>
          {children}
        </TransactionsContext.Provider>
    )
}
