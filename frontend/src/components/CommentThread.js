import React, { useState, useEffect } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Card, Button, Container, Pagination } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { createComment, reset } from '../features/comments/commentSlice'
import Spinner from '../components/Spinner'
import { parse } from 'marked'
import ShowMoreText from 'react-show-more-text'

const CommentThread = ({ comments }) => {
  const { user } = useSelector((state) => state.auth)
  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.comments
  )

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const filteredComments = comments.filter(
    (comment) =>
      comment.hasOwnProperty('body') && !comment.hasOwnProperty('kind')
  )

  // Pagination Logic
  const pageItemsPerPage = 5
  const [currentPage, setCurrentPage] = useState(1)

  const startIndex = (currentPage - 1) * pageItemsPerPage
  const endIndex = startIndex + pageItemsPerPage
  const paginatedComments = filteredComments.slice(startIndex, endIndex)

  const handleButtonClick = (e, comment) => {
    e.preventDefault()
    dispatch(createComment(comment))
  }

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess) {
      dispatch(reset())
      navigate('/comments')
    }

    dispatch(reset())
  }, [dispatch, isError, isSuccess, navigate, message])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <Container fluid className='p-0'>
      {paginatedComments.map((comment, i) => (
        <Card
          key={i}
          className='p-1'
          style={{
            marginLeft: `${comment.level}rem`,
            '@media (maxWidth: 767px)': {
              maxWidth: '100%',
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
            <Card.Title>
              Author: {comment.author} | Upvotes: {comment.upvotes}
            </Card.Title>
            {comment.body ? (
              <ShowMoreText
                lines={3}
                more='View'
                less='Hide'
                anchorClass='text-info fw-bold'
                className='card-text pb-2'
                // below default is ...
                truncatedEndingComponent=' '
              >
                <Card.Text
                  dangerouslySetInnerHTML={{
                    __html: parse(comment.body, { silent: true }),
                  }}
                />
              </ShowMoreText>
            ) : (
              <Card.Text
                dangerouslySetInnerHTML={{
                  __html: parse(comment.body, { silent: true }),
                }}
              />
            )}
            <div className='d-flex justify-content-between align-items-center'>
              <Link
                className='btn btn-secondary'
                to={`https://www.reddit.com${comment.link}`}
                target='_blank'
              >
                View on Reddit
              </Link>
              <Button
                variant='success'
                type='Button'
                className='btn btn-success'
                disabled={!user}
                onClick={(e) => handleButtonClick(e, comment)}
              >
                <i className={'far fa-save'}></i>
              </Button>
            </div>
          </Card.Body>
        </Card>
      ))}

      <Pagination className=' mt-3 d-flex flex-wrap'>
        <Pagination.Prev
          onClick={() => setCurrentPage((prevPage) => prevPage - 1)}
          disabled={currentPage === 1}
        />
        {Array.from({
          length: Math.ceil(filteredComments.length / pageItemsPerPage),
        }).map((_, index) => (
          <Pagination.Item
            key={index + 1}
            active={index + 1 === currentPage}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </Pagination.Item>
        ))}
        <Pagination.Next
          onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
          disabled={
            currentPage ===
            Math.ceil(filteredComments.length / pageItemsPerPage)
          }
        />
      </Pagination>
    </Container>
  )
}

export default CommentThread
