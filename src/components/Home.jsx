import { cardData } from "../../data";
import Card from "./Card";

function Home() {
  return (
    <section id="home">
      <div className="container">
        <div className="home-header">
          <span>Join Us</span>
          <h1>Best Learning Opportunities</h1>
          <p>
            We Know How Large Objects Will Act, But Things On a Smaal Scale Just
            Do Not Act That Way.
          </p>
          <a href="#" className="btn btn-red">
            Get Quote Now
          </a>
          <a href="#" className="btn btn-transparent">
            Learn More
          </a>
        </div>
        <div className="card-container">
          {cardData.map((card) => {
            const { title, id, color, bgColor, description, img } = card;

            return (
              <Card
                key={id}
                title={title}
                color={color}
                bgColor={bgColor}
                description={description}
                img={img}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default Home;
