import { createClient } from "@supabase/supabase-js";

const sbUrl = import.meta.env.VITE_SB_URL
const sbKey = import.meta.env.VITE_SB_KEY

const supabase = createClient(sbUrl, sbKey)

export default supabase