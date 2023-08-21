import { useEffect, useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { fetchApiData } from '../../api';
import { Post } from '../../models';
import DepartmentTree from '../../DepartmentTree'; 
import { Typography } from '@mui/material';

function SecondPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const departments = [
      {
        "department": "customer_service",
        "sub_departments": [
          "support",
          "customer_success"
        ]
      },
      {
        "department": "design",
        "sub_departments": [
          "graphic_design",
          "product_design",
          "web_design"
        ]
      }
  
  ];

  useEffect(() => {
    fetchApiData().then((data) => {
      setPosts(data);
    });
  }, []);

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'title', headerName: 'Title', width: 300 },
    { field: 'body', headerName: 'Body', width: 500 },
  ];

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Posts Table
      </Typography>
      <div style={{ height: 400, width: '100%', marginBottom: '20px' }}>
        <DataGrid rows={posts} columns={columns}  />
      </div>
      <Typography variant="h4" gutterBottom>
        Department Tree
      </Typography>
      <DepartmentTree departments={departments} />
    </div>
  );
}

export default SecondPage;
