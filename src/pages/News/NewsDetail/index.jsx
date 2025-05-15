import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import SideBar from "../components/SideBar";
import AnotherNews from "../../../components/AnotherNews";
import ToSupport from "../../../components/ToSupport";
import NewsDetailContent from "../components/NewsDetailConent/index";
import { callFetchPost } from "../../../services/api";
import "./style.scss";

function NewsDetail(props) {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEnglish = useSelector((state) => state.language.isEnglish);
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await callFetchPost(id);
        if (res && res.data) {
          setPost(res.data);
        }
      } catch (error) {
        console.error("Error fetching post:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  useEffect(() => {
    if (window.FB) {
      window.FB.XFBML.parse();
    }
  }, [post]); // Re-parse FB comments when post changes

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!post) {
    return <div>Post not found</div>;
  }
  return (
    <div className="news_detail">
      <div className="banner">
        <div className="container">
          <h1 className="title">{isEnglish ? "News" : "Tin Tức"}</h1>
          <p className="breadcrumbs">
            <span className="root" onClick={() => navigate("/")}>
              {isEnglish ? "Home" : "Trang Chủ"}
            </span>{" "}
            {">"}{" "}
            <span className="root" onClick={() => navigate("/news")}>
              {isEnglish ? "News" : "Tin Tức"}
            </span>{" "}
            {">"}{" "}
            <span className="current">
              {truncateText(post.title, 40)}
            </span>
          </p>
        </div>
      </div>
      <div className="container">
        <NewsDetailContent 
          isEnglish={isEnglish} 
          post={post} 
        />
        <SideBar 
          category={props.category} 
          setCategory={props.setCategory} 
        />
      </div>
      <AnotherNews news={props.news} />
      <ToSupport />
    </div>
  );
}

function truncateText(text, maxLength) {
  if (!text) return "";
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
}

export default NewsDetail;