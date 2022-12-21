import React, { useState }from 'react'
import './Historial.css'
import { AiOutlineClose } from 'react-icons/ai'

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const api = [
    {idDescripcion:'1', idEstacion:'1', version:'1.55.1', descripcion:'hola'},
    {idDescripcion:'2', idEstacion:'1', version:'1.55.1', descripcion:'buen dia'},
    {idDescripcion:'3', idEstacion:'2', version:'1.55.1', descripcion:'adios'}
]


const columns = [
    { id: 'name', label: 'Version', minWidth: 10 },
    { id: 'code', label: 'Descripcion', minWidth: 340 },
  ];

const columns1 = [
    { id: 'version', label: 'Version', minWidth: 10 },
    { id: 'descripcion', label: 'Descripcion', minWidth: 340 },
]
  
  function createData(name, code, population, size) { //nombra el array de abajo
    const density = population / size;
    return { name, code, population, size, density };
  }
  
  const rows = [ //aqui va la api
    createData('1.0.55.0', 'Set the text-align on the table cell content. Monetary or generally number fields should be right aligned as that allows you to add them up quickly in your head without having to worry about decimals.', 1324171354, 3287263),
    createData('China', 'CN', 1403500365, 9596961),
    createData('Italy', 'IT', 60483973, 301340),
    createData('United States', 'US', 327167434, 9833520),
    createData('Canada', 'CA', 37602103, 9984670),
    createData('Australia', 'AU', 25475400, 7692024),
    createData('Germany', 'DE', 83019200, 357578),
    createData('Ireland', 'IE', 4857000, 70273),
    createData('Mexico', 'MX', 126577691, 1972550),
    createData('Japan', 'JP', 126317000, 377973),
    createData('France', 'FR', 67022000, 640679),
    createData('United', 'GB', 67545757, 242495),
    createData('Russia', 'RU', 146793744, 17098246),
    createData('Nigeria', 'NG', 200962417, 923768),
    createData('Brazil', 'BR', 210147125, 8515767),
  ];

const Historial = ({ onClose, id }) => {

    //paginacion
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    console.log(id)

    return (
        <div className='historial'>
            <div className="historial__encabezado f__sans-serif">
                <h1 id='historial__titulo'>Historial de versiones</h1>
                <button id='historial__button-close' onClick={onClose}><AiOutlineClose/></button>
            </div>
            <div id='tabla'>
            <Paper sx={{overflow: 'hidden'}}>
                <TableContainer sx={{ maxHeight: 340}}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                key={column.id}
                                align={column.align}
                                style={{ minWidth: column.minWidth }}
                                >
                                {column.label}
                                </TableCell>
                            ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.code /*llaves que aparecen en rows deben coincidir con columns*/}>
                                    {columns.map((column) => {
                                    const value = row[column.id];
                                    return (
                                        <TableCell key={column.id} align={column.align}>
                                        {column.format && typeof value === 'number'
                                            ? column.format(value)
                                            : value}
                                        </TableCell>
                                    );
                                    })}
                                </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 15, 100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
                </Paper>
            </div>
        </div>
  )
}

export default Historial