import React, { useEffect } from 'react'
import "./styles/index.css"
import { Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage'
import PostPage from './pages/PostPage'
import { useAppDispatch } from './redux/store'
import { fetchPosts } from './redux/slices/postsSlice'

const App: React.FC = () => {

    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchPosts(""))
    }, [dispatch])

    return (
        <div className='App'>
            <Routes>
                <Route path='/' element={<MainPage/>}/>
                <Route path='/posts/:id' element={<PostPage/>}/>
            </Routes>
        </div>
    )
}

export default App

