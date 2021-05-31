export default {
  name: 'general',
  type: 'document',
  title: 'General',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'intro',
      type: 'simpleText',
      title: 'Intro'
    },
    {
      name: 'social',
      type: 'social',
      title: 'Social'
    },
    {
      name: 'newsletter',
      type: 'newsletter',
      title: 'Newsletter'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Describe your site for search engines and social media.'
    }
  ]
}
