"use client";

import React, { useEffect, useState } from "react";
import Card from "./Shared/Card";

const SearchFilter = ({ data }) => {
  const [books, setBooks] = useState(data?.data);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredBooks, setFilteredBooks] = useState([]);
  useEffect(() => {
    let updatedBooks = books;

    if (searchTerm) {
      updatedBooks = updatedBooks.filter((book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory !== "All") {
      updatedBooks = updatedBooks.filter(
        (book) => book.genre == selectedCategory
      );
    }

    setFilteredBooks(updatedBooks);
  }, [searchTerm, selectedCategory, books]);
  return (
    <div>
      <div className="flex justify-between items-center mb-12 pr-3">
        <input
          type="text"
          placeholder="Search by title"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-200 px-2 py-1 text-[14px] placeholder:text-[14px]"
        />
        <div className="flex justify-normal items-center gap-1">
          <p>Filter By Genry:</p>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border border-gray-200 px-2 py-1 text-[14px]">
            <option value="All">All</option>
            <option value="Mystery">Mystery</option>
            <option value="Fiction">Fiction</option>
            <option value="Music">Music</option>
            <option value="Fantacy">Fantacy</option>
            <option value="Historical">Historical</option>
            <option value="AutoBiography">AutoBiography</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-6 mb-24">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((e, i) => <Card e={e} key={i} />)
        ) : (
          <p className="text-center col-span-4 text-gray-500">
            No books found.
          </p>
        )}
      </div>
    </div>
  );
};

export default SearchFilter;
