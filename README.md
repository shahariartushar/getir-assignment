# getir-assignment
This project repository has a single endpoint(RESTful API) that fetches the data from a MongoDB collection to serve the purpose of the "getir case study" assignment. This project uses node.js express, mongoDB and the backend is currently hosted on Heroku. Also, CircleCI is used as a continuous inegration and continuos delivery(CI/CD) platform.

## API Endpoint - /searchRecords
https://getir-assignment-challenge.herokuapp.com/api/searchRecords

It is a "post" http method. Follow the below instructions to get the expected data from the above api link-

* “startDate” and “endDate” fields should contain the date in a “YYYY-MM-DD” format. You
can filter the data by using them
* “minCount” and “maxCount” are for filtering the data. Sum of the “count” array in the
documents will be between “minCount” and “maxCount”.

### Request Payload

| Parameters | Description |
| ------ | ----------- |
| startDate   | Date (YYYY-MM-DD) |
| endDate | Date (YYYY-MM-DD) |
| minCount    | number |
| maxCount    | number |

```jsx
POST /api/searchRecords HTTP/1.1
Host: https://getir-assignment-challenge.herokuapp.com/
Content-Type: application/json
{
  "startDate": "2016-01-26",
  "endDate": "2018-02-02",
  "minCount": 2700,
  "maxCount": 3000
}
```

### Response Payload
```jsx
{
  "code":0,
  "msg":"Success",
  "records":[
    {
    "key":"TAKwGc6Jr4i8Z487",
    "createdAt":"2017-01-28T01:22:14.398Z",
    "totalCount":2800
    },
    {
    "key":"NAeQ8eX7e5TEg7oH",
    "createdAt":"2017-01-27T08:19:14.135Z",
    "totalCount":2900
    }
  ]
}
```


## Setup(locally) Intructions

* Install NPM and NodeJS
* git clone https://github.com/shahariartushar/getir-assignment.git
* set MONGODB_URL enviroment variable
```jsx
cd getir-assignment
npm install
$env: MONGODB_URL= ""
npm start
```


## Tests

[Jest](https://jestjs.io/) framework has been used for testing
```jsx
npm run test
```


## Author

Naimul MD Shahariar
