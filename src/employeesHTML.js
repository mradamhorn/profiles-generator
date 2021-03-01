const employeeCards = (answers) => {
    if (answers.role === 'Manager') {
        return `
        <div class="card manager-card shadow-sm" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${this.answers.name}</h5>
                <h6 class="card-text">${this.answers.role}</h6>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Employee ID: ${this.answers.id}</li>
                <li class="list-group-item">Email: ${this.answers.email}</li>
                <li class="list-group-item">Office Number: ${this.answers.officeNumber}</li>
            </ul>
        </div>
        `
    } else if (answers.role === 'Engineer') {
        return `
        <div class="card engineer-card shadow-sm" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${this.answers.name}</h5>
                <h6 class="card-text">${this.answers.role}</h6>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Employee ID: ${this.answers.id}</li>
                <li class="list-group-item">Email: ${this.answers.email}</li>
                <li class="list-group-item">GitHub Username: ${this.answers.github}</li>
            </ul>
        </div>
        `
    } else if (answers.role === 'Intern') {
        return `
        <div class="card intern-card shadow-sm" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${this.answers.name}</h5>
                <h6 class="card-text">${this.answers.role}</h6>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Employee ID: ${this.answers.id}</li>
                <li class="list-group-item">Email: ${this.answers.email}</li>
                <li class="list-group-item">School: ${this.answers.school}</li>
            </ul>
        </div>
        `
    }
}
