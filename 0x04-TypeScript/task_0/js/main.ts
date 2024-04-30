interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const student1: Student = {
	firstName: "Jane",
	lastName: "Doe",
	age: 25,
	location: "New York"
};

const student2: Student = {
	firstName: "Alice",
	lastName: "Smith",
	age: 22,
	location: "Los Angeles"
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');
const tbody = document.createElement('tbody');

table.style.background = "lightblue";
table.appendChild(tbody);

studentsList.forEach((student: Student): void => {
	const row = document.createElement('tr');
	const nameCell = document.createElement('td');
	const locationCell = document.createElement('td');

	nameCell.textContent = student.firstName + " " + student.lastName;
	locationCell.textContent = student.location;

	nameCell.style.border = "1px solid lightblue";
	locationCell.style.border = "1px solid lightblue";
	nameCell.style.padding = "5px";
	locationCell.style.padding = "5px";

	row.appendChild(nameCell);
	row.appendChild(locationCell);
	tbody.appendChild(row);
});

document.body.appendChild(table);

