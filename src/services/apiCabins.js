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

export async function createCabin(newCabin) {
  // 1. Create a unique name for the image to avoid name collisions
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    '/',
    ''
  );

  // 2. Create the URL path that will be stored in the database
  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  // 3. Create the cabin row in the database
  const { data, error } = await supabase
    .from('cabins')
    .insert([{ ...newCabin, image: imagePath }])
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error('Cabin could not be created');
  }

  // 4. Upload the actual image file to the bucket
  const { error: storageError } = await supabase.storage
    .from('cabin-images')
    .upload(imageName, newCabin.image);

  // 5. Clean up: If image upload failed, delete the cabin row
  if (storageError) {
    await supabase.from('cabins').delete().eq('id', data.id);
    console.error(storageError);
    throw new Error(
      'Cabin image could not be uploaded and the cabin was not created'
    );
  }

  return data;
}
