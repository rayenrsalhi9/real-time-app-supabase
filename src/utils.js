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
        console.table(data)
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
        const {data, error} = await supabase
            .auth
            .signInWithPassword({email: email.trim().toLowerCase(), password})
        
        if (error) return error.message
        if (data?.session) return redirect('/dashboard')
        return 'Unexpected error when authenticating'
  } catch(err) {
    console.log(`Unexpected error when authenticating: ${err.message}`)
    return 'Unexpected error when authenticating'
  }
}

export async function signOutUser() {
    try {
        const {error} = await supabase.auth.signOut()
        if (error) {
            console.log(`Error signing out: ${error.message}`)
            throw error.message
        }
    } catch(err) {
        console.log(err)
        throw err
    }
}