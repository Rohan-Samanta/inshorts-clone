import React from "react";
import "./NewsCard.css";

function NewsCard({ newsItem }) {
  const fullDate = new Date(newsItem.publishedAt);
  var date = fullDate.toString().split(" ");
  const hour = parseInt(date[4]);
  const time = hour > 12 ? true : false;
  console.log(hour);

  return (
    <div className="news-card">
      <img
        className="news-image"
        src={
          newsItem.urlToImage
            ? newsItem.urlToImage
            : "https://source.unplash.com/random"
        }
        alt={newsItem.title}
      />
      <div className="news-text">
        <div>
          <span className="title">{newsItem.title}</span>
          <br />
          <span className="author">
            <a href={newsItem.url} target="_blank" rel="noreferrer">
              <b>short</b>
            </a>
            <span className="muted">
              {" "}
              by {newsItem.author ? newsItem.author : "unknown"}/{" "}
              {time
                ? `${hour - 12}:${date[4].substring(3, 5)}pm`
                : `${hour}:${date[4].substring(3, 5)}am`}{" "}
              on {date[2]} {date[1]}, {date[0]}
            </span>
          </span>
        </div>
        <div className="lower-news-text">
          <div className="description">{newsItem.description}</div>
          <span className="readmore">
            read more at{" "}
            <a
              className=""
              href={newsItem.url}
              target="_blank"
              rel="noreferrer"
            >
              <b>{newsItem.source.name}</b>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
