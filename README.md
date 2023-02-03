# Memry

## Overview
Hello world! My name is Jon, I’m a software developer based in Denver, CO. Welcome to Memry. 

This application is my capstone project for Flatiron School's Software Engineering Program, built using Ruby on Rails for the backend and React.js for the front. Memry is essentially a digital scrapbook application with a few social media ingredients added in for spice. 

LIVE LINK: [https://memry.onrender.com](https://memry.onrender.com)

## Features

I used Tailwind for the design and incorporated a 70's-retro-meets-old-book theme throughout the app; something Tailwind is quite good at accomodating. 

Login and Signup pages both have basic validations, and user passwords are encrypted using BCrypt gem. Newly created users navigate directly to the profile page and are prompted to create content. User profiles must be created first before a user can upload an avatar (default avatar is an elephant), and avatars are saved using ActiveStorage.

Individual posts or "Memry's" have full CRUD enabled for the user that created the Memry. All users have access to the global Memry timeline feed, which displays all user-created Memry's in chronological order. 

Each Memry has comment functionality associated, users can access via the specific Memry Details page. Comments have CREATE and DESTROY routes enabled for individual users, but users are only able to delete comments that they have created. 

User-created Memry's and comments are stored and displayed in the user's profile. Via the main timline feed, users can search through the created Memry’s by title to locate specific posts. 

## Challenges

The challenges I experienced while working on this project were #1, designing the timeline and #2 sorting the Memry posts. My entire concept essentially relied on having not just a timeline but a DYNAMIC timeline that responded appropriately to user content creation and updates. It also needed to LOOK like a timeline and not just a list with a line next to it. I couldn’t hard-code the posts into the website, so I combined nth-of-child rules in vanilla CSS to manipulate the odd and even entries as they were mapped over and then used Tailwind to polish. 

Integrating Active Storage into a React App was also more of a head scratcher than I thought it would be, but it ended up working out okay after about a day of troubleshooting.

## Running Locally
#### Deployed Version: 
[https://memry.onrender.com](https://memry.onrender.com)
#### Video Demo:
[https://loom.com](https://www.loom.com/share/879f5497a3be48c0a3bd4ec799edba48)
#### From the repo:
1. Clone this project locally
2. Run `bundle install` 
3. Run `npm install --prefix client`
4. Run `rails s` to run backend server
5. Run `npm start --prefix client` for frontend server  

##### Dependencies:
+ React
+ React-Router
+ [date-fns](https://date-fns.org/)
+ [Tailwind CSS](https://tailwindcss.com/)

## ToDo List
1. Connect Active Storage to Google or AWS and integrate it with the Memry post
2. Comments to include image uploads and comment-reply functionality 
3. Build out user friendships & friend-tagging functionality (has_friendship gem)
4. Create a Favorites feature for users to make ‘Memry Playlists’
5. Integrate Active Mailer to send a welcome email to new users
6. Create a year-in-review of all the content a user created that year
7. Add buttons to the homepage to filter Memry’s by category
8. Build out Memry details to include links to hotels, restaurants, etc.
9. Connect Memry location to Google Maps
10. Integrate 'Memry recommendations' based on previously created Memry's or Favorites

Lots more to do here, but I tried to design Memry to be open to new add-ons and features.

Thanks for stopping by, keep fighting the good fight!