import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { Card } from "@/components/UI/common/Card";
import { UserIdParam } from "@/types/api/user";
import NotFoundImage from "@/public/images/page-not-found.svg";
import styles from "./UserNotFound.module.scss";

const UserNotFound = ({ id }: UserIdParam) => (
  <Card className={styles.wrapper} title={`User with ID ${id} is not found`}>
    <Image
      src={NotFoundImage as StaticImport}
      style={{ maxWidth: "100%", height: "auto", width: "100%" }}
      alt="User not found!"
    />
  </Card>
);

export default UserNotFound;
