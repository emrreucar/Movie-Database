import React, { useState, ChangeEvent, FormEvent } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar = ({onSearch}: SearchBarProps) => {
  const [query, setQuery] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSearch(query);
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center w-screen max-w-full">
      <input
        type="text"
        className="border border-gray-300 rounded-l py-2 px-4 w-full flex-2 outline-none focus:border-blue-500"
        value={query}
        onChange={handleChange}
      />
      <button type="submit" className="bg-red-600 text-white py-2 px-6 flex-1 rounded-r hover:bg-blue-600 outline-none">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
