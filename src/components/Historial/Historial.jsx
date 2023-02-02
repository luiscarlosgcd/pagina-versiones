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


//haremos un api con id que lo busque exactamente con lo que ya saque

const api = [//api y columns1
    {idDescripcion:'1', idEstacion:'1', version:'1.55.1', descripcion:'Most modern IDEs like VSCode and CodeSandbox alreent syntax for you automatically when you press on the comment shortcut CTRL+/ or ⌘+/ for macOS.'},
    {idDescripcion:'2', idEstacion:'1', version:'1.55.2', descripcion:'Within the render method comments are allowed, but in order to use them within JSX, you have to wrap them in braces and use multi-line style comments.'},
    {idDescripcion:'3', idEstacion:'2', version:'1.55.3', descripcion:'adios'},
    {idDescripcion:'4', idEstacion:'1', version:'1.55.4', descripcion:'que onda'},
    {idDescripcion:'5', idEstacion:'1', version:'1.55.5', descripcion:''},
    {idDescripcion:'6', idEstacion:'2', version:'1.55.1', descripcion:''},
    {idDescripcion:'7', idEstacion:'1', version:'1.55.6', descripcion:''},
    {idDescripcion:'8', idEstacion:'1', version:'1.57.1', descripcion:''},
    {idDescripcion:'9', idEstacion:'2', version:'1.52.1', descripcion:''},
]


const columns1 = [
    { id: 'version', label: 'Version', minWidth: 50, fontWeight: 'bold' },
    { id: 'descripcion', label: 'Descripcion', minWidth: 340, fontWeight: 'bold' },
]

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


    return (
        <div className='historial'>
            
            <div className="historial__encabezado f__sans-serif">
                <h1 id='historial__titulo'>Historial de versiones</h1>
                <button id='historial__button-close' onClick={onClose}><AiOutlineClose/></button>
            </div>

            <div id='tabla'>
                <Paper elevation={0} sx={{ width: '100%', overflow: 'hidden' }}>
                    <TableContainer sx={{ height: '50vh'}}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                {columns1.map((column) => (
                                    <TableCell 
                                    key={column.id}
                                    align='left'
                                    style={{ minWidth: column.minWidth, fontWeight: column.fontWeight, height: 2}}
                                    >
                                    {column.label}
                                    </TableCell>
                                ))}
                                </TableRow>
                            </TableHead>
                            <TableBody sx={{ zIndex: 'modal' }}>
                                {api
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => {
                                    return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.idDescripcion /*llaves que aparecen en rows deben coincidir con columns*/}>
                                        {columns1.map((column) => {
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
                        rowsPerPageOptions={[5, 15, 30]}
                        component="div"
                        count={api.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        sx={{ height: '100px', display: 'flex', justifyContent: 'flex-end', padding:'0px', marginBottom:'0px',	".MuiTablePagination-selectLabel, .MuiTablePagination-displayedRows":{
                         marginBottom:'0px'
                        }}}
                        labelRowsPerPage="Filas por página"
                        labelDisplayedRows={ (from=page) => (`${from.from}-${from.to === -1 ? from.count : from.to} de ${from.count}`)}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Paper>
            </div>
        </div>
  )
}

export default Historial