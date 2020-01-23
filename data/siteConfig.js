module.exports = {
  siteTitle: 'Dále Run',
  siteDescription: 'Ingeniería de software explicada en tu idioma',
  authorName: 'Eduardo Hernández Guerrero',
  twitterUsername: 'codeninjalalo',
  authorAvatar: 'avatar.jpg', // file in content/images
  multilangPosts: false, // enable/disable flags in post lists
  authorDescription: `
  Eduardo es un nerd apasionado por la tecnología. Se ha dedicado a investigar y poner en práctica distintos lenguajes de programación desde los 16 años de edad y actualmente trabaja como ingeniero de software para empresas de USA y Canadá. Siempre disfruta compartiendo los resultados de sus experimentos tecnológicos con todos los que conoce y aprender algo más en el proceso.
  `,
  siteUrl: 'https://dalerun.com/',
  disqusSiteUrl: 'https://www.dalerun.com/',
  // Prefixes all links. For cases when deployed to something like: domain.ext/base_path
  pathPrefix: '', // Note: it must *not* have a trailing slash.
  siteCover: 'site-cover.png', // file in content/images
  googleAnalyticsId: 'UA-135040717-1',
  background_color: '#ffffff',
  theme_color: '#222222',
  display: 'standalone',
  icon: 'content/images/favicon-32x32.png',
  postsPerPage: 6,
  disqusShortname: 'dalerun',
  headerTitle: 'Dále Run',
  headerLinksIcon: '', // (leave empty to disable: '')
  headerLinks: [
    {
      label: 'Blog',
      url: '/',
    },
    {
      label: 'Subscribirte',
      url: '/subscribirte'
    },
  ],
  // Footer information (ex: Github, Netlify...)
  websiteHost: {
    name: 'GitHub',
    url: 'https://github.com',
  },
  footerLinks: [
    {
      sectionName: 'Explorar',
      links: [
        {
          label: 'Blog',
          url: '/',
        },
        {
          label: 'Subscribirte',
          url: '/subscribirte'
        },
      ],
    },
    {
      sectionName: 'Sígueme',
      links: [
        {
          label: 'GitHub',
          url: 'https://github.com/lalitohg',
        },
        {
          label: 'LinkedIn',
          url: 'https://www.linkedin.com/in/eduardo-hern%C3%A1ndez-568195a2',
        },
        {
          label: 'Twitter',
          url: 'https://twitter.com/codeninjalalo',
        },
        {
          label: 'Facebook',
          url: 'https://web.facebook.com/eduardo.hernandezguerrero.58',
        },
      ],
    },
  ],
}
