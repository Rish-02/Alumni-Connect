import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import Button from '@mui/material/Button';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import axios from "axios";


function createData(name, status, document, date, post, decision) {
  return {
    name,
    status,
    document,
    date,
    post,
    decision,
    history: [
      {
        date: '2020-01-05',
        customerId: '11091700',
        amount: 3,
      },
      {
        date: '2020-01-02',
        customerId: 'Anonymous',
        amount: 1,
      },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>

        {/* Data display of the person and posts start here */}
        
      <TableRow ml={5} sx={{ '& > *': { borderBottom: 'unset' } }}>
       
        <TableCell align="center" component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="center">{row.status}</TableCell>
        <TableCell align="center">{row.document}</TableCell>
        <TableCell align="center">{row.date}</TableCell>
        <TableCell align="center">
          <p onClick={() => setOpen(!open)}>
        
         
          
            {open ?  'Hide' : 'View Post'}
          </p>
        </TableCell>
        <TableCell align="center"> 
         <Button color='success' variant="contained" >Approve</Button>
         or
         <Button variant="contained" >Approve</Button>
         </TableCell>
      </TableRow>
        {/* Data display of the person and posts ends here */}





        {/* The Dropdown on View Post starts here */}

      <Collapse in={open} timeout="auto" unmountOnExit>
      {/* Whole Post Goes here */}
     <Typography  mr={5} align='center'>
        "Yash Tiwari here"
     </Typography>
      </Collapse>

       {/* The Dropdown on View Post ends  here */}
     
    </React.Fragment>
  );
}

// {
//   data.length > 0 &&
//   data.map((item) => {
    
//       const rows = [ createData( {item.name}, 'Verified', 'Id Card', '2/12/2003'),


//       ]
//         // <tr>
//             {/* <td>{item.id}</td>
//             <td>{item.name}</td>
//             <td>{item.desigantion}</td>
//             <td>{item.document}</td>
//             <td>{item.date}</td>
//             <td>{item.decision}</td>
//             <td>{item.download}</td>

    
//         </tr> */}
    
//   })
// }


export default function TheTable() {
  const [data, setData] = useState([])
  useEffect(()=>{
      axios.get('http://localhost/api/user/auth/listUsers')
      .then(res=>{
        console.log(res.data)
        setData(res?.data?.data)
  
      })
      .catch(err=>{
        alert('something went wrong')
      })
  }, [])
  
  const rows = [
    data.length > 0 &&
    data.map((item) => {
    createData(item.name, item.designation , item.document, item.date)})
  //   createData('Piyush    ', 'Adhaar Card', 9.0, 37, 4.3, 4.99),
  //   createData('Rohan', 262, 16.0, 24, 6.0, 3.79),
  //   createData('Cupcake', 305, 3.7, 67, 4.3, 2.5),
  //   createData('Gingerbread', 356, 16.0, 49, 3.9, 1.5),
  ];


  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>

            <TableCell align="center">Name</TableCell>
            <TableCell align="center" >Status</TableCell>
            <TableCell align="center">Document</TableCell>
            {/* <TableCell /> */}
            <TableCell align="center">Date </TableCell>
            <TableCell align="center">Post</TableCell>
            <TableCell align="center">Decision </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}