#echo off

#########################################################################################################
#Set your own parameters below based on your APIGEE application / organisation / environment / credentials
##########################################################################################################

# app name
application=forecastweather-deploysh
# organisation name
org=testmyapi
# environment
environment=test
# deployment api endpoint
url=https://api.enterprise.apigee.com

commit_hash=$(git log -1 --abbrev-commit | grep -m 1 commit | sed 's/commit //')
commit_date=$(git log -1 --abbrev-commit | grep -m 1 Date | sed 's/Date:   //')
commit_message="commit $commit_hash on $commit_date"


# mac related
echo find . -name .DS_Store -print0 | xargs -0 rm -rf
find . -name .DS_Store -print0 | xargs -0 rm -rf

# credentials
if [ -z "$ae_authentication" ];
then
		echo "Need to set ae_authentication variable username:password encoded base64" && exit 1
else
		credentials=$(echo $ae_authentication)
fi

creds=`echo -n abc | base64`
echo $creds

# list current revisions for this environment
echo curl -H "Authorization:Basic $credentials" https://api.enterprise.apigee.com/v1/o/$org/environments/$environment/apis/$application/deployments
curl -H "Authorization:Basic $credentials" https://api.enterprise.apigee.com/v1/o/$org/environments/$environment/apis/$application/deployments
echo -e "\n"$commit_message

echo -n "Revision to undeploy: "
read RevToUndeploy

# Undeploy and delete
echo curl -H "Authorization:Basic $credentials" "$url/v1/organizations/$org/apis/$application/revisions/$RevToUndeploy/deployments?action=undeploy&env=$environment" -X POST -H "Content-Type: application/octet-stream"
curl -H "Authorization:Basic $credentials" "$url/v1/organizations/$org/apis/$application/revisions/$RevToUndeploy/deployments?action=undeploy&env=$environment" -X POST -H "Content-Type: application/octet-stream"
echo -H "Authorization:Basic $credentials" -X DELETE "$url/v1/organizations/$org/apis/$application/revisions/$RevToUndeploy"
curl -H "Authorization:Basic $credentials" -X DELETE "$url/v1/organizations/$org/apis/$application/revisions/$RevToUndeploy"


rm -rf $application.zip
rm -rf apiproxy/resources/node

#set environment modifications
sed -i '' 's/@ENVIRONMENT/TEST/' "./apiproxy/policies/Assign-Message-1.xml"
sed -i '' "s/@description/$commit_message/" "./apiproxy/$application.xml"

# Create the bundle and deploy
zip -r $application.zip apiproxy

#import application
echo curl -v -H "Authorization:Basic $credentials" "$url/v1/organizations/$org/apis?action=import&name=$application" -T $application.zip -H "Content-Type: application/octet-stream" -X POST
curl -v -H "Authorization:Basic $credentials" "$url/v1/organizations/$org/apis?action=import&name=$application" -T $application.zip -H "Content-Type: application/octet-stream" -X POST

#revert environment modifications
sed -i '' 's/TEST/@ENVIRONMENT/' "./apiproxy/policies/Assign-Message-1.xml"
sed -i '' "s/$commit_message/@description/" "./apiproxy/$application.xml"

echo -n "Revision to deploy: "
read RevToDeploy

#deploy application
echo curl -H "Authorization:Basic $credentials" "$url/v1/organizations/$org/apis/$application/revisions/$RevToDeploy/deployments?action=deploy&env=$environment" -X POST -H "Content-Type: application/octet-stream"
curl -H "Authorization:Basic $credentials" "$url/v1/organizations/$org/apis/$application/revisions/$RevToDeploy/deployments?action=deploy&env=$environment" -X POST -H "Content-Type: application/octet-stream"