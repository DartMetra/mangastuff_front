import $api from './index';
import { API_URL } from './index';

export async function getMangaList(pag: { limit?: number; skip?: number; order?: 1 | -1; sortBy?: string }) {
  return await $api.get('api/manga', {
    params: pag,
  });
}

export async function getMangaInfo(id: string) {
  return await $api.get('api/manga/' + id);
}

export async function getMangaSimilar(id: string) {
  return await $api.get('api/manga/' + id + '/similar');
}

export async function createManga(body) {
  return await $api.post('api/manga', body);
}

export async function updateManga(id: string, body) {
  return await $api.post('api/manga/' + id, body);
}
