import { Card } from "@/components/UI/common/Card";
import { Skeleton } from "@mui/material";

const UsersLoading = () => (
  <Card title="Users list">
    {Array.from(Array(10)).map((_, index) => (
      <Skeleton key={index} animation="wave" variant="rounded" width={680} height={52} />
    ))}
  </Card>
);

export default UsersLoading;
