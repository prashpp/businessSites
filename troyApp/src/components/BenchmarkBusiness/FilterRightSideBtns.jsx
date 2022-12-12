import React from 'react'
import { Box } from '@mui/system';
import { Button } from '@mui/material'

const FilterRightSideBtns = () => {
  return (
    <div>
        <Box className="filter-btns ">
            <Button className='common-filter-btn'>Back to Filter</Button>
            <Button className='common-filter-btn'>Previous Page</Button>
            <Button className='common-filter-btn'>Next Page</Button>
            <Button className='common-filter-btn'>Glossary</Button>
        </Box>
    </div>
  )
}

export default FilterRightSideBtns
