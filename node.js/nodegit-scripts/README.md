# Nodegit
This example provides a quick and dirty example to demonstrate nodegit retrieving commit entries in the history of master branch.

#### Install
This step will install nodegit for this node.js app. nodegit is the only dependency.
Run ```npn install```

#### Run it
Run ```node getCommitEntries```

You'll see these entries generate by plain JavaScript.
```
commit f016788a9969858d671186d2de0c487189fda929
Authoraaa:	Diego Zuluaga < dzuluaga@apigee.com>
Date:	Sat Aug 09 2014 20:29:42 GMT-0400 (EDT)

    add file.txt

commit 623737a8140257d2cc2ada811c3cc29fa698f5da
Authoraaa:	Diego Zuluaga < dzuluaga@apigee.com>
Date:	Sat Aug 09 2014 20:28:37 GMT-0400 (EDT)

    adding all these files for test
```

**Note: this line ```open("../../.git", function(err, repo)``` points to the .git folder location.**