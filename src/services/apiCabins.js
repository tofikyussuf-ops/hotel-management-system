import supabase from './supabase';

export async function getCabins() {
  try {
    const { data, error } = await supabase.from('cabins').select('*');

    if (error) {
      throw new Error('Cabins could not be loaded');
    }

    return data;
  } catch (err) {
    // This catches both Supabase errors and unexpected network errors
    throw new Error(err.message);
  }
}

export async function deleteCabin(id) {
  try {
    const { data, error } = await supabase.from('cabins').delete().eq('id', id);
    if (error) {
      throw new Error('Cabins could not be deleted');
    }
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}
