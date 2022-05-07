import { FeaturedStyled } from "./featured.styled";
import Image from "next/image";
const Featured = ({ request, test = "", title }) => {
  return (
    <FeaturedStyled className={test}>
      <h2>{title}</h2>
      <div className="cards_container">
        {request.data.map((d) => {
          const data = d.attributes;
          //   console.log(d);
          if (data.featured) {
            return (
              <div className="card" key={d.id}>
                <Image
                  src={data.main_img}
                  layout="responsive"
                  width="300"
                  height="200"
                />
                <h2>{data.name}</h2>
              </div>
            );
          }
        })}
      </div>
    </FeaturedStyled>
  );
};

export default Featured;
