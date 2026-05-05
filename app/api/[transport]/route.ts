import { createMcpHandler } from 'mcp-handler';
import { z } from 'zod';
import { siteConfig, services, cities } from '@/lib/site-config';

const handler = createMcpHandler(
  (server) => {
    server.registerTool(
      'get_company_info',
      {
        title: 'Get company info',
        description:
          'Return contact details, tagline, and basic facts about Quality Glass & Design of The Upstate.',
        inputSchema: {},
      },
      async () => ({
        content: [
          {
            type: 'text',
            text: JSON.stringify(
              {
                name: siteConfig.name,
                shortName: siteConfig.shortName,
                tagline: siteConfig.tagline,
                description: siteConfig.description,
                url: siteConfig.url,
                phone: siteConfig.phone,
                email: siteConfig.email,
                founded: siteConfig.founded,
                reviewCount: siteConfig.reviewCount,
                reviewRating: siteConfig.reviewRating,
                social: siteConfig.social,
              },
              null,
              2,
            ),
          },
        ],
      }),
    );

    server.registerTool(
      'list_services',
      {
        title: 'List services',
        description: 'List every service QGDU offers, with slugs and descriptions.',
        inputSchema: {},
      },
      async () => ({
        content: [{ type: 'text', text: JSON.stringify(services, null, 2) }],
      }),
    );

    server.registerTool(
      'get_service',
      {
        title: 'Get service detail',
        description: 'Return the full description of a single service by slug.',
        inputSchema: {
          slug: z
            .string()
            .describe('Service slug, e.g. "frameless-shower-doors" or "hydroslide".'),
        },
      },
      async ({ slug }) => {
        const service = services.find((s) => s.slug === slug);
        if (!service) {
          return {
            content: [
              {
                type: 'text',
                text: `No service found with slug "${slug}". Available: ${services
                  .map((s) => s.slug)
                  .join(', ')}`,
              },
            ],
            isError: true,
          };
        }
        return {
          content: [{ type: 'text', text: JSON.stringify(service, null, 2) }],
        };
      },
    );

    server.registerTool(
      'list_service_areas',
      {
        title: 'List service areas',
        description: 'List the Upstate cities QGDU serves.',
        inputSchema: {},
      },
      async () => ({
        content: [{ type: 'text', text: JSON.stringify(cities, null, 2) }],
      }),
    );

    server.registerTool(
      'request_quote_url',
      {
        title: 'Get quote request URL',
        description:
          'Return the URL where a customer can submit a quote request for a glass project.',
        inputSchema: {},
      },
      async () => ({
        content: [
          {
            type: 'text',
            text: `${siteConfig.url}/quote`,
          },
        ],
      }),
    );
  },
  {},
  {
    basePath: '/api',
    maxDuration: 60,
    verboseLogs: true,
  },
);

export { handler as GET, handler as POST, handler as DELETE };
