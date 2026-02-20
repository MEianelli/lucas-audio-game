export default function BlogContent({ articles }) {
  return (
    <>
      <h1>FilmGuess Blog</h1>

      <p>Explore our latest articles, rankings, and movie quote features.</p>

      <ul>
        {articles.map((article) => (
          <li key={article.slug}>
            <a href={`/blog/${article.slug}`}>{article.title}</a>
          </li>
        ))}
      </ul>
    </>
  );
}
