"use client";

import { scrapeAndStoreProduct } from "@/lib/actions";
import React, { FormEvent, useState } from "react";

export const Searchbar = () => {
  const [searchPrompt, SetsearchPrompt] = useState("");
  const [isLoading, setisLoading] = useState(false);

  const isValidAmanzonProductUrl = (url: string) => {
    try {
      const parsedURL = new URL(url);
      const hostname = parsedURL.hostname;

      if (
        hostname.includes("amanzon.com") ||
        hostname.includes("amazon.") ||
        hostname.includes("amazon")
      ) {
        return true;
      }
    } catch (error) {
      return false;
    }
    return false;
  };
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isValidLink = isValidAmanzonProductUrl(searchPrompt);

    if (!isValidLink) return alert("Please provide a valid Amazon link");

    try {
      setisLoading(true);

      const product = await scrapeAndStoreProduct(searchPrompt);
    } catch (error) {
      console.log(error);
    } finally {
      setisLoading(false);
    }
  };
  return (
    <form
      className="flex flex-wrap gap-4 mt-12"
      action=""
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Enter product link"
        className="searchbar-input"
        value={searchPrompt}
        onChange={(e) => SetsearchPrompt(e.target.value)}
      />

      <button
        type="submit"
        className="searchbar-btn"
        disabled={searchPrompt === ""}
      >
        {isLoading ? "Searching..." : "Search"}
      </button>
    </form>
  );
};
