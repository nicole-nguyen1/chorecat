# chorecat
This is my personal repo for chorecat, a chore management tool. Think of it as a sticker chart for completing chores! The original repo can be found [here](https://github.com/meloncats/chorecat).

Team Members:
- [Logan Benson](https://github.com/cosmere)
- [Jeff Chea](https://github.com/jorfsson)
- [Mason Hunter](https://github.com/Hunterist12)

## Demo
- Coming soon!

## Tech Stack
Built with
- Front-End: React, Material UI, D3
- Back-End: Node, Express,
- Database: MySQL

## Features
- Add chores to the chart
- Specify who completed a specific chore on a specific day
- Reset the week (keeps the chores, but removes users who completed the chores)
- Data visualization for chore completion

Future features entail:
- *Household management:* create more than one household which can contain any amount of users. User accounts will be associated with a specific household.
- *More user management:* user profiles with names, avatars, and/or symbols that the user can pick to represent themselves on the calendar.
- *OAuth:* Facebook, Google, etc
- *Chore gamification:* earn points for the amount of chores you complete!
- *Editing functionality for chores*: it's built out on the server, but has yet to be done on the front-end.
- *Recurring assigned chores:* assign a chore to a roomie for a specific day or days of the week.
- *Invite new roomies to your household:* send an invite link via text or email.
- *More robust navigation:* utilize Material UI's drawer component to contain sign up/in/out links as well as links to the app and a dashboard for the D3 data visualization
- *Send reminders to your roomies:* it's not passive-aggressive of you if the app sends a notification to that one roomie who always waits until the last minute.
- *Real-time re-rendering as multiple users in a household use the app:* with Docker!
- *Integrations:* Google Calendar, Twilio (sending texts), Mailchimp (sending emails)

## Getting Started
1. Fork the repo and then clone it.
2. Run the following scripts if running on localhost.
```
npm install
npm start
npm run react-dev
```
3. Edit database connection in `database/index.js` to connect to your own local or remote database.
4. Git to coding!

## Contribute

You may contribute by following the below steps:

### Git setup
1. Fork from https://github.com/nicole-nguyen1/chorecat.git.
2. Clone from your repo.
3. Add remote.

```
git remote add upstream https://github.com/nicole-nguyen1/chorecat.git
```

### Git workflow
Two branches: master and dev

1. Commit to your own feature branch often and pull often.
```
git pull upstream dev
```

2. When you want to work on feature, check out dev branch and make a new feature branch.

Example:
```
git checkout -b <new-branch>
```

3. Do all work in feature branch. Commit only to your feature branch.
4. Before merging into dev, pull from dev branch and fix merge conflicts.
5. When merge conflicts are fixed, pull request into dev branch. 
6. Review.
7. Merge into dev.
8. If there is a functioning product in dev, merge into master. 

## Endpoints
### User Endpoints

Found in `/server/users.js`

| Request  | Endpoint | Action |
| ------------- | ------------- | ------------- |
| GET  | `/api/users`  | Fetches all users stored in the "users" table in the database. Before sending JSON to the client, it removes all user passwords and only returns usernames, userIds, symbol, and household.  |
| POST  | `/api/users`  | Passes username and hashed password to the database, which adds a user record. Automatically signs new user into the app.  |
| PUT  | `/api/users:userId`  | Passes userId and new username to the database, which will look for a record matching the userId and update the associated username. |
| DELETE  | `/api/users:userId`  | Passes userId to the database, which will look for a record matching the userId and delete the record. |

### Chore Endpoints

Found in `/server/chores.js`

| Request  | Endpoint | Action |
| ------------- | ------------- | ------------- |
| GET  | `/api/chores`  | Fetches all chores in the "chores" tables in the database ONLY if the user is logged in (uses the isLoggedIn helper function). |
| POST  | `/api/chores`  | Passes the name of the chore from the client to the database, which adds a new chore record containing the choreId and the chore_name. |
| PUT  | `/api/chores:choreId`  | Passes choreId and new chore name to the database, which will look for a record matching the userId and update the associated chore name. |
| DELETE  | `/api/chores:choreId`  | Passes choreId to the database, which will look for a record matching the choreId and delete the record. |

### Calendar Endpoints

Found in `/server/calendar.js`

| Request  | Endpoint | Action |
| ------------- | ------------- | ------------- |
| GET  | `/api/calendar`  | Fetches all completed chores from the "completedChores" table in the database. This JSON is the product of multiple inner joins and contains the following information about the completed chore: id, username of the user who completed the chore, the name of the chore, and the dayId that the chore was completed on. |
| POST  | `/api/calendar`  | Passed choreId, userId, and day to the database and creates a record in the "completedChores" table. The day is a number ranging from 0 to 6 as opposed to "Monday", "Tuesday", etc. |
| DELETE  | `/api/calendar`  | Sends a request to the database to delete all records in the "completedChores" table. This functionality is for resetting your calendar to begin a new week of chores. |
| DELETE  | `/api/calendar:completedChoreId`  | Passes completedChoreId to the database, which will look for a record matching the completedChoreId and delete the record. |

### Other Endpoints

Found in `/server/index.js`

| Request  | Endpoint | Action |
| ------------- | ------------- | ------------- |
| GET  | `/api/verify`  | Checks if a user exists (that there is a cookie). If there is an existing cookie, send status code 200, which will be passed to the client so that the client can render `isLoggedIn` state to `true`. |
| POST  | `/api/login`  | Uses Passport's `authenticate` method to check if the username and password combination exists in the database. Redirect to `/login` is done client-side, not server-side. |
| GET  | `/api/logout`  | Signs the user out, clears the cookie, destroys the user session, and redirects the user to `/`. |
| GET  | `/*`  | Serves all React files for other routes. |
| ALL  | `/*`  | Catch all routes that are not expected and serve a feline 404 page. |

### Helpers

| Function  | Action |
| ------------- | ------------- |
| isLoggedIn | This is Express middleware. If the `req.user` exists, it means the user is logged in and to proceed with the next middleware function in the stack. Otherwise, if the user is not logged in, the server will redirect the user to `/login`.  |

## Schema

### Users Schema

| Fields  | Description |
| ------------- | ------------- |
| id  | auto-incrementing id  |
| user_name  | the username |
| password  | the hashed password that comes from the server |
| symbol  | a symbol associated with the user (feature not yet implemented) |
| household  | the specific household that the user belongs to (feature not yet implemented) |

### Chores Schema

| Fields  | Description |
| ------------- | ------------- |
| id  | auto-incrementing id  |
| chore_name  | the name of the chore |

### Completed Chores Schema

`user_id` and `chore_id` both contain the action `ON DELETE CASCADE` which will delete data from the related tables "users" and "chores" when a DELETE request is made to `/api/calendar`.

| Fields  | Description |
| ------------- | ------------- |
| id  | auto-incrementing id  |
| user_id | foreign key that references id on the "users" table |
| chore_id  | foreign key that references id on the "chores" table |
| day | a number between 0 and 6 that represents the day of the week |

