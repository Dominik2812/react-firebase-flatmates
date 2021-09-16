import React from "react";

import ArticleDate from "./ArticleDate";
import Card from "../UI/Card";
import "./ArticleItem.css";

const ArticleItem = (props) => {
  return (
    <li>
      <Card className="article-item">
        <ArticleDate date={props.date} />
        <div className="article-item__description">
          <h2>{props.title}</h2>
        </div>
      </Card>
    </li>
  );
};

export default ArticleItem;
