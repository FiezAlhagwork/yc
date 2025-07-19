import { formatData } from "@/lib/utils";
import { StartupTypeCard } from "@/types";
import { EyeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const StartupCard = ({ post }: { post: Omit<StartupTypeCard, "patch">}) => {
  const {
    _createAt,
    views,
    author,
    _id,
    title,
    description,
    category,
    image
  } = post;

  return (
    <li className="startup-card group">
      <div className="flex-between">
        <p className="startup_card_data">{formatData(_createAt)}</p>
        <div className="flex gap-1.5">
          <EyeIcon className="size-6 text-primary" />
          <span className=" text-16-medium">{views}</span>
        </div>
      </div>

      <div className="flex-between mt-5 gap-5">
        <div className="flex-1">
          <Link href={`/user/${author?._id}`}>
            <p className="text-16-medium line-clamp-1">{author.name}</p>
          </Link>
          <Link href={`/startup/${_id}`}>
            <h3 className="text-20-medium line-clamp-1">{title}</h3>
          </Link>
        </div>

        <Link href={`/user/${author?._id}`}>
          <Image
            src={author.image}
            alt="avatar"
            width={48}
            height={48}
            className=" rounded-full"
          />
        </Link>
      </div>

      <Link href={`/startup/${_id}`}>
        <p className="startup-card_desc">{description}</p>
       <Image
            src={image}
            alt="placeholder"
            width={48}
            height={48}
            className="startup-card_img"
          />
      </Link>

      <div className="flex-between gap-3 mt-5">
        <Link href={`/?query=${category.toLowerCase()}`}>
          <p className="text-16-medium">{category}</p>
        </Link>
        <button className="startup-card_btn">
          <Link href={`/startup/${_id}`}>Details</Link>
        </button>
      </div>
    </li>
  );
};

export default StartupCard;
