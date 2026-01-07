import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export interface SupabaseConfig {
  url: string;
  anonKey: string;
}

export function createServerFactory<T = unknown>(config: SupabaseConfig) {
  const { url, anonKey } = config;

  if (!url || !anonKey) {
    throw new Error("Missing Supabase configuration: url and anonKey required");
  }

  return async () => {
    const cookieStore = await cookies();

    return createServerClient<T>(url, anonKey, {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          } catch {
            // Server Component context - cookie setting ignored
          }
        },
      },
    });
  };
}
