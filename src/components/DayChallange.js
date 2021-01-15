import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
	table: {
		minWidth: 650,
	},
});

function createData(weekno, depositam, totalbal) {
	return { weekno, depositam, totalbal };
}

const rows = [
	createData('Week 1', 1.00, 1.00),
	createData('Week 2', 2.00, 3.00),
	createData('Week 3', 3.00, 6.00),
	createData('Week 4', 4.00, 10.00),
	createData('Week 5', 5.00, 15.00),
	createData('Week 6', 6.00, 21.00),
	createData('Week 7', 7.00, 28.00),
	createData('Week 8', 8.00, 36.00),
	createData('Week 9', 9.00, 45.00),
	createData('Week 10', 10.00, 55.00),
	createData('Week 11', 11.00, 66.00),
	createData('Week 12', 12.00, 78.00),
	createData('Week 13', 13.00, 91.00),
	createData('Week 14', 14.00, 105.00),
	createData('Week 15', 15.00, 120.00),
	createData('Week 16', 16.00, 136.00),
	createData('Week 17', 17.00, 153.00),
	createData('Week 18', 18.00, 171.00),
	createData('Week 19', 19.00, 190.00),
	createData('Week 20', 20.00, 210.00),
	createData('Week 21', 21.00, 231.00),
	createData('Week 22', 22.00, 253.00),
	createData('Week 23', 23.00, 276.00),
	createData('Week 24', 24.00, 300.00),
	createData('Week 25', 25.00, 325.00),
	createData('Week 26', 26.00, 351.00),
	createData('Week 27', 27.00, 378.00),
	createData('Week 28', 28.00, 406.00),
	createData('Week 29', 29.00, 435.00),
	createData('Week 30', 31.00, 465.00),
	createData('Week 31', 31.00, 496.00),
	createData('Week 32', 32.00, 528.00),
	createData('Week 33', 33.00, 561.00),
	createData('Week 34', 34.00, 595.00),
	createData('Week 35', 35.00, 630.00),
	createData('Week 36', 36.00, 666.00),
	createData('Week 37', 37.00, 703.00),
	createData('Week 38', 38.00, 741.00),
	createData('Week 39', 39.00, 780.00),
	createData('Week 40', 40.00, 820.00),
	createData('Week 41', 41.00, 861.00),
	createData('Week 42', 42.00, 903.00),
	createData('Week 43', 43.00, 946.00),
	createData('Week 44', 44.00, 990.00),
	createData('Week 45', 45.00, 1035.00),
	createData('Week 46', 46.00, 1081.00),
	createData('Week 47', 47.00, 1128.00),
	createData('Week 48', 48.00, 1176.00),
	createData('Week 49', 49.00, 1225.00),
	createData('Week 50', 50.00, 1275.00),
	createData('Week 51', 51.00, 1326.00),
	createData('Week 52', 52.00, 1378.00)
];

export default function BasicTable() {
	const classes = useStyles();

	return (
		<>
			<h3> Try our 52 Week Challenge! </h3>
			<h4> Start with $1, next week add another dollar,and so on ...</h4>
			<h5> The idea is simple: You start by socking away just $1 in the first week of the year, and then gradually increase your savings by a dollar a week throughout the year. So you save $2 in Week 2, then $3 in Week 3, and so on, until you’re stashing away upwards of $50 a week next December.

By the end of the year, if you complete the challenge, you’ll have saved $1,378.</h5>
			<TableContainer component={Paper}>
				<Table className={classes.table} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell align="left">Week Number#</TableCell>
							<TableCell align="left">Deposit Amount</TableCell>
							<TableCell align="left">Total Balance</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row) => (
							<TableRow key={row.name}>
								<TableCell key={row.name} component="th" scope="row"> {row.weekno}
									{row.name}
								</TableCell>
								<TableCell key={row.depositam} align="left">${row.depositam}</TableCell>
								<TableCell key={row.totalbal} align="left">${row.totalbal}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
}
