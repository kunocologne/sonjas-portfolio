import type { Block } from 'payload'

export const ServicesSection: Block = {
  slug: 'servicesSection',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Title',
      defaultValue: 'Angebot',
    },
    {
      name: 'services',
      type: 'array',
      required: true,
      label: 'Services',
      minRows: 1,
      maxRows: 6,
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          label: 'Service Title',
        },
        {
          name: 'description',
          type: 'textarea',
          required: false,
          label: 'Service Description',
        },
      ],
      defaultValue: [
        { title: 'Physiotherapie', description: '' },
        { title: 'Sexualberatung', description: '' },
        { title: 'Körperarbeit & Achtsamkeit', description: '' },
      ],
    },
  ],
  interfaceName: 'ServicesSectionBlock',
}

