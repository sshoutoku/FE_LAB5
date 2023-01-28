let validator = 1;
let errors = [];
let answers = [];
const answerDiv = document.createElement('div');
const main_box = document.getElementById('main_box');
const body = document.querySelector('body');

function clearData() {
    while (answerDiv.firstChild) answerDiv.removeChild(answerDiv.firstChild);
    if (main_box.querySelector('.answerDiv')) main_box.removeChild(answerDiv);
    errors.forEach(errorField => {
      const field = document.getElementById(errorField);
      field.style.border = '2px red solid';
    });
    validator = 1;
    errors = [];
    answers = [];
  }

  function validInfo(type, text, regex, additionalCheck = () => true) {
    const valueFromElement = document.getElementById(type).value;
    if (regex.test(valueFromElement) && additionalCheck(valueFromElement)) {
      const answer = document.createElement('h4');
      answer.innerHTML = `${text}: ` + valueFromElement;
      answers.push(answer);
    } else {
      validator *= 0;
      errors.push(type);
    }
  }

function valid() {
  clearData();
  validInfo('name', 'ПІБ', /^[A-ZА-Я][a-zA-ZА-Яа-я]+ [A-ZА-Я]\.[A-ZА-Я]\.$/);
  validInfo('group', 'Група', /^[A-ZА-Я]{2}-\d{2}$/);
  validInfo('number', 'Телефон', /^\d{3}-\d{3}-\d{2}-\d{2}$/);
  validInfo('idCard', 'ID-card', /^[A-Z]{2} №\d{6}$/);
  validInfo('faculty', 'Факультет', /^[A-ZА-Я]{4}$/);

  if (validator) {
    answers.forEach(answer => answerDiv.appendChild(answer));
    main_box.appendChild(answerDiv);
  } else {
    errors.forEach(errorField => {
      const field = document.getElementById(errorField);
      field.style.border = '2px red solid';
    });
  }
}

function mouseRand(element) {
  element.style.background = randColor();
}

function mouseClear(element) {
  element.style.background = '#FFF';
}

function randNum() {
  return Math.floor(Math.random() * 255);
}

function randColor() {
  return 'rgb(' + randNum() + ',' + randNum() + ',' + randNum() + ')';
}



const option = 2;

function createTD() {
    container = document.getElementById("sec_box");
    let table = document.createElement('table');
    
    for (let i = 0; i < 6; i++) {
        let row = document.createElement('tr');
        for (let j = 0; j < 6; j++) {
            cell = document.createElement('td');
            let value = i * 6 + j + 1;
            cell.innerHTML = value;
            cell.id = value;
            row.appendChild(cell);
        };
        table.appendChild(row);
    };
    container.appendChild(table);
};

function randomColor() {
    return '#' + Math.floor(Math.random()*20000).toString(16);
};

function ranColorForCell(cell) {
    cell.style.backgroundColor = randomColor();
};

function currColor(cell) {
    const tool = document.getElementById('tool');
    cell.style.backgroundColor = tool.value;
};

function dbclickToChange(cell) {
  for (let i = option; i <= 36; i += 6) {
      document.getElementById(i).style.backgroundColor = tool.value;
  };
};

createTD();
my_cell = document.getElementById(option);
my_cell.addEventListener('mouseover', () => ranColorForCell(my_cell));
my_cell.addEventListener('click', () => currColor(my_cell));
my_cell.addEventListener('dblclick', () => dbclickToChange(my_cell));