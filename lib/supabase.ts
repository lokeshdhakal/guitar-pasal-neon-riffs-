import { createClient } from '@supabase/supabase-js'

// These environment variables should be set in your .env.local file
// NEXT_PUBLIC_SUPABASE_URL=your-supabase-project-url
// NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
