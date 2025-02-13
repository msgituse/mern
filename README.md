# return-indices-of-the-two-numbers (Question 2)

- This directory contains index.js javascript file, when you run this javascript file you will get below response,

const nums = [2, 7, 11, 15];
const target = 9;
The function should return [0, 1] because nums[0] + nums[1] = 2 + 7 = 9.

# node-mongo-aggragation (Question 3)

cd node-mongo-aggregation

# Start server with below command

npm install

npm start

# open mongoDB Compass and connect to localhost and insert below documents in aggregationDB

[{
  "_id": {
    "$oid": "67ae3dba10623fa5c1217f99"
  },
  "date": {
    "$date": "2024-06-15T00:00:00.000Z"
  },
  "store": "Store A",
  "items": [
    {
      "name": "item1",
      "quantity": 5,
      "price": 10
    },
    {
      "name": "item2",
      "quantity": 3,
      "price": 20
    }
  ]
},
{
  "_id": {
    "$oid": "67ae3dba10623fa5c1217f9a"
  },
  "date": {
    "$date": "2024-06-15T00:00:00.000Z"
  },
  "store": "Store B",
  "items": [
    {
      "name": "item1",
      "quantity": 6,
      "price": 15
    },
    {
      "name": "item2",
      "quantity": 1,
      "price": 20
    }
  ]
},
{
  "_id": {
    "$oid": "67ae3dba10623fa5c1217f9b"
  },
  "date": {
    "$date": "2024-06-20T00:00:00.000Z"
  },
  "store": "Store A",
  "items": [
    {
      "name": "item1",
      "quantity": 10,
      "price": 10
    },
    {
      "name": "item3",
      "quantity": 1,
      "price": 20
    }
  ]
},
{
  "_id": {
    "$oid": "67ae3dba10623fa5c1217f9c"
  },
  "date": {
    "$date": "2024-06-20T00:00:00.000Z"
  },
  "store": "Store B",
  "items": [
    {
      "name": "item1",
      "quantity": 3,
      "price": 10
    },
    {
      "name": "item2",
      "quantity": 2,
      "price": 5
    }
  ]
}]

# now run below GET API in postman client or any other client

URL: http://localhost:5000/api/sales/aggregate

you will get below expected response,

[
  {
    "totalRevenue": 230,
    "averagePrice": 15,
    "store": "Store A",
    "month": "2024-06"
  },
  {
    "totalRevenue": 150,
    "averagePrice": 12.5,
    "store": "Store B",
    "month": "2024-06"
  }
]


# todo-app (Question 4)

cd todo-app

npm install

npm run dev

now, you will get todo react-app with mentioned functionality