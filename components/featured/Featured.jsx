import { FeaturedStyled, CardStyled } from "./featured.styled";
import Image from "next/image";
import { boxShadows } from "../../styles/styleVariables";
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
              <CardStyled
                key={d.id}
                whileHover={{ boxShadow: boxShadows.card_hover, scale: 1.01 }}
              >
                <Image
                  src={data.main_img}
                  layout="responsive"
                  width="300"
                  height="200"
                />
                <h2>{data.name}</h2>
              </CardStyled>
            );
          }
        })}
      </div>
    </FeaturedStyled>
  );
};

export default Featured;
