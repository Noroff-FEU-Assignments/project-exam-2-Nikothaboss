import { FeaturedStyled, CardStyled } from "./featured.styled";
import Image from "next/image";
import { boxShadows } from "../../styles/styleVariables";
import Link from "next/link";
const Featured = ({ request, title, variant }) => {
  return (
    <FeaturedStyled>
      <h2>{title}</h2>
      <div className="cards_container">
        {request.data.map((d) => {
          const data = d.attributes;
          //   console.log(d);
          if (data.featured) {
            return (
              <Link
                key={d.id}
                href={
                  variant === "hotel"
                    ? "/hotels/" + d.id
                    : "/activities/" + d.id
                }
              >
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
                  <div className="info">
                    <h2>{data.name}</h2>
                    <p>{data.description.substring(0, 150) + "..."}</p>
                  </div>
                </CardStyled>
              </Link>
            );
          }
        })}
      </div>
    </FeaturedStyled>
  );
};

export default Featured;
