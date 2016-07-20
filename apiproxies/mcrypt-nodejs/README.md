mcrypt-nodejs
=============
Unfortunately this module contains native code, so it's not supported by Trireme. See this thread for more details. https://community.apigee.com/questions/28725/unable-to-see-mcrypt-node-module.html

### Error generated
Note `Native module not supported` error generated when running this cURL command: `curl http://testmyapi-test.apigee.net/mcrypt`

```
{"fault":{"faultstring":"Script node executed prematurely: Error: dlopen(\/organization\/environment\/api\/node_modules\/mcrypt\/build\/Release\/mcrypt.node): Native module not supported\nError: dlopen(\/organization\/environment\/api\/node_modules\/mcrypt\/build\/Release\/mcrypt.node): Native module not supported\n    at module.js:356\n    at module.js:312\n    at module.js:364\n    at require (module.js:380)\n    at \/organization\/environment\/api\/app.js:1\n    at module.js:456\n    at module.js:474\n    at module.js:356\n    at module.js:312\n    at module.js:497\n    at startup (trireme.js:142)\n    at trireme.js:923\n","detail":{"errorcode":"scripts.node.runtime.ScriptExitedError"}}}
```

### If you wanna to try it yourself

Here I'm using apigeetool to deploy Node.js in Apigee. Replace with your organization and credentials.

`apigeetool deploynodeapp -n mcrypt -d . -m app.js -o testmyapi -e test -b /mcrypt -u $ae_username -p $ae_password --upload-modules`