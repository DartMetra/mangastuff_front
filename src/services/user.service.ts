import $api from '.';

export async function updateMe() {
  return await $api.post('api/user/me');
}
