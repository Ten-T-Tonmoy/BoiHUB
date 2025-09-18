import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import React from "react";

const PaginationComp = ({ currentPage, totalPages, setCurrentPage }) => {
  return (
    <Pagination className="">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={(e) => {
              e.preventDefault();
              if (currentPage > 1) setCurrentPage((p: number) => p - 1);
            }}
          />
        </PaginationItem>
        {/* --------------------pages nd shi-----------------------
        Array.from => length & map function(val,idx)  */}
        {/* <PaginationItem>
          {Array.from({ length: totalPages }, (_, idx) => (
            <PaginationItem key={idx}>
              <PaginationLink
                className="cursor-pointer"
                isActive={currentPage === idx + 1}
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentPage(idx + 1);
                }}
              >
                {idx + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
        </PaginationItem> */}

        <PaginationItem>
          <PaginationLink
            isActive={currentPage === 1}
            onClick={(e) => {
              e.preventDefault();
              setCurrentPage(1);
            }}
          >
            1
          </PaginationLink>
        </PaginationItem>

        {/* -------------------left ellipsis---------------- */}
        {currentPage > 3 && (
          <PaginationItem>
            <span className="px-2">
              <PaginationEllipsis />
            </span>
          </PaginationItem>
        )}

        {/* -------------------Mid pages---------------- */}
        {Array.from({ length: totalPages }, (_, idx) => idx + 1)
          .filter(
            (page) =>
              page !== 1 &&
              page !== totalPages &&
              page >= currentPage - 1 &&
              page <= currentPage + 1
          )
          .map((page) => (
            <PaginationItem key={page}>
              <PaginationLink
                href="#"
                isActive={currentPage === page}
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentPage(page);
                }}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          ))}

        {/* -------------------right ellipsis---------------- */}
        {currentPage < totalPages - 2 && (
          <PaginationItem>
            <span className="px-2">
              <PaginationEllipsis />
            </span>
          </PaginationItem>
        )}

        {/* -------------------last page---------------- */}
        {totalPages > 1 && (
          <PaginationItem>
            <PaginationLink
              href="#"
              isActive={currentPage === totalPages}
              onClick={(e) => {
                e.preventDefault();
                setCurrentPage(totalPages);
              }}
            >
              {totalPages}
            </PaginationLink>
          </PaginationItem>
        )}

        <PaginationItem>
          <PaginationNext
            onClick={(e) => {
              e.preventDefault();
              if (currentPage < totalPages)
                setCurrentPage((p: number) => p + 1);
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationComp;
