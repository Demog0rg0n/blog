import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import BackArrow from '../components/BackArrow'
import Evaluations from '../components/Evaluations'
import NotFound from './NotFound'
import { useAppSelector } from '../redux/store'
import image from "../images/image.jpg"
import "../styles/postPage.css"
import { PostType } from '../components/Post'
import { addEvaluationsToPosts } from '../redux/slices/postsSlice'



const PostPage: React.FC = () => {
    const id = Number(useParams().id)
    const [post, setPost] = useState<PostType | undefined>()

    async function fetchPost() {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/" + id)
        const post = await response.json()
        const updatedPost = addEvaluationsToPosts([post])
        setPost(updatedPost[0])
    }
    let data = useAppSelector(state => state.postsSlice.posts).find(item => {
        if(item.id === id) {
            return true
        } else {
            return false
        }
    })
    if(data && !post) {
        setPost(data)
    } else if(!data && !post) {
        fetchPost()
    }

    return (
        post?
        <div className='postPage'>
            <div className="postPage__container container">

                <header className="postPage__header">
                    <Link to={"/"}>
                        <BackArrow/>
                        <span>Вернуться к статьям</span>
                    </Link>
                    <Evaluations likes={post.likes} dislikes={post.dislikes} index={post.id} />
                </header>

                <h1 className="postPage__title">{post.title}</h1>

                <div className="postPage__content">
                    <img src={image} className='postPage__image' alt="" />
                    <p>{post.body}</p>
                </div>
                
            </div>
        </div>:
        <NotFound />
    )
}

export default PostPage
