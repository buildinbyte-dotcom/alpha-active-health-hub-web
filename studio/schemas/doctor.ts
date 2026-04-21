import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'doctor',
  title: 'Team Member',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Full Name',
      description: 'Include any honorific prefix (e.g. "Dr.", "Ms.", "Mr.") here if applicable. Do not assume "Dr." for non-physician staff such as physiotherapists or nurses.',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
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
      name: 'role',
      title: 'Role',
      description: 'The team member\'s position (e.g. "Consultant Rheumatologist", "Physiotherapist", "Practice Nurse"). Do not default to a physician role.',
      type: 'string',
    }),
    defineField({
      name: 'credentials',
      title: 'Credentials',
      type: 'string',
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [],
        },
      ],
    }),
    defineField({
      name: 'specialties',
      title: 'Specialties',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
})
