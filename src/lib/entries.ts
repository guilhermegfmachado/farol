import { getCollection } from 'astro:content';

/** Display number for a card: zero-padded, scoped to its own sequence.
    Profiles run 01-07 and references 01-05 independently — the number is derived
    here rather than stored, so the two sequences cannot collide or drift. */
export function displayIndex(data: { order: number }) {
  return String(data.order).padStart(2, '0');
}

/** Profiles first, then references; each in its own order. */
export async function getAllEntries() {
  const profiles = (await getCollection('profiles')).sort((a, b) => a.data.order - b.data.order);
  const references = (await getCollection('references')).sort((a, b) => a.data.order - b.data.order);
  return [...profiles, ...references];
}
