

import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const TransactionChart = ({ customer, transactions }) => {
  const data = {
    labels: transactions.map(t => t.date),
    datasets: [
      {
        label: `Total Transactions for ${customer.name}`,
        data: transactions.map(t => t.amount),
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
      }
    ]
  };

  const options = {
    plugins: {
      legend: {
        labels: {
          color: '#94A3B8'  // Change the color of the legend text
        }
      }
    },
    scales: {
      x: {
        ticks: {
          color: '#94A3B8'  // Change the color of the x-axis labels
        }
      },
      y: {
        ticks: {
          color: '#94A3B8'  // Change the color of the y-axis labels
        }
      }
    }
  };

  return (
    <div className="card glass-card">
      <div className="card-body">
        <h2 className="card-title" style={{ color: '#94A3B8' }}>{customer.name}'s Transactions Details</h2>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default TransactionChart;
