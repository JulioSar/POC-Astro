import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import type { News } from "@/types";

export default function NewsCarousel({ items }: { items: News[] }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {items.map((item: News) => (
        <div
          key={item.id}
          className="!flex flex-row items-center justify-middle gap-12"
        >
          <section className="">
            <img
              src={item.new_picture}
              alt={item.title}
              className="h-[250px] w-[800px] rounded-md "
            />
          </section>
          <div className="flex flex-col">
            <section>
              <h1 className="text-2xl my-10">{item.title}</h1>
              <p className="text-sm">{item.content}</p>
            </section>
            <section className="mt-5 mb-10 ">
              <span className="bg-blue-300 text-sm border rounded-md px-5 py-2 inline">
                {item.category}
              </span>
            </section>
          </div>
        </div>
      ))}
    </Slider>
  );
}
