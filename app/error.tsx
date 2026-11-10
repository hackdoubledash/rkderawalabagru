"use client";

export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <div className="frame page-title missing-page">
      <div className="page-title-copy">
        <h1>The page couldn’t load</h1>
        <p>Try opening the page again.</p>
        <button type="button" className="button" onClick={reset}>Try again</button>
      </div>
    </div>
  );
}
