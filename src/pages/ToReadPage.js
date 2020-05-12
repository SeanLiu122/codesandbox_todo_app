import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ToReadPage() {
  const [data, setData] = useState({ hits: [] });
  const [query, setQuery] = useState("React");
  const [url, setUrl] = useState(
    `https://hn.algolia.com/api/v1/search?query=redux`
  );

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(url);
      setData(result.data);
    };
    fetchData();
  }, [url]);

  return (
    <div>
      <h1>To-Read App</h1>
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <button
        type="button"
        onClick={() =>
          setUrl(`https://hn.algolia.com/api/v1/search?query=${query}`)
        }
      >
        Search
      </button>
      <ul>
        {data.hits.map(item => (
          <li key={item.objectID}>
            <a href="item.url">{item.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
