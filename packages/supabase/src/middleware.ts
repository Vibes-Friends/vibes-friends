import { createServerClient } from "@supabase/ssr";
import { type NextRequest, NextResponse } from "next/server";

export interface SupabaseConfig {
  url: string;
  anonKey: string;
}

export function createMiddlewareClient<T = unknown>(
  request: NextRequest,
  config: SupabaseConfig
) {
  const { url, anonKey } = config;

  if (!url || !anonKey) {
    throw new Error("Missing Supabase configuration: url and anonKey required");
  }

  let supabaseResponse = NextResponse.next({ request });

  const supabase = createServerClient<T>(url, anonKey, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
        supabaseResponse = NextResponse.next({ request });
        cookiesToSet.forEach(({ name, value, options }) =>
          supabaseResponse.cookies.set(name, value, options)
        );
      },
    },
  });

  return { supabase, response: supabaseResponse };
}

export async function updateSession<T = unknown>(
  request: NextRequest,
  config: SupabaseConfig
) {
  const { supabase, response } = createMiddlewareClient<T>(request, config);

  // Refresh session if expired
  await supabase.auth.getUser();

  return response;
}
