import { FooterStyled } from "./footer.styled";
import Link from "next/link";
const Footer = () => {
  return (
    <FooterStyled>
      <h3>Copyrigths&copy;2022</h3>
      <strong>Project Exam | Nikolai Reed-Larsen</strong>
      <div className="site_links">
        <Link href={"/contact"}>Contact us</Link>
      </div>
    </FooterStyled>
  );
};

export default Footer;
