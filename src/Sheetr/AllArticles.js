import React from "react";
import { useState, useEffect } from "react";
import { withRouter } from "react-router";

import Masonry from "react-masonry-css";

import Article from "./Article.js";
import ArticleOpen from "./ArticleOpen.js";

import "./../styles/program.scss";

const dayButtons = ["1 May", "2 May", "3 May", "4 May"];
const categoryButtons = ["All", "Exhibition", "Party"];

const ArticlesAll = props => {
  const [visibleArticles, setVisibleArticles] = useState(false);
  const [theDay, setTheDay] = useState(false);
  const [theCat, setTheCat] = useState("All");
  const [articleIsOpen, setArticleIsOpen] = useState(false);
  const [articleID, setArticleID] = useState(false);

  const openArticle = id => {
    setArticleID(id);
    setArticleIsOpen(true);
  };

  const closeArticle = () => {
    setArticleIsOpen(false);
  };

  const filterArticles = filter => {
    let filtered = props.articles;
    if (filter.day !== false) {
      filtered = filtered.filter(article => article.days.includes(filter.day));
    } else if (filter.cat !== false && filter.cat !== "All") {
      filtered = filtered.filter(article =>
        article.categories.includes(filter.cat)
      );
    }
    setVisibleArticles(
      filtered.map(article => {
        return (
          <Article
            article={article}
            openArticle={openArticle}
            key={article.id}
          />
        );
      })
    );
    setTheDay(filter.day);
    setTheCat(filter.cat);
    sessionStorage.setItem("filters", JSON.stringify(filter));
  };

  useEffect(() => {
    if (
      props.articleIDRoute > 0 &&
      props.articleIDRoute <= props.articles.length
    ) {
      openArticle(props.articleIDRoute);
    }

    let savedfilters = sessionStorage.getItem("filters");
    if (savedfilters) {
      savedfilters = JSON.parse(savedfilters);
      setTheDay(savedfilters.day);
      setTheCat(savedfilters.cat);
      filterArticles(savedfilters);
    } else {
      filterArticles({ day: theDay, cat: theCat });
    }
  }, [props]);

  return (
    <div className="program" id="the-program">
      {articleIsOpen ? (
        <ArticleOpen
          article={props.articles
            .filter(article => article.id === articleID)
            .pop()}
          closeArticle={closeArticle}
        />
      ) : (
        <div>
          <div className="filters">
            <div className="buttons button-group filters-button-group">
              {categoryButtons.map((btn, key) => {
                return (
                  <button
                    key={key}
                    className={"button" + (theCat === btn ? " is-checked" : "")}
                    onClick={() => {
                      filterArticles({ day: false, cat: btn });
                    }}
                  >
                    {btn}
                  </button>
                );
              })}
              {dayButtons.map((btn, key) => {
                return (
                  <button
                    key={key}
                    className={
                      "button" + (theDay === key + 1 ? " is-checked" : "")
                    }
                    onClick={() => {
                      filterArticles({ day: key + 1, cat: false });
                    }}
                  >
                    {btn}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="all-articles">
            <Masonry
              breakpointCols={{
                default: 3,
                960: 3,
                768: 2,
                600: 1,
              }}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
            >
              {visibleArticles}
            </Masonry>
          </div>
        </div>
      )}
    </div>
  );
};

export default withRouter(ArticlesAll);
