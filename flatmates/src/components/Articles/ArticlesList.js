import React from "react";

import ArticleItem from "./ArticleItem";
import "./ArticlesList.css";

const ArticlesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="articles-list__fallback">Found no articles.</h2>;
  }

  return (
    <ul className="articles-list">
      {props.items.map((article) => (
        <ArticleItem
          key={article.id}
          title={article.title}
          date={article.date}
        />
      ))}
    </ul>
  );
};

export default ArticlesList;
