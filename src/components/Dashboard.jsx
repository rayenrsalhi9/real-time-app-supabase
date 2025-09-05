import React from 'react'
import supabase from '../supabase-client'

async function fetchMetrics(setMetrics) {
    try {
        const {error, data} = await supabase
            .from('sales_deals')
            .select(
                `
                name,
                value.sum()
                `,
            )
        if (error) throw error
        setMetrics(data)
    } catch(err) {
        console.log(`Error fetching metrics: ${err}`)
    }
}

export default function Dashboard() {

    const [metrics, setMetrics] = React.useState([])
    console.log(metrics)

    React.useEffect(() => {
        fetchMetrics(setMetrics)
    }, [])

    return (
        <main>
            <h2 className="title">Total Sales This Quarter ($)</h2>
        </main>
    )
}
