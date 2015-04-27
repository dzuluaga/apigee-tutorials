<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [How to safely store and import passwords in Source Control Proxies](#how-to-safely-store-and-deploy-configuration-data-in-source-control-for-api-proxies)
    - [1. Encryption](#1-encryption)
    - [2. Decryption](#2-decryption)
    - [3. Remove decrypted files](#3-remove-decrypted-files)
    - [4. Deploy this API Proxy](#4-deploy-this-api-proxy)
    - [5. Test this API Proxy](#5-test-this-api-proxy)
    - [6. How does it work?](#6-how-does-it-work)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## How to safely store and import passwords in Source Control

The following how-to-guide provides an example of an Apigee API Proxy instrumented with Apigee Grunt Plugin to protect clear text sensitive files from being stored in version control. It leverages [Grunt-Contrib-Crypt](https://www.npmjs.com/package/grunt-contrib-crypt) and [grunt-apigee-kvm import](https://www.npmjs.com/package/grunt-apigee-kvm) plugin to decrypt, encrypt, import KVM entries, and deploy API Proxies into Apigee Edge through the Management API.

This approach is based on John Resig's article ["Keeping Passwords in Source Control"](http://ejohn.org/blog/keeping-passwords-in-source-control/#postcomment).

The following steps can be executed in the same order, in which files are first time encrypted, and then the clear text version of them is removed from the folders. Let's have a look:

#### 1. Encryption
The first time that files are placed will probably be in clear text as .json files or plain text. The following command will encrypt the files under /config/kvm with extension .encrypted.

```bash
grunt encrypt --debug --env=test --key=somekey

The file targets.json in clear text with the following entries will be encrypted:
{
  "entry": [
    {
      "name": "Yahoo_Weather_Target",
      "value": "http://weather.yahooapis.com/forecastrss"
    },
    {
      "name": "Yahoo_Weather_Password",
      "value": "123456"
    }
  ],
  "name": "targets"
}

This command should produce a string like this one under config/kbm/testmyapi-test/testmyapi/testmyapi-test/targets.json.encrypted, which will be safe to be stored in version control:
745e184792a532e9152810e931f0604edfbf164a91cdcd7a82905b34b753aec55d31f1940132fded0377d798568c24c2cf6bfb838dac7b8b7ab9f91931dbc042cf435c21b42a0032cb3945c85055f0bb60abf33445ad75ea4ec4e0c993814ec6ed9e157d7319014a3814454e28e904eeca7dd048cd3ebdb2f75a408ec880e25b6222cebec1ee44a623d4c8925062a3c637503b14036e6ecbecf0377b17c6e40c
```

**Please be aware of storing the key in a safe place. Since the build process is expected to execute these steps as well, make sure that these environment variables are safely stored. Jenkins and Travis support safe variables.**

Encryption is based [aes-256-cbc](https://github.com/openhoat/kruptos/blob/d862788873e3b744b22e2fc61017ae4af4ede9f1/lib/kruptos-util-crypt.js#L6) implemented on [crypto.js module](https://www.npmjs.com/package/crypto).

#### 2. Decryption
Files encrypted can be decrypted by running the following command:
```bash
grunt decrypt --debug --env=test --key=somekey
```

__Note: NEVER checkin unencrypted sensitive data into version control. It is highly recommended to use .gitignore files to ignore json files within config/kvm folder. See root .gitignore /config/kvm/**/*.json entry__

#### 3. Remove decrypted files
Once files are encrypted, you no longer need to keep these files as long as you keep the key and secret. The following task will remove any JSON file under specified folder.

```bash
grunt clean:kvm --env=test
```
#### 4. Deploy this API Proxy
This API Proxy has been instrumented with [Apigee Deploy Grunt Plugin](https://github.com/apigeecs/apigee-deploy-grunt-plugin#getting-started), which includes a bunch of other plugins to manage deployment with Grunt tasks. See Gruntfile.js for more details.
```bash
grunt --debug --env=test --key=somekey --username=$ae_username --password=$ae_password --curl=true
```

#### 5. Test this API Proxy
```bash
curl https://testmyapi-test.apigee.net/kvm-encrypted-grunt-api/apigee\?w\=2502265
Replace:
curl https://{org}-{env}.apigee.net/kvm-encrypted-grunt-api/apigee\?w\=2502265
```

__Response__
```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes" ?>
        <rss version="2.0" xmlns:yweather="http://xml.weather.yahoo.com/ns/rss/1.0" xmlns:geo="http://www.w3.org/2003/01/geo/wgs84_pos#">
    <channel>
        <title>Yahoo! Weather - Sunnyvale, CA</title>
        <link>http://us.rd.yahoo.com/dailynews/rss/weather/Sunnyvale__CA/*http://weather.yahoo.com/forecast/USCA1116_f.html</link>
        <description>Yahoo! Weather for Sunnyvale, CA</description>
        <language>en-us</language>
        ...
    </channel>
</rss>
```

#### 6. How does it work?
We will use a Key Value Maps Operations Policy (Key-Value-Map-Get-Targets) to retrieve the target and password, and then pass this to our targets through Assign Message policy.

![alt text](https://www.dropbox.com/s/4nzq7pmjpgjqxxy/KVM_Encryption.png?dl=1
 "KVM Set Target and Password variables")

**Caveat: KVMs will still be visible with the tracetool. Therefore, it is highly recommended to leverage still Node.js Apigee Vault in case security requirements demands stricter security. [The following article](https://community.apigee.com/articles/2825/storing-credentialssensitive-config-kvm-vs-vault.html) describes these options in further detail.**
