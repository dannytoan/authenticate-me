import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./SearchBar.css"

function SearchBar() {
  const [query, setQuery] = useState("");
  const sessionUser = useSelector((state) => state.session.user);
  const photos = useSelector((state) => Object.values(state.photos))
  console.log("PHOTOS", photos)
  console.log("QUERY", query)


  return (
    <div>
      <div className="nav-search-div">
        <input
          id="nav-search"
          placeholder="🔍︎ Search a photo"
          onChange={(e) => setQuery(e.target.value)}
        />
        {/* {query ? photos.map((photo) => (
            <a key={photo.id} id="search-result" href={`/photos/${photo?.id}`}>{photo.description} <img id="search-result-img-prev" src={photo.imageUrl}/></a>
        )): null} */}
        {query ? photos.filter((photo) => {
            if (photo?.description.toLowerCase().includes(query.toLowerCase())) {
                return photo
            }
        }).map((photo) => (<a key={photo.id} id="search-result" href={`/photos/${photo?.id}`}>{photo.description} <img id="search-result-img-prev" src={photo.imageUrl}/></a>)): null}
      </div>
    </div>
  );
}

export default SearchBar;
