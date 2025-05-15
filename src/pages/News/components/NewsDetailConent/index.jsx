// NewsDetailContent.js
import React from "react";
import petLeg from "../../../../asset/Icon/pets.png";
import "./style.scss";

function NewsDetailContent({ isEnglish, post }) {
  function formatDate(dateString) {
    if (!dateString) return "";
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  function renderBlocks() {
    if (!post.blocks || post.blocks.length === 0) {
      return <p>No content available</p>;
    }

    return post.blocks.map((block, index) => {
      switch (block.type) {
        case "header":
          return React.createElement(
            `h${block.data.level || 2}`,
            { key: index, className: "content-header" },
            block.data.text
          );
        case "paragraph":
          return (
            <p key={index} className="content-paragraph">
              {block.data.text}
            </p>
          );
        case "image":
          return (
            <div key={index} className="content-image">
              <img 
                src={`${process.env.REACT_APP_BACKEND_URL}/images/${block.data.file.url}`} 
                alt={block.data.caption || ""}
              />
              {block.data.caption && (
                <p className="image-caption">{block.data.caption}</p>
              )}
            </div>
          );
        default:
          return null;
      }
    });
  }

  return (
    <div className="post">
      <div className="title">
        <h1>{post.title}</h1>
        <p>
          <img src={petLeg} alt="pet icon" />
          {formatDate(post.createdAt)} {isEnglish ? "by" : "bởi"}
          <span style={{ color: "#018AE0" }}> Admin</span>
        </p>
      </div>
      <hr />
      <div className="content">
        {post.thumbnail && (
          <div className="post-thumbnail">
            <img
              src={`${process.env.REACT_APP_BACKEND_URL}/images/${post.thumbnail}`}
              alt={post.title}
            />
          </div>
        )}
        {renderBlocks()}
      </div>
      <div
        className="fb-comments"
        data-href={`${window.location.href}`}
        data-width="100%"
        data-numposts="5"
      ></div>
    </div>
  );
}

export default NewsDetailContent;