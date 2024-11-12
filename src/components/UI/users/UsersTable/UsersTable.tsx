import Link from "next/link";
import { Card } from "@/components/UI/common/Card";
import { UsersResponse } from "@/types/api/user";
import { DataGrid } from "@mui/x-data-grid";
import type { GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 60 },
  { field: "first_name", headerName: "First name", width: 260 },
  { field: "last_name", headerName: "Last name", width: 260 },
  {
    field: "link",
    headerName: "Link",
    width: 100,
    renderCell: (params) => <Link href={`/users/${params.id}`}>See profile</Link>,
  },
];

const paginationModel = { page: 0, pageSize: 10 };

interface UsersTableProps {
  data: UsersResponse;
}

const UsersTable = ({ data }: UsersTableProps) => (
  <Card title="Users list">
    <DataGrid
      rows={data}
      columns={columns}
      initialState={{ pagination: { paginationModel } }}
      pageSizeOptions={[5, 10]}
    />
  </Card>
);

export default UsersTable;
