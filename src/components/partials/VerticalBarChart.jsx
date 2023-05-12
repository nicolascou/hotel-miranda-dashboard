import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Bookings Chart',
      color: '#222',
      padding: {
        bottom: 20
      },
      font: {
        size: 22
      }
    }
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Check Out',
      data: labels.map(() => faker.datatype.number({ min: 2, max: 20 })),
      backgroundColor: '#E23428'
    },
    {
      label: 'Check In',
      data: labels.map(() => faker.datatype.number({ min: 2, max: 20 })),
      backgroundColor: '#135846'
    },
  ],
};

const VerticalBarChart = () => {
  return <Bar style={{ width: '100%', height: '100%' }} options={options} data={data} />;
}

export default VerticalBarChart
