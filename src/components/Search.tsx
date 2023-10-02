import React, {useState} from 'react'
import { fetchPosts } from '../redux/slices/postsSlice'
import { useAppDispatch } from '../redux/store'

const Search = () => {

    const [search, setSearch] = useState("")
    const dispatch = useAppDispatch()
    function searching(value: string) {
        setSearch(value)
        dispatch(fetchPosts(value))
    }

    return (
        <div className="searchInput__wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M17.31 15.9L20.71 19.29C20.8993 19.4778 21.0058 19.7334 21.0058 20C21.0058 20.2666 20.8993 20.5222 20.71 20.71C20.5222 20.8993 20.2666 21.0058 20 21.0058C19.7334 21.0058 19.4778 20.8993 19.29 20.71L15.9 17.31C14.5025 18.407 12.7767 19.0022 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11C19.0022 12.7767 18.407 14.5025 17.31 15.9ZM11 5C7.68629 5 5 7.68629 5 11C5 14.3137 7.68629 17 11 17C14.3137 17 17 14.3137 17 11C17 7.68629 14.3137 5 11 5Z" fill="#333333"/>
            </svg>
            <input 
                onChange={(e) => searching(e.target.value)}
                value={search} 
                type="text" 
                placeholder='Поиск по названию статьи' 
                className='searchInput' 
            />
        </div>
    )
}

export default Search
