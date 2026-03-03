function InfoCard({ title, description, children }) {
  return (
    <article className="info-card">
      <h3>{title}</h3>
      {description ? <p>{description}</p> : null}
      {children}
    </article>
  );
}

export default InfoCard;
