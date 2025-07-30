function createTable() {
    //Write your code here
	const table=document.getElementById("myTable");
	table.innerHTML=""
	let row=parseInt(prompt("Input number of rows"));
	let col=parseInt(prompt("Input number of col"));
	
if(isNaN(row) || row<=0  || isNaN(col) || col<=0 ){
	alert("do not create the table") 
		return;
}
else{ 
	for(let i=0; i<row;i++){
		let storerow=document.createElement("tr");
		for(let j=0;j<col;j++){
			let cell=document.createElement("td");
			 cell.innerText = `Row-${i+1} Column-${j+1}`; 
    storerow.appendChild(cell);
		}
		  table.appendChild(storerow);
	}
	
	
}







	
}
