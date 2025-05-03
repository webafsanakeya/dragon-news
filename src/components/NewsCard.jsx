import { FaRegBookmark, FaShareAlt, FaEye } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const {
    id,
    title,
    author,
    rating,
    total_view,
    thumbnail_url,
    details,
    // published_date,
  } = news;

  return (
    <div className="card bg-base-100 shadow-md mb-6">
      <div className="flex justify-between items-center p-4 bg-base-200">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <img src={author.img} alt={author.name} />
          </div>
          <div>
            <p className="font-semibold">{author.name}</p>
            <p className="text-sm text-gray-500">
              {new Date(news.author.published_date).toLocaleDateString()}
            </p>
          </div>
        </div>
        <div className="flex gap-2 text-xl text-gray-500">
          <FaRegBookmark className="cursor-pointer" />
          <FaShareAlt className="cursor-pointer" />
        </div>
      </div>

      <div className="px-4 pb-4">
        <h2 className="text-lg font-bold mb-3">{title}</h2>
        <img src={thumbnail_url} alt={title} className="w-full h-auto rounded" />
        <p className="text-sm text-gray-600 mt-3">
          {details.slice(0, 200)}...
          <Link to={`/news-details/${id}`} className="text-orange-500 font-medium cursor-pointer ml-1">
            Read More
          </Link>
        </p>

        <div className="flex justify-between items-center mt-4 pt-2 border-t">
          <div className="flex items-center gap-1 text-orange-500">
            {Array.from({ length: rating.number }, (_, i) => (
              <AiFillStar key={i} />
            ))}
            <span className="text-black font-medium ml-1">{rating.number}</span>
          </div>
          <div className="flex items-center gap-1 text-gray-500">
            <FaEye />
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
