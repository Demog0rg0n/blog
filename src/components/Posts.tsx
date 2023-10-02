import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../redux/store'
import Post from './Post'
import BigPost from './BigPost'
import { fetchPosts } from '../redux/slices/postsSlice'

const Posts: React.FC = () => {

    const dispatch = useAppDispatch()
    const { posts } = useAppSelector(state => state.postsSlice)

    const column1 = posts.slice(1).filter(function(element, index, array) {
        return (index % 2 === 0);
    });
    
    const column2 = posts.slice(1).filter(function(element, index, array) {
        return (index % 2 != 0);
    });

    return (
        <div className='posts'>
            {
                posts.length &&
                <BigPost {...posts[0]}/>
            }
            {/* {
                posts.slice(1).map(post => (
                    <Post {...post}/>
                ))
            } */}
            <div className="column">
                {
                    column1.map(post => (
                        <Post key={post.id} {...post}/>
                    ))
                }
            </div>
            <div className="column">
                {
                    column2.map(post => (
                        <Post key={post.id} {...post}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Posts
