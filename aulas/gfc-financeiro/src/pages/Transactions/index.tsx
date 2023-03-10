import { useContext, useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { dataFormatter, priceFormatter } from "../../utils/formatter";

import { SearchForm } from "./components/SearchForm";
import { PriceHighLigh, TransactionContainer, TransactionsTable } from "./styles";

export function Transactions() {
  const { transactions } = useContext(TransactionsContext);

  return (
    <div>
      <Header />
      <Summary />

      <TransactionContainer>
        <SearchForm />
        
        <TransactionsTable>
          <tbody>
            {transactions.map(transaction => {
              return (
                <tr key={transaction.id}>
                  <td width="50%">{transaction.description}</td>
                  <td>
                    <PriceHighLigh variant={transaction.type}>
                      {transaction.type == 'outcome' && '- '}
                      {priceFormatter.format(transaction.price)}
                    </PriceHighLigh>
                  </td> 
                  <td>{transaction.category}</td>
                  <td>{dataFormatter.format(new Date(transaction.createdAt))}</td>
                </tr>
              )
            })}
          </tbody>
        </TransactionsTable>
      </TransactionContainer>
      
    </div>
  )
}