import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import type { News } from "@/types";

export default function Carousel({ items }: { items: News[] }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {items.map((item: any) => (
        <div key={item.id} className="!grid grid-flow-col grid-cols-42 gap-4 ">
          <section className="col-span-2">
            <img
              src={item.new_picture}
              alt={item.title}
              className="w-md h-md rounded-md"
            />
          </section>
          <section className="col-span-2">
            <h1 className="text-4xl my-10">{item.title}</h1>
            <p>{item.content}</p>
          </section>
        </div>
      ))}
    </Slider>
  );
}
