import './Tags.scss';

function Tags({tags}) {
  return (
    <section className="tags-container">
      {tags.map((tag, index) => (
        <span key={index} className="tags__tag">{tag}</span>
      ))}
    </section>
  );
}

export default Tags;