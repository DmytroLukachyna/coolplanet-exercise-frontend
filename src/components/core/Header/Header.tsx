import Image from "next/image";
import HeaderLogo from "@/public/images/header.webp";
import styles from "./Header.module.scss";

const Header = () => (
  <div className={styles.header}>
    <Image alt="CoolPlanet Logo" src={HeaderLogo} height={36} />
  </div>
);

export default Header;
