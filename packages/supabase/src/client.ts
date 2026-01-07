import { createBrowserClient } from "@supabase/ssr";

export interface SupabaseConfig {
  url: string;
  anonKey: string;
}

export function createClientFactory<T = unknown>(config: SupabaseConfig) {
  const { url, anonKey } = config;

  if (!url || !anonKey) {
    throw new Error("Missing Supabase configuration: url and anonKey required");
  }

  return () => createBrowserClient<T>(url, anonKey);
}
