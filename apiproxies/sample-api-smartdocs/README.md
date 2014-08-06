How to install SmartDocs in your Drupal installation?
========
Refer to [Apigee SmartDocs official documentation](http://apigee.com/docs/developer-services/content/using-smartdocs-document-apis)

SmartDocs API Postman Calls (restricted for beta only customers)
====
As everything in Apigee, SmartDocs is also accessible via an [API](https://drive.google.com/a/apigee.com/file/d/0BzkNUW3VtjuSa2d3b0hjMUcxUlk/edit?usp=sharing).

Import WADL File
============
The WADL provides the description of the API in a machine readable language, which can be consumed by Drupal SmartDocs Module. SmartDocs is also compatible with Swagger.

Apigee SmartDocs API
==========

#### Get API Models
```curl https://api.enterprise.apigee.com/v1/o/{org}/apimodels -u $ae_username:$ae_password```

#### Create an API Model
POST https://:host/v1/organizations/:org/apimodels

#### Import a revision in WADL format
POST https://:host/v1/organizations/:org/apimodels/:model/revisions?action=import&format=WADL

#### Import a revision in Swagger format
POST https://:host/v1/organizations/:org/apimodels/:model/revisions?action=import&format=swagger

#### Export an API Model
GET https://:host/v1/organizations/:org/apimodels/:model/revisions/:rev?expand=true

#### Export an API Model in WADL format
GET https://:host/v1/organizations/:org/apimodels/:model/revisions/:rev?format=wadl

#### Update an API Model
PUT https://:host/v1/organizations/:org/apimodels/:model

#### Remove an API Model
DELETE https://:host/v1/organizations/:org/apimodels/:model

#### Show generated HTML docs index
GET https://:host/v1/o/:org/apimodels/:model/revisions/:rev/doc

Exercises
=====
1. Create a new API Model through Dev Channel followed by username with the following format sample+username e.g. sampledzuluaga
2. Import sample WADL into Dev Channel
3. 