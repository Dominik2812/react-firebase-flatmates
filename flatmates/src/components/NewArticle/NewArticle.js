import React, { useState } from "react";

import ArticleForm from "./ArticleForm";
import "./NewArticle.css";

const NewArticle = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveArticleDataHandler = (enteredArticleData) => {
    const articleData = {
      ...enteredArticleData,
      id: Math.random().toString(),
    };
    props.onAddArticle(articleData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-article">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Article</button>
      )}
      {isEditing && (
        <ArticleForm
          onSaveArticleData={saveArticleDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewArticle;
