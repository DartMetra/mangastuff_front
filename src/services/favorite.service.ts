import $api from '.';

export async function getFavorite() {
  return await $api.get('api/favorite');
}

export async function deleteFavorite(manga: string) {
  return await $api.delete('api/favorite', { data: { manga } });
}

export async function addFavorite(manga: string, to: string) {
  console.log('ADD', manga);
  return await $api.patch('api/favorite', { manga, to });
}
