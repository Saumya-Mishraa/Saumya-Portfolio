// Splits a string into real React spans (word-level) so GSAP can stagger-animate
// them without ever injecting raw HTML strings into the DOM.
export default function SplitWords({ text, className = "", as: Tag = "span" }) {
  const words = text.split(" ");
  return (
    <Tag className={`split-words ${className}`}>
      {words.map((word, i) => (
        <span className="split-word" key={i}>
          <span>{word}</span>
        </span>
      ))}
      {/* trailing space handling is visual only, via CSS gap */}
    </Tag>
  );
}
