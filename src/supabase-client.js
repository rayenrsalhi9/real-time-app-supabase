import { createClient } from "@supabase/supabase-js";

const sbUrl = import.meta.env.VITE_SB_URL
const sbKey = import.meta.env.VITE_SB_KEY

const client = createClient(sbUrl, sbKey)

export default client