recommendation-parallel-api
==========================
The purpose of this code is demonstrate how to leverage parallel processing capabilities of Node.js to apply custom logic to meet the API requirements with minimal complexity. In our case, the business logic is to get scores from the Serving Layer, then once all get*Scores functions are executed, the last function will get the metadata associated to the products and merge it.

Notice that the element that holds all scores functions is an array, so this element can have as many items as needed to execute any additional functions.

#### How to visualize Swagger API Specification?
Copy and paste swagger.yml into [Swagger Editor](http://editor.swagger.io/#/)

![Swagger Editor](https://www.dropbox.com/s/b703nibnrqc9si8/Swagger_Editor.png?dl=1)

#### How to test it?
```
http://morbishop-demo2.apigee.net/recommendation-parallel-api/recommendations/1234
```

Or execute GET /recommendations/1234 from Swagger Editor directly.

**Response:**
```json
[
  {
    "name": "Recommendation Scores",
    "type": "recommendation-score",
    "description": "and the description for Recommendation Scores"
  },
  {
    "name": "Profile Scores",
    "type": "profile-score",
    "description": "and the description for Profile Scores"
  },
  {
    "name": "General Scores",
    "type": "general-score",
    "description": "and the description for General Scores"
  },
  {
    "name": "Excess in inventory products",
    "type": "excess-inventory-product",
    "description": "and the description for Excess in inventory products"
  }
]
```

#### How to deploy it?

This API proxy can be deployed with [apigeetool](https://www.npmjs.com/package/apigeetool) with the following command.

```bash
$ apigeetool deployproxy -u $ae_username -p $ae_password -o morbishop -e demo2 -n 'recommendation-parallel-api' -d .
```