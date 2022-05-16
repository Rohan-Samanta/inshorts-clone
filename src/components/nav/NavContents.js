import { Container } from "@mui/material";
import React from "react";
import "./NavContents.css";
import NewsCard from "../card/NewsCard";

function NavContents({ newsArray, newsResults, loadmore, setLoadmore }) {
  return (
    <div>
      <Container maxWidth="md">
        <div className="contents">
          {newsArray.map((newsItem, index) => (
            <NewsCard newsItem={newsItem} />
          ))}

          {loadmore <= newsResults && (
            <>
              <hr />
              <button
                onClick={() => setLoadmore(loadmore + 10)}
                className="loadmore"
              >
                Load More
              </button>
            </>
          )}
        </div>
      </Container>
    </div>
  );
}

export default NavContents;
