import type { Block } from 'payload'

export const AboutSection: Block = {
  slug: 'aboutSection',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Title',
      defaultValue: 'Über mich',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      label: 'Description',
      defaultValue:
        'Ich begleite Menschen auf ihrem Weg zu mehr Körperbewusstsein, Wohlbefinden und erfüllter Sexualität – mit Empathie, Erfahrung und einem ganzheitlichen Blick.',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: false,
      label: 'Portrait Image',
    },
  ],
  interfaceName: 'AboutSectionBlock',
}

