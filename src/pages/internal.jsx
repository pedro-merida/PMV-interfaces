import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import SearchIcon from '@mui/icons-material/Search';
import NavBar from '../components/nav_bar'
function createData(Sigla, Nombre,history) {
  return {
    Sigla,
    Nombre,
    history,
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.Sigla}
        </TableCell>
        <TableCell align="left">{row.Nombre}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Paralelo</TableCell>
                    <TableCell>Profesor</TableCell>
                    <TableCell align="right">Campus</TableCell>
                    <TableCell align="right">Vacantes</TableCell>
                    <TableCell align="right">Horas</TableCell>
                    <TableCell align="right">Acción</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.Paralelo}>
                      <TableCell component="th" scope="row">
                        {historyRow.Paralelo}
                      </TableCell>
                      <TableCell>{historyRow.Profesor}</TableCell>
                      <TableCell align="right">{historyRow.Campus}</TableCell>
                      <TableCell align="right">
                        {historyRow.Vacantes}
                      </TableCell>
                      <TableCell align="right">
                        {historyRow.Horas}
                      </TableCell>
                      <TableCell align="right">
                        <div class="btn-group btn-group-sm" role="group">
                          <button onClick={() => alert('Postulación completada, solo queda esperar los resultados :)')} class="btn btn-sm btn-outline-info" rel="tooltip" data-toggle="tooltip" data-original-title="Ir a vacantes">Postular</button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    Sigla: PropTypes.string.isRequired,
    Nombre: PropTypes.string.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        Paralelo: PropTypes.string.isRequired,
        Profesor: PropTypes.string.isRequired,
        Campus: PropTypes.string.isRequired,
        Vacantes: PropTypes.number.isRequired,
        Horas: PropTypes.string.isRequired,
      }),
    ).isRequired,
  }).isRequired,
};

const rows = [
  createData('INF-266','Sistemas de Gestion',[
    {
      Paralelo: '200',
      Profesor: 'Octavio Vasquez',
      Campus: 'San Joaquin',
      Vacantes: 3,
      Horas: 'Contacto: 4 hrs \n Correccion: 11 hrs \n Laboratorio: 0 hrs \n Total: 15 hrs',

    },
  ]),
  createData('INF-285','Computacion Cientifica',[
    {
      Paralelo: '200',
      Profesor: 'Claudio Torres',
      Campus: 'San Joaquin',
      Vacantes: 2,
      Horas: 'Contacto: 4 hrs \n Correccion: 11 hrs \n Laboratorio: 0 hrs \n Total: 15 hrs',

    },
    {
      Paralelo: '200',
      Profesor: 'Claudio Torres',
      Campus: 'San Joaquin',
      Vacantes: 3,
      Horas: 'Contacto: 0 hrs \n Correccion: 11 hrs \n Laboratorio: 4 hrs \n Total: 15 hrs',
    },
  ]),
  createData('INF-253','Lenguajes de Programación',[
    {
      Paralelo: '200',
      Profesor: 'Jose Marti',
      Campus: 'San Joaquin',
      Vacantes: 2,
      Horas: 'Contacto: 4 hrs \n Correccion: 2 hrs \n Laboratorio: 2 hrs \n Total: 8 hrs',

    },
    {
      Paralelo: '201',
      Profesor: 'Roberto Diaz',
      Campus: 'San Joaquin',
      Vacantes: 1,
      Horas: 'Contacto: 4 hrs \n Correccion: 2 hrs \n Laboratorio: 2 hrs \n Total: 8 hrs',
    },
    {
      Paralelo: '202',
      Profesor: 'Jorge Diaz',
      Campus: 'San Joaquin',
      Vacantes: 1,
      Horas: 'Contacto: 4 hrs \n Correccion: 2 hrs \n Laboratorio: 2 hrs \n Total: 8 hrs',
    },
  ]),
  createData('INF-155','Informatica Teorica',[
    {
      Paralelo: '200',
      Profesor: 'Andrés Moreira',
      Campus: 'San Joaquin',
      Vacantes: 3,
      Horas: 'Contacto: 4 hrs \n Correccion: 11 hrs \n Laboratorio: 0 hrs \n Total: 15 hrs',

    },
    {
      Paralelo: '202',
      Profesor: 'Javier Robledo',
      Campus: 'San Joaquin',
      Vacantes: 2,
      Horas: 'Contacto: 4 hrs \n Correccion: 11 hrs \n Laboratorio: 0 hrs \n Total: 15 hrs',
    },
  ]),
];
export const InternalPage = () => {
  return (
    <div className='page'>
    <NavBar />
    <div className="content" style={{padding: "50px 50px 50px 50px"}}>
    <div class="container-fluid">
                      <div class="row">
          <div class="col-md-12">
              <div class="card card-pl">
                  <div class="card-header card-header-primary">
                      <h3 class="card-title">Procesos disponibles para postulación</h3>
                  </div>
                  <div class="card-body">
                      <div class="row">
                          <div class="col-md-12">
                          <div class="container-fluid">
                              <form class="d-flex" role="search">
                                <button class="btn btn-outline-success btn-sm" type="submit"><SearchIcon color="disabled" fontSize="small" /></button>
                                <input class="form-control me-2" type="search" placeholder="Buscar Asignatura" aria-label="Search"></input>
                              </form>
                            </div>
                          <TableContainer component={Paper}>
                            <Table aria-label="collapsible table">
                              <TableHead>
                                <TableRow>
                                  <TableCell />
                                  <TableCell>Sigla</TableCell>
                                  <TableCell align="left">Nombre</TableCell>
                                </TableRow>
                              </TableHead>
                              <TableBody>
                                {rows.map((row) => (
                                  <Row key={row.Sigla} row={row} />
                                ))}
                              </TableBody>
                            </Table>
                          </TableContainer>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>



    
  
  </div>
</div>
  )
}

export default InternalPage
