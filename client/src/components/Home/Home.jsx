import classes from "./Home.module.css";
import { Card } from "../Card/Card";

const Home = (props) => {
console.log("Home jsx loaded...");
  return (
    <Card className={classes.home}>
      <h1>Hello !!</h1>
      <p>{props.currentAccount}</p>
      <p>Balance : {props.balance} ETH</p>
    </Card>
  );
};
export default Home;