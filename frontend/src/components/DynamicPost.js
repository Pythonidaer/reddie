import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Button, Card } from 'react-bootstrap'
import CommentThread from './CommentThread'
import axios from 'axios'
import { parse } from 'marked'
import ShowMoreText from 'react-show-more-text'

// will need conversion from reddit markdown syntax to html
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

  // TEST START
  let totalCount = 0
  const handleChildren = (childrenComments, level = 0, results = []) => {
    childrenComments.forEach((child) => {
      // need logic for "more" Kind objects
      // except "more" require separate data logic (see below)
      //
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
        handleChildren(child.data.replies.data.children, level + 1, results)
      }
    })

    return results
  }

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

  // This component renders a single post card with a link to its comments or a display of them
  // This style might be worth changing to get more text to appear
  // Either way, better to start thinking across multiple screens sooner than later

  // convert Reddit API's returned markdown to HTML and set dangerously

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
