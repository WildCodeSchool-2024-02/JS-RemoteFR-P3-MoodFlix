import { useLoaderData } from "react-router-dom";
import baseImageUrl from "../../utils/baseImageUrl";
import "../../styles/cast/Cast.css";

export default function ImgCast() {
  const { cast } = useLoaderData();
  return (
    <img
      src={baseImageUrl + cast.profile_path}
      alt={cast.name}
      className="imgProfile"
    />
  );
}
