import { 
    BarChart, 
    Bar, 
    XAxis, YAxis, 
    CartesianGrid, 
    ResponsiveContainer,
    Tooltip
} from 'recharts';

export default function Dashboard({metrics}) {

    const chartData = metrics.map(m => (
        {
            name: m.name,
            value: m.sum || 0
        }
    ))

    function getYAxisMax() {
        if (metrics.length > 0) {
            const maxSum = Math.max(...metrics.map((m) => m.sum || 0));
            return maxSum + 2000;
        }
        return 5000;
    }

    return (
        <main>
            <h2 className="title">Total Sales This Quarter ($)</h2>
            <div className="chart-container">
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
                        padding={{ left: 10, right: 10 }}
                    />
                    <YAxis 
                        domain={[0, getYAxisMax()]}
                    />
                    <Tooltip 
                        formatter={(value) => [`$${value.toLocaleString()}`, 'Sales']}
                        labelStyle={{ color: '#333' }}
                        contentStyle={{ 
                            backgroundColor: 'rgba(255, 255, 255, 0.9)',
                            border: '1px solid #ccc',
                            borderRadius: '4px'
                        }}
                    />
                    <Bar 
                        dataKey="value" 
                        fill="#58d675"
                        radius={[6, 6, 0, 0]}
                    />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </main>
    )
}