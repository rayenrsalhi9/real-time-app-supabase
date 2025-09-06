import supabase from "./supabase-client"

export async function fetchMetrics(setMetrics) {
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

export async function getInitialSession(setSession) {
    try {
        const {data, error} = await supabase.auth.getSession()
        if (error) throw error
        setSession(data.session)
    } catch(err) {
        console.log(`Error fetching initial session: ${err}`)
    }
}