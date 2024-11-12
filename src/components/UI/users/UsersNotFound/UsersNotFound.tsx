import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { Card } from "@/components/UI/common/Card";
import NotFoundImage from "@/public/images/page-not-found.svg";
import styles from "./UsersNotFound.module.scss";

const UsersNotFound = () => (
  <Card className={styles.wrapper} title="Users are not available!">
    <Image
      src={NotFoundImage as StaticImport}
      style={{ maxWidth: "100%", height: "auto", width: "100%" }}
      alt="Users are not available!"
    />
  </Card>
);

export default UsersNotFound;
