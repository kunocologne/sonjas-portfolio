import type { Block } from 'payload'

export const ServicesSection: Block = {
  slug: 'servicesSection',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Title',
      defaultValue: 'Einzelberatung Rundum',
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
        { title: 'Intimität & Sexualität', description: '' },
        { title: 'Kräftigung & Entlastung der Beckenbodenmuskulatur', description: '' },
        { title: 'Bewältigung von Konflikten & Lebenskrisen', description: '' },
      ],
    },
  ],
  interfaceName: 'ServicesSectionBlock',
}

