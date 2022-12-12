import React from 'react'
import { Button, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system';
import FilterRightSideBtns from '../../../BenchmarkBusiness/FilterRightSideBtns';
import FilterBottomSection from '../../../BenchmarkBusiness/FilterBottomSection';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function createData(purchases, inventory, benefits,totalcost) {
    return { purchases, inventory, benefits,totalcost };
  }
  
  const rows = [
    createData('$73,437', '($1,201)', '$13,759', '$86,456'),
    
  ];

const CostOfSAle = () => {
  return (
    <div>
      <div className='cost-of-sale'>
        <Grid container spacing={2}>
            <Grid item md={10}>
                <Box className="cost-of-sale-chart-sec">
                    <Typography className='gray-bg-sec' variant='h4'>Breakdown of Lower Quartile Industry Average Cost of sales as a Percentage</Typography>
                </Box>
                <Box className="breakdown-avg-cost-sec">
                    <Typography className='gray-bg-sec' variant='h4'>Breakdown of Lower Quartile Industry Average Cost of sales</Typography>
                    <Box className="breakdown-avg-cost-table-sec">
                        <TableContainer >
                            <Table sx={{ minWidth: 650 }} aria-label="simple table" className='cost-of-sale-table'>
                                <TableHead>
                                <TableRow>
                                    <TableCell> Purchases, Materail and Subcontract</TableCell>
                                    <TableCell align="right">Changes in Inventory</TableCell>
                                    <TableCell align="right">Wages and Benefits</TableCell>
                                    <TableCell align="right">Total Cost of Sales</TableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                {rows.map((row) => (
                                    <TableRow
                                    key={row.purchases}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row" align="right">{row.purchases}</TableCell>
                                        <TableCell align="right">{row.inventory}</TableCell>
                                        <TableCell align="right">{row.benefits}</TableCell>
                                        <TableCell align="right">{row.totalcost}</TableCell>
                                    </TableRow>
                                ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>
                </Box>
            </Grid>
            <Grid item md={2}>
                <FilterRightSideBtns />
            </Grid>
        </Grid>
            <FilterBottomSection />  
      </div>
    </div>
  )
}

export default CostOfSAle
