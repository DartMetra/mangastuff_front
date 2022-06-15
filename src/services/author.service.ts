import $api from '.';

export async function getAuthorList(pag: { limit?: number; skip?: number; order?: 1 | -1; sortBy?: string }) {
  return await $api.get('api/author', {
    params: pag,
  });
}
