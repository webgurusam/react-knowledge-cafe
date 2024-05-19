import PropTypes from 'prop-types';
const Blog = ({blog}) => {
    const {id, cover_image, author, title, posted_date, reading_time, hash_tags} = blog;
    const {name, image} = author;
    return (
        <div>
            <img src={cover_image} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between'>
                <div className='flex items-center'>
                    <img className='w-14' src={image} alt={`Author picture of the ${name}`} />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{name}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p>
                {
                    hash_tags.map((hash, idx) => <span key={idx}> <a>{hash}</a></span>)
                }
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
}

export default Blog;