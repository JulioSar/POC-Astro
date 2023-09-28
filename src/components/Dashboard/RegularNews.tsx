import { Card, CardContent, CardHeader, CardFooter } from "../ui/card";
import NewsRegular from "../../../MOCK_DATA_REGULAR_NEWS.json";
import { useEffect, useState } from "react";
import type { News } from "@/types";

export default function RegularNews() {
  const [numToShow, setNumToShow] = useState(3);
  const handleMore = () => {
    setNumToShow(numToShow + 3);
  };
  const regularNews: News[] = NewsRegular;
  return (
    <div className="grid lg:grid-cols-3 gap-6 mt-6 md:grid-cols-2 sm:grid-cols-1">
      {regularNews.slice(0, numToShow).map((newContent) => (
        <Card key={newContent.title}>
          <CardHeader>
            <div className="flex flex-col items-center justify-center">
              <img
                src={newContent.new_picture}
                alt="New Image"
                className=" w-full h-auto rounded-md "
              />
            </div>

            <h2>{newContent.title}</h2>
          </CardHeader>
          <CardContent>{newContent.content}</CardContent>
          <CardFooter className="flex flex-col">
            {newContent.date}
            <a href="#">Read More...</a>
          </CardFooter>
        </Card>
      ))}
      <section>
        {numToShow < regularNews.length && (
          <button onClick={handleMore}>Load More...</button>
        )}
      </section>
    </div>
  );
}
