import classes from "./Card.module.css";

const Card = (props) => {
    console.log("Card jsx loaded...");
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};

export { Card };