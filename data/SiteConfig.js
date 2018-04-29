module.exports = {
  blogPostDir: "posts", // The name of directory that contains your posts.
  blogAuthorDir: "authors", // The name of directory that contains your 'authors' folder.
  blogAuthorId: "vaiwa", // The default and fallback author ID used for blog posts without a defined author.
  siteTitle: "vaiwa.cz", // Site title.
  siteTitleAlt: "Jan Vaiwa Návrat", // Alternative site title for SEO.
  siteLogo: "/logos/vaiwa-300.png", // Logo used for SEO and manifest. e.g. "/logos/logo-1024.png",
  siteUrl: "https://vaiwa.github.io", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/.
  siteDescription: "Jan Vaiwa Návrat", // Website description used for RSS feeds/meta description tag.
  siteCover: "/images/blog-cover.jpg", // Optional, the cover image used in header for home page. e.g: "/images/blog-cover.jpg",
  siteNavigation: true, // If navigation is enabled the Menu button will be visible
  siteRss: "/rss.xml", // Path to the RSS file.
  siteRssAuthor: "Vaiwa", // The author name used in the RSS file
  // siteFBAppID: "1825356251115265", // optional, sets the FB Application ID for using app insights
  sitePaginationLimit: 10, // The max number of posts per page.
  googleAnalyticsID: "UA-111982167-1", // GA tracking ID.
  // disqusShortname: "https-vagr9k-github-io-gatsby-advanced-starter", // enables Disqus comments, visually deviates from original Casper theme.
  siteSocialUrls: [
    "https://github.com/vaiwa",
    "https://www.facebook.com/vaiwacz",
    "https://twitter.com/vaiwacz",
  ],
  postDefaultCategoryID: "Tech", // Default category for posts.
  // Links to social profiles/projects you want to display in the navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/vaiwa",
      iconClassName: "fa fa-github" // Disabled, see Navigation.jsx
    },
    {
      label: "Facebook",
      url: "https://www.facebook.com/vaiwacz",
      iconClassName: "fa fa-facebook" // Disabled, see Navigation.jsx
    },
    {
      label: "Twitter",
      url: "https://twitter.com/vaiwacz",
      iconClassName: "fa fa-twitter" // Disabled, see Navigation.jsx
    },
    {
      label: "Keybase",
      url: "https://keybase.io/vaiwa",
      iconClassName: "fa fa-key" // Disabled, see Navigation.jsx
    }
  ],
  // Copyright string for the footer of the website and RSS feed.
  copyright: { label: "Jan Vaiwa Návrat" },
  themeColor: "#0000ff", // Used for setting manifest and progress theme colors.
  backgroundColor: "#ff0000", // Used for setting manifest background color.
  promoteGatsby: false
};
