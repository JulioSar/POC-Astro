import type { News } from "../types";
import { useEffect, useState } from "react";
import newsService from "@/services/news";

// Hook to get the users
export function useGetAllNews() {
  const [newsFetch, setNewsFetch] = useState<News[]>();

  useEffect(() => {
    async function fetchAllNews() {
      const fetchedNews = await newsService.getAll();
      setNewsFetch(fetchedNews);
    }

    fetchAllNews();
  }, []); // Empty dependency array means the effect runs once after the initial render

  return { newsFetch };
}

export function useGetSingleNews(id: string) {
  const [news, setNews] = useState<News>();

  useEffect(() => {
    async function fetchUserData() {
      const userFetch = await newsService.getOne(id);
      setNews(userFetch);
    }

    fetchUserData();
  }, [id]);

  return news;
}
export function useUpdateNews() {
  const addData = async (news: News) => {
    await newsService.update(news, news.id);
  };
  return { addData };
}

export function useAddNews() {
  const addData = async (news: News) => {
    await newsService.create(news, news.id);
  };
  return { addData };
}

export function useDeleteNews() {
  const deleteUser = async (id: string) => {
    await newsService.delete(id);
  };
  return { deleteUser };
}
