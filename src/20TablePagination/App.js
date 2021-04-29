import {useState} from "react";
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow
} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    table: {
        minWidth: 650
    }
});

const createData = (name, calories, fat, carbs, protein) => {
    return {name, calories, fat, carbs, protein};
};

const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
    createData("Gingerbread2", 356, 16.0, 49, 3.9),
    createData("Gingerbread3", 356, 16.0, 49, 3.9),
    createData("Gingerbread4", 356, 16.0, 49, 3.9),
    createData("Gingerbread5", 356, 16.0, 49, 3.9),
    createData("Gingerbread6", 356, 16.0, 49, 3.9),
    createData("Gingerbread7", 356, 16.0, 49, 3.9),
    createData("Gingerbread8", 356, 16.0, 49, 3.9),
    createData("Gingerbread9", 356, 16.0, 49, 3.9),
    createData("Gingerbread10", 356, 16.0, 49, 3.9),
    createData("Gingerbread11", 356, 16.0, 49, 3.9),
    createData("Gingerbread12", 356, 16.0, 49, 3.9),
    createData("Gingerbread13", 356, 16.0, 49, 3.9)
];

export const App = () => {
    const classes = useStyles();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Dessert (100g serving)</TableCell>
                        <TableCell align="right">Calories</TableCell>
                        <TableCell align="right">Fat&nbsp;(g)</TableCell>
                        <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                        <TableCell align="right">Protein&nbsp;(g)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows
                        // начальный индекс массива, конечный индекс массива плюс размер области видимости
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((row, index) => (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.calories}</TableCell>
                                <TableCell align="right">{row.fat}</TableCell>
                                <TableCell align="right">{row.carbs}</TableCell>
                                <TableCell align="right">{row.protein}</TableCell>
                            </TableRow>
                        ))}
                    {emptyRows > 0 && (
                        <TableRow style={{height: 53 * emptyRows}}>
                            <TableCell colSpan={6}/>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
            <TablePagination
                // отвечает за количество отображаемых страниц
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </TableContainer>
    );
};