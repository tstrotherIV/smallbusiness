function getAllEmployees() {
  return fetch(
    "http://localhost:3000/employees?_expand=department&_expand=computer"
  ).then((data) => data.json());
}

const employeeOutputContainer = document.querySelector(".entrySection");

function employeeToHTML(employee) {
  return `
  <article class="employee">
    <header class="employee__name">
        <h1>${employee.name}</h1>
    </header>
    <section class="employee__department">
        Works in the ${employee.department.department} department
    </section>
    <section class="employee__computer">
        Currently using a ${employee.computer.computerType}
    </section>
</article>
  `;
}
function renderToDom(employeeToHTML) {
  employeeOutputContainer.innerHTML += employeeToHTML;
}

function getAndRenderAllEmployeees() {
  employeeOutputContainer.innerHTML = "";
  getAllEmployees().then((employee) => {
    employee.map(employeeToHTML).forEach(renderToDom);
  });
}

getAndRenderAllEmployeees();
