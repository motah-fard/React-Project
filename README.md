# React-Project


# Project Overview

## Project Name

GetFit Together

## Project Description

Make a media for posting and commentin on workout. calculating calorie burns and making charts with them. adding them up together with the same username and show it in another page.
For later adding calories for the things that was eaten and then compare it to the calories that was burnt in the username page.

## Wireframes
![React 007](https://user-images.githubusercontent.com/61396761/134082227-0eb923e6-f4fe-4382-a8d8-336ddc1c3667.jpeg)


#### Home Page

![React 001](https://user-images.githubusercontent.com/61396761/134080583-1905b608-8fb9-434c-a82b-1bf369626e0b.jpeg)
![React 002](https://user-images.githubusercontent.com/61396761/134080590-0be2113c-5ddf-486e-b460-4acf05119fa4.jpeg)
![React 003](https://user-images.githubusercontent.com/61396761/134080625-3beaccb2-418f-4114-821e-3ec93899976f.jpeg)


#### Post Page
![React 004](https://user-images.githubusercontent.com/61396761/134080665-699f35ca-b2ca-4f6e-a2f1-dc74b7caee34.jpeg)
![React 006](https://user-images.githubusercontent.com/61396761/134080700-7b0a1574-e714-4596-93ff-82d54e68a393.jpeg)

![React 005](https://user-images.githubusercontent.com/61396761/134080717-209d2e04-2acf-4fa7-bcf5-64be4a09b721.jpeg)


#### Form Page

Form page and post page are look like each other.

#### User Page

![React 008](https://user-images.githubusercontent.com/61396761/134082060-ca7b9008-f640-4145-a5df-2a3cfbc1f632.jpeg)

![React 009](https://user-images.githubusercontent.com/61396761/134082072-9ee64285-6b7f-463a-b7b3-22ca7fd12123.jpeg)


<!-- #### Mobile Home Page

![TNN Mobile Home Page](https://res.cloudinary.com/dszox5xnw/image/upload/v1624948854/TheNetworkNetwork/the-network-network-04_nugfq7.png)

#### Mobile Post Page

![TNN Mobile Post Page](https://res.cloudinary.com/dszox5xnw/image/upload/v1624948854/TheNetworkNetwork/the-network-network-06_sjk5zy.png)

#### Mobile Form Page

![TNN Mobile Form Page](https://res.cloudinary.com/dszox5xnw/image/upload/v1624948854/TheNetworkNetwork/the-network-network-05_jwkv7d.png)

## Component Hierarchy

![Component Hierarchy](https://res.cloudinary.com/dszox5xnw/image/upload/v1624923627/TheNetworkNetwork/TNN_xpl4dr.png) -->

## API and Data Sample

<img width="1299" alt="API DATA" src="https://user-images.githubusercontent.com/61396761/134082134-a4912b8d-08a4-4d75-a902-3082c5242d20.png">



### Example Data:

```json
  const exercise = {
    activity: "Yoga",
    minutes: 1,
    id: Date.now(),
    comment: wefsfvasfv,
    caloriePerHour: 123,
    username: Kiana,
    imageURL: qer,
}
```

### MVP/Post MVP

#### MVP

- Create structure of site entirely in React (including React Router)
- Create an Airtable base and handle GET, POST, and PUT axios requests
- Render posts from base onto page
- Create/render forms to let users add and edit posts
- Style components using CSS and create page structure using flexbox
- Make site responsive on at least two screen sizes
- Deploy site and use environment variables to hide API keys

#### Post MVP

- Add a page for foods and their calories
- Use the data to search and calculate calories and make another post page 
- get the posts from the same username fro calorie earned and compare it to activity's calorie burned
- Animate buttons/forms for enhanced user experience

## Project Schedule

| Day        | Deliverable                                   | Status   |
| ---------- | --------------------------------------------- | -------- |
| June 28-29 | Prompt / Wireframes / Timeframes              | Complete |
| June 29    | Project Approval                              | Complete |
| June 30    | Core Application Structure (React, CSS, etc.) | Complete |
| July 1     | Axios Requests/Form Handling/Rendering        | Complete |
| July 2     | MVP/Deployment                                | Complete |
| July 6     | Post-MVP                                      | Complete |
| July 7     | Presentations                                 | Complete |

## Timeframes

| Component                     | Priority | Estimated Time | Time Invested | Actual Time |
| ----------------------------- | :------: | :------------: | :-----------: | :---------: |
| Prep/Planning                 |    H     |      3hrs      |     3hrs      |    3hrs     |
| Wireframes/Logo Design        |    H     |     2.5hrs     |     2hrs      |    2hrs     |
| Initial React Structure       |    H     |     2.5hrs     |    3.5hrs     |   3.5hrs    |
| Page Styling                  |    M     |      2hrs      |     2hrs      |    2hrs     |
| Component Styling             |    M     |     2.5hrs     |     3hrs      |    3hrs     |
| Routing Setup                 |    H     |     1.5hrs     |    1.5hrs     |   1.5hrs    |
| Airtable Setup                |    H     |      2hrs      |    1.5hrs     |   1.5hrs    |
| Axios Requests                |    H     |      3hrs      |     3hrs      |    3hrs     |
| Responsiveness                |    M     |      2hrs      |     2hrs      |    2hrs     |
| Posts Rendering               |    H     |     2.5hrs     |    3.5hrs     |   3.5hrs    |
| Auxiliary Component Rendering |    H     |      3hrs      |    2.5hrs     |   2.5hrs    |
| Form Setup                    |    M     |     2.5hrs     |     2hrs      |    2hrs     |
| Form Handling                 |    H     |      3hrs      |     2hrs      |    2hrs     |
| Favorites Page Setup          |    L     |      3hrs      |     3hrs      |    3hrs     |
| Debugging                     |    M     |      3hrs      |    4.5hrs     |   4.5hrs    |
| Animation                     |    L     |      2hrs      |     1hrs      |    1hrs     |
| Deployment                    |    H     |      2hrs      |      2hr      |     2hr     |
| Total                         |          |     42hrs      |     42hrs     |    42hrs    |
<!-- 
## SWOT Analysis

### Strengths:

I have a comfort with React that I've developed over the weeks that I think will really come in handy when doing things like my initial construction and making things components. I also have a pretty solid idea of the order in which I want to attack everything so I think my foresight will really be my biggest strength.

### Weaknesses:

I am most worried about working with local storage in the Post MVP because I haven't really used it before. I think it might prove to be a bit of a learning curve so I'm going to save that for towards the end. I also think the comment functionality will take a while, especially when thinking about how I want to allow users to input comments.

### Opportunities:

I have the opportunity to work with an easier version of a back-end database with the Airtable API, so I'm really excited to have my fundamentals of that down. I also have to get a peek into new opportunities and more advanced functionalities with everything I've learned in React so far.

### Threats:

I definitely have the tendency of overthinking things or trying to accomplish so much that it actually detracts from the overall quality of the project. To remedy this, I want to make sure not to start the post MVP or less important aspects of the app before I have everything in the MVP completely done and working.
 -->
