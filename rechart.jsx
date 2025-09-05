import supabase from './supabase-client';
import { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

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

  // Transform data for Recharts
  const chartData = metrics.map((m) => ({
    name: m.name,
    value: m.sum || 0, // Handle potential undefined values
  }));

  function getYAxisMax() {
    if (metrics.length > 0) {
      const maxSum = Math.max(...metrics.map((m) => m.sum || 0));
      return maxSum + 2000;
    }
    return 5000;
  }

  return (
    <div className="dashboard-wrapper">
      <div className="chart-container">
        <h2>Total Sales This Quarter ($)</h2>
        <div style={{ width: '100%', height: 400 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 40,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="name" 
                padding={{ left: 20, right: 20 }}
              />
              <YAxis 
                domain={[0, getYAxisMax()]}
              />
              <Bar 
                dataKey="value" 
                fill="#58d675"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;