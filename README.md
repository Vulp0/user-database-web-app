# user-database-web-app

Web application that lets you interact with users from a database through a React front end

## Installation and running the project

* Clone this repo wherever you want

* `git clone https://github.com/Vulp0/user-database-web-app`

* Next, go to the `server` folder with your terminal and enter `npm install`

* Open another terminal on the same folder, but go to `client/user-database-front` instead and enter `npm install again`

* To start the whole thing, run `npm run startServer` in your server terminal, and `npm run dev -- --host` in your client/react terminal

* And that's it, visit the site at `http://localhost:5173/` (or whatever the react terminal tells you localhost it)

## Features implemented and still in progress

### Working features
* Endpoints for:
    * Authenticating login
    * ![](/sc/loginAuth.png)
    * Checking if an account already exists with a given email
    * ![](/sc/accountExist.png)
    * Edit a single user's data
    * ![](/sc/editUser.png)
    * Get all users in database (used for rendering the table)
    * ![](/sc/getAll.png)
    * Create an account (register a user)
    * ![](/sc/createUser.png)
    * Update a given user's last login date (to be used when user logs in or out)
    * ![](/sc/updateLLoginDate.png)
    * Removing one or multiple users (used in the dashboard)
    * ![](/sc/removeUser.png)
    * Blocking/Unblocking one or multiple users (used in dashboard)
    * ![](/sc/userUnlocker.png)
* Dashboard
    * Block users
    * ![](/sc/blocking.gif)
    * Unblock user
    * ![](/sc/unblocking.gif)
    * Delete users
    * ![](/sc/removing.gif)

### Features missing / not working
* Login and authentication
* Hosting
* A better looking design
