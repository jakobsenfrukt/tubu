export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'active',
      type: 'boolean',
      title: 'Active',
      description: 'Check this only if the product is currently available in the shop and the link is active. Unavailable products will not be featured.'
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'mainImage',
      title: 'Product image',
      type: 'figure'
    },
    {
      name: 'details',
      type: 'simpleText',
      title: 'Product details'
    },
    {
      name: 'price',
      type: 'string',
      title: 'Price'
    }
  ],

  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
  },
}
