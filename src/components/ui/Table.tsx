/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export interface Column<T> {
  header: string;
  accessor: keyof T | ((row: T) => React.ReactNode);
  className?: string;
  headerClassName?: string;
}

export interface TableProps<T> {
  columns: Column<T>[];
  data: T[];
  keyExtractor: (row: T, index: number) => string | number;
  className?: string;
  caption?: string;
}

export function Table<T>({
  columns,
  data,
  keyExtractor,
  className = '',
  caption,
}: TableProps<T>) {
  return (
    <div className={`w-full overflow-x-auto rounded-[14px] border border-[#E4E6EA] bg-white ${className}`}>
      <table className="w-full text-left text-sm border-collapse">
        {caption && <caption className="sr-only">{caption}</caption>}
        <thead>
          <tr className="border-b border-[#E4E6EA] bg-[#FAFAFB]">
            {columns.map((col, idx) => (
              <th
                key={idx}
                scope="col"
                className={`py-3.5 px-4 font-semibold text-[#1F2430] whitespace-nowrap ${
                  col.headerClassName || ''
                }`}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-[#E4E6EA]">
          {data.map((row, rowIdx) => (
            <tr key={keyExtractor(row, rowIdx)} className="hover:bg-[#F9FAFB] transition-colors">
              {columns.map((col, colIdx) => {
                const content =
                  typeof col.accessor === 'function'
                    ? col.accessor(row)
                    : (row[col.accessor] as unknown as React.ReactNode);
                return (
                  <td
                    key={colIdx}
                    className={`py-4 px-4 text-[#4B5563] align-middle ${col.className || ''}`}
                  >
                    {content}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
