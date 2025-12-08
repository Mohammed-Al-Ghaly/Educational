import SectionHeader from "./SectionHeader";
import { coursesData } from "../../data";
import Course from "./Course";

function Courses() {
  return (
    <section id="courses">
      <div className="container">
        <SectionHeader
          title="Make Online education acessible"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto, culpa? Iste, quo aspernatur, rerum deserunt dolor eligendi dolorem reprehenderit quaerat, dignissimos doloremque vel velit architecto harum soluta beatae saepe excepturi!"
        />
        <div className="courses-container">
          {coursesData.map((course) => {
            const {
              id,
              img,
              title,
              rating,
              description,
              sales,
              price,
              discount,
              duration,
              lessons,
              department,
            } = course;
            return (
              <Course
                key={id}
                img={img}
                title={title}
                rating={rating}
                description={description}
                sales={sales}
                price={price}
                discount={discount}
                duration={duration}
                lessons={lessons}
                department={department}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default Courses;
