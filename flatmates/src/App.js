import React, { Fragment, useState } from "react";

import NewArticle from "./components/NewArticle/NewArticle";
import Articles from "./components/Articles/Articles";

const DUMMY_ARTICLES = [
  {
    id: "1",
    title: "Toilet Paper",
    date: new Date(2020, 7, 14),
  },
  {
    id: "2",
    title: "Salz",
    date: new Date(2021, 2, 28),
  },
];

const App = () => {
  const [articles, setArticles] = useState(DUMMY_ARTICLES);

  const addArticleHandler = (article) => {
    setArticles((prevArticles) => {
      return [article, ...prevArticles];
    });
  };

  return (
    <Fragment>
      <NewArticle onAddArticle={addArticleHandler} />
      <Articles items={articles} />
    </Fragment>
  );
};

export default App;
