import { ratingData } from "../../data";
import Review from "./Review";
import SectionHeader from "./SectionHeader";

function Reviews() {
  return (
    <section id="reviews">
      <div className="container">
        <SectionHeader
          title={"Each and every client is important"}
          description={
            "Discover what our students are saying in the Reviews section! Real feedback from learners who have experienced and benefited from our courses."
          }
        />
        <div className="ratings">
          {ratingData.map((rating) => {
            const { id, stars, img, description, name, job } = rating;
            return (
              <Review
                key={id}
                stars={stars}
                img={img}
                description={description}
                name={name}
                job={job}
              />
            );
          })}
          
        </div>
      </div>
    </section>
  );
}
export default Reviews;
