export interface SearchResult {
  type: 'product' | 'service' | 'blog' | 'area' | 'resource';
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  url: string;
  image?: string;
}

export function searchContent(query: string): SearchResult[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];

  const results: SearchResult[] = [];

  // Search products
  const { products } = require('@/data/products');
  products.forEach((p: { slug: string; name: string; tagline: string; description: string; images: { src: string }[] }) => {
    if (p.name.toLowerCase().includes(q) || p.tagline.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)) {
      results.push({
        type: 'product',
        title: p.name,
        titleAr: p.name,
        description: p.tagline,
        descriptionAr: p.tagline,
        url: `/products/${p.slug}`,
        image: p.images[0]?.src,
      });
    }
  });

  // Search services
  const { services } = require('@/data/services');
  services.forEach((s: { slug: string; title: string; tagline: string; description: string; image: string }) => {
    if (s.title.toLowerCase().includes(q) || s.tagline.toLowerCase().includes(q) || s.description.toLowerCase().includes(q)) {
      results.push({
        type: 'service',
        title: s.title,
        titleAr: s.title,
        description: s.tagline,
        descriptionAr: s.tagline,
        url: `/services/${s.slug}`,
        image: s.image,
      });
    }
  });

  // Search blog posts
  const { blogPosts } = require('@/data/blog');
  blogPosts.forEach((p: { slug: string; title: string; excerpt: string; image: string }) => {
    if (p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q)) {
      results.push({
        type: 'blog',
        title: p.title,
        titleAr: p.title,
        description: p.excerpt,
        descriptionAr: p.excerpt,
        url: `/blog/${p.slug}`,
        image: p.image,
      });
    }
  });

  // Search areas
  const { areas } = require('@/data/areas');
  areas.forEach((a: { slug: string; name: string; nameAr: string; description: string; descriptionAr: string }) => {
    if (a.name.toLowerCase().includes(q) || a.nameAr.includes(q) || a.description.toLowerCase().includes(q)) {
      results.push({
        type: 'area',
        title: a.name,
        titleAr: a.nameAr,
        description: a.description,
        descriptionAr: a.descriptionAr,
        url: `/areas/${a.slug}`,
      });
    }
  });

  // Search resources
  const { resources } = require('@/data/resources');
  resources.forEach((r: { slug: string; title: string; titleAr: string; description: string; descriptionAr: string }) => {
    if (r.title.toLowerCase().includes(q) || r.description.toLowerCase().includes(q)) {
      results.push({
        type: 'resource',
        title: r.title,
        titleAr: r.titleAr,
        description: r.description,
        descriptionAr: r.descriptionAr,
        url: `/resources/${r.slug}`,
      });
    }
  });

  return results;
}
