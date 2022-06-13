import $api from '.';

export async function getChaptersByManga(_id: string) {
  return await $api.get('api/chapter/' + _id + '/byManga');
}

export async function getChapter(_id: string, chapter: string) {
  return await $api.get('api/chapter/' + _id + '/byManga/' + chapter);
}
