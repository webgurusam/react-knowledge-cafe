import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";

const Blog = ({blog, handlerAddToBookmark, handleMarkAsRead}) => {
    const {id, cover_image, author, title, posted_date, reading_time, hash_tags} = blog;
    const {name, image} = author;
    return (
        <div className='mb-20 space-y-4'>
            <img className='mb-8' src={cover_image} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between mb-4'>
                <div className='flex items-center'>
                    <img className='w-14' src={image} alt={`Author picture of the ${name}`} />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{name}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button 
                    className='ml-2 text-2xl text-red-500'
                    onClick={() => handlerAddToBookmark(blog)}
                    ><CiBookmark /></button>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p>
                {
                    hash_tags.map((hash, idx) => <span key={idx}> <a>{hash}</a></span>)
                }
            </p>
            <button 
                className='text-purple-800 font-bold underline' 
                onClick={() => handleMarkAsRead(reading_time, id)}
            >Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handlerAddToBookmark: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired,
}

export default Blog;