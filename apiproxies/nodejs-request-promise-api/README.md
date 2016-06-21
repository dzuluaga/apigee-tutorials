nodejs-request-promise-api
==========================
Here's an example of a promise-enabled Node.js API Proxy ready to be deployed in Apigee.

#### Why promises?
Node.js promises subject has been documented extensively by many tutorials online. So, it's out of the scope of this sample to explain the (why)[https://alexperry.io/node/2015/03/25/promises-in-node.html] here. However, I noticed there are few examples of Apigee API Proxies explained with working code. So, I decided to write rather a contrived example to be used as a reference for new developers coming to the platform. So, next time they need to write one, you don't have to start from scratch. Hope it helps!

#### Show me the code?
```javascript
var express = require('express')
    app = express(),
    request = require('request'),
    url = require('url'),
    promise = require('bluebird'), // you'll need bluebird or other module to convert callbacks to promises
    request = promise.promisify(require('request')); // promisify the request module

app.get('/*', function (req, res) {
  var query = url.parse(req.url).query; //get query params from url
  request('http://lyrics.wikia.com/api.php?' + query) // use promisified request module
    .then(function (response) { //this is way clean than using callbacks!
      res.json(JSON.parse(response.body));
    })
    .catch(function (err) {
      res.send(err);
    })
})
```

#### How can I deploy this API Proxy?

##### deploy with Deploy Now
Deploy this Node.js app to Apigee with a single click, click below:

<a href="https://deploynow.apigee.com/login-form/?repo=https://github.com/dzuluaga/nodejs-request-promise-api.git&apiFolder=/&makeScript=make.sh" target="_blank">
<img src="https://raw.githubusercontent.com/apigee/apigee-deploy-now/master/images/deploy_to_apigee.png" alt="Deploy to Apigee">
</a>

##### deploy with apigeetool
The following command will deploy this Node.js App to Apigee.
`apigeetool deploynodeapp  -u $ae_username -p $ae_password -o testmyapi -e test -n music-nodejs-request-promise-api -d . -m app.js -b /music-nodejs-request-promise-api -v default -V -U`


#### How can I test this API Proxy?
Call this API by using this sample URL:
```
$ curl "http://testmyapi-test.apigee.net/music-nodejs-request-promise-api?action=lyrics&artist=radiohead&fmt=json"

Response:
{
  "artist": "Radiohead",
  "albums": [
    {
      "album": "Pablo Honey",
      "year": "1993",
      "amazonLink": "http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Pablo%20Honey",
      "songs": [
        "You",
        "Creep",
        "How Do You?",
        "Stop Whispering",
        "Thinking About You",
        "Anyone Can Play Guitar",
        "Ripcord",
        "Vegetable",
        "Prove Yourself",
        "I Can't",
        "Lurgee",
        "Blow Out",
        "Creep (Clean)"
      ]
    },
    {
      "album": "Itch",
      "year": "1994",
      "amazonLink": "http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Itch",
      "songs": [
        "Stop Whispering",
        "Thinking About You",
        "Faithless, The Wonder Boy",
        "Banana Co.",
        "Killer Cars",
        "Vegetable",
        "You",
        "Creep"
      ]
    },
    {
      "album": "My Iron Lung",
      "year": "1994",
      "amazonLink": "http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20My%20Iron%20Lung",
      "songs": [
        "My Iron Lung",
        "The Trickster",
        "Lewis (Mistreated)",
        "Punchdrunk Lovesick Singalong",
        "Permanent Daylight",
        "Lozenge Of Love",
        "You Never Wash Up After Yourself",
        "Creep"
      ]
    },
    {
      "album": "The Bends",
      "year": "1995",
      "amazonLink": "http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20The%20Bends",
      "songs": [
        "Planet Telex",
        "The Bends",
        "High And Dry",
        "Fake Plastic Trees",
        "Bones",
        "(Nice Dream)",
        "Just",
        "My Iron Lung",
        "Bullet Proof..I Wish I Was",
        "Black Star",
        "Sulk",
        "Street Spirit (Fade Out)"
      ]
    },
    {
      "album": "OK Computer",
      "year": "1997",
      "amazonLink": "http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20OK%20Computer",
      "songs": [
        "Airbag",
        "Paranoid Android",
        "Subterranean Homesick Alien",
        "Exit Music (For A Film)",
        "Let Down",
        "Karma Police",
        "Fitter Happier",
        "Electioneering",
        "Climbing Up The Walls",
        "No Surprises",
        "Lucky",
        "The Tourist"
      ]
    },
    {
      "album": "No Surprises/Running From Demons",
      "year": "1997",
      "amazonLink": "http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20No%20Surprises/Running%20From%20Demons",
      "songs": [
        "No Surprises",
        "Pearly*",
        "Melatonin",
        "Meeting In The Aisle",
        "Bishop's Robes",
        "A Reminder"
      ]
    },
    {
      "album": "Airbag/How Am I Driving?",
      "year": "1998",
      "amazonLink": "http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Airbag/How%20Am%20I%20Driving?",
      "songs": [
        "Airbag",
        "Pearly*",
        "Meeting In The Aisle",
        "A Reminder",
        "Polyethylene (Parts 1 & 2)",
        "Melatonin",
        "Palo Alto"
      ]
    },
    {
      "album": "Kid A",
      "year": "2000",
      "amazonLink": "http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Kid%20A",
      "songs": [
        "Everything In Its Right Place",
        "Kid A",
        "The National Anthem",
        "How To Disappear Completely",
        "Treefingers",
        "Optimistic",
        "In Limbo",
        "Idioteque",
        "Morning Bell",
        "Motion Picture Soundtrack"
      ]
    },
    {
      "album": "Amnesiac",
      "year": "2001",
      "amazonLink": "http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Amnesiac",
      "songs": [
        "Packt Like Sardines In A Crushd Tin Box",
        "Pyramid Song",
        "Pulk/Pull Revolving Doors",
        "You And Whose Army?",
        "I Might Be Wrong",
        "Knives Out",
        "Morning Bell/Amnesiac",
        "Dollars & Cents",
        "Hunting Bears",
        "Like Spinning Plates",
        "Life In A Glasshouse"
      ]
    },
    {
      "album": "Hail To The Thief",
      "year": "2003",
      "amazonLink": "http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Hail%20To%20The%20Thief",
      "songs": [
        "2 + 2 = 5 (The Lukewarm.)",
        "Sit Down. Stand Up. (Snakes & Ladders.)",
        "Sail To The Moon. (Brush The Cobwebs Out Of The Sky.)",
        "Backdrifts. (Honeymoon Is Over.)",
        "Go To Sleep. (Little Man Being Erased.)",
        "Where I End And You Begin. (The Sky Is Falling In.)",
        "We Suck Young Blood. (Your Time Is Up.)",
        "The Gloaming. (Softly Open Our Mouths In The Cold.)",
        "There There. (The Boney King Of Nowhere.)",
        "I Will. (No Man's Land.)",
        "A Punchup At A Wedding. (No No No No No No No No.)",
        "Myxomatosis. (Judge, Jury & Executioner.)",
        "Scatterbrain. (As Dead As Leaves.)",
        "A Wolf At The Door. (It Girl. Rag Doll.)"
      ]
    },
    {
      "album": "In Rainbows",
      "year": "2007",
      "amazonLink": "http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20In%20Rainbows",
      "songs": [
        "15 Step",
        "Bodysnatchers",
        "Nude",
        "Weird Fishes/Arpeggi",
        "All I Need",
        "Faust Arp",
        "Reckoner",
        "House Of Cards",
        "Jigsaw Falling Into Place",
        "Videotape",
        "MK 1",
        "Down Is The New Up",
        "Go Slowly",
        "MK 2",
        "Last Flowers",
        "Up On The Ladder",
        "Bangers + Mash",
        "4 Minute Warning"
      ]
    },
    {
      "album": "The King Of Limbs",
      "year": "2011",
      "amazonLink": "http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20The%20King%20Of%20Limbs",
      "songs": [
        "Bloom",
        "Morning Mr Magpie",
        "Little By Little",
        "Feral",
        "Lotus Flower",
        "Codex",
        "Give Up The Ghost",
        "Separator"
      ]
    },
    {
      "album": "Spectre",
      "year": "2015",
      "amazonLink": "http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Spectre",
      "songs": [
        "Spectre"
      ]
    },
    {
      "album": "A Moon Shaped Pool",
      "year": "2016",
      "amazonLink": "http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20A%20Moon%20Shaped%20Pool",
      "songs": [
        "Burn The Witch",
        "Daydreaming",
        "Decks Dark",
        "Desert Island Disk",
        "Ful Stop",
        "Glass Eyes",
        "Identikit",
        "The Numbers",
        "Present Tense",
        "Tinker Tailor Soldier Sailor Rich Man Poor Man Beggar Man Thief",
        "True Love Waits"
      ]
    },
    {
      "album": "B-Sides",
      "year": null,
      "amazonLink": "http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20B-Sides",
      "songs": [
        "Inside My Head",
        "Million Dollar Question",
        "Yes I Am",
        "Coke Babies",
        "Maquiladora",
        "India Rubber",
        "How Can You Be Sure?",
        "Talk Show Host",
        "Bishop's Robes",
        "Molasses",
        "Lull",
        "How I Made My Millions",
        "The Amazing Sounds Of Orgy",
        "Trans-Atlantic Drawl",
        "Kinetic",
        "Fast-Track",
        "Cuttooth",
        "Worrywort",
        "Fog",
        "Paperbag Writer",
        "Where Bluebirds Fly",
        "Fog (Again)",
        "Gagging Order",
        "I Am A Wicked Child",
        "I Am Citizen Insane"
      ]
    },
    {
      "album": "Unreleased",
      "year": null,
      "amazonLink": "http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Unreleased",
      "songs": [
        "Big Boots",
        "The Chains",
        "Climbing Up A Bloody Great Hill",
        "Cut A Hole",
        "The Daily Mail",
        "Feeling Pulled Apart By Horses (AKA Reckoner Old Version)",
        "Follow Me Around",
        "Give It Up",
        "Happy Song",
        "I Froze Up",
        "Innocents Civilian",
        "I Promise",
        "I Want None Of This",
        "Lift",
        "Nobody Does It Better",
        "No Surprises Please",
        "Nothing Touches Me",
        "Phillipa Chicken",
        "The Present Tense",
        "Rattlesnake",
        "The Rip",
        "Sinking Ship",
        "Spooks",
        "Staircase",
        "Stupid Car",
        "Tell Me Why",
        "To Be A Brilliant Light",
        "Union City Blue",
        "Unravel"
      ]
    },
    {
      "album": "Other Songs",
      "year": null,
      "amazonLink": "http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Other%20Songs",
      "songs": [
        "Cinnamon Girl (Neil Young Cover)",
        "Good Evening Mrs. Magpie",
        "Harry Patch (In Memory Of)",
        "Man-O-War",
        "Pop Is Dead",
        "Remyxomatosis",
        "Sit Down. Stand Up",
        "Supercollider",
        "The Butcher",
        "These Are My Twisted Words",
        "What Is It That You Say"
      ]
    }
  ]
}


```