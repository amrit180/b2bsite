import { Affix } from "antd";
import Card from "../components/cards/Card";
import Headlines from "../components/cards/Headlines";
import ProfileCard from "../components/cards/ProfileCard";
import "../styles/Home.css";

const Home = () => (
  <div className="universalCenter">
    <div className="  d-flex justify-content-center mt-5 container">
      <Affix>
        <div className="gap ">
          <ProfileCard />
        </div>
      </Affix>
      <div className=" gap">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Affix>
        <div className="">
          <Headlines />
        </div>
      </Affix>
    </div>
  </div>
);
export default Home;
