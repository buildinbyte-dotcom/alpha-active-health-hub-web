import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'affiliateLink',
      title: 'Affiliate Link',
      type: 'url',
    }),
    defineField({
      name: 'doctorNote',
      title: "Doctor's Note",
      type: 'string',
      description: 'Why is this recommended? e.g. "Great for opening jars.",
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
            { title: 'Ergonomics', value: 'ergonomics' },
            { title: 'Mobility Aids', value: 'mobility' },
            { title: 'Supplements', value: 'supplements' },
            { title: 'Other', value: 'other' },
        ]
      }
    }),
  ],
})