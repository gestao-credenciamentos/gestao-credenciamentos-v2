import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://SEU_PROJECT_ID.supabase.co";
const supabaseAnonKey =
  "sb_publishable_QE8edqm36HjhIMOMarqASw_XiPppZTj";

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
);
