import supabase, { supabaseUrl } from './supabase';

export async function getCabins() {
  try {
    const { data, error } = await supabase.from('cabins').select('*');

    if (error) {
      throw new Error('Cabins could not be loaded');
    }

    return data;
  } catch (err) {
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

export async function createUpdateCabin(newCabin, id) {
  // 1. Check if we already have a URL string (means no new image upload)
  const hasImagePath =
    typeof newCabin.image === 'string' &&
    newCabin.image.startsWith(supabaseUrl);

  const imageName = `${Math.random()}-${newCabin.image?.name}`.replaceAll(
    '/',
    ''
  );

  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  // 2. Create/edit cabin
  let query = supabase.from('cabins');

  // A) CREATE
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);

  // B) EDIT
  if (id) query = query.update({ ...newCabin, image: imagePath }).eq('id', id);

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error('Cabin could not be created/updated');
  }

  // 3. Upload image if there is a new one
  if (hasImagePath) return data;

  const { error: storageError } = await supabase.storage
    .from('cabin-images')
    .upload(imageName, newCabin.image);

  // 4. Delete the cabin IF there was an error uploading image
  if (storageError) {
    await supabase.from('cabins').delete().eq('id', data.id);
    console.error(storageError);
    throw new Error(
      'Cabin image could not be uploaded and the cabin was not created'
    );
  }

  return data;
}
