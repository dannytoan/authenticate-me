# ĐESIGNR
<a href="https://www.linkedin.com/in/dannytoan/"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" /></a>
<a href="https://github.com/dannytoan"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" /></a>

Live link: https://designr-flickr-clone.herokuapp.com/
Github Wiki: https://github.com/dannytoan/designr-react-solo-project/wiki

## About
***
ĐESIGNR is a fashion/runway themed Flickr clone with the goal of being the one-stop destination for fashion enthusiasts to browse looks from past and current runway collections.

In this web application, users are able to upload their own images of "Looks" to their own accounts and compile their own inspired customized "Collections" (albums).

## Building Instructions
***
1. Download the repository from GitHub [here](https://github.com/dannytoan/designr-react-solo-project).
2. Navigate into both the `frontend` and `backend` directories and run `npm install` to download the necessary dependencies.
3. In the `backend` directory, create an `.env` file with appropriate corresponding data to the already existing `.env.example` file.
4. Run `npx dotenv sequelize db:migrate` and `npx dotenv sequelize db:seed:all` to migrate and seed the database.
5. In both the `frontend` and `backend` directories in seperate terminals, run `npm start` to start the server and to view the site on localhost 3000.

## Future Features
***
- Comments
- Likes
- Favorites

## Technical Implementation Details
***
Database design planning was crucial in prior steps to starting this project.
- Understanding the associations between the necessary tables was required to making this application intuitive and functional.

## Demonstration
***
Welcome page as an unauthorized user:
![welcome](frontend/public/welcome-screen-logged-out.PNG)

Welcome page as an authorized & logged in user:
![logged-in](frontend/public/welcome-screen-logged-in.PNG)

"Looks" page displaying all of the images in the database:
![looks-page](frontend/public/looks-page.PNG)

Photo detail page:
![look-detail](frontend/public/look-detail.PNG)

Upload a photo page:
![upload-photo-page](frontend/public/create-a-look.PNG)

Collections/album page:
![collections-page](frontend/public/collections-page.PNG)

Adding a new collection:
![new-collection-modal](frontend/public/add-collection-modal.PNG)

Collection detail page:
![collection-detail](frontend/public/collection-detail.PNG)

## Technolgies Used
***
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
