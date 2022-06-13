import $api from '.';

export async function getChaptersByManga(_id: string) {
  return await $api.get('api/chapter/' + _id + '/byManga');
}

export async function getChapter(_id: string, chapter: string) {
  return await $api.get('api/chapter/' + _id + '/byManga/' + chapter);
}

export async function getChapters(pag: { limit?: number; skip?: number; order?: 1 | -1; sortBy?: string }) {
  return await $api.get('api/chapter', {
    params: pag,
  });
}
