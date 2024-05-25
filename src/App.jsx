import { useState } from 'react';
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handlerAddToBookmark = blog => {
    const newBookmarks = [...bookmarks, blog];
    const uniqueBookmarks = bookmarks.find(book => book.id === blog.id);
    // duplicate checking
    if(!uniqueBookmarks){
      setBookmarks(newBookmarks);
    }
    else{
      return alert("It's already available on bookmarks!!!");
    }
  }

  const handleMarkAsRead = (time, id) => {
    const newReadingTime = readingTime + time;
    const newReadingBookmark = bookmarks.find(book => book.id === id);
    // adding reading times with the condition
    if(newReadingBookmark){
      setReadingTime(newReadingTime);
    }
    else{
      alert("There is no bookmarked available at this moment");
    }
    // remove the mark blog from bookmark
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmarks);
  }

  return (
    <>
        <Header></Header>
        <div className='md:flex max-w-7xl mx-auto'>
          <Blogs
            handlerAddToBookmark={handlerAddToBookmark}
            handleMarkAsRead={handleMarkAsRead}
          ></Blogs>
          <Bookmarks 
          bookmarks={bookmarks}
          readingTime={readingTime}
          ></Bookmarks>
        </div>
    </>
  )
}

export default App
