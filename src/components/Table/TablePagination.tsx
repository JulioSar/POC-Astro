import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
} from "@radix-ui/react-icons";
import { type Table } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface DataTablePaginationProps<TData> {
  table: Table<TData>;
  totalPages?: number;
  indexProps?: { index: number; setIndex: (index: number) => void };
  setPageSize?: (pageSize: number) => void;
}

export function DataTablePagination<TData>({
  table,
  totalPages,
  indexProps,
  setPageSize,
}: DataTablePaginationProps<TData>) {
  const pages = totalPages ? totalPages : 0;
  return (
    <div className="flex flex-row-reverse items-center justify-between px-2 mt-5">
      <div className="flex items-center space-x-6 lg:space-x-8">
        <div className="flex items-center space-x-2">
          <p className="text-sm font-medium">Rows per page</p>
          <Select
            value={`${table.getState().pagination.pageSize}`}
            onValueChange={(value: any) => {
              table.setPageSize(Number(value));
              setPageSize && setPageSize(Number(value));
            }}
          >
            <SelectTrigger className="h-8 w-[70px]">
              <SelectValue placeholder={table.getState().pagination.pageSize} />
            </SelectTrigger>
            <SelectContent side="top">
              {[10, 25, 50, 75, 100].map((pageSize) => (
                <SelectItem key={pageSize} value={`${pageSize}`}>
                  {pageSize}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex w-[100px] items-center justify-center text-sm font-medium">
          {indexProps
            ? `Page ${indexProps.index + 1} of ${totalPages}`
            : `Page ${table.getState().pagination.pageIndex + 1} of ${" "}
          ${table.getPageCount()}`}
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            className="hidden h-8 w-8 p-0 lg:flex"
            onClick={() => {
              indexProps ? indexProps.setIndex(0) : table.setPageIndex(0);
            }}
            disabled={
              indexProps
                ? indexProps.index === 0
                  ? true
                  : false
                : !table.getCanPreviousPage()
            }
          >
            <span className="sr-only">Go to first page</span>
            <DoubleArrowLeftIcon className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            className="h-8 w-8 p-0"
            onClick={() => {
              indexProps
                ? indexProps.setIndex(indexProps.index - 1)
                : table.previousPage();
            }}
            disabled={
              indexProps
                ? indexProps.index === 0
                  ? true
                  : false
                : !table.getCanPreviousPage()
            }
          >
            <span className="sr-only">Go to previous page</span>
            <ChevronLeftIcon className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            className="h-8 w-8 p-0"
            onClick={() => {
              indexProps
                ? indexProps.setIndex(indexProps.index + 1)
                : table.nextPage();
            }}
            disabled={
              indexProps
                ? indexProps.index === pages - 1
                  ? true
                  : false
                : !table.getCanNextPage()
            }
          >
            <span className="sr-only">Go to next page</span>
            <ChevronRightIcon className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            className="hidden h-8 w-8 p-0 lg:flex"
            onClick={() => {
              indexProps
                ? indexProps.setIndex(pages - 1)
                : table.setPageIndex(table.getPageCount() - 1);
            }}
            disabled={
              indexProps
                ? indexProps.index === pages - 1
                  ? true
                  : false
                : !table.getCanNextPage()
            }
          >
            <span className="sr-only">Go to last page</span>
            <DoubleArrowRightIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
