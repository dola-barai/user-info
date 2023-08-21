import React, { useState } from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Collapse, Checkbox } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

interface Department {
  department: string;
  sub_departments: string[];
}

interface DepartmentTreeProps {
  departments: Department[];
}

const DepartmentTree: React.FC<DepartmentTreeProps> = ({ departments }) => {
  const [open, setOpen] = useState<string | null>(null);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const handleItemClick = (name: string) => {
    if (selectedItems.includes(name)) {
      setSelectedItems(selectedItems.filter((item) => item !== name));
    } else {
      setSelectedItems([...selectedItems, name]);
    }
  };

  const handleExpandClick = (name: string) => {
    setOpen((prevOpen) => (prevOpen === name ? null : name));
  };

  return (
    <List component="nav">
      {departments.map((department) => (
        <div key={department.department}>
          <ListItem button onClick={() => handleExpandClick(department.department)}>
            <ListItemIcon>
              {open === department.department ? <ExpandLess /> : <ExpandMore />}
            </ListItemIcon>
            <ListItemText primary={department.department} />
          </ListItem>
          <Collapse in={open === department.department} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {department.sub_departments.map((subDept) => (
                <ListItem
                  key={subDept}
                  button
                  style={{ paddingLeft: 40 }}
                  onClick={() => handleItemClick(subDept)}
                >
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      checked={selectedItems.includes(subDept)}
                      tabIndex={-1}
                      disableRipple
                    />
                  </ListItemIcon>
                  <ListItemText primary={subDept} />
                </ListItem>
              ))}
            </List>
          </Collapse>
        </div>
      ))}
    </List>
  );
};

export default DepartmentTree;
