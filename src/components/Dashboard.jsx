import React from 'react'
import supabase from '../supabase-client'

async function getHighestDeal() {
    const response = await supabase
        .from('sales_deals')
        .select(
            `
            name,
            value
            `,
        )
        .order('value', { ascending: false })
        .limit(1)
    console.log(response)
}

async function fetchMetrics() {
    const response = await supabase
        .from('sales_deals')
        .select(
            `
            name,
            value.sum()
            `,
        )
    console.log(response)
}

export default function Dashboard() {

    React.useEffect(() => {
        fetchMetrics()
    }, [])

    return (
        <main>
            <h2 className="title">Total Sales This Quarter ($)</h2>
        </main>
    )
}
