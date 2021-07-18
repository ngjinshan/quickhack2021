# QuickHack 2021 - Mental Health Theme

## Git repo link
- https://github.com/ngjinshan/quickhack2021.git

## Requirements
### Dependencies used:
- npm 6.13.4
- node v12.14.1

## To start program
### Install dependencies by running the following in terminal
```bash
npm install
```

### Start by running the following in terminal in the root directory/path of the project folder
```bash
npm start
```
## Team details
### Name ID Student email
- Ng Jin Shan 30242738 jngg0042@student.monash.edu
- Chan Wai Hao 30136164 wcha0041@student.monash.edu
- Saw Yee Cheng 30106648 ysaw0001@student.monash.edu
- Cheong Chee Feng 30222397 cche0106@student.monash.edu

## Project Background
### Idea
- Mental health has been a worrying issue especially during the pandemic
- We aim to create a website where all important information regarding mental health can be obtained, from facts, tips and early signs to helpline numbers and a mental health diagnosis checker (prototype)

## Scalability 
### Mock database
- For all data used in the project, we obtain them from a mock database (any js files starting with a underscore) in src/components/database
- In our project, the database tables are \_symptoms, \_event, \_chartTable, \_disorders, \_facts, \_tips, \_signs, \_helpline, 

## Events
- List of events currently shown are random campaigns and webinars
- In a real scenario it would be populated with real events/campaigns/webinars etc

## Volunteer form
- Mainly to help out with any events available etc
- The form is just a dummy form, so no data will actually be sent into any database

## APIMedic (Mental Health Diagnosis)
### API KEY
- The API key used for the APIMedic (Self Diagnosis) has a limit up to 100 calls per month
- To obtain a new API, if the limit has been exceeded, go to APIMedic and register an account @ apimedic.com and go to the API KEYS page
- Two keys will be required: secret_key and api_key, both obtained from the Live Basic API Account section
- secret_key = Live password
- api_key = Live username

In src/api.js lines 6 and 7:
```javascript
let secret_key = YOUR_SECRET_KEY
let api_key = YOUR_API_KEY
```
- For more information head to their website for their official documentation @ apimedic.com
### How it works
- This API diagnoses health issues with an input of symptoms
- There is a fixed set of symptoms to be chosen from, taken from APIMEDIC, and we have filtered the symptoms for mental health issues only
- Users can select the symptoms and attempt to obtain a diagnosis
- Each diagnosis is mapped to the symptoms chosen and is predicted using the API
