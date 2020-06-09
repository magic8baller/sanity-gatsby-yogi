export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5edfeb23ed184000f390518d',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-yogi-studio',
                  apiId: 'e882cd78-148f-4c1c-8404-792ba73a58cb'
                },
                {
                  buildHookId: '5edfeb23ed1840f0929053d1',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-yogi',
                  apiId: 'b1ef12a0-0227-439a-a6bd-24e8087653de'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/magic8baller/sanity-gatsby-yogi',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-yogi.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
