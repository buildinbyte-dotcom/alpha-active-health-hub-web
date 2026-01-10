export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Product Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'shortDescription',
      title: 'Short Description',
      description: 'Brief description shown on product cards (2-3 lines max)',
      type: 'text',
      rows: 3,
      validation: (Rule: any) => Rule.max(200).warning('Keep it brief for card display'),
    },
    {
      name: 'description',
      title: 'Full Description',
      description: 'Detailed product information with rich formatting',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'Heading 3', value: 'h3' },
            { title: 'Heading 4', value: 'h4' },
          ],
          lists: [
            { title: 'Bullet', value: 'bullet' },
            { title: 'Numbered', value: 'number' },
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
            ],
          },
        },
      ],
    },
    {
      name: 'doctorNote',
      title: "Doctor's Note",
      description: 'Professional recommendation or insight about this product',
      type: 'text',
      rows: 3,
    },
    {
      name: 'image',
      title: 'Product Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'affiliateLink',
      title: 'Amazon Affiliate Link',
      type: 'url',
      validation: (Rule: any) => Rule.required().uri({
        scheme: ['http', 'https']
      }),
    },
    {
      name: 'recommendedBy',
      title: 'Recommended By',
      description: 'Which specialist recommends this product',
      type: 'string',
      options: {
        list: [
          { title: 'Rheumatologist', value: 'Rheumatologist' },
          { title: 'Physiotherapist', value: 'Physiotherapist' },
          { title: 'All Specialists', value: 'All Specialists' },
        ],
      },
    },
    {
      name: 'price',
      title: 'Price (optional)',
      description: 'Display price if applicable',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
      subtitle: 'recommendedBy',
    },
  },
};