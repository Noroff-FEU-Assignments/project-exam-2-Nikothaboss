import { FooterStyled } from "./footer.styled";
import Link from "next/link";
const Footer = () => {
  return (
    <FooterStyled>
      <p>Project Exam | Nikolai Reed-Larsen</p>
      <div className="site_links">
        <p>Copyrigths&copy;2022</p>
        <Link href={"/contact"}>Contact Us</Link>
      </div>
    </FooterStyled>
  );
};

export default Footer;
