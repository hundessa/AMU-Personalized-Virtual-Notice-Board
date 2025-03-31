

export function slugify(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-") // Replace spaces & special chars with hyphens
    .replace(/^-+|-+$/g, "") // Remove leading/trailing hyphens
    .replace(/--+/g, "-") // Ensure single hyphens
    .trim();
}