

export function gridBlock(row, column, left, top, ) {
	return {
		row,
		column,
		left,
		top,
	};
}

export function generateGrid(rows, columns) {
	let grid = [];
	let i, j, rowData;
	for (i = 0; i < columns; i++) {
		rowData = [];
		for (j = 0; j <= rows; j++) {
			const isLastRow = j === rows;
			rowData.push(gridBlock(j, i, 0, isLastRow ? null : 0, isLastRow ? null : 0));
		}
		grid.push(rowData);
	}
	// last row
	rowData = [];
	for (j = 0; j < rows; j++) {
		rowData.push(gridBlock(j, i, null, 0, null));
	}
    // last row and last column 
    
	rowData.push(gridBlock(j, i, null, null, null));
	grid.push(rowData);
	return grid;
}