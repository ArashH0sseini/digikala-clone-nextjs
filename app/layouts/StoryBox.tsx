import Image from "next/image";
import { storiesData } from "../constants/storiesData";

function StoryBox() {
  const stories = storiesData();
  return (
    <div className="hidden lg:flex lg:flex-row lg:items-center lg:justify-between max-w-7xl mx-auto mt-5 mb-7 px-6">
      {stories.map((story, index) => (
        <div
          key={index}
          className="flex flex-col items-center space-y-1 cursor-pointer"
        >
          <div className="rounded-full overflow-hidden border-2 border-red-500 w-20 h-20 focus:w-10 focus:h-10 p-[3px]">
            <Image src={story.image} alt="" className="rounded-full" />
          </div>
          <span className="text-sm font-medium">{story.title}</span>
        </div>
      ))}
    </div>
  );
}

export default StoryBox;
