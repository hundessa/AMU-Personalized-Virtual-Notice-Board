import { CiClock2 } from "react-icons/ci";

interface newscardprops {
  image: { src: string };
  title: string;
  news: string;
  duration: string;
}

const NewsCard: React.FC<newscardprops> = ({
  image,
  title,
  news,
  duration,
}) => {
  return (
    <>
      <div className="flex mx-auto min-w-[300px] border-3 border-[var(--muted)] rounded-lg overflow-hidden">
        <div className="w-full">
          <img src={image.src} alt="" className="w-full h-[300px]" />

          <div className="flex flex-col p-6 bg-[var(--bg-one)] w-full">
            <div className="flex items-center space-x-2 text-[var(--muted-text)] mt-2">
              <CiClock2 className="flex mt-1" />
              <h1 className="text-sm">{duration} ago</h1>
            </div>
            <h1 className="font-bold text-2xl my-4 break-words whitespace-normal overflow-hidden">
              {title}
            </h1>
            <div className="flex-1">
            <p className="text-justify text-sm line-clamp-3 overflow-hidden">{news}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsCard;
