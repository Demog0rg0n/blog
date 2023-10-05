import React from 'react'
import Evaluations from './Evaluations'
import { PostType } from './Post'
import { Link } from 'react-router-dom'
import image from "../images/image.jpg" 

const BigPost: React.FC<PostType> = (post) => {

    return (
        <div className='bigPost'>
            <img src={image} alt="" className='post__img'/>
            <div className="post__content">
                <div className="post__header">
                    <h2 className="post__title h2">{post.title}</h2>
                    <Evaluations likes={post.likes} dislikes={post.dislikes} index={post.id} />
                </div>
                <p>{post.body}</p>
                <Link className='bigPost__button button' to={"/posts/" + post.id}>Читать далее</Link>
            </div>
        </div>
    )
}

export default BigPost
