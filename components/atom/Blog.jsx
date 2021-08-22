
function Blog({ link, excerpt, title, img,styles }) {
  return (
    <div className="col-6 col-sm-6 col-md-3 col-lg-3">
      <a href={link} target="_blank" className={styles.blog_wrapper}  rel="noreferrer">
        <div className="card mb-4">
          <img
            className={styles.card_img}
            src={img}
            alt="Bologna"
          />
          <div className={styles.card_body} style={{ padding: '0.75rem' }}>
            <h5 className={styles.card_title} dangerouslySetInnerHTML={{ __html: title }} style={{ marginBottom: "0" }}></h5>
            <p className={styles.card_text} dangerouslySetInnerHTML={{
              __html: excerpt
            }}>
            </p>
          </div>
        </div>
      </a>
    </div>
  );
}

export default Blog;
