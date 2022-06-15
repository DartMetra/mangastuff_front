import $api from '.';

export async function getGenreList(pag: { limit?: number; skip?: number; order?: 1 | -1; sortBy?: string }) {
  return await $api.get('api/genre', {
    params: pag,
  });
}
