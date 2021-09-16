import React from "react";

import Card from "../UI/Card";
import ArticlesList from "./ArticlesList";
import "./Articles.css";

const Articles = (props) => {
  return (
    <div>
      <Card className="articles">
        <ArticlesList items={props.items} />
      </Card>
    </div>
  );
};

export default Articles;
