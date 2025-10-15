import type { Block } from 'payload'

export const ContactSection: Block = {
  slug: 'contactSection',
  fields: [
    {
      name: 'headline',
      type: 'text',
      required: true,
      label: 'Headline',
      defaultValue: 'Bereit für Veränderung?',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      label: 'Description',
      defaultValue: 'Ich freue mich auf deine Anfrage oder Terminvereinbarung.',
    },
    {
      name: 'buttonText',
      type: 'text',
      required: true,
      label: 'Button Text',
      defaultValue: 'Kontakt aufnehmen',
    },
    {
      name: 'buttonLink',
      type: 'text',
      required: false,
      label: 'Button Link',
      defaultValue: 'mailto:kontakt@sonja-werner.de',
    },
    {
      name: 'email',
      type: 'text',
      required: false,
      label: 'Email Address',
    },
    {
      name: 'phone',
      type: 'text',
      required: false,
      label: 'Phone Number',
    },
  ],
  interfaceName: 'ContactSectionBlock',
}

