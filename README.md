# Sales Tracker

A modern, responsive web application for tracking and visualizing sales performance data. Built with React and powered by Supabase for real-time data management.

## Features

### 📊 Interactive Dashboard
- **Real-time Sales Visualization**: Dynamic bar charts displaying quarterly sales data
- **Hover Tooltips**: Hover over chart bars to see exact sales values with formatted currency display
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Clean UI**: Modern, intuitive interface with smooth animations

### 🗄️ Data Management
- **Supabase Integration**: Real-time database connection for live data updates
- **Sales Deals Tracking**: Comprehensive sales data storage and retrieval
- **Error Handling**: Robust error handling with console logging for debugging

### 🎯 Key Metrics
- **Total Sales by Category**: Visual breakdown of sales performance across different product categories
- **Quarterly Performance**: Track sales trends over time
- **Currency Formatting**: Proper currency display with thousands separators

## Tech Stack

- **Frontend**: React 18 with Vite for fast development
- **Charts**: Recharts library for interactive data visualization
- **Database**: Supabase for real-time data storage and retrieval
- **Styling**: CSS3 with modern design principles
- **Build Tool**: Vite for optimized builds and hot module replacement

## Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn package manager
- Supabase account and project setup

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd sales-tracker
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory and add your Supabase credentials:
```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
sales-tracker/
├── src/
│   ├── components/
│   │   ├── Dashboard.jsx    # Main dashboard with sales charts
│   │   ├── Header.jsx       # Navigation header
│   │   └── Form.jsx         # Data entry form
│   ├── App.jsx              # Main application component
│   ├── index.css            # Global styles
│   ├── supabase-client.js   # Supabase configuration
│   └── utils.js             # Utility functions
├── public/
├── package.json
├── vite.config.js
└── README.md
```

## Usage

### Viewing Sales Data
- Navigate to the dashboard to see quarterly sales visualization
- Hover over any bar in the chart to see the exact sales value for that category
- Data updates automatically when changes are made to the sales database

### Adding New Sales Data
- Use the integrated form component to add new sales deals
- All data is synchronized with Supabase in real-time
- The dashboard will automatically refresh to show updated information

## Customization

### Chart Appearance
The chart colors and styling can be customized in the `Dashboard.jsx` file:
- Bar color: Modify the `fill="#58d675"` prop
- Tooltip styling: Adjust the `contentStyle` object in the Tooltip component
- Axis formatting: Customize the XAxis and YAxis components

### Data Queries
The sales data fetching logic is in the `fetchMetrics` function in `Dashboard.jsx`. You can modify the Supabase query to filter or aggregate data differently.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support or questions, please open an issue in the GitHub repository or contact the development team.