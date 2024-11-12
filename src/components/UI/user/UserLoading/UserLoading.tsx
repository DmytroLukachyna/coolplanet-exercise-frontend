import { Card } from "@/components/UI/common/Card";
import { Skeleton } from "@mui/material";
import styles from "./UserLoading.module.scss";

const UserLoading = () => (
  <Card title="Loading...">
    <div className={styles.header}>
      <Skeleton animation="wave" variant="circular" width={100} height={100} />
      <div className={styles.main}>
        <Skeleton animation="wave" variant="rounded" width={200} height={20} />
        <Skeleton animation="wave" variant="rounded" width={200} height={20} />
        <Skeleton animation="wave" variant="rounded" width={200} height={20} />
      </div>
    </div>
    <Skeleton animation="wave" variant="rounded" width={320} height={24} />
    <Skeleton animation="wave" variant="rounded" width={320} height={24} />
    <Skeleton animation="wave" variant="rounded" width={320} height={24} />
    <Skeleton animation="wave" variant="rounded" width={200} height={20} />
    <Skeleton animation="wave" variant="rounded" width={200} height={20} />
    <Skeleton animation="wave" variant="rounded" width={200} height={20} />
  </Card>
);

export default UserLoading;
