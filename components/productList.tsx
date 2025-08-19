'use client'
import { Product } from '@/types'
import React, { useState } from 'react'
import ProductCard from './productcard'
import NoResults from './ui/noResults'

interface ProductListProps {
  title: string,
  data: Product[]
}

function ProductList({ title, data }: ProductListProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 8 // 👈 how many products per page

  // Pagination logic
  const totalPages = Math.ceil(data.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const currentItems = data.slice(startIndex, startIndex + itemsPerPage)

  return (
    <div className="space-y-6">
      <h3 className="font-bold text-3xl">{title}</h3>

      {data.length === 0 && <NoResults />}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {currentItems.map(item => (
          <ProductCard key={item.id} data={item} />
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-6">
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 rounded-lg border bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
          >
            Prev
          </button>

          {/* Page numbers */}
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-4 py-2 rounded-lg border ${
                currentPage === i + 1
                  ? 'bg-yellow-600 text-white border-yellow-600'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 rounded-lg border bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  )
}

export default ProductList
