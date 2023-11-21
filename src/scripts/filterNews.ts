import type { News } from "@/types";
import NewsArticles from "../../MOCK_DATA_REGULAR_NEWS.json";

interface FilterNewsCallback {
  (filteredItems: News[]): void;
}

export default function filterNews(callback: FilterNewsCallback) {
  let searchTerm: string = "";
  const searchInput = document.getElementById(
    "searchInput"
  ) as HTMLInputElement;
  const resultsContainer = document.getElementById("results");

  searchInput.addEventListener("input", function (event) {
    searchTerm = (event.target as HTMLInputElement).value.toLowerCase();

    // Example data, replace with your actual data
    const filteredItems = NewsArticles.filter((news: News) =>
      news.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Call the callback with the filtered items
    callback(filteredItems);
  });

  return searchTerm;
}
