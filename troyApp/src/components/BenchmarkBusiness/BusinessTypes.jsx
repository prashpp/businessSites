import React from 'react'
import Box from '@mui/material/Box';
import { Grid, Typography } from '@mui/material';

const BusinessTypes = () => {
  return (
    <div className='business-type'>
        <div className='container'>
            <Box className='business-type-inner'>
                <Grid className='businessGrid' container spacing={2}>
                  <Grid item className='business-cards' xs={12} sm={6} md={4}>
                    <Box className='business-card'>
                      <span className='business-count'>01</span>
                      <Typography className='business-card-heading' variant="body1">Quartile</Typography>
                      <Typography className='business-card-data' variant="body1">Information for selected industry peer is presented by quartile and by average. A quartile analysis breaks the financial data of 
                      the selected industry peer businesses into four groups: a lower quartile, a middle quartile, an upper middle quartile and an upper quartile, based on revenue. The industry average is also presented.</Typography>
                    </Box>
                  </Grid>
                  <Grid item className='business-cards' xs={12} sm={6} md={4}>
                    <Box className='business-card'>
                      <span className='business-count'>02</span>
                      <Typography className='business-card-heading' variant="body1">Revenue</Typography>
                      <Typography className='business-card-data' variant="body1">Businesses can be analyzed by revenue size. Businesses with total revenue less than $5 million will have different cost structures than businesses with revenue between $5 million and $20 million.</Typography>
                    </Box>
                  </Grid>
                  <Grid item className='business-cards' xs={12} sm={6} md={4}>
                  <Box className='business-card'>
                      <span className='business-count'>03</span>
                      <Typography className='business-card-heading' variant="body1">Location</Typography>
                      <Typography className='business-card-data' variant="body1">Businesses can be pinpointed by the location in which they operate. Explore by province or territory, by geographic region including the Atlantic region, the Prairies or the Territories, and by Canada wide.</Typography>
                    </Box>
                  </Grid>
                  <Grid item className='business-cards' xs={12} sm={6} md={4}>
                    <Box className='business-card'>
                      <span className='business-count'>04</span>
                      <Typography className='business-card-heading' variant="body1">Type</Typography>
                      <Typography className='business-card-data' variant="body1">Businesses can be classified by type. Not all businesses are incorporated companies, some are partnerships or sole proprietorships.  A sole proprietor business will not have a balance sheet.  Ratios for unincorporated businesses such as Return on Assets, for example, will return null values.</Typography>
                    </Box>
                  </Grid>
                  <Grid item className='business-cards' xs={12} sm={6} md={4}>
                    <Box className='business-card'>
                      <span className='business-count'>05</span>
                      <Typography className='business-card-heading' variant="body1">Industry</Typography>
                      <Typography className='business-card-data' variant="body1">Drill down into your comparable businesses by zeroing in on the sector , the subsector, industry, and class. The industry classification used is the world class North American Industry Classification System or 'NAICS', developed jointly and used by Canada and the United States.      </Typography>
                    </Box>
                  </Grid>
                  <Grid item className='business-cards' xs={12} sm={6} md={4}>
                    <Box className='business-card'>
                      <span className='business-count'>06</span>
                      <Typography className='business-card-heading' variant="body1">Null Values</Typography>
                      <Typography className='business-card-data' variant="body1">If the selected filters result in a small number of businesses, the data may not be available for all quartiles and the balance sheet and income statement may return null values. Adjust the selection filters to increase the numbers of businesses available to benchmark.</Typography>
                    </Box>
                  </Grid>
                </Grid>
            </Box>
        </div> 
    </div>
  )
}

export default BusinessTypes