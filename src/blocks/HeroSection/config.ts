import type { Block } from 'payload'

import {
  FixedToolbarFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const HeroSection: Block = {
  slug: 'heroSection',
  fields: [
    {
      name: 'headline',
      type: 'text',
      required: true,
      label: 'Headline',
      defaultValue: 'Ganzheitliche Physiotherapie & Sexualberatung',
    },
    {
      name: 'subline',
      type: 'textarea',
      required: true,
      label: 'Subline',
      defaultValue: 'Für mehr Bewusstsein, Heilung und Verbindung mit deinem Körper.',
    },
    {
      name: 'buttonText',
      type: 'text',
      required: true,
      label: 'Button Text',
      defaultValue: 'Termin vereinbaren',
    },
    {
      name: 'buttonLink',
      type: 'text',
      required: false,
      label: 'Button Link',
      defaultValue: '#contact',
    },
  ],
  interfaceName: 'HeroSectionBlock',
}

