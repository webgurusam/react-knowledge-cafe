import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({bookmarks, readingTime}) => {
    console.log(bookmarks)
    return (
        <div className="md:w-1/3 border border-cyan-300 bg-gray-300 ml-4 mt-2 pt-4">
            <div className='bg-slate-200 p-4 m-4 rounded-xl'>
                <h3 className='text-indigo-800 font-bold text-center text-xl'>Spent time on read: {readingTime} min</h3>
            </div>
            <h2 className='text-3xl ml-4'>Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark, idx) => <Bookmark 
                    key={idx} 
                    bookmark={bookmark}
                ></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number.isRequired,
}
export default Bookmarks;