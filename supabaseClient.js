import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = 'https://nofoppnypgefetvywgfz.supabase.co'
const supabaseKey = 'sb_publishable_IQC_Nji-rV5iZ8sFf_3-xA_L4hXxwHt'

export const supabase = createClient(supabaseUrl, supabaseKey)