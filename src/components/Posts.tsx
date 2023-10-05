import React from 'react'
import { useAppSelector } from '../redux/store'
import Post from './Post'
import BigPost from './BigPost'

const Posts: React.FC = () => {

    const { posts } = useAppSelector(state => state.postsSlice)

    const column1 = posts.slice(1).filter(function(element, index) {
        return (index % 2 === 0);
    });
    
    const column2 = posts.slice(1).filter(function(element, index) {
        return (index % 2 !== 0);
    });

    return (
        <div className='posts'>
            {
                posts.length &&
                <BigPost {...posts[0]}/>
            }
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
