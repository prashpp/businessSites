import React from 'react'
import { Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import FilterRightSideBtns from '../../../BenchmarkBusiness/FilterRightSideBtns';

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 150,
      editable: true,
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 150,
      editable: true,
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
  ];

  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];

const BalanceSheet = () => {
  return (
    <div>
       <div className='BalanceSheetSec'>
            <Grid container spacing={2}>
                <Grid item md={10}>
                    <div className='income-statement-table'>
                        <Box sx={{ height: 400, width: '100%' }}>
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            pageSize={5}
                            rowsPerPageOptions={[5]}                            
                            disableSelectionOnClick
                            experimentalFeatures={{ newEditingApi: true }}
                            className='dataGridatble'
                        />
                        </Box>
                    </div>
                    <div className='balance-sheet-data-sec'>
                        <div className='bg-white-common balance-sheet-desc'>                           
                            <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique ipsam nemo aut doloremque nesciunt.</Typography>
                        </div>
                        <div className='bg-white-common balance-sheet-desc'>                           
                            <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique ipsam nemo aut doloremque nesciunt.</Typography>
                        </div>
                    </div>
                </Grid>
                <Grid item md={2}>
                    <FilterRightSideBtns />
                    <Box className="number-of-companies">
                        <Typography className='gray-bg-sec' variant='body2'>
                          Number of Companies used in Dataset
                        </Typography>
                        <Box className='number-of-companies-content'>
                          <Typography  variant='body1'>1,273</Typography>
                        </Box>
                      </Box>
                      
                </Grid>
            </Grid>
        </div>
    </div>
  )
}

export default BalanceSheet
