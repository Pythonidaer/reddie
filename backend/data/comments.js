const comments = [
  {
    data: {
      subreddit: 'BostonBruins',
      author: 'ocsic4321',
      body: 'Looks like [no discipline](https://twitter.com/emilymkaplan/status/1645115986830303233?s=46&amp;t=NuT4YzdiLJiZQlT5YW8Eqg) for Marchy, as expected.',
      upvotes: 7,
      link: '/r/BostonBruins/comments/12gdyn2/subreddit_daily_discussion_thread/jfllbf2/',
      awards_count: 0,
    },
  },
  {
    data: {
      subreddit: 'learnjavascript',
      author: 'guest271314',
      body: '&gt; but I only want a specific set of characters to be allowed to be typed\n\nUse `pattern` attribute and `:valid` and `:invalid` CSS pseudo-classes. You probably want to use `input` or `change` events instead of `keydown`.',
      upvotes: 1,
      link: '/r/learnjavascript/comments/12gs421/restrict_certain_characters_from_html_input_into/jfltqel/',
      awards_count: 0,
    },
  },
]

export default comments
/*
The comments array contains two comment objects representing sample comment data.
Each comment object has a data property that holds the comment details.
Comment details include properties such as subreddit, author, body, upvotes, link, and awards_count.
The body property may contain HTML markup or links.
The upvotes property represents the number of upvotes received for the comment.
The link property holds the URL of the comment within a specific subreddit.
The awards_count property indicates the count of awards given to the comment.
The comments array is exported as the default export of the module, making it available for use in other parts of the application.
*/
