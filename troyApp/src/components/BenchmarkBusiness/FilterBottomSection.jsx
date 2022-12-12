import React from 'react'
import { Box } from '@mui/system';
import { Button } from '@mui/material'

const FilterBottomSection = () => {
  return (
    <div>
      <div className='filter-sections'>
            <Box className="filter-btns filter-btns-bottom">
                <Button className='filter-btn-bottom'>Lower Quartile</Button>
                <Button className='filter-btn-bottom'>Lower-Middle Quartile</Button>
                <Button className='filter-btn-bottom'>Upper-Middle Quartile</Button>
                <Button className='filter-btn-bottom'>Upper Quartile</Button>
                <Button className='filter-btn-bottom'>Industry Average</Button>
            </Box>
        </div>
    </div>
  )
}

export default FilterBottomSection
