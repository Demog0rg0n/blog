import React from 'react'
import Like from './Like'
import Dislike from './Dislike'

type EvaluationsProps = {
    index: number
    likes: {
        state: boolean,
        counter: number
    }
    dislikes: {
        state: boolean,
        counter: number
    }
}

const Evaluations: React.FC<EvaluationsProps> = ({likes, dislikes, index}) => {

    return (
        <div className='evaluations'>
            <div className="likes evaluations__item">
                <Like id={index} state={likes.state}/>
                <span>{likes.counter}</span>
            </div>
            <div className="dislikes evaluations__item">
                <Dislike id={index} state={dislikes.state}/>
                <span>{dislikes.counter}</span>
            </div>
        </div>
    )
}

export default Evaluations
