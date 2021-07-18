#QuickHack 2021 - Mental Health Theme

##Requirements
###Dependencies used:
- npm 6.13.4
- node v12.14.1

##To start program
###Install dependencies by running the following in terminal
```bash
npm install
```

###Start by running the following in terminal
```bash
npm start
```
##Team details
###Name ID Student email
- Ng Jin Shan 30242738 jngg0042@student.monash.edu
- Chan Wai Hao 30136164 wcha0041@student.monash.edu
- Saw Yee Cheng 30106648 ysaw0001@student.monash.edu
- Cheong Chee Feng 30222397 cche0106@student.monash.edu

##Project Background
###Idea
- Mental health has been a worrying issue especially during the pandemic
- We aim to create a website where all important information regarding mental health can be obtained, from facts to helpline numbers and a self diagnosis checker (prototype)


##APIMedic
###API KEY
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
