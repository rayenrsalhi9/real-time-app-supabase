import React from "react"
import supabase from "./supabase-client"
import { fetchMetrics } from "./utils"
import Header from "./components/Header"
import Dashboard from "./components/Dashboard"
import Form from "./components/Form"

export default function App() {

  const [metrics, setMetrics] = React.useState([])

    React.useEffect(() => {

        fetchMetrics(setMetrics)

        const channel = supabase
            .channel('deal-changes')
            .on(
                'postgres_changes',
                { 
                event: '*',
                schema: 'public', 
                table: 'sales_deals' 
                },
                () => {
                    fetchMetrics(setMetrics)
                })
            .subscribe();

        return () => supabase.removeChannel(channel);
    }, [])

  return (
    <div className="container">
      <Header />
      <div className="content-wrapper">
        <Dashboard metrics={metrics} />
        <Form metrics={metrics} />
      </div>
    </div>
  )
}
