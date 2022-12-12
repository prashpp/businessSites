import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from '@mui/material';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import deleteIcon from "../../assests/images/delete.svg"
import editIcon from "../../assests/images/edit.svg"


function createData(businessname, location, operatingactivity) {
    return { businessname, location, operatingactivity };
  }
  
  const rows = [
    createData('6pack','Prince Edward Island','62. Health care and social assistance' ),
    createData('test', 'Canada', '54. Professional, scientific and technical services'),
   
   
  ];


const BusinessTable = () => {
  return (
    <div className='business-table'>
        <div className='container'>
            <div className='buisness-table-inner'>
                
                <TableContainer component={Paper}>
                    <Box className="table-filter-sec">
                        <Button className="common-btn">+ create</Button>
                        <Box className='search-filter'>

                        </Box>
                    </Box>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell>Business Name</TableCell>
                            <TableCell >Location</TableCell>
                            <TableCell >Operating Activity</TableCell>
                            <TableCell ></TableCell>                            
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {rows.map((row) => (
                            <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.businessname}
                                </TableCell>
                                <TableCell >{row.location}</TableCell>
                                <TableCell >{row.operatingactivity}</TableCell>
                                <TableCell >
                                    <Link className='edit-icon' to="">
                                        <img src={editIcon} alt="" />
                                    </Link>
                                    <Link className='delete-icon' to="">
                                        <img src={deleteIcon} alt="" />
                                    </Link>
                                </TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    </div>
  )
};

export default BusinessTable