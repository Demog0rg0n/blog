import React, {useState} from 'react'
import Posts from '../components/Posts'
import Search from '../components/Search'

const MainPage: React.FC = () => {

    function searching(value: string) {
        // setSearch(value)
    }

    return (
        <div className='mainPage'>
            <div className="mainPage__container container">
                <h1 className="mainPage__title h1">Блог</h1>
                <p>Здесь мы делимся интересными кейсами из наших проектов, пишем про IT, а также переводим зарубежные статьи</p>
                <Search />
                <Posts />
            </div>
        </div>
    )
}

export default MainPage
