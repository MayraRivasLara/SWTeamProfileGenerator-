const fs = require('fs');

//Function to create Employees cards.

function createCard(employee) {

    const role = employee.getRole();

    let specialListItem, specialATag, specificIcon;

    if (role === 'Manager') {
        
        specificIcon = '<i class="fa-solid fa-desktop"></i>';
        specialListItem = `Office Number: ${employee.getOfficeNumber()}`;
        specialATag = `<a href="tel:${employee.getOfficeNumber()}" class="card-link text-warning">Office Number</a>`;
    
    } else if (role === 'Engineer') {

        specificIcon = `<i class="fa-solid fa-laptop"></i>`;
        specialListItem = `Github: ${employee.getGithub()}`;
        specialATag = "";
        
                
    } else if (role === 'Intern') {

        specificIcon = `<i class="fa-solid fa-car"></i>`;
        specialListItem = `School: ${employee.getSchool()}`;
        specialATag = "";
        
    };

    return `
    <div class="col mt-3 rem">
        
        <div class="card" style="width: 18rem;">

        <div class="card-body card text-white bg-info">
        <h5 class="card-title">Name: ${employee.getName()}</h5>
          <p class="card-text">Role: ${employee.getRole()}</p>
          ${specificIcon}
          </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${employee.getId()}</li>
          <li class="list-group-item class="card-link text-warning">Email: ${employee.getEmail()}</li>
          <li class="list-group-item">${specialListItem}</li>
        </ul>
        <div class="card-body">
          <a href="mailto:${employee.getEmail()}" class="card-link text-warning" >Email</a>
          ${specialATag}
          
        </div>
      </div>
</div>
    `
}

// function to generate employees cards
function generateCards(employees) {
    return employees.map((employee) => createCard(employee)).join('');

}


// Function to generate HTML file
// based on data provided by user.

function generateHtmlFile(employees) {

    return `
    <!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  <title>SW Team Profile Generator</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400&display=swap" rel="stylesheet">
   <script src="https://kit.fontawesome.com/8187954585.js" crossorigin="anonymous"></script>
</head>

<body class="bg-light">

  <h1 class="text-center mb-3 rem p-3 rem bg-secondary text-white">Support Workers Team Profile</h1>

  <div class="container">
    <div class="row">
                
                ${generateCards(employees)}
    </div>

  </div>
  
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"
  integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB"
  crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"
  integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13"
  crossorigin="anonymous"></script>
  
</body>
</html>
`
};
              
// export to dist folder
module.exports = generateHtmlFile;