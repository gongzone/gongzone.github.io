export function slugifyTag(tag?: string) {
  if (!tag) return null;

  return tag.toLowerCase().replace('-', '');
}
