// import React, { useState } from 'react';
// import CustomerTable from './components/CustomerTable';
// import TransactionChart from './components/TransactionChart';
// import './App.css';

// function App() {
//   const [selectedCustomer, setSelectedCustomer] = useState(null);
//   const [customerTransactions, setCustomerTransactions] = useState([]);

//   const handleSelectCustomer = (customer, transactions) => {
//     setSelectedCustomer(customer);
//     setCustomerTransactions(transactions);
//   };

//   return (
//     <div className="container my-5">
//       <h1 className="text-center mb-4">Customer Transactions</h1>
//       <div className="row">
//         <div className="col-md-6 mb-4">
//           <CustomerTable onSelectCustomer={handleSelectCustomer} />
//         </div>
//         {selectedCustomer && (
//           <div className="col-md-6">
//             <TransactionChart customer={selectedCustomer} transactions={customerTransactions} />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;



import React, { useState } from 'react';
import CustomerTable from './components/CustomerTable';
import TransactionChart from './components/TransactionChart';
import './App.css';

function App() {
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [customerTransactions, setCustomerTransactions] = useState([]);

  const handleSelectCustomer = (customer, transactions) => {
    setSelectedCustomer(customer);
    setCustomerTransactions(transactions);
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Customer Transactions</h1>
      <div className="row justify-content-center">
        <div className="col-md-6 mb-4">
          <CustomerTable onSelectCustomer={handleSelectCustomer} />
        </div>
        {selectedCustomer && (
          <div className="col-md-6">
            <TransactionChart customer={selectedCustomer} transactions={customerTransactions} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
