## IdeaSpace - ICS Summative

IdeaSpace is a free application that is targeted towards secondary school students
who want to share their academic findings, experiences, and fun facts with a group of people
with a similar interest.

## Running Ideaspace

### Downloading the source code

#### Clone the repository:

```
git clone https://github.com/tRieMeRalD/IdeaSpace.git
cd IdeaSpace
```

#### View the front-end source code:

To view the source code for the front-end, click [here].

[here]: https://github.com/tRieMeRalD/IdeaSpace-Frontend

#### To run ReactJS build:

```
cd client
npm run build
npm start
```

#### To run the application locally (ReactJS and Java):

```
./gradlew bootRun
```

#### Node dependencies required to run the project:

```
npm install --save axios jwt-decode react-redux react-router-dom redux redux-thunk
```

#### Other requirements:

- Java 1.8
- Spring Boot 2.1.5
- Spring Security
- Spring Web

To install Spring Boot and its dependencies, use this [link].

[link]: https://start.spring.io/

## Instructions - Step-by-Step Guide:

#### 1. Login or create an account if you do not have one

![Creating an account takes less than a minute!](https://github.com/tRieMeRalD/IdeaSpace/blob/master/img/doc1.jpg)

#### 2. Create your profile

![Create your profile using the dashboard](https://github.com/tRieMeRalD/IdeaSpace/blob/master/img/doc2.jpg)

#### 3. Make your first post

![Create your first post in minutes!](https://github.com/tRieMeRalD/IdeaSpace/blob/master/img/doc3.jpg)

#### 4. View other's posts

![View other's posts by scrolling down](https://github.com/tRieMeRalD/IdeaSpace/blob/master/img/doc4.jpg)

![Click on the thumbnail to view post](https://github.com/tRieMeRalD/IdeaSpace/blob/master/img/doc5.jpg)

Have discussions by commenting on each other's posts.

#### 5. Share your profile to expand your network

![Use the URL provided](https://github.com/tRieMeRalD/IdeaSpace-Frontend/blob/master/src/img/doc6.jpg)

## Update threads

### May 30, 2019 Update

- Patch 1: Hashtag filter only requires a one button click instead of 2

- Patch 2: Deleting and liking comments should refresh to the same post

- Patch 3: For new users, "No profile" should only be shown once.

### May 28, 2019 Update

- Documentation images updated

### May 25, 2019 Update

- Code cleaning

- Comments added

### May 24, 2019 Update

- Error handling complete

- Error handling added for Edit.js, EditProfile.js, Dashboard.js, Create.js

### May 23, 2019 Update

- Error handling being implemented

- Error handling added for Login.js and Signup.js

### May 22, 2019 Update

- Redirecting dashboard to edit profile if user already has a profile

### May 21, 2019 Update

- Comments added for unclear functions in the code

- Documentation added with a step-by-step guideline

### May 20, 2019 Update

- Sorting function api function created

### May 19, 2019 Update

- Sorting function api in progress

### May 18, 2019 Update

- Color change when you click on a hashtag

- Hashtags now show up on the main post page

- Hashtags show up for individual posts

### May 17, 2019 Update

- Sort by hashtag function

### May 16, 2019 Update

- Login/Signup UI updated

- Delete comment function working

- Developing the like function

### May 14, 2019 Update

- /profile/:id route created and functioning

- Post body line breaks are preserved

- Adding more text customization using CKEditor (work in progress)

### May 13, 2019 Update

- Specific profile routes are being made /profile/:id

- Specific Post UI layout changed

- Comment section UI layout minor edits

### May 11, 2019 Update

- Completed edit profile function

- Social media icons and function added

- Profile UI changed and made scalable

### May 10, 2019 Update

- Edit profile function

- Adding social media options

### May 9, 2019 Update

- Account IDs created

- Account ID linked to posts

- Account ID linked to comments

- Account permissions changed (i.e. editing is only for owner, deleting comments only for owner of the comment)

- Logout page created and created logout redirect function

### May 8, 2019 Update

- Account IDs generated

- Linking account IDs to profile, comments, posts

### May 7, 2019 Update

- Unique account IDs being created

### May 6, 2019 Update

- Dashboard profile setup feature has been added

- View profile feature has been added

- View other's profile is in works

- View posts on that profile feature has been added

### May 5, 2019 Update

- Login / Signup system added

- Some of the routes are protected

- Navbar changes based on authentication / guest mode

### May 1, 2019 Update

- Image URL option has been added

- More UI/UX changes

- Comment section: FIXED --> comments for specific posts work

### April 30, 2019 Update

- UI/UX Design has been changed

- Comment section: Still work in progress

### April 28, 2019 Update

- Adding functionality to the comment thread

- Bug fix: Multiple comments can be added

- Working on like:dislike button functions

### April 27, 2019 Update

- Redux added

- Comment feature added

- UI for like:dislike ratio added

- Common components added for scalability

### April 22, 2019 Update

- CRUD features added

- MongoDB added

- ReactJS front-end added

### April 21, 2019 Update

- Initial Commit

## Licence

The MIT License

Copyright (c) 2019 William Law

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
