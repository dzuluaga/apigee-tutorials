How to install SmartDocs in Dev Channel?
========
Refer to [Apigee SmartDocs official documentation](http://apigee.com/docs/developer-services/content/using-smartdocs-document-apis)

Import Swagger or WADL File through Dev Channel SmartDocs Modules
============
Swagger and WADL provides the description of the API in a machine readable language, which can be consumed by Drupal SmartDocs Module via SmartDocs API. SmartDocs is also compatible with Swagger.

Import a model through Dev Channel
========
From [Dev Channel Portal](http://dev-apigee-edu.devportal.apigee.com/) > Content > SmartDocs (beta) > Add > {username}petstore > Select Swagger > http://petstore.swagger.wordnik.com/api/api-docs > Check All Methods > click Update > Check Publish nodes immediately > click Render Notes > API will be available under http://dev-apigee-edu.devportal.apigee.com/{username}petstore/apis

#### View Documentation through Dev Channel
http://dev-apigee-edu.devportal.apigee.com/wordnick/apis

#### Create a link on the Main Menu
From Structure > Menus > Main Menu > Add Link, provide a path to http://dev-apigee-edu.devportal.apigee.com/{smartdocs_model}/apis

#### Prettify the output
Remove [field_wordnick_model_authschemes] by editing the API page, open API page, click on Edit View (config. wheel), Global: Custom Text and remove [field_wordnick_model_authschemes].

Apigee SmartDocs API
==========

#### Explore SmartDocs API with POSTMAN
Download [SmartDocsAPI_PostmanCollection.json](./SmartDocsAPI_PostmanCollection.json) and import it into a new collection in POSTMAN.


#### Import a revision in Swagger format
curl https://api.enterprise.apigee.com/v1/o/{org}/apimodels/{model}/revisions\?action\=import\&format\=swagger -X POST -d 'URL=http://petstore.swagger.io/v2/swagger.json' -u $ae_username:$ae_password -v -H 'Content-Type:text/plain'

**Important: Note URL is the base URL instead of individual resources.**
![Swagger Correct Path](https://www.dropbox.com/s/qxezdeb609t948h/Screenshot%202015-05-27%2017.15.33.png?dl=1)

#### SmartDocs API Postman Calls (restricted for beta only customers)
As everything in Apigee, SmartDocs is also accessible via an [API](https://drive.google.com/a/apigee.com/file/d/0BzkNUW3VtjuSa2d3b0hjMUcxUlk/edit?usp=sharing).


#### Get API Models
```bash
curl https://api.enterprise.apigee.com/v1/o/{org}/apimodels -u $ae_username:$ae_password
```

#### Create an API Model

```bash
curl https://api.enterprise.apigee.com/v1/o/{org}/apimodels -u $ae_username:$ae_password -H 'Content-Type:application/json' -d '{
    "name": "wordnick",
    "displayName": "wordnick",
    "description": "Pet flow all the things."
}'
```
#### Import a revision in WADL format
```bash
POST https://:host/v1/organizations/:org/apimodels/:model/revisions?action=import&format=WADL
```
#### Get model revisions
```bash
curl https://api.enterprise.apigee.com/v1/o/{org}/apimodels/{model}/revisions -u $ae_username:$ae_password
```
#### Export an API Model
```bash
GET https://:host/v1/organizations/:org/apimodels/:model/revisions/:rev?expand=true
```
#### Export an API Model in WADL format
```bash
GET https://:host/v1/organizations/:org/apimodels/:model/revisions/:rev?format=wadl
```
#### Update an API Model
```bash
PUT https://:host/v1/organizations/:org/apimodels/:model
```
#### Remove an API Model
```bash
DELETE https://:host/v1/organizations/:org/apimodels/:model
```
#### Show generated HTML docs index
```bash
GET https://:host/v1/o/:org/apimodels/:model/revisions/:rev/doc
```
Exercises
=====
1. Create a new API Model through Dev Channel followed by username with the following format sample+username e.g. sampledzuluaga
2. Import sample WADL into Dev Channel
