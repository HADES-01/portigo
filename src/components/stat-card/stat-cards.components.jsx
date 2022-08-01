import "./stat-card.styles.scss";

function Statcards({ children, value }) {
  return (
    <div className="statcard">
      <div className="statcard-body">
        <span className="statcard-name">{children}</span>
        <span className="statcard-value">{value}</span>
      </div>
    </div>
  );
}

export default Statcards;
