import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const Blog = dynamic(() => import("../atom/Blog"));

export default function Blogs({ lang, Header, t, styles }) {
  const [posts, setPosts] = useState(null);
  useEffect(() => {
    fetch(
      "https://blog.beautyboothqa.com/wp-json/wp/v2/posts?per_page=4&_embed"
    )
      .then((res) => res.json())
      .then((data) => {
        let p = data.map((post) => {
          return {
            title: post.title.rendered,
            excerpt: post.excerpt?.rendered,
            link: post.link,
            img:
              post._embedded["wp:featuredmedia"][0].source_url ??
              "/images/white-gray-gradient-background.jpg",
            modified: post.modified,
          };
        });
        setPosts(p);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [lang]);
  return (
    <div className="container mt-5">
      {posts ? (
        <>
          <div className="row">
            <div className="col">
              <Header text={t("our_blog")} h="h2" />
              <div className="row">
                {posts.map((post, index) => (
                  <Blog
                    key={index}
                    title={post.title}
                    excerpt={post.excerpt}
                    link={post.link}
                    img={post.img}
                    styles={styles}
                  />
                ))}
              </div>
              <div className={styles.v_blog}>
                <a
                  href="https://blog.beautyboothqa.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit Blog
                </a>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}
