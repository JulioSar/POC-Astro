import type { paginateProps } from "@/types";

export async function usePagination(paginateInfo: paginateProps) {
  const startIndex = paginateInfo.pageIndex
    ? paginateInfo.pageIndex * paginateInfo.pageSize
    : 0;
  const endIndex = startIndex + paginateInfo.pageSize;
  const total = Math.ceil(paginateInfo.data.totalCount / paginateInfo.pageSize);
  return {
    items: paginateInfo.data.items.slice(startIndex, endIndex), // This will change with an API call
    totalCount: total,
  };
}
