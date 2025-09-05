import supabase from './supabase-client';
import { useEffect, useState } from 'react';
import { Chart } from 'react-charts';

function Dashboard() {
  const [metrics, setMetrics] = useState([]);

  useEffect(() => {
    fetchMetrics()
  }, []);
	
	async function fetchMetrics() {
    try {
      const { data, error } = await supabase
        .from('sales_deals')
        .select(
          `
          name,
          value.sum()
          `,
        )
      if (error) {
        throw error;
      }
      setMetrics(data);
    } catch (error) {
        console.error('Error fetching metrics:', error);
    }
  }

  const chartData = [
    {
      data: metrics.map((m) => ({
        primary: m.name,
        secondary: m.sum,
      })),
    },
  ];

  const primaryAxis = {
    getValue: (d) => d.primary,
    scaleType: 'band',
    padding: 0.2,
    position: 'bottom',
  };

  const secondaryAxes = [
    {
      getValue: (d) => d.secondary,
      scaleType: 'linear',
      min: 0,
      max: y_max(),
      padding: {
        top: 20,
        bottom: 40,
      },
    },
  ];

  function y_max() {
    if (metrics.length > 0) {
      const maxSum = Math.max(...metrics.map((m) => m.sum));
      return maxSum + 2000;
    }
    return 5000; 
  }

  return (
    <div className="dashboard-wrapper">
      <div className="chart-container">
        <h2>Total Sales This Quarter ($)</h2>
        <div style={{ flex: 1 }}>
          <Chart
            options={{
              data: chartData,
              primaryAxis,
              secondaryAxes,
              type: 'bar',
              defaultColors: ['#58d675'],
              tooltip: {
                show: false,
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}


export default Dashboard;