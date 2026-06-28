import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://bharathydraulics.in',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    // Add other routes here as the site grows
  ];
}
