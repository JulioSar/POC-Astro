import type { PaginateProps } from "@/types";
import type { Entity } from "@/types";

export async function usePagination<T extends Entity>(
  paginateInfo: PaginateProps<T>
) {
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
