function SectionTitle({ eyebrow, title, description }) {
  return (
    <header className="section-title">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {description ? <p className="section-copy">{description}</p> : null}
    </header>
  );
}

export default SectionTitle;
