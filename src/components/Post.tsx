import React from 'react'
import Evaluations from './Evaluations'
import { Link } from 'react-router-dom'
import { useAppDispatch } from '../redux/store'
import { setPost } from '../redux/slices/postPageSlice'
const image = require("../images/image.jpg") 

export type PostType = {
    id: number
    title: string
    body: string
    likes: {
        state: boolean,
        counter: number
    }
    dislikes: {
        state: boolean,
        counter: number
    }
}

const Post: React.FC<PostType> = (post) => {

    const dispatch = useAppDispatch()

    return (
        <div className='post'>
            <img src={image} alt="" className='post__img'/>
            <div className="post__content">
                <h2 className="post__title h2">{post.title}</h2>
                <div className="post__footer">
                    <Evaluations likes={post.likes} dislikes={post.dislikes} index={post.id}/>
                    <Link onClick={() => dispatch(setPost(post))} className='button' to={"/posts/" + post.id}>Читать далее</Link>
                </div>
            </div>
        </div>
    )
}

export default Post
