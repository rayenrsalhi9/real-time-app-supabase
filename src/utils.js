import supabase from "./supabase-client"
import { redirect } from "react-router-dom"

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

export async function signInUser(email, password) {
    try {
    const {data, error} = await supabase.auth
      .signInWithPassword({email: email.toLowerCase(), password})
    
    // 3. handle known errors
    if (error) {
      console.log('An error occurred when signing in: ', error.message)
      return error.message
    }
    // 4. handle success
    if (data?.session) {
      console.log('Login success', data)
      return redirect('/dashboard')
    }
    
  } catch(err) {
    console.log(`Unexpected error when authenticating: ${err.message}`)
    return 'Unexpected error when authenticating'
  }
}