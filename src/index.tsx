import React from "react";
import ReactDOM from "react-dom/client";
import { createServer, Model } from "miragejs";
import { App } from "./App";

createServer({

  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Criação de Website',
          type: 'deposit',
          category: 'Dev',    
          amount: 5200, 
          createdAt: new Date('2022-09-10 09:25:00'),
        },
        {
          id: 2,
          title: 'Compras',
          type: 'withdraw',
          category: 'Gastos',    
          amount: 2200, 
          createdAt: new Date('2022-09-14 16:28:00'),
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
