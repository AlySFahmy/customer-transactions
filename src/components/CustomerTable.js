



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const CustomerTable = ({ onSelectCustomer }) => {
//   const [customers, setCustomers] = useState([]);
//   const [transactions, setTransactions] = useState([]);
//   const [searchName, setSearchName] = useState('');
//   const [searchAmount, setSearchAmount] = useState('');

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const customerRes = await axios.get('http://localhost:3001/customers');
//         const transactionRes = await axios.get('http://localhost:3001/transactions');
//         setCustomers(customerRes.data);
//         setTransactions(transactionRes.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };
//     fetchData();
//   }, []);

//   const handleSelectCustomer = (customer) => {
//     const customerTransactions = transactions.filter(t => t.customer_id === customer.id);
//     onSelectCustomer(customer, customerTransactions);
//   };

//   const filteredCustomers = customers.filter(customer => {
//     if (!customer || !customer.name) {
//       return false;
//     }
//     const customerTransactions = transactions.filter(t => t.customer_id === customer.id);
//     const totalAmount = customerTransactions.reduce((acc, curr) => acc + curr.amount, 0);

//     return (
//       customer.name.toLowerCase().includes(searchName.toLowerCase()) &&
//       (searchAmount === '' || totalAmount >= parseFloat(searchAmount))
//     );
//   });

//   return (
//     <div className="card glass-card">
//       <div className="card-body">
//         <div className="mb-3">
//           <input
//             type="text"
//             placeholder="Filter by name"
//             value={searchName}
//             onChange={e => setSearchName(e.target.value)}
//             className="form-control mb-2"
//           />
//           <input
//             type="number"
//             placeholder="Minimum Transaction Amount"
//             value={searchAmount}
//             onChange={e => setSearchAmount(e.target.value)}
//             className="form-control"
//           />
//         </div>
//         <table className="table table-hover">
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th className="text-center">Total Transactions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredCustomers.map(customer => {
//               const customerTransactions = transactions.filter(t => t.customer_id === customer.id);
//               const totalAmount = customerTransactions.reduce((acc, curr) => acc + curr.amount, 0);
//               return (
//                 <tr key={customer.id} onClick={() => handleSelectCustomer(customer)} className="cursor-pointer">
//                   <td>{customer.name}</td>
//                   <td className="text-center">{totalAmount}</td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default CustomerTable;


import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CustomerTable = ({ onSelectCustomer }) => {
  const [customers, setCustomers] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [searchAmount, setSearchAmount] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const customerRes = await axios.get('https://customer-transaction-api.onrender.com/customers');
        const transactionRes = await axios.get('https://customer-transaction-api.onrender.com/transactions');
        setCustomers(customerRes.data);
        setTransactions(transactionRes.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const handleSelectCustomer = (customer) => {
    const customerTransactions = transactions.filter(t => t.customer_id === customer.id);
    onSelectCustomer(customer, customerTransactions);
  };

  const filteredCustomers = customers.filter(customer => {
    if (!customer || !customer.name) {
      return false;
    }
    const customerTransactions = transactions.filter(t => t.customer_id === customer.id);
    const totalAmount = customerTransactions.reduce((acc, curr) => acc + curr.amount, 0);

    return (
      customer.name.toLowerCase().includes(searchName.toLowerCase()) &&
      (searchAmount === '' || totalAmount >= parseFloat(searchAmount))
    );
  });

  return (
    <div className="card glass-card">
      <div className="card-body">
        <div className="mb-3">
          <input
            type="text"
            placeholder="Filter by name"
            value={searchName}
            onChange={e => setSearchName(e.target.value)}
            className="form-control mb-2"
          />
          <input
            type="number"
            placeholder="Minimum Transaction Amount"
            value={searchAmount}
            onChange={e => setSearchAmount(e.target.value)}
            className="form-control"
          />
        </div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Name</th>
              <th className="text-center">Total Transactions</th>
            </tr>
          </thead>
          <tbody>
            {filteredCustomers.map(customer => {
              const customerTransactions = transactions.filter(t => t.customer_id === customer.id);
              const totalAmount = customerTransactions.reduce((acc, curr) => acc + curr.amount, 0);
              return (
                <tr key={customer.id} onClick={() => handleSelectCustomer(customer)} className="cursor-pointer">
                  <td>{customer.name}</td>
                  <td className="text-center">{totalAmount}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerTable;
