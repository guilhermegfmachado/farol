import { getCollection } from 'astro:content';

export async function getAllEntries() {
  const profiles   = await getCollection('profiles');
  const references = await getCollection('references');
  return [...profiles, ...references].sort(
    (a, b) => Number(a.data.index) - Number(b.data.index)
  );
}
