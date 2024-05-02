import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/system';
import SearchBar from './SearchBar';
import TheTable from './Table';




export default function CollapsibleTable() {



  return (
    <>  
   <Box>
    <Stack direction="row" marginTop={4} alignItems='center' spacing={15}>
    <Typography m={3} sx={{backgroundColor : '#f3f3f3'}}  paddingLeft={10}  variant='h4' component='h2'  >
        Post Requests 
    </Typography>
        
            <SearchBar/>
     
    {/* <Typography m={55} sx={{backgroundColor : '#f3f3f3'}}  paddingLeft={10}  variant='h4' component='h2'  > */}
        {/* Post Requests */}
   </Stack>
   <TheTable/>
    </Box>
    </>

  );
}