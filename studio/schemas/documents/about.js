export default {
  name: 'about',
  type: 'document',
  title: 'About',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'lead',
      type: 'simpleText',
      title: 'Lead'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'body',
    }
  ]
}
