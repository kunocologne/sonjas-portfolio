import type { Block } from 'payload'

export const FooterSection: Block = {
  slug: 'footerSection',
  fields: [
    {
      name: 'copyrightText',
      type: 'text',
      required: true,
      label: 'Copyright Text',
      defaultValue: '© 2025 Sonja Werner',
    },
    {
      name: 'links',
      type: 'array',
      required: false,
      label: 'Footer Links',
      maxRows: 5,
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'url',
          type: 'text',
          required: true,
        },
      ],
      defaultValue: [
        { label: 'Impressum', url: '/impressum' },
        { label: 'Datenschutz', url: '/datenschutz' },
      ],
    },
  ],
  interfaceName: 'FooterSectionBlock',
}

