document.getElementById('dataForm').addEventListener('submit', function(event) {
  event.preventDefault(); 

  var fullName = document.getElementById('fullName').value;
  var phone = document.getElementById('phone').value;
  var faculty = document.getElementById('faculty').value;
  var birthdate = document.getElementById('birthdate').value;
  var address = document.getElementById('address').value;

  var fullNamePattern = /^[А-Яа-яЁё]{2,}\s[А-Яа-яЁё]\.\s[А-Яа-яЁё].$/;
  var phonePattern = /^\(\d{3}\)-\d{3}-\d{2}-\d{2}$/;
  var facultyPattern = /^[А-ЯІ]{3,5}$/;
  var birthdatePattern = /^\d{2}\.\d{2}\.\d{4}$/;
  var addressPattern = /^м\.\s[А-ЯІЇЄҐа-яіїєґ\s]+$/;

  var fullNameIsValid = fullNamePattern.test(fullName);
  var phoneIsValid = phonePattern.test(phone);
  var facultyIsValid = facultyPattern.test(faculty);
  var birthdateIsValid = birthdatePattern.test(birthdate);
  var addressIsValid = addressPattern.test(address);

  clearErrors();
  clearFieldStyles();

  if (!fullNameIsValid) {
    document.getElementById('fullName').classList.add('error');
    document.getElementById('fullNameError').textContent = 'Некоректний формат ПІБ';
  }

  if (!phoneIsValid) {
    document.getElementById('phone').classList.add('error');
    document.getElementById('phoneError').textContent = 'Некоректний формат телефону';
  }

  if (!facultyIsValid) {
    document.getElementById('faculty').classList.add('error');
    document.getElementById('facultyError').textContent = 'Некоректний формат факультету';
  }

  if (!birthdateIsValid) {
    document.getElementById('birthdate').classList.add('error');
    document.getElementById('birthdateError').textContent = 'Некоректний формат дати народження';
  }

  if (!addressIsValid) {
    document.getElementById('address').classList.add('error');
    document.getElementById('addressError').textContent = 'Некоректний формат адреси';
  }

  if (fullNameIsValid && phoneIsValid && facultyIsValid && birthdateIsValid && addressIsValid) {
    displayData(fullName, phone, faculty, birthdate, address);
  }
});

function clearErrors() {
  document.getElementById('fullNameError').textContent = '';
  document.getElementById('phoneError').textContent = '';
  document.getElementById('facultyError').textContent = '';
  document.getElementById('birthdateError').textContent = '';
  document.getElementById('addressError').textContent = '';
}

function clearFieldStyles() {
  var fields = document.querySelectorAll('.input-field');
  fields.forEach(function(field) {
    field.classList.remove('error');
  });
}

function displayData(fullName, phone, faculty, birthdate, address) {
  var output = document.getElementById('output');
  output.innerHTML = '';

  var data = [
    'ПІБ: ' + fullName,
    'Телефон: ' + phone,
    'Факультет: ' + faculty,
    'Дата народження: ' + birthdate,
    'Адреса: ' + address
  ];

  data.forEach(function(item) {
    var paragraph = document.createElement('p');
    paragraph.textContent = item;
    output.appendChild(paragraph);
  });
}

const table = document.getElementById('myTable');
const tbody = table.querySelector('tbody');
const colorPicker = document.getElementById('colorPicker');
const variant = 1;
const numRows = 6;
const numCols = 6;
      
for (let i = 0; i < numRows; i++) {
    const row = document.createElement('tr');
    for (let j = 0; j < numCols; j++) {
        const cell = document.createElement('td');
        cell.textContent = i * numCols + j + 1;
        row.appendChild(cell);
    }
    tbody.appendChild(row);
}

const targetCell = tbody.querySelectorAll('td')[variant-1];

targetCell.addEventListener('mouseover', () => {
  const randomColor = getRandomColor();
  targetCell.style.backgroundColor = randomColor;
});

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

targetCell.addEventListener('click', () => {
  const selectedColor = colorPicker.value;
  targetCell.style.backgroundColor = selectedColor;
});

targetCell.parentElement.addEventListener('dblclick', () => {
  const selectedColor = colorPicker.value;
  const cellsInRow = targetCell.parentElement.querySelectorAll('td');

  cellsInRow.forEach(cell => {
    cell.style.backgroundColor = selectedColor;
  });
});