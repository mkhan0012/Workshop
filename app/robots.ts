import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      // Allow AI Search & Citation bots to ensure site appears in AI search results
      {
        userAgent: [
          'OAI-SearchBot',
          'ChatGPT-User',
          'Claude-SearchBot',
          'Claude-User',
          'PerplexityBot',
          'YouBot',
          'Googlebot',
          'Bingbot',
        ],
        allow: '/',
      },
      // Block AI Training bots to protect content from scraping
      {
        userAgent: [
          'GPTBot',
          'ClaudeBot',
          'Google-Extended',
          'CCBot',
          'Meta-ExternalAgent',
          'Bytespider',
          'Applebot-Extended',
          'Amazonbot',
        ],
        disallow: '/',
      },
    ],
    sitemap: 'https://bharathydraulics.in/sitemap.xml',
  };
}
