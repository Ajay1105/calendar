# MERN + Docker Calendar
This is a MERN + Docker Calendar to view all the events happening, filter them as per need and add or delete them.

-----

## Table of Contents

- [Usage](#usage)
- [Installation](#installation)
- [Contributing](#contributing)
- [Questions](#questions)

-----

## Usage

### In frontend:
- User can see all the events.
- Filter events on the basis of type (Online, Offline, Hybrid).
- Filter events on the basis of category (Academic, Club, Sports, Placement).
- View event by date/week/month/agenda.
- Create and delete an event.

### Backend have API to perform:
- CRUD operations.
- To get event by day/week/month. 
- Get Event by Type (Online, Offline, Hybrid).
- Get Event by Category (Academic, Club, Sports, Placement).

#### To get event by day/week/month. 
- **By Day:** Make API call at `/api/findeventsbytime?year=2024&day=19`
- **By Week:** Make API call at `/api/findeventsbytime?year=2024&week=2`
- **By Month:** Make API call at `/api/findeventsbytime?year=2024&month=1`

-----

## Installation

You can install and run this code in either of following way:

### Manual installation

To install this application, you will need Node.js installed on your computer along with npm package manager

- create .env file in frontend and backend directory with help of .env.example file.
- open two terminals.
- navigate to client directory (`cd frontend`) and server directory (`cd backend`) from both terminals.
- run `npm i` in both terminals to install dependencies.
- run frontend using `npm start` and backend using `nodemon`.

### Using Docker
Docker has been used for easy setup and running of applications.

- create .env file in frontend and backend directory with help of .env.example file.
- navigate to root directory of project.
- run `Docker compose up` to run the project.
- run `Docker compose watch` to see changes live.

-----

### Contributing

Fell free to contribute in this project and generate a PR. 
<br>
Please check on local machine before generating a PR.

-----

### Questions

For any Question fell free to react out me at:

- **GitHub:** [Ajay1105](https://github.com/Ajay1105) 
- **LinkedIn:** [ajay-kumar-yadav-22595722a](https://www.linkedin.com/in/ajay-kumar-yadav-22595722a/) 
- **Email:** erajayky@gmail.com

