import React, {useState} from 'react'
import { Button, Grid, Typography } from '@mui/material'
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { Box } from '@mui/system'; 


const BenchmarkYourBusinessFilter = () => {

  const [age, setAge] = useState('');
  const handleChange = (event:SelectChangeEvent) => {
    setAge(event.target.value);
};

  return (
    <div>
       <div className='benchmark-business-filter-sec'>
        <div className=''>
            <div className="business-filter-sec-Inner">
                
                <Grid container spacing={2}>
                    <Grid item md={3}>
                        <Box className='revenue-range-sec business-first-section'>
                            <Typography className='gray-bg-sec' variant='h4'>Revenue Range</Typography>
                            <Box className="business-first-section-body">
                              <FormControl className='filter-form-control'>
                                <Select
                                  value={age}
                                  onChange={handleChange}
                                  displayEmpty
                                  inputProps={{ 'aria-label': 'Without label' }}
                                  className="select-filter"
                                >
                                  <MenuItem value="">
                                    <em>Select a revenue range</em>
                                  </MenuItem>
                                  <MenuItem value={10}>Ten</MenuItem>
                                  <MenuItem value={20}>Twenty</MenuItem>
                                  <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                              </FormControl>
                            
                            </Box>
                        </Box>
                        <Box className='business-type-sec business-first-section'>
                            <Typography className='gray-bg-sec' variant='h4'>Business Type</Typography>
                            <Box className="business-first-section-body">
                            <FormControl className='filter-form-control' >
                                <Select
                                  value={age}
                                  onChange={handleChange}
                                  displayEmpty
                                  inputProps={{ 'aria-label': 'Without label' }}
                                  className="select-filter"
                                >
                                  <MenuItem value="">
                                    <em>Select a business type</em>
                                  </MenuItem>
                                  <MenuItem value={10}>Ten</MenuItem>
                                  <MenuItem value={20}>Twenty</MenuItem>
                                  <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                              </FormControl>
                            </Box>
                        </Box>
                        <Box className='location-sec business-first-section'>
                            <Typography className='gray-bg-sec' variant='h4'>Location</Typography>
                            <Box className="business-first-section-body">
                            <FormControl className='filter-form-control'>
                                <Select
                                  value={age}
                                  onChange={handleChange}
                                  displayEmpty
                                  inputProps={{ 'aria-label': 'Without label' }}
                                  className="select-filter"
                                >
                                  <MenuItem value="">
                                    <em>Select a location</em>
                                  </MenuItem>
                                  <MenuItem value={10}>Ten</MenuItem>
                                  <MenuItem value={20}>Twenty</MenuItem>
                                  <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                              </FormControl>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item md={7}>
                      <Box className="industry-section">
                        <Typography className='gray-bg-sec' variant='h4'>Industry</Typography>
                        <Box className="industry-inner-sec-list">
                          <ul className='industry-list'>
                              <li>
                                <span>  </span>
                                <input type="radio" />
                                <span className='industry-list-text'>Content one</span>
                              </li>
                              <li>
                                <span>  </span>
                                <input type="radio" />
                                <span className='industry-list-text'>Content two</span>
                              </li>
                              <li>
                                <span>  </span>
                                <input type="radio" />
                                <span className='industry-list-text'>Content three</span>
                              </li>
                          </ul>  
                        </Box>
                      </Box>
                      <Box className="number-of-similar-companies">
                        <Typography className='gray-bg-sec' variant='h4'>Number of Similar Companies</Typography>
                        <Box className="chart-content">
                                      
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item md={2}>
                      <Box className="filter-btns">
                        <Button className='common-filter-btn'>Reset All Filter</Button>
                        <Button className='common-filter-btn'>Next Page</Button>
                        <Button className='common-filter-btn'>Glossary</Button>
                      </Box>
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
      </div>
    </div>
  )
}

export default BenchmarkYourBusinessFilter;
