import { Grid, Typography } from '@mui/material'
import React from 'react';
import { Box } from '@mui/system';
import { Button } from '@mui/material'


const Glossary = () => {
  return (
    <div>
      <div className='glossary-sec'>
        <Grid container spacing={2}>
            <Grid item md={2}>
                <Box className="business-type-btns glossary-left-common">
                    <Typography variant="body1">Business Type</Typography>
                    <Box className="filter-btns ">
                        <Button className='common-filter-btn'>Corporation</Button>
                        <Button className='common-filter-btn'>Partnership</Button>
                        <Button className='common-filter-btn'>Sole Proprietorship</Button>
                    </Box>
                </Box>
                <Box className="statement-information-btns glossary-left-common">
                    <Typography variant="body1">Statement Information</Typography>
                    <Box className="filter-btns ">
                        <Button className='common-filter-btn'>Balance Sheet</Button>
                        <Button className='common-filter-btn'>Income Statement</Button>
                    </Box>
                </Box>
                <Box className="ratio-sec-btns glossary-left-common">
                    <Typography variant="body1">Ratio</Typography>
                    <Box className="filter-btns ">
                        <Button className='common-filter-btn'>Efficiency</Button>
                        <Button className='common-filter-btn'>Leverage</Button>
                        <Button className='common-filter-btn'>Liquidity</Button>
                        <Button className='common-filter-btn'>Profitability</Button>
                    </Box>
                </Box>
            </Grid>
            <Grid item md={8}>
                <Box className="sole-proprietorship">
                    <Typography variant="body1">
                       <b>Sole Proprietorship</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci harum libero perspiciatis natus corrupti deserunt minima! Ducimus reiciendis hic eius incidunt obcaecati consectetur pariatur saepe, laudantium veniam accusantium et laborum.
                    </Typography>
                </Box>
            </Grid>
            <Grid item md={2}>
                <Box className="filter-btns ">
                    <Button className='common-filter-btn'>Back to Filter</Button>
                    <Button className='common-filter-btn'>Previous Page</Button>
                </Box>
            </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Glossary
