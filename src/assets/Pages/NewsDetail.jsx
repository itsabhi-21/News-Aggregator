import { useLocation, useNavigate } from 'react-router-dom';

export default function NewsDetail() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const article = state?.article;

  if (!article) {
    navigate('/', { replace: true });
    return null;
  }

  return (
    <div className="max-w-3xl mx-auto my-12 px-4 text-left">
      {/* Back button */}
      <button
        onClick={() => navigate(-1)}
        className="text-red-600 hover:underline mb-6"
      >
        ← Back
      </button>

      {/* Headline */}
      <h1 className="text-4xl font-extrabold leading-tight mb-4">
        {article.title}
      </h1>

      {/* Subheadline */}
      {article.description && (
        <p className="text-xl text-gray-700 mb-6">{article.description}</p>
      )}

      {/* Meta */}
      <div className="text-sm text-gray-500 mb-8">
        By{' '}
        <span className="font-medium text-gray-800">
          {article.author || 'Unknown'}
        </span>{' '}
        • {new Date(article.publishedAt).toLocaleDateString()} • Comments (0)
      </div>

      {/* Image */}
      {article.urlToImage && (
        <img
          src={article.urlToImage}
          alt={article.title}
          className="w-full rounded-lg mb-8"
        />
      )}

      {/* Body */}
      <div className="prose prose-lg max-w-none mb-12 text-left">
        {article.content || article.description}
      </div>

      {/* Read on source */}
      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-blue-600 text-white font-semibold uppercase text-sm px-5 py-3 rounded hover:bg-blue-700 transition"
      >
        Read on Source
      </a>
    </div>
  );
}
