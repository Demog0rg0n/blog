import React from 'react'
import { Link, useParams } from 'react-router-dom'
import BackArrow from '../components/BackArrow'
import Evaluations from '../components/Evaluations'
import NotFound from './NotFound'
import axios from 'axios'
import { PostType } from '../components/Post'
import { useAppSelector } from '../redux/store'
const image = require("../images/image.jpg") 

const PostPage = () => {
    const id = Number(useParams().id)

    const post = useAppSelector(state => state.postsSlice.posts).find(item => {
        if(item.id === id) {
            return true
        }
    })

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
