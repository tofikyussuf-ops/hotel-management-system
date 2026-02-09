import supabase from './supabase';

export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function getCurrentUser() {
  // 1. Check if there is a session in local storage
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  // 2. If session exists, fetch the user data safely
  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  return data?.user;
}
