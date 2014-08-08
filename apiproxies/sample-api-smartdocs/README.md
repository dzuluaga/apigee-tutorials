How to install SmartDocs in Dev Channel?
========
Refer to [Apigee SmartDocs official documentation](http://apigee.com/docs/developer-services/content/using-smartdocs-document-apis)

SmartDocs API Postman Calls (restricted for beta only customers)
====
As everything in Apigee, SmartDocs is also accessible via an [API](https://drive.google.com/a/apigee.com/file/d/0BzkNUW3VtjuSa2d3b0hjMUcxUlk/edit?usp=sharing).

Import WADL File or Swagger source through Dev Channel SmartDocs Modules
============
Swagger and WADL provides the description of the API in a machine readable language, which can be consumed by Drupal SmartDocs Module via SmartDocs API. SmartDocs is also compatible with Swagger.

Apigee SmartDocs API
==========

#### Get API Models
```curl https://api.enterprise.apigee.com/v1/o/{org}/apimodels -u $ae_username:$ae_password```

#### Create an API Model
curl https://api.enterprise.apigee.com/v1/o/{org}/apimodels -u $ae_username:$ae_password -H 'Content-Type:application/json' -d '{
    "name": "wordnick",
    "displayName": "wordnick",
    "description": "Pet flow all the things."
}'

#### Import a revision in WADL format
POST https://:host/v1/organizations/:org/apimodels/:model/revisions?action=import&format=WADL

#### Import a revision in Swagger format
curl https://api.enterprise.apigee.com/v1/o/{org}/apimodels/{model}/revisions\?action\=import\&format\=swagger -X POST -d 'URL=http://petstore.swagger.wordnik.com/api/api-docs' -u $ae_username:$ae_password -v -H 'Content-Type:text/plain'

**Important: Note URL is the base URL instead of individual resources.**
![Swagger Correct Path](https://www.dropbox.com/s/n1sg8d7omz3c6bz/Swagger_Correct_URL.png?dl=1)

#### Get model revisions
curl https://api.enterprise.apigee.com/v1/o/{org}/apimodels/{model}/revisions -u $ae_username:$ae_password

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

### View Documentation through Dev Channel
http://dev-apigee-edu.devportal.apigee.com/wordnick/apis

#### Create a link on the Main Menu
From Structure > Menus > Main Menu > Add Link, provide a path to http://dev-apigee-edu.devportal.apigee.com/{smartdocs_model}/apis

#### Prettify output
Remove [field_wordnick_model_authschemes] by editing the API page, open API page, click on Edit View (config. wheel), Global: Custom Text and remove [field_wordnick_model_authschemes].

Exercises
=====
1. Create a new API Model through Dev Channel followed by username with the following format sample+username e.g. sampledzuluaga
2. Import sample WADL into Dev Channel
3. 
