import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Card } from 'react-bootstrap'
import CommentThread from './CommentThread'
import axios from 'axios'
import { parse } from 'marked'
import ShowMoreText from 'react-show-more-text'

// This component displays a single post from Reddit and can handle comments with substantial margin for error (i.e., comment volume)
const DynamicPost = ({ post, url }) => {
  const [comments, setComments] = useState([])

  // This function checks if the post should show a link to its comments or display them
  const seePostsOrComments = (obj, url) => {
    // Split the URL into parts
    const urlParts = url.split('/')
    // Get the last part of the URL
    const lastUrlPart = urlParts[urlParts.length - 1]
    // Check if the object's key value matches the last part of the URL
    return obj.id === lastUrlPart
  }

  // This function recursively handles child comments to create a nested comment structure
  const handleChildren = (childrenComments, level = 0, results = []) => {
    childrenComments.forEach((child) => {
      // Check if the comment is a valid comment type and has replies
      if (
        child.kind === 't1' &&
        child.data.replies !== '' &&
        child.data.replies !== undefined
      ) {
        const newComment = {
          body: child.data.body,
          upvotes: child.data.ups,
          author: child.data.author,
          link: child.data.permalink,
          subreddit: child.data.subreddit,
          awards_count: child.data.total_awards_received,
          level,
        }
        results.push(newComment)
        // Recursively handle the replies of the current comment
        handleChildren(child.data.replies.data.children, level + 1, results)
      } else if (
        child.kind === 't1' &&
        (child.data.replies === '' || child.data.replies === undefined)
      ) {
        // Create a new comment object for comments without replies
        const newCommentWithoutReply = {
          body: child.data.body,
          upvotes: child.data.ups,
          author: child.data.author,
          link: child.data.permalink,
          subreddit: child.data.subreddit,
          awards_count: child.data.total_awards_received,
          level,
        }
        results.push(newCommentWithoutReply)
      }
    })

    return results
  }

  // Fetches the comments for the post when the "View Comments" button is clicked
  const handleClick = async () => {
    try {
      const response = await axios.get(
        `https://www.reddit.com${post.permalink}.json`
      )
      const { children } = response.data[1].data
      const fetchedComments = handleChildren(children)
      setComments(fetchedComments)
    } catch (error) {
      console.error(error)
    }
  }

  // Convert Reddit API's returned markdown to HTML and set dangerously
  const html = parse(post.selftext, {
    silent: true,
  })

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Card
        className='my-3 p-1 rounded'
        style={{
          width: '100%',
          margin: '0 auto',
          '@media (maxWidth: 767px)': {
            maxWidth: '18rem',
          },
          '@media (minWidth: 768px)': {
            maxWidth: '800px',
          },
          '@media (minWidth: 992px)': {
            maxWidth: '800px',
          },
        }}
      >
        <Card.Body>
          <Card.Title className={'pb-1'}>{post.title}</Card.Title>
          <Card.Subtitle className='mb-2 text-muted'>
            Posted by u/{post.author}
          </Card.Subtitle>
          {post.selftext ? (
            <ShowMoreText
              lines={3}
              more='View'
              less='Hide'
              anchorClass='text-info fw-bold'
              className='card-text'
              // below default is ...
              truncatedEndingComponent=' '
            >
              <Card.Text dangerouslySetInnerHTML={{ __html: html }} />
            </ShowMoreText>
          ) : (
            <Card.Text dangerouslySetInnerHTML={{ __html: html }} />
          )}
          <Card.Text>{post.num_comments} Comments</Card.Text>
          {!seePostsOrComments(post, url) ? (
            <div>
              <Link className='card-link' to={`/dynamicPost/${post.id}`}>
                See Post
              </Link>
              <Link className='card-link' to={post.url} target='_blank'>
                {post.subreddit}
              </Link>
            </div>
          ) : (
            <>
              <div className='d-flex justify-content-between'>
                <Button variant='primary' className='btn' onClick={handleClick}>
                  View Comments
                </Button>
                <Link
                  className='btn btn-secondary'
                  style={{ marginLeft: '1rem !important;' }}
                  to={post.url}
                  target='_blank'
                >
                  See Post
                </Link>
              </div>
            </>
          )}
        </Card.Body>
      </Card>
      {comments && comments.length > 0 && (
        <CommentThread comments={comments} style={{ width: '36rem' }} />
      )}
    </div>
  )
}

export default DynamicPost
/*
The DynamicPost component is responsible for displaying a single post from Reddit, along with its associated comments. It is a React component that receives post and url as props.

The component starts by defining a state variable comments using the useState hook, which will store the comments associated with the post.

The seePostsOrComments function is a helper function that checks if the post should display a link to its comments or directly show them. It compares the ID of the post with the last part of the URL.

The handleChildren function is a recursive function that handles the nested structure of comments. It takes an array of childrenComments and iterates through each child comment. It checks if the child comment is a valid comment type ('t1') and if it has replies. If so, it creates a new comment object with relevant information such as the body, upvotes, author, link, subreddit, awards count, and level of nesting. It then recursively calls itself with the child comment's replies to handle further nested comments. If a comment has no replies, it creates a separate comment object for it.

The handleClick function is an asynchronous function triggered when the "View Comments" button is clicked. It makes an HTTP GET request using Axios to fetch the comments for the post. It extracts the children data from the response and calls handleChildren to process the comments and store them in the comments state.

The html variable uses the marked library to convert the Reddit API's returned markdown content of the post's selftext into HTML. This HTML is then set as dangerously inner HTML of the Card.Text component, allowing the post's content to be displayed.

The component's render function returns JSX that displays the post's information, such as the title, author, selftext, and number of comments. If the post has selftext, it uses the ShowMoreText component to show a limited number of lines and provide a "View" or "Hide" option for expanding or collapsing the content. The seePostsOrComments function is used to conditionally render the appropriate links based on whether the post should display comments or link to external content.

When the post does not directly show comments, a "View Comments" button is rendered. Clicking this button triggers the handleClick function, which fetches the comments for the post and updates the comments state.

Finally, if there are comments available (comments state is not empty), the CommentThread component is rendered, passing the comments as props for displaying the nested comment structure.

Overall, the DynamicPost component handles the display of a single post from Reddit, including its content and associated comments, and provides functionality for fetching and rendering the comments dynamically.
*/
