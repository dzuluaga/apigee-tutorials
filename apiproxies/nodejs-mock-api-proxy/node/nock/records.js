
<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=radiohead&fmt=json')
  .reply(200, {"artist":"Radiohead","albums":[{"album":"Pablo Honey","year":"1993","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Pablo%20Honey","songs":["You","Creep","How Do You?","Stop Whispering","Thinking About You","Anyone Can Play Guitar","Ripcord","Vegetable","Prove Yourself","I Can't","Lurgee","Blow Out","Creep (Clean)"]},{"album":"Itch","year":"1994","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Itch","songs":["Stop Whispering","Thinking About You","Faithless, The Wonder Boy","Banana Co.","Killer Cars","Vegetable","You","Creep"]},{"album":"My Iron Lung","year":"1994","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20My%20Iron%20Lung","songs":["My Iron Lung","The Trickster","Lewis (Mistreated)","Punchdrunk Lovesick Singalong","Permanent Daylight","Lozenge Of Love","You Never Wash Up After Yourself","Creep"]},{"album":"The Bends","year":"1995","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20The%20Bends","songs":["Planet Telex","The Bends","High And Dry","Fake Plastic Trees","Bones","(Nice Dream)","Just","My Iron Lung","Bullet Proof..I Wish I Was","Black Star","Sulk","Street Spirit (Fade Out)"]},{"album":"OK Computer","year":"1997","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20OK%20Computer","songs":["Airbag","Paranoid Android","Subterranean Homesick Alien","Exit Music (For A Film)","Let Down","Karma Police","Fitter Happier","Electioneering","Climbing Up The Walls","No Surprises","Lucky","The Tourist"]},{"album":"No Surprises/Running From Demons","year":"1997","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20No%20Surprises/Running%20From%20Demons","songs":["No Surprises","Pearly*","Melatonin","Meeting In The Aisle","Bishop's Robes","A Reminder"]},{"album":"Airbag/How Am I Driving?","year":"1998","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Airbag/How%20Am%20I%20Driving?","songs":["Airbag","Pearly*","Meeting In The Aisle","A Reminder","Polyethylene (Parts 1 & 2)","Melatonin","Palo Alto"]},{"album":"Kid A","year":"2000","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Kid%20A","songs":["Everything In Its Right Place","Kid A","The National Anthem","How To Disappear Completely","Treefingers","Optimistic","In Limbo","Idioteque","Morning Bell","Motion Picture Soundtrack"]},{"album":"Amnesiac","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Amnesiac","songs":["Packt Like Sardines In A Crushd Tin Box","Pyramid Song","Pulk/Pull Revolving Doors","You And Whose Army?","I Might Be Wrong","Knives Out","Morning Bell/Amnesiac","Dollars & Cents","Hunting Bears","Like Spinning Plates","Life In A Glasshouse"]},{"album":"Hail To The Thief","year":"2003","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Hail%20To%20The%20Thief","songs":["2 + 2 = 5 (The Lukewarm.)","Sit Down. Stand Up. (Snakes & Ladders.)","Sail To The Moon. (Brush The Cobwebs Out Of The Sky.)","Backdrifts. (Honeymoon Is Over.)","Go To Sleep. (Little Man Being Erased.)","Where I End And You Begin. (The Sky Is Falling In.)","We Suck Young Blood. (Your Time Is Up.)","The Gloaming. (Softly Open Our Mouths In The Cold.)","There There. (The Boney King Of Nowhere.)","I Will. (No Man's Land.)","A Punchup At A Wedding. (No No No No No No No No.)","Myxomatosis. (Judge, Jury & Executioner.)","Scatterbrain. (As Dead As Leaves.)","A Wolf At The Door. (It Girl. Rag Doll.)"]},{"album":"In Rainbows","year":"2007","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20In%20Rainbows","songs":["15 Step","Bodysnatchers","Nude","Weird Fishes/Arpeggi","All I Need","Faust Arp","Reckoner","House Of Cards","Jigsaw Falling Into Place","Videotape","MK 1","Down Is The New Up","Go Slowly","MK 2","Last Flowers","Up On The Ladder","Bangers + Mash","4 Minute Warning"]},{"album":"The King Of Limbs","year":"2011","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20The%20King%20Of%20Limbs","songs":["Bloom","Morning Mr Magpie","Little By Little","Feral","Lotus Flower","Codex","Give Up The Ghost","Separator"]},{"album":"B-Sides","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20B-Sides","songs":["Inside My Head","Million Dollar Question","Yes I Am","Coke Babies","Maquiladora","India Rubber","How Can You Be Sure?","Talk Show Host","Bishop's Robes","Molasses","Lull","How I Made My Millions","The Amazing Sounds Of Orgy","Trans-Atlantic Drawl","Kinetic","Fast-Track","Cuttooth","Worrywort","Fog","Paperbag Writer","Where Bluebirds Fly","Fog (Again)","Gagging Order","I Am A Wicked Child","I Am Citizen Insane"]},{"album":"Unreleased","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Unreleased","songs":["Big Boots","The Chains","Climbing Up A Bloody Great Hill","Cut A Hole","The Daily Mail","Feeling Pulled Apart By Horses (AKA Reckoner Old Version)","Follow Me Around","Give It Up","Happy Song","Identikit","I Froze Up","Innocents Civilian","I Promise","I Want None Of This","Lift","Nobody Does It Better","No Surprises Please","Nothing Touches Me","Phillipa Chicken","The Present Tense","Rattlesnake","The Rip","Sinking Ship","Spooks","Staircase","Stupid Car","Tell Me Why","To Be A Brilliant Light","True Love Waits","Union City Blue","Unravel"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Other%20Songs","songs":["Cinnamon Girl (Neil Young Cover)","Good Evening Mrs. Magpie","Harry Patch (In Memory Of)","Man-O-War","Pop Is Dead","Remyxomatosis","Supercollider","The Butcher","These Are My Twisted Words","What Is It That You Say"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '7476',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 18:33:30 GMT',
  age: '8349',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3160-WIKIA, cache-jfk1029-JFK',
  'x-cache': 'HIT, HIT',
  'x-cache-hits': '1, 1',
  'x-timer': 'S1427826810.789023,VS0,VE0',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=XMkDp5KYpb; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 18:33:30 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=radiohead&fmt=json')
  .reply(200, {"artist":"Radiohead","albums":[{"album":"Pablo Honey","year":"1993","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Pablo%20Honey","songs":["You","Creep","How Do You?","Stop Whispering","Thinking About You","Anyone Can Play Guitar","Ripcord","Vegetable","Prove Yourself","I Can't","Lurgee","Blow Out","Creep (Clean)"]},{"album":"Itch","year":"1994","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Itch","songs":["Stop Whispering","Thinking About You","Faithless, The Wonder Boy","Banana Co.","Killer Cars","Vegetable","You","Creep"]},{"album":"My Iron Lung","year":"1994","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20My%20Iron%20Lung","songs":["My Iron Lung","The Trickster","Lewis (Mistreated)","Punchdrunk Lovesick Singalong","Permanent Daylight","Lozenge Of Love","You Never Wash Up After Yourself","Creep"]},{"album":"The Bends","year":"1995","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20The%20Bends","songs":["Planet Telex","The Bends","High And Dry","Fake Plastic Trees","Bones","(Nice Dream)","Just","My Iron Lung","Bullet Proof..I Wish I Was","Black Star","Sulk","Street Spirit (Fade Out)"]},{"album":"OK Computer","year":"1997","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20OK%20Computer","songs":["Airbag","Paranoid Android","Subterranean Homesick Alien","Exit Music (For A Film)","Let Down","Karma Police","Fitter Happier","Electioneering","Climbing Up The Walls","No Surprises","Lucky","The Tourist"]},{"album":"No Surprises/Running From Demons","year":"1997","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20No%20Surprises/Running%20From%20Demons","songs":["No Surprises","Pearly*","Melatonin","Meeting In The Aisle","Bishop's Robes","A Reminder"]},{"album":"Airbag/How Am I Driving?","year":"1998","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Airbag/How%20Am%20I%20Driving?","songs":["Airbag","Pearly*","Meeting In The Aisle","A Reminder","Polyethylene (Parts 1 & 2)","Melatonin","Palo Alto"]},{"album":"Kid A","year":"2000","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Kid%20A","songs":["Everything In Its Right Place","Kid A","The National Anthem","How To Disappear Completely","Treefingers","Optimistic","In Limbo","Idioteque","Morning Bell","Motion Picture Soundtrack"]},{"album":"Amnesiac","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Amnesiac","songs":["Packt Like Sardines In A Crushd Tin Box","Pyramid Song","Pulk/Pull Revolving Doors","You And Whose Army?","I Might Be Wrong","Knives Out","Morning Bell/Amnesiac","Dollars & Cents","Hunting Bears","Like Spinning Plates","Life In A Glasshouse"]},{"album":"Hail To The Thief","year":"2003","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Hail%20To%20The%20Thief","songs":["2 + 2 = 5 (The Lukewarm.)","Sit Down. Stand Up. (Snakes & Ladders.)","Sail To The Moon. (Brush The Cobwebs Out Of The Sky.)","Backdrifts. (Honeymoon Is Over.)","Go To Sleep. (Little Man Being Erased.)","Where I End And You Begin. (The Sky Is Falling In.)","We Suck Young Blood. (Your Time Is Up.)","The Gloaming. (Softly Open Our Mouths In The Cold.)","There There. (The Boney King Of Nowhere.)","I Will. (No Man's Land.)","A Punchup At A Wedding. (No No No No No No No No.)","Myxomatosis. (Judge, Jury & Executioner.)","Scatterbrain. (As Dead As Leaves.)","A Wolf At The Door. (It Girl. Rag Doll.)"]},{"album":"In Rainbows","year":"2007","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20In%20Rainbows","songs":["15 Step","Bodysnatchers","Nude","Weird Fishes/Arpeggi","All I Need","Faust Arp","Reckoner","House Of Cards","Jigsaw Falling Into Place","Videotape","MK 1","Down Is The New Up","Go Slowly","MK 2","Last Flowers","Up On The Ladder","Bangers + Mash","4 Minute Warning"]},{"album":"The King Of Limbs","year":"2011","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20The%20King%20Of%20Limbs","songs":["Bloom","Morning Mr Magpie","Little By Little","Feral","Lotus Flower","Codex","Give Up The Ghost","Separator"]},{"album":"B-Sides","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20B-Sides","songs":["Inside My Head","Million Dollar Question","Yes I Am","Coke Babies","Maquiladora","India Rubber","How Can You Be Sure?","Talk Show Host","Bishop's Robes","Molasses","Lull","How I Made My Millions","The Amazing Sounds Of Orgy","Trans-Atlantic Drawl","Kinetic","Fast-Track","Cuttooth","Worrywort","Fog","Paperbag Writer","Where Bluebirds Fly","Fog (Again)","Gagging Order","I Am A Wicked Child","I Am Citizen Insane"]},{"album":"Unreleased","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Unreleased","songs":["Big Boots","The Chains","Climbing Up A Bloody Great Hill","Cut A Hole","The Daily Mail","Feeling Pulled Apart By Horses (AKA Reckoner Old Version)","Follow Me Around","Give It Up","Happy Song","Identikit","I Froze Up","Innocents Civilian","I Promise","I Want None Of This","Lift","Nobody Does It Better","No Surprises Please","Nothing Touches Me","Phillipa Chicken","The Present Tense","Rattlesnake","The Rip","Sinking Ship","Spooks","Staircase","Stupid Car","Tell Me Why","To Be A Brilliant Light","True Love Waits","Union City Blue","Unravel"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Other%20Songs","songs":["Cinnamon Girl (Neil Young Cover)","Good Evening Mrs. Magpie","Harry Patch (In Memory Of)","Man-O-War","Pop Is Dead","Remyxomatosis","Supercollider","The Butcher","These Are My Twisted Words","What Is It That You Say"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '7476',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 18:33:32 GMT',
  age: '8351',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3160-WIKIA, cache-jfk1029-JFK',
  'x-cache': 'HIT, HIT',
  'x-cache-hits': '1, 2',
  'x-timer': 'S1427826812.678199,VS0,VE0',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=nsfkmrmRfV; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 18:33:32 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=radiohead&fmt=json')
  .reply(200, {"artist":"Radiohead","albums":[{"album":"Pablo Honey","year":"1993","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Pablo%20Honey","songs":["You","Creep","How Do You?","Stop Whispering","Thinking About You","Anyone Can Play Guitar","Ripcord","Vegetable","Prove Yourself","I Can't","Lurgee","Blow Out","Creep (Clean)"]},{"album":"Itch","year":"1994","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Itch","songs":["Stop Whispering","Thinking About You","Faithless, The Wonder Boy","Banana Co.","Killer Cars","Vegetable","You","Creep"]},{"album":"My Iron Lung","year":"1994","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20My%20Iron%20Lung","songs":["My Iron Lung","The Trickster","Lewis (Mistreated)","Punchdrunk Lovesick Singalong","Permanent Daylight","Lozenge Of Love","You Never Wash Up After Yourself","Creep"]},{"album":"The Bends","year":"1995","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20The%20Bends","songs":["Planet Telex","The Bends","High And Dry","Fake Plastic Trees","Bones","(Nice Dream)","Just","My Iron Lung","Bullet Proof..I Wish I Was","Black Star","Sulk","Street Spirit (Fade Out)"]},{"album":"OK Computer","year":"1997","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20OK%20Computer","songs":["Airbag","Paranoid Android","Subterranean Homesick Alien","Exit Music (For A Film)","Let Down","Karma Police","Fitter Happier","Electioneering","Climbing Up The Walls","No Surprises","Lucky","The Tourist"]},{"album":"No Surprises/Running From Demons","year":"1997","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20No%20Surprises/Running%20From%20Demons","songs":["No Surprises","Pearly*","Melatonin","Meeting In The Aisle","Bishop's Robes","A Reminder"]},{"album":"Airbag/How Am I Driving?","year":"1998","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Airbag/How%20Am%20I%20Driving?","songs":["Airbag","Pearly*","Meeting In The Aisle","A Reminder","Polyethylene (Parts 1 & 2)","Melatonin","Palo Alto"]},{"album":"Kid A","year":"2000","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Kid%20A","songs":["Everything In Its Right Place","Kid A","The National Anthem","How To Disappear Completely","Treefingers","Optimistic","In Limbo","Idioteque","Morning Bell","Motion Picture Soundtrack"]},{"album":"Amnesiac","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Amnesiac","songs":["Packt Like Sardines In A Crushd Tin Box","Pyramid Song","Pulk/Pull Revolving Doors","You And Whose Army?","I Might Be Wrong","Knives Out","Morning Bell/Amnesiac","Dollars & Cents","Hunting Bears","Like Spinning Plates","Life In A Glasshouse"]},{"album":"Hail To The Thief","year":"2003","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Hail%20To%20The%20Thief","songs":["2 + 2 = 5 (The Lukewarm.)","Sit Down. Stand Up. (Snakes & Ladders.)","Sail To The Moon. (Brush The Cobwebs Out Of The Sky.)","Backdrifts. (Honeymoon Is Over.)","Go To Sleep. (Little Man Being Erased.)","Where I End And You Begin. (The Sky Is Falling In.)","We Suck Young Blood. (Your Time Is Up.)","The Gloaming. (Softly Open Our Mouths In The Cold.)","There There. (The Boney King Of Nowhere.)","I Will. (No Man's Land.)","A Punchup At A Wedding. (No No No No No No No No.)","Myxomatosis. (Judge, Jury & Executioner.)","Scatterbrain. (As Dead As Leaves.)","A Wolf At The Door. (It Girl. Rag Doll.)"]},{"album":"In Rainbows","year":"2007","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20In%20Rainbows","songs":["15 Step","Bodysnatchers","Nude","Weird Fishes/Arpeggi","All I Need","Faust Arp","Reckoner","House Of Cards","Jigsaw Falling Into Place","Videotape","MK 1","Down Is The New Up","Go Slowly","MK 2","Last Flowers","Up On The Ladder","Bangers + Mash","4 Minute Warning"]},{"album":"The King Of Limbs","year":"2011","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20The%20King%20Of%20Limbs","songs":["Bloom","Morning Mr Magpie","Little By Little","Feral","Lotus Flower","Codex","Give Up The Ghost","Separator"]},{"album":"B-Sides","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20B-Sides","songs":["Inside My Head","Million Dollar Question","Yes I Am","Coke Babies","Maquiladora","India Rubber","How Can You Be Sure?","Talk Show Host","Bishop's Robes","Molasses","Lull","How I Made My Millions","The Amazing Sounds Of Orgy","Trans-Atlantic Drawl","Kinetic","Fast-Track","Cuttooth","Worrywort","Fog","Paperbag Writer","Where Bluebirds Fly","Fog (Again)","Gagging Order","I Am A Wicked Child","I Am Citizen Insane"]},{"album":"Unreleased","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Unreleased","songs":["Big Boots","The Chains","Climbing Up A Bloody Great Hill","Cut A Hole","The Daily Mail","Feeling Pulled Apart By Horses (AKA Reckoner Old Version)","Follow Me Around","Give It Up","Happy Song","Identikit","I Froze Up","Innocents Civilian","I Promise","I Want None Of This","Lift","Nobody Does It Better","No Surprises Please","Nothing Touches Me","Phillipa Chicken","The Present Tense","Rattlesnake","The Rip","Sinking Ship","Spooks","Staircase","Stupid Car","Tell Me Why","To Be A Brilliant Light","True Love Waits","Union City Blue","Unravel"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Other%20Songs","songs":["Cinnamon Girl (Neil Young Cover)","Good Evening Mrs. Magpie","Harry Patch (In Memory Of)","Man-O-War","Pop Is Dead","Remyxomatosis","Supercollider","The Butcher","These Are My Twisted Words","What Is It That You Say"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '7476',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 18:33:41 GMT',
  age: '8360',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3160-WIKIA, cache-jfk1021-JFK',
  'x-cache': 'HIT, HIT',
  'x-cache-hits': '1, 1',
  'x-timer': 'S1427826821.021331,VS0,VE0',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=_QOe5W2tnp; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 18:33:41 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=pink%20floyd&fmt=json')
  .reply(200, {"artist":"Pink Floyd","albums":[{"album":"Arnold Layne","year":"1967","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Pink%20Floyd%20Arnold%20Layne","songs":["Arnold Layne","Candy And A Currant Bun"]},{"album":"See Emily Play","year":"1967","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Pink%20Floyd%20See%20Emily%20Play","songs":["See Emily Play","The Scarecrow"]},{"album":"The Piper At The Gates Of Dawn","year":"1967","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Pink%20Floyd%20The%20Piper%20At%20The%20Gates%20Of%20Dawn","songs":["Astronomy Domine","Lucifer Sam","Matilda Mother","Flaming","Pow R. Toc H.","Take Up Thy Stethoscope And Walk","Interstellar Overdrive","The Gnome","Chapter 24","The Scarecrow","Bike","See Emily Play","Pow R. Toc H.","Take Up Thy Stethoscope And Walk","Lucifer Sam","Matilda Mother","The Scarecrow","The Gnome","Chapter 24","Interstellar Overdrive","Arnold Layne","Candy And A Currant Bun","See Emily Play","Apples And Oranges","Paint Box","Interstellar Overdrive","Apples And Oranges","Matilda Mother (Alternative Version)","Interstellar Overdrive"]},{"album":"Apples And Oranges","year":"1967","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Pink%20Floyd%20Apples%20And%20Oranges","songs":["Apples And Oranges","Paint Box"]},{"album":"It Would Be So Nice","year":"1968","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Pink%20Floyd%20It%20Would%20Be%20So%20Nice","songs":["It Would Be So Nice","Julia Dream"]},{"album":"A Saucerful Of Secrets","year":"1968","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Pink%20Floyd%20A%20Saucerful%20Of%20Secrets","songs":["Let There Be More Light","Remember A Day","Set The Controls For The Heart Of The Sun","Corporal Clegg","A Saucerful Of Secrets","See-Saw","Jugband Blues"]},{"album":"Point Me At The Sky","year":"1968","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Pink%20Floyd%20Point%20Me%20At%20The%20Sky","songs":["Point Me At The Sky","Careful With That Axe, Eugene"]},{"album":"Music From The Film More","year":"1969","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Pink%20Floyd%20Music%20From%20The%20Film%20More","songs":["Cirrus Minor","The Nile Song","Crying Song","Up The Khyber","Green Is The Colour","Cymbaline","Party Sequence","Main Theme","Ibiza Bar","More Blues","Quicksilver","A Spanish Piece","Dramatic Theme"]},{"album":"Ummagumma","year":"1969","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Pink%20Floyd%20Ummagumma","songs":["Astronomy Domine","Careful With That Axe, Eugene","Set The Controls For The Heart Of The Sun","A Saucerful Of Secrets","Sysyphus: Part 1","Sysyphus: Part 2","Sysyphus: Part 3","Sysyphus: Part 4","Grantchester Meadows","Several Species Of Small Furry Animals Gathered Together In A Cave And Grooving With A Pict","The Narrow Way Part 1","The Narrow Way Part 2","The Narrow Way Part 3","The Grand Vizier's Garden Party: Part 1 (Entrance)","The Grand Vizier's Garden Party: Part 2 (Entertainment)","The Grand Vizier's Garden Party: Part 3 (Exit)"]},{"album":"Atom Heart Mother","year":"1970","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Pink%20Floyd%20Atom%20Heart%20Mother","songs":["Atom Heart Mother","If","Summer '68","Fat Old Sun","Alan's Psychedelic Breakfast"]},{"album":"Meddle","year":"1971","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Pink%20Floyd%20Meddle","songs":["One Of These Days","A Pillow Of Winds","Fearless","San Tropez","Seamus","Echoes"]},{"album":"Obscured By Clouds","year":"1972","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Pink%20Floyd%20Obscured%20By%20Clouds","songs":["Obscured By Clouds","When You're In","Burning Bridges","The Gold It's In The...","Wot's... Uh The Deal","Mudmen","Childhood's End","Free Four","Stay","Absolutely Curtains"]},{"album":"The Dark Side Of The Moon","year":"1973","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Pink%20Floyd%20The%20Dark%20Side%20Of%20The%20Moon","songs":["Speak To Me","Breathe","On The Run","Time","The Great Gig In The Sky","Money","Us And Them","Any Colour You Like","Brain Damage","Eclipse"]},{"album":"Wish You Were Here","year":"1975","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Pink%20Floyd%20Wish%20You%20Were%20Here","songs":["Shine On You Crazy Diamond (Parts I-V)","Welcome To The Machine","Have A Cigar","Wish You Were Here","Shine On You Crazy Diamond (Parts VI-IX)"]},{"album":"Animals","year":"1977","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Pink%20Floyd%20Animals","songs":["Pigs On The Wing (1)","Dogs","Pigs (Three Different Ones)","Sheep","Pigs On The Wing (2)"]},{"album":"The Wall","year":"1979","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Pink%20Floyd%20The%20Wall","songs":["In The Flesh?","The Thin Ice","Another Brick In The Wall Part 1","The Happiest Days Of Our Lives","Another Brick In The Wall Part 2","Mother","Goodbye Blue Sky","Empty Spaces","Young Lust","One Of My Turns","Don't Leave Me Now","Another Brick In The Wall Part 3","Goodbye Cruel World","Hey You","Is There Anybody Out There?","Nobody Home","Vera","Bring The Boys Back Home","Comfortably Numb","The Show Must Go On","In The Flesh","Run Like Hell","Waiting For The Worms","Stop","The Trial","Outside The Wall"]},{"album":"The Final Cut","year":"1983","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Pink%20Floyd%20The%20Final%20Cut","songs":["The Post War Dream","Your Possible Pasts","One Of The Few","When The Tigers Broke Free","The Hero's Return","The Gunner's Dream","Paranoid Eyes","Get Your Filthy Hands Off My Desert","The Fletcher Memorial Home","Southampton Dock","The Final Cut","Not Now John","Two Suns In The Sunset"]},{"album":"A Momentary Lapse Of Reason","year":"1987","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Pink%20Floyd%20A%20Momentary%20Lapse%20Of%20Reason","songs":["Signs Of Life","Learning To Fly","The Dogs Of War","One Slip","On The Turning Away","Yet Another Movie","A New Machine (Part 1)","Terminal Frost","A New Machine (Part 2)","Sorrow"]},{"album":"Tonite Let's All Make Love In London...Plus","year":"1990","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Pink%20Floyd%20Tonite%20Let's%20All%20Make%20Love%20In%20London...Plus","songs":["Interstellar Overdrive","Nick's Boogie"]},{"album":"The Division Bell","year":"1994","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Pink%20Floyd%20The%20Division%20Bell","songs":["Cluster One","What Do You Want From Me","Poles Apart","Marooned","A Great Day For Freedom","Wearing The Inside Out","Take It Back","Coming Back To Life","Keep Talking","Lost For Words","High Hopes"]},{"album":"The Endless River","year":"2014","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Pink%20Floyd%20The%20Endless%20River","songs":["Things Left Unsaid","It's What We Do","Ebb And Flow","Sum","Skins","Unsung","Anisina","The Lost Art Of Conversation","On Noodle Street","Night Light","Allons-y (1)","Autumn '68","Allons-y (2)","Talkin' Hawkin'","Calling","Eyes To Pearls","Surfacing","Louder Than Words","TBS9","TBS14","Nervana"]},{"album":"[[Pink Floyd/Compilation And Live Albums|Compilation and Live Albums]]","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Pink_Floyd%20[[Pink%20Floyd/Compilation%20And%20Live%20Albums|Compilation%20and%20Live%20Albums]]","songs":["Interstellar Overdrive","Interstellar Overdrive","Interstellar Overdrive","Nick's Boogie","Heart Beat, Pig Meat","Crumbling Land","Come In Number 51, Your Time Is Up","Country Song","Unknown Song","Love Scene (Version 6)","Love Scene (Version 4)","Biding My Time","Embryo","Soundscape"]},{"album":"[[Pink Floyd/Films|Films]]","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Pink_Floyd%20[[Pink%20Floyd/Films|Films]]","songs":["Pompeii","Mademoiselle Nobs","Pan Am Shuffle","Country Theme","Mexico '78","Big Theme","Small Theme","Pan Am Shuffle","Carrera Slow Blues"]},{"album":"A Tree Full Of Secrets","year":"2000","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Pink%20Floyd%20A%20Tree%20Full%20Of%20Secrets","songs":["Lucy Leave","I'm A King Bee","Let's Roll Another One","Untitled","Silas Lang","Scream Thy Last Scream","Vegetable Man","Moonhead","Merry Xmas Song","Seabirds","Hollywood","Rain In The Country","Oenone","Fingal's Cave","Instrumental"]},{"album":"Building The Wall","year":"2007","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Pink%20Floyd%20Building%20The%20Wall","songs":["What Shall We Do Now?"]},{"album":"[[Pink Floyd/Records of Indeterminate/Illegitimate Origin|Records of Indeterminate/Illegitimate Origin]]","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Pink_Floyd%20[[Pink%20Floyd/Records%20of%20Indeterminate/Illegitimate%20Origin|Records%20of%20Indeterminate/Illegitimate%20Origin]]","songs":["One In A Million","Stoned Alone","Raving And Drooling","You Gotta Be Crazy"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '12017',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 18:33:56 GMT',
  age: '0',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3161-WIKIA, cache-iad2135-IAD',
  'x-cache': 'MISS, MISS',
  'x-cache-hits': '0, 0',
  'x-timer': 'S1427826835.980904,VS0,VE129',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=pyfmtlDubc; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 18:33:56 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=rodrigo%20y%20gabriela&fmt=json')
  .reply(200, {"artist":"Rodrigo Y Gabriela","albums":[{"album":"Foc","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Foc","songs":["Foc","Georges St","Temple Bar","Syf","Amuleto","Paris","30 De Marzo","Strøget","Sangre Y Ritmo"]},{"album":"Re-Foc","year":"2002","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Re-Foc","songs":["Diem","New One","Foc","Georges Street / The Tartar Frigate","30 De Marzo","Paris","Take 5","Temple Bar"]},{"album":"Rodrigo Y Gabriela","year":"2006","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Rodrigo%20Y%20Gabriela","songs":["Tamacun","Diablo Rojo","Vikingman","Satori","Ixtapa","Stairway To Heaven","Orion","Juan Loco","PPA"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo_Y_Gabriela%20Other%20Songs","songs":["Mr. Tang","Oogie Boogie's Song"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '1416',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:03:20 GMT',
  age: '41',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3160-WIKIA, cache-iad2123-IAD',
  'x-cache': 'HIT, MISS',
  'x-cache-hits': '2, 0',
  'x-timer': 'S1427828600.327761,VS0,VE75',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=4j72MfiuRQ; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:03:20 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=rodrigo%20y%20gabriela&fmt=json')
  .reply(200, {"artist":"Rodrigo Y Gabriela","albums":[{"album":"Foc","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Foc","songs":["Foc","Georges St","Temple Bar","Syf","Amuleto","Paris","30 De Marzo","Strøget","Sangre Y Ritmo"]},{"album":"Re-Foc","year":"2002","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Re-Foc","songs":["Diem","New One","Foc","Georges Street / The Tartar Frigate","30 De Marzo","Paris","Take 5","Temple Bar"]},{"album":"Rodrigo Y Gabriela","year":"2006","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Rodrigo%20Y%20Gabriela","songs":["Tamacun","Diablo Rojo","Vikingman","Satori","Ixtapa","Stairway To Heaven","Orion","Juan Loco","PPA"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo_Y_Gabriela%20Other%20Songs","songs":["Mr. Tang","Oogie Boogie's Song"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '1416',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:03:21 GMT',
  age: '42',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3160-WIKIA, cache-iad2133-IAD',
  'x-cache': 'HIT, HIT',
  'x-cache-hits': '2, 1',
  'x-timer': 'S1427828601.789525,VS0,VE0',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=eUv5BzMQLp; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:03:21 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=rodrigo%20y%20gabriela&fmt=json')
  .reply(200, {"artist":"Rodrigo Y Gabriela","albums":[{"album":"Foc","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Foc","songs":["Foc","Georges St","Temple Bar","Syf","Amuleto","Paris","30 De Marzo","Strøget","Sangre Y Ritmo"]},{"album":"Re-Foc","year":"2002","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Re-Foc","songs":["Diem","New One","Foc","Georges Street / The Tartar Frigate","30 De Marzo","Paris","Take 5","Temple Bar"]},{"album":"Rodrigo Y Gabriela","year":"2006","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Rodrigo%20Y%20Gabriela","songs":["Tamacun","Diablo Rojo","Vikingman","Satori","Ixtapa","Stairway To Heaven","Orion","Juan Loco","PPA"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo_Y_Gabriela%20Other%20Songs","songs":["Mr. Tang","Oogie Boogie's Song"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '1416',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:03:22 GMT',
  age: '43',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3160-WIKIA, cache-iad2135-IAD',
  'x-cache': 'HIT, HIT',
  'x-cache-hits': '2, 1',
  'x-timer': 'S1427828602.614128,VS0,VE0',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=EpK_x2tUZ0; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:03:22 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=rodrigo%20y%20gabriela&fmt=json')
  .reply(200, {"artist":"Rodrigo Y Gabriela","albums":[{"album":"Foc","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Foc","songs":["Foc","Georges St","Temple Bar","Syf","Amuleto","Paris","30 De Marzo","Strøget","Sangre Y Ritmo"]},{"album":"Re-Foc","year":"2002","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Re-Foc","songs":["Diem","New One","Foc","Georges Street / The Tartar Frigate","30 De Marzo","Paris","Take 5","Temple Bar"]},{"album":"Rodrigo Y Gabriela","year":"2006","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Rodrigo%20Y%20Gabriela","songs":["Tamacun","Diablo Rojo","Vikingman","Satori","Ixtapa","Stairway To Heaven","Orion","Juan Loco","PPA"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo_Y_Gabriela%20Other%20Songs","songs":["Mr. Tang","Oogie Boogie's Song"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '1416',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:03:23 GMT',
  age: '44',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3160-WIKIA, cache-iad2137-IAD',
  'x-cache': 'HIT, HIT',
  'x-cache-hits': '2, 1',
  'x-timer': 'S1427828603.465835,VS0,VE0',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=6omP-YXTPG; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:03:23 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=rodrigo%20y%20gabriela&fmt=json')
  .reply(200, {"artist":"Rodrigo Y Gabriela","albums":[{"album":"Foc","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Foc","songs":["Foc","Georges St","Temple Bar","Syf","Amuleto","Paris","30 De Marzo","Strøget","Sangre Y Ritmo"]},{"album":"Re-Foc","year":"2002","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Re-Foc","songs":["Diem","New One","Foc","Georges Street / The Tartar Frigate","30 De Marzo","Paris","Take 5","Temple Bar"]},{"album":"Rodrigo Y Gabriela","year":"2006","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Rodrigo%20Y%20Gabriela","songs":["Tamacun","Diablo Rojo","Vikingman","Satori","Ixtapa","Stairway To Heaven","Orion","Juan Loco","PPA"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo_Y_Gabriela%20Other%20Songs","songs":["Mr. Tang","Oogie Boogie's Song"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '1416',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:03:35 GMT',
  age: '56',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3160-WIKIA, cache-iad2120-IAD',
  'x-cache': 'HIT, HIT',
  'x-cache-hits': '2, 1',
  'x-timer': 'S1427828615.889892,VS0,VE0',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=tMUcg8nBaE; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:03:35 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=rodrigo%20y%20gabriela&fmt=json')
  .reply(200, {"artist":"Rodrigo Y Gabriela","albums":[{"album":"Foc","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Foc","songs":["Foc","Georges St","Temple Bar","Syf","Amuleto","Paris","30 De Marzo","Strøget","Sangre Y Ritmo"]},{"album":"Re-Foc","year":"2002","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Re-Foc","songs":["Diem","New One","Foc","Georges Street / The Tartar Frigate","30 De Marzo","Paris","Take 5","Temple Bar"]},{"album":"Rodrigo Y Gabriela","year":"2006","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Rodrigo%20Y%20Gabriela","songs":["Tamacun","Diablo Rojo","Vikingman","Satori","Ixtapa","Stairway To Heaven","Orion","Juan Loco","PPA"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo_Y_Gabriela%20Other%20Songs","songs":["Mr. Tang","Oogie Boogie's Song"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '1416',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:03:36 GMT',
  age: '57',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3160-WIKIA, cache-iad2135-IAD',
  'x-cache': 'HIT, HIT',
  'x-cache-hits': '2, 2',
  'x-timer': 'S1427828616.906324,VS0,VE0',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=x8JqYJh-6S; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:03:36 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=rodrigo%20y%20gabriela&fmt=json')
  .reply(200, {"artist":"Rodrigo Y Gabriela","albums":[{"album":"Foc","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Foc","songs":["Foc","Georges St","Temple Bar","Syf","Amuleto","Paris","30 De Marzo","Strøget","Sangre Y Ritmo"]},{"album":"Re-Foc","year":"2002","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Re-Foc","songs":["Diem","New One","Foc","Georges Street / The Tartar Frigate","30 De Marzo","Paris","Take 5","Temple Bar"]},{"album":"Rodrigo Y Gabriela","year":"2006","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Rodrigo%20Y%20Gabriela","songs":["Tamacun","Diablo Rojo","Vikingman","Satori","Ixtapa","Stairway To Heaven","Orion","Juan Loco","PPA"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo_Y_Gabriela%20Other%20Songs","songs":["Mr. Tang","Oogie Boogie's Song"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '1416',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:03:37 GMT',
  age: '58',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3160-WIKIA, cache-iad2122-IAD',
  'x-cache': 'HIT, HIT',
  'x-cache-hits': '2, 1',
  'x-timer': 'S1427828617.686856,VS0,VE0',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=3dIrvWdYAL; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:03:37 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=rodrigo%20y%20gabriela&fmt=json')
  .reply(200, {"artist":"Rodrigo Y Gabriela","albums":[{"album":"Foc","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Foc","songs":["Foc","Georges St","Temple Bar","Syf","Amuleto","Paris","30 De Marzo","Strøget","Sangre Y Ritmo"]},{"album":"Re-Foc","year":"2002","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Re-Foc","songs":["Diem","New One","Foc","Georges Street / The Tartar Frigate","30 De Marzo","Paris","Take 5","Temple Bar"]},{"album":"Rodrigo Y Gabriela","year":"2006","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Rodrigo%20Y%20Gabriela","songs":["Tamacun","Diablo Rojo","Vikingman","Satori","Ixtapa","Stairway To Heaven","Orion","Juan Loco","PPA"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo_Y_Gabriela%20Other%20Songs","songs":["Mr. Tang","Oogie Boogie's Song"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '1416',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:03:39 GMT',
  age: '60',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3160-WIKIA, cache-iad2144-IAD',
  'x-cache': 'HIT, HIT',
  'x-cache-hits': '2, 6',
  'x-timer': 'S1427828619.365961,VS0,VE0',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=tq2z2bBIyy; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:03:39 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=rodrigo%20y%20gabriela&fmt=json')
  .reply(200, {"artist":"Rodrigo Y Gabriela","albums":[{"album":"Foc","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Foc","songs":["Foc","Georges St","Temple Bar","Syf","Amuleto","Paris","30 De Marzo","Strøget","Sangre Y Ritmo"]},{"album":"Re-Foc","year":"2002","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Re-Foc","songs":["Diem","New One","Foc","Georges Street / The Tartar Frigate","30 De Marzo","Paris","Take 5","Temple Bar"]},{"album":"Rodrigo Y Gabriela","year":"2006","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Rodrigo%20Y%20Gabriela","songs":["Tamacun","Diablo Rojo","Vikingman","Satori","Ixtapa","Stairway To Heaven","Orion","Juan Loco","PPA"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo_Y_Gabriela%20Other%20Songs","songs":["Mr. Tang","Oogie Boogie's Song"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '1416',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:03:40 GMT',
  age: '61',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3160-WIKIA, cache-iad2136-IAD',
  'x-cache': 'HIT, HIT',
  'x-cache-hits': '2, 1',
  'x-timer': 'S1427828620.109284,VS0,VE0',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=LTLaMKprvD; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:03:40 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=rodrigo%20y%20gabriela&fmt=json')
  .reply(200, {"artist":"Rodrigo Y Gabriela","albums":[{"album":"Foc","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Foc","songs":["Foc","Georges St","Temple Bar","Syf","Amuleto","Paris","30 De Marzo","Strøget","Sangre Y Ritmo"]},{"album":"Re-Foc","year":"2002","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Re-Foc","songs":["Diem","New One","Foc","Georges Street / The Tartar Frigate","30 De Marzo","Paris","Take 5","Temple Bar"]},{"album":"Rodrigo Y Gabriela","year":"2006","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Rodrigo%20Y%20Gabriela","songs":["Tamacun","Diablo Rojo","Vikingman","Satori","Ixtapa","Stairway To Heaven","Orion","Juan Loco","PPA"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo_Y_Gabriela%20Other%20Songs","songs":["Mr. Tang","Oogie Boogie's Song"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '1416',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:03:40 GMT',
  age: '62',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3160-WIKIA, cache-iad2129-IAD',
  'x-cache': 'HIT, HIT',
  'x-cache-hits': '2, 1',
  'x-timer': 'S1427828620.915588,VS0,VE0',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=4PaG5FJD4M; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:03:40 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=rodrigo%20y%20gabriela&fmt=json')
  .reply(200, {"artist":"Rodrigo Y Gabriela","albums":[{"album":"Foc","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Foc","songs":["Foc","Georges St","Temple Bar","Syf","Amuleto","Paris","30 De Marzo","Strøget","Sangre Y Ritmo"]},{"album":"Re-Foc","year":"2002","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Re-Foc","songs":["Diem","New One","Foc","Georges Street / The Tartar Frigate","30 De Marzo","Paris","Take 5","Temple Bar"]},{"album":"Rodrigo Y Gabriela","year":"2006","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Rodrigo%20Y%20Gabriela","songs":["Tamacun","Diablo Rojo","Vikingman","Satori","Ixtapa","Stairway To Heaven","Orion","Juan Loco","PPA"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo_Y_Gabriela%20Other%20Songs","songs":["Mr. Tang","Oogie Boogie's Song"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '1416',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:03:41 GMT',
  age: '62',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3160-WIKIA, cache-iad2134-IAD',
  'x-cache': 'HIT, HIT',
  'x-cache-hits': '2, 1',
  'x-timer': 'S1427828621.648491,VS0,VE0',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=yXC_tPK2nP; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:03:41 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=rodrigo%20y%20gabriela&fmt=json')
  .reply(200, {"artist":"Rodrigo Y Gabriela","albums":[{"album":"Foc","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Foc","songs":["Foc","Georges St","Temple Bar","Syf","Amuleto","Paris","30 De Marzo","Strøget","Sangre Y Ritmo"]},{"album":"Re-Foc","year":"2002","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Re-Foc","songs":["Diem","New One","Foc","Georges Street / The Tartar Frigate","30 De Marzo","Paris","Take 5","Temple Bar"]},{"album":"Rodrigo Y Gabriela","year":"2006","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Rodrigo%20Y%20Gabriela","songs":["Tamacun","Diablo Rojo","Vikingman","Satori","Ixtapa","Stairway To Heaven","Orion","Juan Loco","PPA"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo_Y_Gabriela%20Other%20Songs","songs":["Mr. Tang","Oogie Boogie's Song"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '1416',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:03:43 GMT',
  age: '64',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3160-WIKIA, cache-iad2130-IAD',
  'x-cache': 'HIT, HIT',
  'x-cache-hits': '2, 1',
  'x-timer': 'S1427828623.163991,VS0,VE0',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=1j4IrULDZA; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:03:43 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=rodrigo%20y%20gabriela&fmt=json')
  .reply(200, {"artist":"Rodrigo Y Gabriela","albums":[{"album":"Foc","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Foc","songs":["Foc","Georges St","Temple Bar","Syf","Amuleto","Paris","30 De Marzo","Strøget","Sangre Y Ritmo"]},{"album":"Re-Foc","year":"2002","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Re-Foc","songs":["Diem","New One","Foc","Georges Street / The Tartar Frigate","30 De Marzo","Paris","Take 5","Temple Bar"]},{"album":"Rodrigo Y Gabriela","year":"2006","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Rodrigo%20Y%20Gabriela","songs":["Tamacun","Diablo Rojo","Vikingman","Satori","Ixtapa","Stairway To Heaven","Orion","Juan Loco","PPA"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo_Y_Gabriela%20Other%20Songs","songs":["Mr. Tang","Oogie Boogie's Song"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '1416',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:04:21 GMT',
  age: '102',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3161-WIKIA, cache-atl6233-ATL',
  'x-cache': 'MISS, HIT',
  'x-cache-hits': '0, 1',
  'x-timer': 'S1427828661.660661,VS0,VE0',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=yMeErcHW0D; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:04:21 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=rodrigo%20y%20gabriela&fmt=json')
  .reply(200, {"artist":"Rodrigo Y Gabriela","albums":[{"album":"Foc","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Foc","songs":["Foc","Georges St","Temple Bar","Syf","Amuleto","Paris","30 De Marzo","Strøget","Sangre Y Ritmo"]},{"album":"Re-Foc","year":"2002","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Re-Foc","songs":["Diem","New One","Foc","Georges Street / The Tartar Frigate","30 De Marzo","Paris","Take 5","Temple Bar"]},{"album":"Rodrigo Y Gabriela","year":"2006","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Rodrigo%20Y%20Gabriela","songs":["Tamacun","Diablo Rojo","Vikingman","Satori","Ixtapa","Stairway To Heaven","Orion","Juan Loco","PPA"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo_Y_Gabriela%20Other%20Songs","songs":["Mr. Tang","Oogie Boogie's Song"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '1416',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:04:25 GMT',
  age: '106',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3161-WIKIA, cache-atl6235-ATL',
  'x-cache': 'MISS, HIT',
  'x-cache-hits': '0, 1',
  'x-timer': 'S1427828665.557024,VS0,VE1',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=9ziHAyVmhs; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:04:25 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=rodrigo%20y%20gabriela&fmt=json')
  .reply(200, {"artist":"Rodrigo Y Gabriela","albums":[{"album":"Foc","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Foc","songs":["Foc","Georges St","Temple Bar","Syf","Amuleto","Paris","30 De Marzo","Strøget","Sangre Y Ritmo"]},{"album":"Re-Foc","year":"2002","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Re-Foc","songs":["Diem","New One","Foc","Georges Street / The Tartar Frigate","30 De Marzo","Paris","Take 5","Temple Bar"]},{"album":"Rodrigo Y Gabriela","year":"2006","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Rodrigo%20Y%20Gabriela","songs":["Tamacun","Diablo Rojo","Vikingman","Satori","Ixtapa","Stairway To Heaven","Orion","Juan Loco","PPA"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo_Y_Gabriela%20Other%20Songs","songs":["Mr. Tang","Oogie Boogie's Song"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '1416',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:04:28 GMT',
  age: '109',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3161-WIKIA, cache-atl6232-ATL',
  'x-cache': 'MISS, HIT',
  'x-cache-hits': '0, 4',
  'x-timer': 'S1427828668.780313,VS0,VE0',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=Yt2iAYHByy; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:04:28 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=rodrigo%20y%20gabriela&fmt=json')
  .reply(200, {"artist":"Rodrigo Y Gabriela","albums":[{"album":"Foc","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Foc","songs":["Foc","Georges St","Temple Bar","Syf","Amuleto","Paris","30 De Marzo","Strøget","Sangre Y Ritmo"]},{"album":"Re-Foc","year":"2002","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Re-Foc","songs":["Diem","New One","Foc","Georges Street / The Tartar Frigate","30 De Marzo","Paris","Take 5","Temple Bar"]},{"album":"Rodrigo Y Gabriela","year":"2006","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Rodrigo%20Y%20Gabriela","songs":["Tamacun","Diablo Rojo","Vikingman","Satori","Ixtapa","Stairway To Heaven","Orion","Juan Loco","PPA"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo_Y_Gabriela%20Other%20Songs","songs":["Mr. Tang","Oogie Boogie's Song"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '1416',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:04:30 GMT',
  age: '111',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3161-WIKIA, cache-atl6229-ATL',
  'x-cache': 'MISS, HIT',
  'x-cache-hits': '0, 1',
  'x-timer': 'S1427828670.414905,VS0,VE0',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=jAqueuNe12; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:04:30 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=rodrigo%20y%20gabriela&fmt=json')
  .reply(200, {"artist":"Rodrigo Y Gabriela","albums":[{"album":"Foc","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Foc","songs":["Foc","Georges St","Temple Bar","Syf","Amuleto","Paris","30 De Marzo","Strøget","Sangre Y Ritmo"]},{"album":"Re-Foc","year":"2002","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Re-Foc","songs":["Diem","New One","Foc","Georges Street / The Tartar Frigate","30 De Marzo","Paris","Take 5","Temple Bar"]},{"album":"Rodrigo Y Gabriela","year":"2006","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Rodrigo%20Y%20Gabriela","songs":["Tamacun","Diablo Rojo","Vikingman","Satori","Ixtapa","Stairway To Heaven","Orion","Juan Loco","PPA"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo_Y_Gabriela%20Other%20Songs","songs":["Mr. Tang","Oogie Boogie's Song"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '1416',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:04:34 GMT',
  age: '115',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3161-WIKIA, cache-atl6229-ATL',
  'x-cache': 'MISS, HIT',
  'x-cache-hits': '0, 2',
  'x-timer': 'S1427828674.491334,VS0,VE0',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=ZyF54r_xsB; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:04:34 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=rodrigo%20y%20gabriela&fmt=json')
  .reply(200, {"artist":"Rodrigo Y Gabriela","albums":[{"album":"Foc","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Foc","songs":["Foc","Georges St","Temple Bar","Syf","Amuleto","Paris","30 De Marzo","Strøget","Sangre Y Ritmo"]},{"album":"Re-Foc","year":"2002","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Re-Foc","songs":["Diem","New One","Foc","Georges Street / The Tartar Frigate","30 De Marzo","Paris","Take 5","Temple Bar"]},{"album":"Rodrigo Y Gabriela","year":"2006","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Rodrigo%20Y%20Gabriela","songs":["Tamacun","Diablo Rojo","Vikingman","Satori","Ixtapa","Stairway To Heaven","Orion","Juan Loco","PPA"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo_Y_Gabriela%20Other%20Songs","songs":["Mr. Tang","Oogie Boogie's Song"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '1416',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:05:10 GMT',
  age: '151',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3161-WIKIA, cache-atl6220-ATL',
  'x-cache': 'MISS, HIT',
  'x-cache-hits': '0, 2',
  'x-timer': 'S1427828710.343652,VS0,VE0',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=9nq7TUcsJ9; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:05:10 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=rodrigo%20y%20gabriela&fmt=json')
  .reply(200, {"artist":"Rodrigo Y Gabriela","albums":[{"album":"Foc","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Foc","songs":["Foc","Georges St","Temple Bar","Syf","Amuleto","Paris","30 De Marzo","Strøget","Sangre Y Ritmo"]},{"album":"Re-Foc","year":"2002","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Re-Foc","songs":["Diem","New One","Foc","Georges Street / The Tartar Frigate","30 De Marzo","Paris","Take 5","Temple Bar"]},{"album":"Rodrigo Y Gabriela","year":"2006","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Rodrigo%20Y%20Gabriela","songs":["Tamacun","Diablo Rojo","Vikingman","Satori","Ixtapa","Stairway To Heaven","Orion","Juan Loco","PPA"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo_Y_Gabriela%20Other%20Songs","songs":["Mr. Tang","Oogie Boogie's Song"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '1416',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:05:11 GMT',
  age: '152',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3161-WIKIA, cache-atl6226-ATL',
  'x-cache': 'MISS, HIT',
  'x-cache-hits': '0, 1',
  'x-timer': 'S1427828711.110083,VS0,VE1',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=f4eZEl_KMf; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:05:11 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=rodrigo%20y%20gabriela&fmt=json')
  .reply(200, {"artist":"Rodrigo Y Gabriela","albums":[{"album":"Foc","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Foc","songs":["Foc","Georges St","Temple Bar","Syf","Amuleto","Paris","30 De Marzo","Strøget","Sangre Y Ritmo"]},{"album":"Re-Foc","year":"2002","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Re-Foc","songs":["Diem","New One","Foc","Georges Street / The Tartar Frigate","30 De Marzo","Paris","Take 5","Temple Bar"]},{"album":"Rodrigo Y Gabriela","year":"2006","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Rodrigo%20Y%20Gabriela","songs":["Tamacun","Diablo Rojo","Vikingman","Satori","Ixtapa","Stairway To Heaven","Orion","Juan Loco","PPA"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo_Y_Gabriela%20Other%20Songs","songs":["Mr. Tang","Oogie Boogie's Song"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '1416',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:05:16 GMT',
  age: '157',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3161-WIKIA, cache-atl6225-ATL',
  'x-cache': 'MISS, HIT',
  'x-cache-hits': '0, 1',
  'x-timer': 'S1427828716.542996,VS0,VE1',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=GjWVkgrVNV; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:05:16 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=rodrigo%20y%20gabriela&fmt=json')
  .reply(200, {"artist":"Rodrigo Y Gabriela","albums":[{"album":"Foc","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Foc","songs":["Foc","Georges St","Temple Bar","Syf","Amuleto","Paris","30 De Marzo","Strøget","Sangre Y Ritmo"]},{"album":"Re-Foc","year":"2002","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Re-Foc","songs":["Diem","New One","Foc","Georges Street / The Tartar Frigate","30 De Marzo","Paris","Take 5","Temple Bar"]},{"album":"Rodrigo Y Gabriela","year":"2006","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Rodrigo%20Y%20Gabriela","songs":["Tamacun","Diablo Rojo","Vikingman","Satori","Ixtapa","Stairway To Heaven","Orion","Juan Loco","PPA"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo_Y_Gabriela%20Other%20Songs","songs":["Mr. Tang","Oogie Boogie's Song"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '1416',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:05:17 GMT',
  age: '158',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3161-WIKIA, cache-atl6224-ATL',
  'x-cache': 'MISS, HIT',
  'x-cache-hits': '0, 1',
  'x-timer': 'S1427828717.249441,VS0,VE0',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=lSHg7Fdxp7; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:05:17 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=rodrigo%20y%20gabriela&fmt=json')
  .reply(200, {"artist":"Rodrigo Y Gabriela","albums":[{"album":"Foc","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Foc","songs":["Foc","Georges St","Temple Bar","Syf","Amuleto","Paris","30 De Marzo","Strøget","Sangre Y Ritmo"]},{"album":"Re-Foc","year":"2002","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Re-Foc","songs":["Diem","New One","Foc","Georges Street / The Tartar Frigate","30 De Marzo","Paris","Take 5","Temple Bar"]},{"album":"Rodrigo Y Gabriela","year":"2006","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Rodrigo%20Y%20Gabriela","songs":["Tamacun","Diablo Rojo","Vikingman","Satori","Ixtapa","Stairway To Heaven","Orion","Juan Loco","PPA"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo_Y_Gabriela%20Other%20Songs","songs":["Mr. Tang","Oogie Boogie's Song"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '1416',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:05:21 GMT',
  age: '162',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3161-WIKIA, cache-atl6230-ATL',
  'x-cache': 'MISS, HIT',
  'x-cache-hits': '0, 1',
  'x-timer': 'S1427828721.424576,VS0,VE1',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=ay-tk6hLo-; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:05:21 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=rodrigo%20y%20gabriela&fmt=json')
  .reply(200, {"artist":"Rodrigo Y Gabriela","albums":[{"album":"Foc","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Foc","songs":["Foc","Georges St","Temple Bar","Syf","Amuleto","Paris","30 De Marzo","Strøget","Sangre Y Ritmo"]},{"album":"Re-Foc","year":"2002","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Re-Foc","songs":["Diem","New One","Foc","Georges Street / The Tartar Frigate","30 De Marzo","Paris","Take 5","Temple Bar"]},{"album":"Rodrigo Y Gabriela","year":"2006","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Rodrigo%20Y%20Gabriela","songs":["Tamacun","Diablo Rojo","Vikingman","Satori","Ixtapa","Stairway To Heaven","Orion","Juan Loco","PPA"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo_Y_Gabriela%20Other%20Songs","songs":["Mr. Tang","Oogie Boogie's Song"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '1416',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:05:24 GMT',
  age: '165',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3161-WIKIA, cache-atl6231-ATL',
  'x-cache': 'MISS, HIT',
  'x-cache-hits': '0, 1',
  'x-timer': 'S1427828724.448535,VS0,VE1',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=EECX0oGR9J; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:05:24 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=rodrigo%20y%20gabriela&fmt=json')
  .reply(200, {"artist":"Rodrigo Y Gabriela","albums":[{"album":"Foc","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Foc","songs":["Foc","Georges St","Temple Bar","Syf","Amuleto","Paris","30 De Marzo","Strøget","Sangre Y Ritmo"]},{"album":"Re-Foc","year":"2002","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Re-Foc","songs":["Diem","New One","Foc","Georges Street / The Tartar Frigate","30 De Marzo","Paris","Take 5","Temple Bar"]},{"album":"Rodrigo Y Gabriela","year":"2006","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Rodrigo%20Y%20Gabriela","songs":["Tamacun","Diablo Rojo","Vikingman","Satori","Ixtapa","Stairway To Heaven","Orion","Juan Loco","PPA"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo_Y_Gabriela%20Other%20Songs","songs":["Mr. Tang","Oogie Boogie's Song"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '1416',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:05:25 GMT',
  age: '166',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3161-WIKIA, cache-atl6225-ATL',
  'x-cache': 'MISS, HIT',
  'x-cache-hits': '0, 2',
  'x-timer': 'S1427828725.282998,VS0,VE0',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=fX-lGnovel; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:05:25 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=rodrigo%20y%20gabriela&fmt=json')
  .reply(200, {"artist":"Rodrigo Y Gabriela","albums":[{"album":"Foc","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Foc","songs":["Foc","Georges St","Temple Bar","Syf","Amuleto","Paris","30 De Marzo","Strøget","Sangre Y Ritmo"]},{"album":"Re-Foc","year":"2002","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Re-Foc","songs":["Diem","New One","Foc","Georges Street / The Tartar Frigate","30 De Marzo","Paris","Take 5","Temple Bar"]},{"album":"Rodrigo Y Gabriela","year":"2006","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Rodrigo%20Y%20Gabriela","songs":["Tamacun","Diablo Rojo","Vikingman","Satori","Ixtapa","Stairway To Heaven","Orion","Juan Loco","PPA"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo_Y_Gabriela%20Other%20Songs","songs":["Mr. Tang","Oogie Boogie's Song"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '1416',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:06:21 GMT',
  age: '222',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3160-WIKIA, cache-jfk1023-JFK',
  'x-cache': 'HIT, HIT',
  'x-cache-hits': '1, 4',
  'x-timer': 'S1427828781.532407,VS0,VE0',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=If02Rb8vPS; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:06:21 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=rodrigo%20y%20gabriela&fmt=json')
  .reply(200, {"artist":"Rodrigo Y Gabriela","albums":[{"album":"Foc","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Foc","songs":["Foc","Georges St","Temple Bar","Syf","Amuleto","Paris","30 De Marzo","Strøget","Sangre Y Ritmo"]},{"album":"Re-Foc","year":"2002","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Re-Foc","songs":["Diem","New One","Foc","Georges Street / The Tartar Frigate","30 De Marzo","Paris","Take 5","Temple Bar"]},{"album":"Rodrigo Y Gabriela","year":"2006","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Rodrigo%20Y%20Gabriela","songs":["Tamacun","Diablo Rojo","Vikingman","Satori","Ixtapa","Stairway To Heaven","Orion","Juan Loco","PPA"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo_Y_Gabriela%20Other%20Songs","songs":["Mr. Tang","Oogie Boogie's Song"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '1416',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:06:26 GMT',
  age: '227',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3160-WIKIA, cache-jfk1024-JFK',
  'x-cache': 'HIT, HIT',
  'x-cache-hits': '1, 4',
  'x-timer': 'S1427828786.839100,VS0,VE0',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=g7Y_699G9M; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:06:26 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=rodrigo%20y%20gabriela&fmt=json')
  .reply(200, {"artist":"Rodrigo Y Gabriela","albums":[{"album":"Foc","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Foc","songs":["Foc","Georges St","Temple Bar","Syf","Amuleto","Paris","30 De Marzo","Strøget","Sangre Y Ritmo"]},{"album":"Re-Foc","year":"2002","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Re-Foc","songs":["Diem","New One","Foc","Georges Street / The Tartar Frigate","30 De Marzo","Paris","Take 5","Temple Bar"]},{"album":"Rodrigo Y Gabriela","year":"2006","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Rodrigo%20Y%20Gabriela","songs":["Tamacun","Diablo Rojo","Vikingman","Satori","Ixtapa","Stairway To Heaven","Orion","Juan Loco","PPA"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo_Y_Gabriela%20Other%20Songs","songs":["Mr. Tang","Oogie Boogie's Song"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '1416',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:06:32 GMT',
  age: '232',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3160-WIKIA, cache-jfk1023-JFK',
  'x-cache': 'HIT, HIT',
  'x-cache-hits': '1, 5',
  'x-timer': 'S1427828792.065759,VS0,VE0',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=hrpxD3ahB-; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:06:32 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=rodrigo%20y%20gabriela&fmt=json')
  .reply(200, {"artist":"Rodrigo Y Gabriela","albums":[{"album":"Foc","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Foc","songs":["Foc","Georges St","Temple Bar","Syf","Amuleto","Paris","30 De Marzo","Strøget","Sangre Y Ritmo"]},{"album":"Re-Foc","year":"2002","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Re-Foc","songs":["Diem","New One","Foc","Georges Street / The Tartar Frigate","30 De Marzo","Paris","Take 5","Temple Bar"]},{"album":"Rodrigo Y Gabriela","year":"2006","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Rodrigo%20Y%20Gabriela","songs":["Tamacun","Diablo Rojo","Vikingman","Satori","Ixtapa","Stairway To Heaven","Orion","Juan Loco","PPA"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo_Y_Gabriela%20Other%20Songs","songs":["Mr. Tang","Oogie Boogie's Song"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '1416',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:06:35 GMT',
  age: '235',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3160-WIKIA, cache-jfk1022-JFK',
  'x-cache': 'HIT, HIT',
  'x-cache-hits': '1, 2',
  'x-timer': 'S1427828795.079300,VS0,VE0',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=ej7zcX5gQG; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:06:35 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=rodrigo%20y%20gabriela&fmt=json')
  .reply(200, {"artist":"Rodrigo Y Gabriela","albums":[{"album":"Foc","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Foc","songs":["Foc","Georges St","Temple Bar","Syf","Amuleto","Paris","30 De Marzo","Strøget","Sangre Y Ritmo"]},{"album":"Re-Foc","year":"2002","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Re-Foc","songs":["Diem","New One","Foc","Georges Street / The Tartar Frigate","30 De Marzo","Paris","Take 5","Temple Bar"]},{"album":"Rodrigo Y Gabriela","year":"2006","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Rodrigo%20Y%20Gabriela","songs":["Tamacun","Diablo Rojo","Vikingman","Satori","Ixtapa","Stairway To Heaven","Orion","Juan Loco","PPA"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo_Y_Gabriela%20Other%20Songs","songs":["Mr. Tang","Oogie Boogie's Song"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '1416',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:06:42 GMT',
  age: '243',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3160-WIKIA, cache-jfk1032-JFK',
  'x-cache': 'HIT, HIT',
  'x-cache-hits': '1, 1',
  'x-timer': 'S1427828802.886111,VS0,VE0',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=NCvuob3uqx; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:06:42 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=rodrigo%20y%20gabriela&fmt=json')
  .reply(200, {"artist":"Rodrigo Y Gabriela","albums":[{"album":"Foc","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Foc","songs":["Foc","Georges St","Temple Bar","Syf","Amuleto","Paris","30 De Marzo","Strøget","Sangre Y Ritmo"]},{"album":"Re-Foc","year":"2002","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Re-Foc","songs":["Diem","New One","Foc","Georges Street / The Tartar Frigate","30 De Marzo","Paris","Take 5","Temple Bar"]},{"album":"Rodrigo Y Gabriela","year":"2006","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Rodrigo%20Y%20Gabriela","songs":["Tamacun","Diablo Rojo","Vikingman","Satori","Ixtapa","Stairway To Heaven","Orion","Juan Loco","PPA"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo_Y_Gabriela%20Other%20Songs","songs":["Mr. Tang","Oogie Boogie's Song"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '1416',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:06:44 GMT',
  age: '245',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3160-WIKIA, cache-jfk1032-JFK',
  'x-cache': 'HIT, HIT',
  'x-cache-hits': '1, 2',
  'x-timer': 'S1427828804.370775,VS0,VE0',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=mACQANL_F6; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:06:44 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=rodrigo%20y%20gabriela&fmt=json')
  .reply(200, {"artist":"Rodrigo Y Gabriela","albums":[{"album":"Foc","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Foc","songs":["Foc","Georges St","Temple Bar","Syf","Amuleto","Paris","30 De Marzo","Strøget","Sangre Y Ritmo"]},{"album":"Re-Foc","year":"2002","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Re-Foc","songs":["Diem","New One","Foc","Georges Street / The Tartar Frigate","30 De Marzo","Paris","Take 5","Temple Bar"]},{"album":"Rodrigo Y Gabriela","year":"2006","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Rodrigo%20Y%20Gabriela","songs":["Tamacun","Diablo Rojo","Vikingman","Satori","Ixtapa","Stairway To Heaven","Orion","Juan Loco","PPA"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo_Y_Gabriela%20Other%20Songs","songs":["Mr. Tang","Oogie Boogie's Song"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '1416',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:06:45 GMT',
  age: '246',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3160-WIKIA, cache-iad2121-IAD',
  'x-cache': 'HIT, HIT',
  'x-cache-hits': '2, 1',
  'x-timer': 'S1427828805.206200,VS0,VE0',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=SIr97PYP3G; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:06:45 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=rodrigo%20y%20gabriela&fmt=json')
  .reply(200, {"artist":"Rodrigo Y Gabriela","albums":[{"album":"Foc","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Foc","songs":["Foc","Georges St","Temple Bar","Syf","Amuleto","Paris","30 De Marzo","Strøget","Sangre Y Ritmo"]},{"album":"Re-Foc","year":"2002","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Re-Foc","songs":["Diem","New One","Foc","Georges Street / The Tartar Frigate","30 De Marzo","Paris","Take 5","Temple Bar"]},{"album":"Rodrigo Y Gabriela","year":"2006","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Rodrigo%20Y%20Gabriela","songs":["Tamacun","Diablo Rojo","Vikingman","Satori","Ixtapa","Stairway To Heaven","Orion","Juan Loco","PPA"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo_Y_Gabriela%20Other%20Songs","songs":["Mr. Tang","Oogie Boogie's Song"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '1416',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:06:45 GMT',
  age: '246',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3160-WIKIA, cache-iad2143-IAD',
  'x-cache': 'HIT, HIT',
  'x-cache-hits': '2, 1',
  'x-timer': 'S1427828805.876504,VS0,VE0',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=GF0f7nJvr0; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:06:45 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=rodrigo%20y%20gabriela&fmt=json')
  .reply(200, {"artist":"Rodrigo Y Gabriela","albums":[{"album":"Foc","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Foc","songs":["Foc","Georges St","Temple Bar","Syf","Amuleto","Paris","30 De Marzo","Strøget","Sangre Y Ritmo"]},{"album":"Re-Foc","year":"2002","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Re-Foc","songs":["Diem","New One","Foc","Georges Street / The Tartar Frigate","30 De Marzo","Paris","Take 5","Temple Bar"]},{"album":"Rodrigo Y Gabriela","year":"2006","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Rodrigo%20Y%20Gabriela","songs":["Tamacun","Diablo Rojo","Vikingman","Satori","Ixtapa","Stairway To Heaven","Orion","Juan Loco","PPA"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo_Y_Gabriela%20Other%20Songs","songs":["Mr. Tang","Oogie Boogie's Song"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '1416',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:06:58 GMT',
  age: '259',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3160-WIKIA, cache-iad2135-IAD',
  'x-cache': 'HIT, HIT',
  'x-cache-hits': '2, 3',
  'x-timer': 'S1427828818.465180,VS0,VE0',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=PFOvnszuVm; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:06:58 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=rodrigo%20y%20gabriela&fmt=json')
  .reply(200, {"artist":"Rodrigo Y Gabriela","albums":[{"album":"Foc","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Foc","songs":["Foc","Georges St","Temple Bar","Syf","Amuleto","Paris","30 De Marzo","Strøget","Sangre Y Ritmo"]},{"album":"Re-Foc","year":"2002","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Re-Foc","songs":["Diem","New One","Foc","Georges Street / The Tartar Frigate","30 De Marzo","Paris","Take 5","Temple Bar"]},{"album":"Rodrigo Y Gabriela","year":"2006","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Rodrigo%20Y%20Gabriela","songs":["Tamacun","Diablo Rojo","Vikingman","Satori","Ixtapa","Stairway To Heaven","Orion","Juan Loco","PPA"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo_Y_Gabriela%20Other%20Songs","songs":["Mr. Tang","Oogie Boogie's Song"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '1416',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:06:59 GMT',
  age: '260',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3160-WIKIA, cache-iad2146-IAD',
  'x-cache': 'HIT, HIT',
  'x-cache-hits': '2, 1',
  'x-timer': 'S1427828819.290486,VS0,VE0',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=O5h1arxMtY; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:06:59 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=rodrigo%20y%20gabriela&fmt=json')
  .reply(200, {"artist":"Rodrigo Y Gabriela","albums":[{"album":"Foc","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Foc","songs":["Foc","Georges St","Temple Bar","Syf","Amuleto","Paris","30 De Marzo","Strøget","Sangre Y Ritmo"]},{"album":"Re-Foc","year":"2002","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Re-Foc","songs":["Diem","New One","Foc","Georges Street / The Tartar Frigate","30 De Marzo","Paris","Take 5","Temple Bar"]},{"album":"Rodrigo Y Gabriela","year":"2006","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Rodrigo%20Y%20Gabriela","songs":["Tamacun","Diablo Rojo","Vikingman","Satori","Ixtapa","Stairway To Heaven","Orion","Juan Loco","PPA"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo_Y_Gabriela%20Other%20Songs","songs":["Mr. Tang","Oogie Boogie's Song"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '1416',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:06:59 GMT',
  age: '261',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3160-WIKIA, cache-iad2147-IAD',
  'x-cache': 'HIT, HIT',
  'x-cache-hits': '2, 1',
  'x-timer': 'S1427828819.951354,VS0,VE0',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=iSYs8T7EjN; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:06:59 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=rodrigo%20y%20gabriela&fmt=json')
  .reply(200, {"artist":"Rodrigo Y Gabriela","albums":[{"album":"Foc","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Foc","songs":["Foc","Georges St","Temple Bar","Syf","Amuleto","Paris","30 De Marzo","Strøget","Sangre Y Ritmo"]},{"album":"Re-Foc","year":"2002","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Re-Foc","songs":["Diem","New One","Foc","Georges Street / The Tartar Frigate","30 De Marzo","Paris","Take 5","Temple Bar"]},{"album":"Rodrigo Y Gabriela","year":"2006","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Rodrigo%20Y%20Gabriela","songs":["Tamacun","Diablo Rojo","Vikingman","Satori","Ixtapa","Stairway To Heaven","Orion","Juan Loco","PPA"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo_Y_Gabriela%20Other%20Songs","songs":["Mr. Tang","Oogie Boogie's Song"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '1416',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:07:00 GMT',
  age: '261',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3160-WIKIA, cache-iad2134-IAD',
  'x-cache': 'HIT, HIT',
  'x-cache-hits': '2, 2',
  'x-timer': 'S1427828820.511488,VS0,VE0',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=SqAbO8M3Vc; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:07:00 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=rodrigo%20y%20gabriela&fmt=json')
  .reply(200, {"artist":"Rodrigo Y Gabriela","albums":[{"album":"Foc","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Foc","songs":["Foc","Georges St","Temple Bar","Syf","Amuleto","Paris","30 De Marzo","Strøget","Sangre Y Ritmo"]},{"album":"Re-Foc","year":"2002","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Re-Foc","songs":["Diem","New One","Foc","Georges Street / The Tartar Frigate","30 De Marzo","Paris","Take 5","Temple Bar"]},{"album":"Rodrigo Y Gabriela","year":"2006","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Rodrigo%20Y%20Gabriela","songs":["Tamacun","Diablo Rojo","Vikingman","Satori","Ixtapa","Stairway To Heaven","Orion","Juan Loco","PPA"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo_Y_Gabriela%20Other%20Songs","songs":["Mr. Tang","Oogie Boogie's Song"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '1416',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:07:01 GMT',
  age: '261',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3160-WIKIA, cache-iad2143-IAD',
  'x-cache': 'HIT, HIT',
  'x-cache-hits': '2, 2',
  'x-timer': 'S1427828821.059164,VS0,VE0',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=JgiJW4K5DN; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:07:01 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=rodrigo%20y%20gabriela&fmt=json')
  .reply(200, {"artist":"Rodrigo Y Gabriela","albums":[{"album":"Foc","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Foc","songs":["Foc","Georges St","Temple Bar","Syf","Amuleto","Paris","30 De Marzo","Strøget","Sangre Y Ritmo"]},{"album":"Re-Foc","year":"2002","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Re-Foc","songs":["Diem","New One","Foc","Georges Street / The Tartar Frigate","30 De Marzo","Paris","Take 5","Temple Bar"]},{"album":"Rodrigo Y Gabriela","year":"2006","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Rodrigo%20Y%20Gabriela","songs":["Tamacun","Diablo Rojo","Vikingman","Satori","Ixtapa","Stairway To Heaven","Orion","Juan Loco","PPA"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo_Y_Gabriela%20Other%20Songs","songs":["Mr. Tang","Oogie Boogie's Song"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '1416',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:07:01 GMT',
  age: '262',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3160-WIKIA, cache-iad2133-IAD',
  'x-cache': 'HIT, HIT',
  'x-cache-hits': '2, 2',
  'x-timer': 'S1427828821.586662,VS0,VE0',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=odVOwFQ2HG; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:07:01 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=rodrigo%20y%20gabriela&fmt=json')
  .reply(200, {"artist":"Rodrigo Y Gabriela","albums":[{"album":"Foc","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Foc","songs":["Foc","Georges St","Temple Bar","Syf","Amuleto","Paris","30 De Marzo","Strøget","Sangre Y Ritmo"]},{"album":"Re-Foc","year":"2002","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Re-Foc","songs":["Diem","New One","Foc","Georges Street / The Tartar Frigate","30 De Marzo","Paris","Take 5","Temple Bar"]},{"album":"Rodrigo Y Gabriela","year":"2006","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Rodrigo%20Y%20Gabriela","songs":["Tamacun","Diablo Rojo","Vikingman","Satori","Ixtapa","Stairway To Heaven","Orion","Juan Loco","PPA"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo_Y_Gabriela%20Other%20Songs","songs":["Mr. Tang","Oogie Boogie's Song"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '1416',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:07:02 GMT',
  age: '263',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3160-WIKIA, cache-iad2128-IAD',
  'x-cache': 'HIT, HIT',
  'x-cache-hits': '2, 1',
  'x-timer': 'S1427828822.132966,VS0,VE0',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=0rvZ41S5Jg; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:07:02 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=rodrigo%20y%20gabriela&fmt=json')
  .reply(200, {"artist":"Rodrigo Y Gabriela","albums":[{"album":"Foc","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Foc","songs":["Foc","Georges St","Temple Bar","Syf","Amuleto","Paris","30 De Marzo","Strøget","Sangre Y Ritmo"]},{"album":"Re-Foc","year":"2002","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Re-Foc","songs":["Diem","New One","Foc","Georges Street / The Tartar Frigate","30 De Marzo","Paris","Take 5","Temple Bar"]},{"album":"Rodrigo Y Gabriela","year":"2006","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Rodrigo%20Y%20Gabriela","songs":["Tamacun","Diablo Rojo","Vikingman","Satori","Ixtapa","Stairway To Heaven","Orion","Juan Loco","PPA"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo_Y_Gabriela%20Other%20Songs","songs":["Mr. Tang","Oogie Boogie's Song"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '1416',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:07:11 GMT',
  age: '272',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3160-WIKIA, cache-iad2142-IAD',
  'x-cache': 'HIT, HIT',
  'x-cache-hits': '2, 1',
  'x-timer': 'S1427828831.076589,VS0,VE0',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=uWYt1YzK20; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:07:11 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=rodrigo%20y%20gabriela&fmt=json')
  .reply(200, {"artist":"Rodrigo Y Gabriela","albums":[{"album":"Foc","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Foc","songs":["Foc","Georges St","Temple Bar","Syf","Amuleto","Paris","30 De Marzo","Strøget","Sangre Y Ritmo"]},{"album":"Re-Foc","year":"2002","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Re-Foc","songs":["Diem","New One","Foc","Georges Street / The Tartar Frigate","30 De Marzo","Paris","Take 5","Temple Bar"]},{"album":"Rodrigo Y Gabriela","year":"2006","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Rodrigo%20Y%20Gabriela","songs":["Tamacun","Diablo Rojo","Vikingman","Satori","Ixtapa","Stairway To Heaven","Orion","Juan Loco","PPA"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo_Y_Gabriela%20Other%20Songs","songs":["Mr. Tang","Oogie Boogie's Song"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '1416',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:07:15 GMT',
  age: '276',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3160-WIKIA, cache-iad2125-IAD',
  'x-cache': 'HIT, HIT',
  'x-cache-hits': '2, 1',
  'x-timer': 'S1427828835.593346,VS0,VE0',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=yw6Rqk6NW0; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:07:15 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=rodrigo%20y%20gabriela&fmt=json')
  .reply(200, {"artist":"Rodrigo Y Gabriela","albums":[{"album":"Foc","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Foc","songs":["Foc","Georges St","Temple Bar","Syf","Amuleto","Paris","30 De Marzo","Strøget","Sangre Y Ritmo"]},{"album":"Re-Foc","year":"2002","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Re-Foc","songs":["Diem","New One","Foc","Georges Street / The Tartar Frigate","30 De Marzo","Paris","Take 5","Temple Bar"]},{"album":"Rodrigo Y Gabriela","year":"2006","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Rodrigo%20Y%20Gabriela","songs":["Tamacun","Diablo Rojo","Vikingman","Satori","Ixtapa","Stairway To Heaven","Orion","Juan Loco","PPA"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo_Y_Gabriela%20Other%20Songs","songs":["Mr. Tang","Oogie Boogie's Song"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '1416',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:07:15 GMT',
  age: '276',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3160-WIKIA, cache-iad2124-IAD',
  'x-cache': 'HIT, HIT',
  'x-cache-hits': '2, 1',
  'x-timer': 'S1427828835.803125,VS0,VE0',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=pXiKcitgvc; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:07:15 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=rodrigo%20y%20gabriela&fmt=json')
  .reply(200, {"artist":"Rodrigo Y Gabriela","albums":[{"album":"Foc","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Foc","songs":["Foc","Georges St","Temple Bar","Syf","Amuleto","Paris","30 De Marzo","Strøget","Sangre Y Ritmo"]},{"album":"Re-Foc","year":"2002","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Re-Foc","songs":["Diem","New One","Foc","Georges Street / The Tartar Frigate","30 De Marzo","Paris","Take 5","Temple Bar"]},{"album":"Rodrigo Y Gabriela","year":"2006","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Rodrigo%20Y%20Gabriela","songs":["Tamacun","Diablo Rojo","Vikingman","Satori","Ixtapa","Stairway To Heaven","Orion","Juan Loco","PPA"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo_Y_Gabriela%20Other%20Songs","songs":["Mr. Tang","Oogie Boogie's Song"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '1416',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:07:16 GMT',
  age: '276',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3160-WIKIA, cache-iad2120-IAD',
  'x-cache': 'HIT, HIT',
  'x-cache-hits': '2, 2',
  'x-timer': 'S1427828836.002758,VS0,VE0',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=jn-5NcZYZp; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:07:16 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=rodrigo%20y%20gabriela&fmt=json')
  .reply(200, {"artist":"Rodrigo Y Gabriela","albums":[{"album":"Foc","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Foc","songs":["Foc","Georges St","Temple Bar","Syf","Amuleto","Paris","30 De Marzo","Strøget","Sangre Y Ritmo"]},{"album":"Re-Foc","year":"2002","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Re-Foc","songs":["Diem","New One","Foc","Georges Street / The Tartar Frigate","30 De Marzo","Paris","Take 5","Temple Bar"]},{"album":"Rodrigo Y Gabriela","year":"2006","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Rodrigo%20Y%20Gabriela","songs":["Tamacun","Diablo Rojo","Vikingman","Satori","Ixtapa","Stairway To Heaven","Orion","Juan Loco","PPA"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo_Y_Gabriela%20Other%20Songs","songs":["Mr. Tang","Oogie Boogie's Song"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '1416',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:07:16 GMT',
  age: '277',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3160-WIKIA, cache-iad2129-IAD',
  'x-cache': 'HIT, HIT',
  'x-cache-hits': '2, 2',
  'x-timer': 'S1427828836.198826,VS0,VE0',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=N6seVC4vWR; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:07:16 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=rodrigo%20y%20gabriela&fmt=json')
  .reply(200, {"artist":"Rodrigo Y Gabriela","albums":[{"album":"Foc","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Foc","songs":["Foc","Georges St","Temple Bar","Syf","Amuleto","Paris","30 De Marzo","Strøget","Sangre Y Ritmo"]},{"album":"Re-Foc","year":"2002","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Re-Foc","songs":["Diem","New One","Foc","Georges Street / The Tartar Frigate","30 De Marzo","Paris","Take 5","Temple Bar"]},{"album":"Rodrigo Y Gabriela","year":"2006","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Rodrigo%20Y%20Gabriela","songs":["Tamacun","Diablo Rojo","Vikingman","Satori","Ixtapa","Stairway To Heaven","Orion","Juan Loco","PPA"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo_Y_Gabriela%20Other%20Songs","songs":["Mr. Tang","Oogie Boogie's Song"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '1416',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:07:16 GMT',
  age: '277',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3160-WIKIA, cache-iad2129-IAD',
  'x-cache': 'HIT, HIT',
  'x-cache-hits': '2, 3',
  'x-timer': 'S1427828836.402560,VS0,VE0',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=l7IcrP36dI; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:07:16 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=rodrigo%20y%20gabriela&fmt=json')
  .reply(200, {"artist":"Rodrigo Y Gabriela","albums":[{"album":"Foc","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Foc","songs":["Foc","Georges St","Temple Bar","Syf","Amuleto","Paris","30 De Marzo","Strøget","Sangre Y Ritmo"]},{"album":"Re-Foc","year":"2002","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Re-Foc","songs":["Diem","New One","Foc","Georges Street / The Tartar Frigate","30 De Marzo","Paris","Take 5","Temple Bar"]},{"album":"Rodrigo Y Gabriela","year":"2006","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Rodrigo%20Y%20Gabriela","songs":["Tamacun","Diablo Rojo","Vikingman","Satori","Ixtapa","Stairway To Heaven","Orion","Juan Loco","PPA"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo_Y_Gabriela%20Other%20Songs","songs":["Mr. Tang","Oogie Boogie's Song"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '1416',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:07:16 GMT',
  age: '277',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3160-WIKIA, cache-iad2146-IAD',
  'x-cache': 'HIT, HIT',
  'x-cache-hits': '2, 2',
  'x-timer': 'S1427828836.652873,VS0,VE0',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=8xEk8jvPgE; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:07:16 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=rodrigo%20y%20gabriela&fmt=json')
  .reply(200, {"artist":"Rodrigo Y Gabriela","albums":[{"album":"Foc","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Foc","songs":["Foc","Georges St","Temple Bar","Syf","Amuleto","Paris","30 De Marzo","Strøget","Sangre Y Ritmo"]},{"album":"Re-Foc","year":"2002","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Re-Foc","songs":["Diem","New One","Foc","Georges Street / The Tartar Frigate","30 De Marzo","Paris","Take 5","Temple Bar"]},{"album":"Rodrigo Y Gabriela","year":"2006","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Rodrigo%20Y%20Gabriela","songs":["Tamacun","Diablo Rojo","Vikingman","Satori","Ixtapa","Stairway To Heaven","Orion","Juan Loco","PPA"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo_Y_Gabriela%20Other%20Songs","songs":["Mr. Tang","Oogie Boogie's Song"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '1416',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:07:20 GMT',
  age: '281',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3160-WIKIA, cache-iad2143-IAD',
  'x-cache': 'HIT, HIT',
  'x-cache-hits': '2, 3',
  'x-timer': 'S1427828840.624645,VS0,VE0',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=xDys8QTpHi; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:07:20 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=rodrigo%20y%20gabriela&fmt=json')
  .reply(200, {"artist":"Rodrigo Y Gabriela","albums":[{"album":"Foc","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Foc","songs":["Foc","Georges St","Temple Bar","Syf","Amuleto","Paris","30 De Marzo","Strøget","Sangre Y Ritmo"]},{"album":"Re-Foc","year":"2002","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Re-Foc","songs":["Diem","New One","Foc","Georges Street / The Tartar Frigate","30 De Marzo","Paris","Take 5","Temple Bar"]},{"album":"Rodrigo Y Gabriela","year":"2006","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Rodrigo%20Y%20Gabriela","songs":["Tamacun","Diablo Rojo","Vikingman","Satori","Ixtapa","Stairway To Heaven","Orion","Juan Loco","PPA"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo_Y_Gabriela%20Other%20Songs","songs":["Mr. Tang","Oogie Boogie's Song"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '1416',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:07:21 GMT',
  age: '282',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3160-WIKIA, cache-iad2131-IAD',
  'x-cache': 'HIT, HIT',
  'x-cache-hits': '2, 1',
  'x-timer': 'S1427828841.252119,VS0,VE0',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=DvHnElzh3d; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:07:21 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=rodrigo%20y%20gabriela&fmt=json')
  .reply(200, {"artist":"Rodrigo Y Gabriela","albums":[{"album":"Foc","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Foc","songs":["Foc","Georges St","Temple Bar","Syf","Amuleto","Paris","30 De Marzo","Strøget","Sangre Y Ritmo"]},{"album":"Re-Foc","year":"2002","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Re-Foc","songs":["Diem","New One","Foc","Georges Street / The Tartar Frigate","30 De Marzo","Paris","Take 5","Temple Bar"]},{"album":"Rodrigo Y Gabriela","year":"2006","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Rodrigo%20Y%20Gabriela","songs":["Tamacun","Diablo Rojo","Vikingman","Satori","Ixtapa","Stairway To Heaven","Orion","Juan Loco","PPA"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo_Y_Gabriela%20Other%20Songs","songs":["Mr. Tang","Oogie Boogie's Song"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '1416',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:07:21 GMT',
  age: '283',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3160-WIKIA, cache-iad2129-IAD',
  'x-cache': 'HIT, HIT',
  'x-cache-hits': '2, 4',
  'x-timer': 'S1427828841.877601,VS0,VE0',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=28iKej2Waq; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:07:21 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=rodrigo%20y%20gabriela&fmt=json')
  .reply(200, {"artist":"Rodrigo Y Gabriela","albums":[{"album":"Foc","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Foc","songs":["Foc","Georges St","Temple Bar","Syf","Amuleto","Paris","30 De Marzo","Strøget","Sangre Y Ritmo"]},{"album":"Re-Foc","year":"2002","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Re-Foc","songs":["Diem","New One","Foc","Georges Street / The Tartar Frigate","30 De Marzo","Paris","Take 5","Temple Bar"]},{"album":"Rodrigo Y Gabriela","year":"2006","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Rodrigo%20Y%20Gabriela","songs":["Tamacun","Diablo Rojo","Vikingman","Satori","Ixtapa","Stairway To Heaven","Orion","Juan Loco","PPA"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo_Y_Gabriela%20Other%20Songs","songs":["Mr. Tang","Oogie Boogie's Song"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '1416',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:07:22 GMT',
  age: '283',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3160-WIKIA, cache-iad2132-IAD',
  'x-cache': 'HIT, HIT',
  'x-cache-hits': '2, 1',
  'x-timer': 'S1427828842.440273,VS0,VE0',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=wDXfRQdXhN; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:07:22 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=rodrigo%20y%20gabriela&fmt=json')
  .reply(200, {"artist":"Rodrigo Y Gabriela","albums":[{"album":"Foc","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Foc","songs":["Foc","Georges St","Temple Bar","Syf","Amuleto","Paris","30 De Marzo","Strøget","Sangre Y Ritmo"]},{"album":"Re-Foc","year":"2002","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Re-Foc","songs":["Diem","New One","Foc","Georges Street / The Tartar Frigate","30 De Marzo","Paris","Take 5","Temple Bar"]},{"album":"Rodrigo Y Gabriela","year":"2006","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Rodrigo%20Y%20Gabriela","songs":["Tamacun","Diablo Rojo","Vikingman","Satori","Ixtapa","Stairway To Heaven","Orion","Juan Loco","PPA"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo_Y_Gabriela%20Other%20Songs","songs":["Mr. Tang","Oogie Boogie's Song"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '1416',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:07:22 GMT',
  age: '283',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3160-WIKIA, cache-iad2134-IAD',
  'x-cache': 'HIT, HIT',
  'x-cache-hits': '2, 3',
  'x-timer': 'S1427828842.968975,VS0,VE0',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=NnfwKT7fsN; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:07:22 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=rodrigo%20y%20gabriela&fmt=json')
  .reply(200, {"artist":"Rodrigo Y Gabriela","albums":[{"album":"Foc","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Foc","songs":["Foc","Georges St","Temple Bar","Syf","Amuleto","Paris","30 De Marzo","Strøget","Sangre Y Ritmo"]},{"album":"Re-Foc","year":"2002","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Re-Foc","songs":["Diem","New One","Foc","Georges Street / The Tartar Frigate","30 De Marzo","Paris","Take 5","Temple Bar"]},{"album":"Rodrigo Y Gabriela","year":"2006","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Rodrigo%20Y%20Gabriela","songs":["Tamacun","Diablo Rojo","Vikingman","Satori","Ixtapa","Stairway To Heaven","Orion","Juan Loco","PPA"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo_Y_Gabriela%20Other%20Songs","songs":["Mr. Tang","Oogie Boogie's Song"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '1416',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:07:23 GMT',
  age: '284',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3160-WIKIA, cache-iad2123-IAD',
  'x-cache': 'HIT, HIT',
  'x-cache-hits': '2, 1',
  'x-timer': 'S1427828843.520221,VS0,VE0',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=KT1J0COdX-; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:07:23 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=rodrigo%20y%20gabriela&fmt=json')
  .reply(200, {"artist":"Rodrigo Y Gabriela","albums":[{"album":"Foc","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Foc","songs":["Foc","Georges St","Temple Bar","Syf","Amuleto","Paris","30 De Marzo","Strøget","Sangre Y Ritmo"]},{"album":"Re-Foc","year":"2002","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Re-Foc","songs":["Diem","New One","Foc","Georges Street / The Tartar Frigate","30 De Marzo","Paris","Take 5","Temple Bar"]},{"album":"Rodrigo Y Gabriela","year":"2006","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Rodrigo%20Y%20Gabriela","songs":["Tamacun","Diablo Rojo","Vikingman","Satori","Ixtapa","Stairway To Heaven","Orion","Juan Loco","PPA"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo_Y_Gabriela%20Other%20Songs","songs":["Mr. Tang","Oogie Boogie's Song"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '1416',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:07:24 GMT',
  age: '285',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3160-WIKIA, cache-iad2137-IAD',
  'x-cache': 'HIT, HIT',
  'x-cache-hits': '2, 2',
  'x-timer': 'S1427828844.294970,VS0,VE0',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=wYMnV-DZ87; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:07:24 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=rodrigo%20y%20gabriela&fmt=json')
  .reply(200, {"artist":"Rodrigo Y Gabriela","albums":[{"album":"Foc","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Foc","songs":["Foc","Georges St","Temple Bar","Syf","Amuleto","Paris","30 De Marzo","Strøget","Sangre Y Ritmo"]},{"album":"Re-Foc","year":"2002","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Re-Foc","songs":["Diem","New One","Foc","Georges Street / The Tartar Frigate","30 De Marzo","Paris","Take 5","Temple Bar"]},{"album":"Rodrigo Y Gabriela","year":"2006","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Rodrigo%20Y%20Gabriela","songs":["Tamacun","Diablo Rojo","Vikingman","Satori","Ixtapa","Stairway To Heaven","Orion","Juan Loco","PPA"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo_Y_Gabriela%20Other%20Songs","songs":["Mr. Tang","Oogie Boogie's Song"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '1416',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:07:24 GMT',
  age: '285',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3160-WIKIA, cache-iad2120-IAD',
  'x-cache': 'HIT, HIT',
  'x-cache-hits': '2, 3',
  'x-timer': 'S1427828844.937588,VS0,VE0',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=FMiIdBmZJt; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:07:24 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=rodrigo%20y%20gabriela&fmt=json')
  .reply(200, {"artist":"Rodrigo Y Gabriela","albums":[{"album":"Foc","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Foc","songs":["Foc","Georges St","Temple Bar","Syf","Amuleto","Paris","30 De Marzo","Strøget","Sangre Y Ritmo"]},{"album":"Re-Foc","year":"2002","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Re-Foc","songs":["Diem","New One","Foc","Georges Street / The Tartar Frigate","30 De Marzo","Paris","Take 5","Temple Bar"]},{"album":"Rodrigo Y Gabriela","year":"2006","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Rodrigo%20Y%20Gabriela","songs":["Tamacun","Diablo Rojo","Vikingman","Satori","Ixtapa","Stairway To Heaven","Orion","Juan Loco","PPA"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo_Y_Gabriela%20Other%20Songs","songs":["Mr. Tang","Oogie Boogie's Song"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '1416',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:07:28 GMT',
  age: '289',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3160-WIKIA, cache-iad2141-IAD',
  'x-cache': 'HIT, HIT',
  'x-cache-hits': '2, 1',
  'x-timer': 'S1427828848.793736,VS0,VE0',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=lZqTP-TtIM; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:07:28 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=rodrigo%20y%20gabriela&fmt=json')
  .reply(200, {"artist":"Rodrigo Y Gabriela","albums":[{"album":"Foc","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Foc","songs":["Foc","Georges St","Temple Bar","Syf","Amuleto","Paris","30 De Marzo","Strøget","Sangre Y Ritmo"]},{"album":"Re-Foc","year":"2002","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Re-Foc","songs":["Diem","New One","Foc","Georges Street / The Tartar Frigate","30 De Marzo","Paris","Take 5","Temple Bar"]},{"album":"Rodrigo Y Gabriela","year":"2006","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Rodrigo%20Y%20Gabriela","songs":["Tamacun","Diablo Rojo","Vikingman","Satori","Ixtapa","Stairway To Heaven","Orion","Juan Loco","PPA"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo_Y_Gabriela%20Other%20Songs","songs":["Mr. Tang","Oogie Boogie's Song"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '1416',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:07:29 GMT',
  age: '291',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3160-WIKIA, cache-iad2147-IAD',
  'x-cache': 'HIT, HIT',
  'x-cache-hits': '2, 2',
  'x-timer': 'S1427828849.489626,VS0,VE0',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=TW8i81N4mU; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:07:29 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=rodrigo%20y%20gabriela&fmt=json')
  .reply(200, {"artist":"Rodrigo Y Gabriela","albums":[{"album":"Foc","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Foc","songs":["Foc","Georges St","Temple Bar","Syf","Amuleto","Paris","30 De Marzo","Strøget","Sangre Y Ritmo"]},{"album":"Re-Foc","year":"2002","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Re-Foc","songs":["Diem","New One","Foc","Georges Street / The Tartar Frigate","30 De Marzo","Paris","Take 5","Temple Bar"]},{"album":"Rodrigo Y Gabriela","year":"2006","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Rodrigo%20Y%20Gabriela","songs":["Tamacun","Diablo Rojo","Vikingman","Satori","Ixtapa","Stairway To Heaven","Orion","Juan Loco","PPA"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo_Y_Gabriela%20Other%20Songs","songs":["Mr. Tang","Oogie Boogie's Song"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '1416',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:07:30 GMT',
  age: '291',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3160-WIKIA, cache-iad2142-IAD',
  'x-cache': 'HIT, HIT',
  'x-cache-hits': '2, 2',
  'x-timer': 'S1427828850.167514,VS0,VE0',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=lfJGNE-BGr; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:07:30 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=rodrigo%20y%20gabriela&fmt=json')
  .reply(200, {"artist":"Rodrigo Y Gabriela","albums":[{"album":"Foc","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Foc","songs":["Foc","Georges St","Temple Bar","Syf","Amuleto","Paris","30 De Marzo","Strøget","Sangre Y Ritmo"]},{"album":"Re-Foc","year":"2002","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Re-Foc","songs":["Diem","New One","Foc","Georges Street / The Tartar Frigate","30 De Marzo","Paris","Take 5","Temple Bar"]},{"album":"Rodrigo Y Gabriela","year":"2006","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Rodrigo%20Y%20Gabriela","songs":["Tamacun","Diablo Rojo","Vikingman","Satori","Ixtapa","Stairway To Heaven","Orion","Juan Loco","PPA"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo_Y_Gabriela%20Other%20Songs","songs":["Mr. Tang","Oogie Boogie's Song"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '1416',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:07:30 GMT',
  age: '291',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3160-WIKIA, cache-iad2137-IAD',
  'x-cache': 'HIT, HIT',
  'x-cache-hits': '2, 3',
  'x-timer': 'S1427828850.819605,VS0,VE0',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=hdjs6M8Ebu; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:07:30 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=rodrigo%20y%20gabriela&fmt=json')
  .reply(200, {"artist":"Rodrigo Y Gabriela","albums":[{"album":"Foc","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Foc","songs":["Foc","Georges St","Temple Bar","Syf","Amuleto","Paris","30 De Marzo","Strøget","Sangre Y Ritmo"]},{"album":"Re-Foc","year":"2002","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Re-Foc","songs":["Diem","New One","Foc","Georges Street / The Tartar Frigate","30 De Marzo","Paris","Take 5","Temple Bar"]},{"album":"Rodrigo Y Gabriela","year":"2006","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Rodrigo%20Y%20Gabriela","songs":["Tamacun","Diablo Rojo","Vikingman","Satori","Ixtapa","Stairway To Heaven","Orion","Juan Loco","PPA"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo_Y_Gabriela%20Other%20Songs","songs":["Mr. Tang","Oogie Boogie's Song"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '1416',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:07:31 GMT',
  age: '292',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3160-WIKIA, cache-iad2141-IAD',
  'x-cache': 'HIT, HIT',
  'x-cache-hits': '2, 2',
  'x-timer': 'S1427828851.357027,VS0,VE0',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=p0sQ8Yl_Gx; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:07:31 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=rodrigo%20y%20gabriela&fmt=json')
  .reply(200, {"artist":"Rodrigo Y Gabriela","albums":[{"album":"Foc","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Foc","songs":["Foc","Georges St","Temple Bar","Syf","Amuleto","Paris","30 De Marzo","Strøget","Sangre Y Ritmo"]},{"album":"Re-Foc","year":"2002","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Re-Foc","songs":["Diem","New One","Foc","Georges Street / The Tartar Frigate","30 De Marzo","Paris","Take 5","Temple Bar"]},{"album":"Rodrigo Y Gabriela","year":"2006","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Rodrigo%20Y%20Gabriela","songs":["Tamacun","Diablo Rojo","Vikingman","Satori","Ixtapa","Stairway To Heaven","Orion","Juan Loco","PPA"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo_Y_Gabriela%20Other%20Songs","songs":["Mr. Tang","Oogie Boogie's Song"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '1416',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:07:31 GMT',
  age: '292',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3160-WIKIA, cache-iad2141-IAD',
  'x-cache': 'HIT, HIT',
  'x-cache-hits': '2, 3',
  'x-timer': 'S1427828851.853918,VS0,VE0',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=435vSxcpfr; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:07:31 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=rodrigo%20y%20gabriela&fmt=json')
  .reply(200, {"artist":"Rodrigo Y Gabriela","albums":[{"album":"Foc","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Foc","songs":["Foc","Georges St","Temple Bar","Syf","Amuleto","Paris","30 De Marzo","Strøget","Sangre Y Ritmo"]},{"album":"Re-Foc","year":"2002","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Re-Foc","songs":["Diem","New One","Foc","Georges Street / The Tartar Frigate","30 De Marzo","Paris","Take 5","Temple Bar"]},{"album":"Rodrigo Y Gabriela","year":"2006","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Rodrigo%20Y%20Gabriela","songs":["Tamacun","Diablo Rojo","Vikingman","Satori","Ixtapa","Stairway To Heaven","Orion","Juan Loco","PPA"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo_Y_Gabriela%20Other%20Songs","songs":["Mr. Tang","Oogie Boogie's Song"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '1416',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:07:32 GMT',
  age: '293',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3160-WIKIA, cache-iad2122-IAD',
  'x-cache': 'HIT, HIT',
  'x-cache-hits': '2, 2',
  'x-timer': 'S1427828852.226380,VS0,VE0',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=y31ezgTkq8; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:07:32 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=rodrigo%20y%20gabriela&fmt=json')
  .reply(200, {"artist":"Rodrigo Y Gabriela","albums":[{"album":"Foc","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Foc","songs":["Foc","Georges St","Temple Bar","Syf","Amuleto","Paris","30 De Marzo","Strøget","Sangre Y Ritmo"]},{"album":"Re-Foc","year":"2002","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Re-Foc","songs":["Diem","New One","Foc","Georges Street / The Tartar Frigate","30 De Marzo","Paris","Take 5","Temple Bar"]},{"album":"Rodrigo Y Gabriela","year":"2006","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Rodrigo%20Y%20Gabriela","songs":["Tamacun","Diablo Rojo","Vikingman","Satori","Ixtapa","Stairway To Heaven","Orion","Juan Loco","PPA"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo_Y_Gabriela%20Other%20Songs","songs":["Mr. Tang","Oogie Boogie's Song"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '1416',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:07:32 GMT',
  age: '293',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3160-WIKIA, cache-iad2133-IAD',
  'x-cache': 'HIT, HIT',
  'x-cache-hits': '2, 3',
  'x-timer': 'S1427828852.465465,VS0,VE0',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=ZS9Sh-hpdd; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:07:32 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=rodrigo%20y%20gabriela&fmt=json')
  .reply(200, {"artist":"Rodrigo Y Gabriela","albums":[{"album":"Foc","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Foc","songs":["Foc","Georges St","Temple Bar","Syf","Amuleto","Paris","30 De Marzo","Strøget","Sangre Y Ritmo"]},{"album":"Re-Foc","year":"2002","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Re-Foc","songs":["Diem","New One","Foc","Georges Street / The Tartar Frigate","30 De Marzo","Paris","Take 5","Temple Bar"]},{"album":"Rodrigo Y Gabriela","year":"2006","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Rodrigo%20Y%20Gabriela","songs":["Tamacun","Diablo Rojo","Vikingman","Satori","Ixtapa","Stairway To Heaven","Orion","Juan Loco","PPA"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo_Y_Gabriela%20Other%20Songs","songs":["Mr. Tang","Oogie Boogie's Song"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '1416',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:07:32 GMT',
  age: '293',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3160-WIKIA, cache-iad2145-IAD',
  'x-cache': 'HIT, HIT',
  'x-cache-hits': '2, 1',
  'x-timer': 'S1427828852.666566,VS0,VE0',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=2SMai42osE; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:07:32 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=rodrigo%20y%20gabriela&fmt=json')
  .reply(200, {"artist":"Rodrigo Y Gabriela","albums":[{"album":"Foc","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Foc","songs":["Foc","Georges St","Temple Bar","Syf","Amuleto","Paris","30 De Marzo","Strøget","Sangre Y Ritmo"]},{"album":"Re-Foc","year":"2002","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Re-Foc","songs":["Diem","New One","Foc","Georges Street / The Tartar Frigate","30 De Marzo","Paris","Take 5","Temple Bar"]},{"album":"Rodrigo Y Gabriela","year":"2006","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Rodrigo%20Y%20Gabriela","songs":["Tamacun","Diablo Rojo","Vikingman","Satori","Ixtapa","Stairway To Heaven","Orion","Juan Loco","PPA"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo_Y_Gabriela%20Other%20Songs","songs":["Mr. Tang","Oogie Boogie's Song"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '1416',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:07:32 GMT',
  age: '294',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3160-WIKIA, cache-iad2129-IAD',
  'x-cache': 'HIT, HIT',
  'x-cache-hits': '2, 5',
  'x-timer': 'S1427828852.878255,VS0,VE0',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=ItNbIUKMtT; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:07:32 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=rodrigo%20y%20gabriela&fmt=json')
  .reply(200, {"artist":"Rodrigo Y Gabriela","albums":[{"album":"Foc","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Foc","songs":["Foc","Georges St","Temple Bar","Syf","Amuleto","Paris","30 De Marzo","Strøget","Sangre Y Ritmo"]},{"album":"Re-Foc","year":"2002","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Re-Foc","songs":["Diem","New One","Foc","Georges Street / The Tartar Frigate","30 De Marzo","Paris","Take 5","Temple Bar"]},{"album":"Rodrigo Y Gabriela","year":"2006","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Rodrigo%20Y%20Gabriela","songs":["Tamacun","Diablo Rojo","Vikingman","Satori","Ixtapa","Stairway To Heaven","Orion","Juan Loco","PPA"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo_Y_Gabriela%20Other%20Songs","songs":["Mr. Tang","Oogie Boogie's Song"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '1416',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:07:33 GMT',
  age: '293',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3160-WIKIA, cache-iad2125-IAD',
  'x-cache': 'HIT, HIT',
  'x-cache-hits': '2, 2',
  'x-timer': 'S1427828853.083887,VS0,VE0',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=itRoleYYDi; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:07:33 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=rodrigo%20y%20gabriela&fmt=json')
  .reply(200, {"artist":"Rodrigo Y Gabriela","albums":[{"album":"Foc","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Foc","songs":["Foc","Georges St","Temple Bar","Syf","Amuleto","Paris","30 De Marzo","Strøget","Sangre Y Ritmo"]},{"album":"Re-Foc","year":"2002","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Re-Foc","songs":["Diem","New One","Foc","Georges Street / The Tartar Frigate","30 De Marzo","Paris","Take 5","Temple Bar"]},{"album":"Rodrigo Y Gabriela","year":"2006","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Rodrigo%20Y%20Gabriela","songs":["Tamacun","Diablo Rojo","Vikingman","Satori","Ixtapa","Stairway To Heaven","Orion","Juan Loco","PPA"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo_Y_Gabriela%20Other%20Songs","songs":["Mr. Tang","Oogie Boogie's Song"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '1416',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:07:33 GMT',
  age: '294',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3160-WIKIA, cache-iad2129-IAD',
  'x-cache': 'HIT, HIT',
  'x-cache-hits': '2, 6',
  'x-timer': 'S1427828853.288400,VS0,VE0',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=gOAjTDNUNO; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:07:33 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=rodrigo%20y%20gabriela&fmt=json')
  .reply(200, {"artist":"Rodrigo Y Gabriela","albums":[{"album":"Foc","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Foc","songs":["Foc","Georges St","Temple Bar","Syf","Amuleto","Paris","30 De Marzo","Strøget","Sangre Y Ritmo"]},{"album":"Re-Foc","year":"2002","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Re-Foc","songs":["Diem","New One","Foc","Georges Street / The Tartar Frigate","30 De Marzo","Paris","Take 5","Temple Bar"]},{"album":"Rodrigo Y Gabriela","year":"2006","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Rodrigo%20Y%20Gabriela","songs":["Tamacun","Diablo Rojo","Vikingman","Satori","Ixtapa","Stairway To Heaven","Orion","Juan Loco","PPA"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo_Y_Gabriela%20Other%20Songs","songs":["Mr. Tang","Oogie Boogie's Song"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '1416',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:07:33 GMT',
  age: '294',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3160-WIKIA, cache-iad2138-IAD',
  'x-cache': 'HIT, HIT',
  'x-cache-hits': '2, 1',
  'x-timer': 'S1427828853.500595,VS0,VE0',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=2OpbdDqUzq; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:07:33 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=rodrigo%20y%20gabriela&fmt=json')
  .reply(200, {"artist":"Rodrigo Y Gabriela","albums":[{"album":"Foc","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Foc","songs":["Foc","Georges St","Temple Bar","Syf","Amuleto","Paris","30 De Marzo","Strøget","Sangre Y Ritmo"]},{"album":"Re-Foc","year":"2002","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Re-Foc","songs":["Diem","New One","Foc","Georges Street / The Tartar Frigate","30 De Marzo","Paris","Take 5","Temple Bar"]},{"album":"Rodrigo Y Gabriela","year":"2006","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Rodrigo%20Y%20Gabriela","songs":["Tamacun","Diablo Rojo","Vikingman","Satori","Ixtapa","Stairway To Heaven","Orion","Juan Loco","PPA"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo_Y_Gabriela%20Other%20Songs","songs":["Mr. Tang","Oogie Boogie's Song"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '1416',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:07:34 GMT',
  age: '295',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3160-WIKIA, cache-iad2137-IAD',
  'x-cache': 'HIT, HIT',
  'x-cache-hits': '2, 4',
  'x-timer': 'S1427828854.181133,VS0,VE0',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=Tql5kEpyLp; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:07:34 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=rodrigo%20y%20gabriela&fmt=json')
  .reply(200, {"artist":"Rodrigo Y Gabriela","albums":[{"album":"Foc","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Foc","songs":["Foc","Georges St","Temple Bar","Syf","Amuleto","Paris","30 De Marzo","Strøget","Sangre Y Ritmo"]},{"album":"Re-Foc","year":"2002","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Re-Foc","songs":["Diem","New One","Foc","Georges Street / The Tartar Frigate","30 De Marzo","Paris","Take 5","Temple Bar"]},{"album":"Rodrigo Y Gabriela","year":"2006","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Rodrigo%20Y%20Gabriela","songs":["Tamacun","Diablo Rojo","Vikingman","Satori","Ixtapa","Stairway To Heaven","Orion","Juan Loco","PPA"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo_Y_Gabriela%20Other%20Songs","songs":["Mr. Tang","Oogie Boogie's Song"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '1416',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:07:34 GMT',
  age: '296',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3160-WIKIA, cache-iad2142-IAD',
  'x-cache': 'HIT, HIT',
  'x-cache-hits': '2, 3',
  'x-timer': 'S1427828854.655240,VS0,VE0',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=BKgjZEA-tb; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:07:34 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=rodrigo%20y%20gabriela&fmt=json')
  .reply(200, {"artist":"Rodrigo Y Gabriela","albums":[{"album":"Foc","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Foc","songs":["Foc","Georges St","Temple Bar","Syf","Amuleto","Paris","30 De Marzo","Strøget","Sangre Y Ritmo"]},{"album":"Re-Foc","year":"2002","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Re-Foc","songs":["Diem","New One","Foc","Georges Street / The Tartar Frigate","30 De Marzo","Paris","Take 5","Temple Bar"]},{"album":"Rodrigo Y Gabriela","year":"2006","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Rodrigo%20Y%20Gabriela","songs":["Tamacun","Diablo Rojo","Vikingman","Satori","Ixtapa","Stairway To Heaven","Orion","Juan Loco","PPA"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo_Y_Gabriela%20Other%20Songs","songs":["Mr. Tang","Oogie Boogie's Song"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '1416',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:07:59 GMT',
  age: '320',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3160-WIKIA, cache-jfk1029-JFK',
  'x-cache': 'HIT, HIT',
  'x-cache-hits': '1, 3',
  'x-timer': 'S1427828879.673081,VS0,VE0',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=3VSAn8sIC5; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:07:59 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=rodrigo%20y%20gabriela&fmt=json')
  .reply(200, {"artist":"Rodrigo Y Gabriela","albums":[{"album":"Foc","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Foc","songs":["Foc","Georges St","Temple Bar","Syf","Amuleto","Paris","30 De Marzo","Strøget","Sangre Y Ritmo"]},{"album":"Re-Foc","year":"2002","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Re-Foc","songs":["Diem","New One","Foc","Georges Street / The Tartar Frigate","30 De Marzo","Paris","Take 5","Temple Bar"]},{"album":"Rodrigo Y Gabriela","year":"2006","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Rodrigo%20Y%20Gabriela","songs":["Tamacun","Diablo Rojo","Vikingman","Satori","Ixtapa","Stairway To Heaven","Orion","Juan Loco","PPA"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo_Y_Gabriela%20Other%20Songs","songs":["Mr. Tang","Oogie Boogie's Song"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '1416',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:08:00 GMT',
  age: '321',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3160-WIKIA, cache-jfk1022-JFK',
  'x-cache': 'HIT, HIT',
  'x-cache-hits': '1, 3',
  'x-timer': 'S1427828880.543387,VS0,VE0',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=W-84obcMub; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:08:00 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=rodrigo%20y%20gabriela&fmt=json')
  .reply(200, {"artist":"Rodrigo Y Gabriela","albums":[{"album":"Foc","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Foc","songs":["Foc","Georges St","Temple Bar","Syf","Amuleto","Paris","30 De Marzo","Strøget","Sangre Y Ritmo"]},{"album":"Re-Foc","year":"2002","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Re-Foc","songs":["Diem","New One","Foc","Georges Street / The Tartar Frigate","30 De Marzo","Paris","Take 5","Temple Bar"]},{"album":"Rodrigo Y Gabriela","year":"2006","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Rodrigo%20Y%20Gabriela","songs":["Tamacun","Diablo Rojo","Vikingman","Satori","Ixtapa","Stairway To Heaven","Orion","Juan Loco","PPA"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo_Y_Gabriela%20Other%20Songs","songs":["Mr. Tang","Oogie Boogie's Song"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '1416',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:08:01 GMT',
  age: '323',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3160-WIKIA, cache-jfk1021-JFK',
  'x-cache': 'HIT, HIT',
  'x-cache-hits': '1, 3',
  'x-timer': 'S1427828881.662495,VS0,VE0',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=pkqDEINWWB; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:08:01 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=rodrigo%20y%20gabriela&fmt=json')
  .reply(200, {"artist":"Rodrigo Y Gabriela","albums":[{"album":"Foc","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Foc","songs":["Foc","Georges St","Temple Bar","Syf","Amuleto","Paris","30 De Marzo","Strøget","Sangre Y Ritmo"]},{"album":"Re-Foc","year":"2002","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Re-Foc","songs":["Diem","New One","Foc","Georges Street / The Tartar Frigate","30 De Marzo","Paris","Take 5","Temple Bar"]},{"album":"Rodrigo Y Gabriela","year":"2006","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Rodrigo%20Y%20Gabriela","songs":["Tamacun","Diablo Rojo","Vikingman","Satori","Ixtapa","Stairway To Heaven","Orion","Juan Loco","PPA"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo_Y_Gabriela%20Other%20Songs","songs":["Mr. Tang","Oogie Boogie's Song"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '1416',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:10:00 GMT',
  age: '441',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3160-WIKIA, cache-iad2142-IAD',
  'x-cache': 'HIT, HIT',
  'x-cache-hits': '2, 4',
  'x-timer': 'S1427829000.524793,VS0,VE0',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=ywsoDvdYy5; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:10:00 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=rodrigo%20y%20gabriela&fmt=json')
  .reply(200, {"artist":"Rodrigo Y Gabriela","albums":[{"album":"Foc","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Foc","songs":["Foc","Georges St","Temple Bar","Syf","Amuleto","Paris","30 De Marzo","Strøget","Sangre Y Ritmo"]},{"album":"Re-Foc","year":"2002","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Re-Foc","songs":["Diem","New One","Foc","Georges Street / The Tartar Frigate","30 De Marzo","Paris","Take 5","Temple Bar"]},{"album":"Rodrigo Y Gabriela","year":"2006","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Rodrigo%20Y%20Gabriela","songs":["Tamacun","Diablo Rojo","Vikingman","Satori","Ixtapa","Stairway To Heaven","Orion","Juan Loco","PPA"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo_Y_Gabriela%20Other%20Songs","songs":["Mr. Tang","Oogie Boogie's Song"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '1416',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:10:01 GMT',
  age: '442',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3160-WIKIA, cache-iad2120-IAD',
  'x-cache': 'HIT, HIT',
  'x-cache-hits': '2, 4',
  'x-timer': 'S1427829001.436583,VS0,VE0',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=TNqdUlGPSq; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:10:01 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=rodrigo%20y%20gabriela&fmt=json')
  .reply(200, {"artist":"Rodrigo Y Gabriela","albums":[{"album":"Foc","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Foc","songs":["Foc","Georges St","Temple Bar","Syf","Amuleto","Paris","30 De Marzo","Strøget","Sangre Y Ritmo"]},{"album":"Re-Foc","year":"2002","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Re-Foc","songs":["Diem","New One","Foc","Georges Street / The Tartar Frigate","30 De Marzo","Paris","Take 5","Temple Bar"]},{"album":"Rodrigo Y Gabriela","year":"2006","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Rodrigo%20Y%20Gabriela","songs":["Tamacun","Diablo Rojo","Vikingman","Satori","Ixtapa","Stairway To Heaven","Orion","Juan Loco","PPA"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo_Y_Gabriela%20Other%20Songs","songs":["Mr. Tang","Oogie Boogie's Song"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '1416',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:10:07 GMT',
  age: '448',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3160-WIKIA, cache-iad2124-IAD',
  'x-cache': 'HIT, HIT',
  'x-cache-hits': '2, 2',
  'x-timer': 'S1427829007.761003,VS0,VE0',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=3C8Z37JfFa; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:10:07 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=rodrigo%20y%20gabriela&fmt=json')
  .reply(200, {"artist":"Rodrigo Y Gabriela","albums":[{"album":"Foc","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Foc","songs":["Foc","Georges St","Temple Bar","Syf","Amuleto","Paris","30 De Marzo","Strøget","Sangre Y Ritmo"]},{"album":"Re-Foc","year":"2002","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Re-Foc","songs":["Diem","New One","Foc","Georges Street / The Tartar Frigate","30 De Marzo","Paris","Take 5","Temple Bar"]},{"album":"Rodrigo Y Gabriela","year":"2006","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Rodrigo%20Y%20Gabriela","songs":["Tamacun","Diablo Rojo","Vikingman","Satori","Ixtapa","Stairway To Heaven","Orion","Juan Loco","PPA"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo_Y_Gabriela%20Other%20Songs","songs":["Mr. Tang","Oogie Boogie's Song"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '1416',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:10:08 GMT',
  age: '449',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3160-WIKIA, cache-iad2144-IAD',
  'x-cache': 'HIT, HIT',
  'x-cache-hits': '2, 1',
  'x-timer': 'S1427829008.514403,VS0,VE0',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=hLBs76GYNJ; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:10:08 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=rodrigo%20y%20gabriela&fmt=json')
  .reply(200, {"artist":"Rodrigo Y Gabriela","albums":[{"album":"Foc","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Foc","songs":["Foc","Georges St","Temple Bar","Syf","Amuleto","Paris","30 De Marzo","Strøget","Sangre Y Ritmo"]},{"album":"Re-Foc","year":"2002","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Re-Foc","songs":["Diem","New One","Foc","Georges Street / The Tartar Frigate","30 De Marzo","Paris","Take 5","Temple Bar"]},{"album":"Rodrigo Y Gabriela","year":"2006","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Rodrigo%20Y%20Gabriela","songs":["Tamacun","Diablo Rojo","Vikingman","Satori","Ixtapa","Stairway To Heaven","Orion","Juan Loco","PPA"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo_Y_Gabriela%20Other%20Songs","songs":["Mr. Tang","Oogie Boogie's Song"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '1416',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:10:09 GMT',
  age: '449',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3160-WIKIA, cache-iad2141-IAD',
  'x-cache': 'HIT, HIT',
  'x-cache-hits': '2, 4',
  'x-timer': 'S1427829009.259097,VS0,VE0',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=99WY9j-BNh; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:10:09 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=rodrigo%20y%20gabriela&fmt=json')
  .reply(200, {"artist":"Rodrigo Y Gabriela","albums":[{"album":"Foc","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Foc","songs":["Foc","Georges St","Temple Bar","Syf","Amuleto","Paris","30 De Marzo","Strøget","Sangre Y Ritmo"]},{"album":"Re-Foc","year":"2002","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Re-Foc","songs":["Diem","New One","Foc","Georges Street / The Tartar Frigate","30 De Marzo","Paris","Take 5","Temple Bar"]},{"album":"Rodrigo Y Gabriela","year":"2006","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Rodrigo%20Y%20Gabriela","songs":["Tamacun","Diablo Rojo","Vikingman","Satori","Ixtapa","Stairway To Heaven","Orion","Juan Loco","PPA"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo_Y_Gabriela%20Other%20Songs","songs":["Mr. Tang","Oogie Boogie's Song"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '1416',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:10:09 GMT',
  age: '451',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3160-WIKIA, cache-iad2136-IAD',
  'x-cache': 'HIT, HIT',
  'x-cache-hits': '2, 2',
  'x-timer': 'S1427829009.828605,VS0,VE0',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=yAVC0LMyjE; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:10:09 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=rodrigo%20y%20gabriela&fmt=json')
  .reply(200, {"artist":"Rodrigo Y Gabriela","albums":[{"album":"Foc","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Foc","songs":["Foc","Georges St","Temple Bar","Syf","Amuleto","Paris","30 De Marzo","Strøget","Sangre Y Ritmo"]},{"album":"Re-Foc","year":"2002","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Re-Foc","songs":["Diem","New One","Foc","Georges Street / The Tartar Frigate","30 De Marzo","Paris","Take 5","Temple Bar"]},{"album":"Rodrigo Y Gabriela","year":"2006","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Rodrigo%20Y%20Gabriela","songs":["Tamacun","Diablo Rojo","Vikingman","Satori","Ixtapa","Stairway To Heaven","Orion","Juan Loco","PPA"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo_Y_Gabriela%20Other%20Songs","songs":["Mr. Tang","Oogie Boogie's Song"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '1416',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:10:10 GMT',
  age: '451',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3160-WIKIA, cache-iad2147-IAD',
  'x-cache': 'HIT, HIT',
  'x-cache-hits': '2, 3',
  'x-timer': 'S1427829010.302033,VS0,VE0',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=_bEqtHtsTv; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:10:10 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=rodrigo%20y%20gabriela&fmt=json')
  .reply(200, {"artist":"Rodrigo Y Gabriela","albums":[{"album":"Foc","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Foc","songs":["Foc","Georges St","Temple Bar","Syf","Amuleto","Paris","30 De Marzo","Strøget","Sangre Y Ritmo"]},{"album":"Re-Foc","year":"2002","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Re-Foc","songs":["Diem","New One","Foc","Georges Street / The Tartar Frigate","30 De Marzo","Paris","Take 5","Temple Bar"]},{"album":"Rodrigo Y Gabriela","year":"2006","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Rodrigo%20Y%20Gabriela","songs":["Tamacun","Diablo Rojo","Vikingman","Satori","Ixtapa","Stairway To Heaven","Orion","Juan Loco","PPA"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo_Y_Gabriela%20Other%20Songs","songs":["Mr. Tang","Oogie Boogie's Song"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '1416',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:10:10 GMT',
  age: '451',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3160-WIKIA, cache-iad2133-IAD',
  'x-cache': 'HIT, HIT',
  'x-cache-hits': '2, 4',
  'x-timer': 'S1427829010.663586,VS0,VE0',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=6JhYc1ME-4; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:10:10 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=rodrigo%20y%20gabriela&fmt=json')
  .reply(200, {"artist":"Rodrigo Y Gabriela","albums":[{"album":"Foc","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Foc","songs":["Foc","Georges St","Temple Bar","Syf","Amuleto","Paris","30 De Marzo","Strøget","Sangre Y Ritmo"]},{"album":"Re-Foc","year":"2002","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Re-Foc","songs":["Diem","New One","Foc","Georges Street / The Tartar Frigate","30 De Marzo","Paris","Take 5","Temple Bar"]},{"album":"Rodrigo Y Gabriela","year":"2006","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Rodrigo%20Y%20Gabriela","songs":["Tamacun","Diablo Rojo","Vikingman","Satori","Ixtapa","Stairway To Heaven","Orion","Juan Loco","PPA"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo_Y_Gabriela%20Other%20Songs","songs":["Mr. Tang","Oogie Boogie's Song"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '1416',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:10:10 GMT',
  age: '451',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3160-WIKIA, cache-iad2132-IAD',
  'x-cache': 'HIT, HIT',
  'x-cache-hits': '2, 2',
  'x-timer': 'S1427829010.839363,VS0,VE0',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=gaUItZzvug; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:10:10 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=rodrigo%20y%20gabriela&fmt=json')
  .reply(200, {"artist":"Rodrigo Y Gabriela","albums":[{"album":"Foc","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Foc","songs":["Foc","Georges St","Temple Bar","Syf","Amuleto","Paris","30 De Marzo","Strøget","Sangre Y Ritmo"]},{"album":"Re-Foc","year":"2002","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Re-Foc","songs":["Diem","New One","Foc","Georges Street / The Tartar Frigate","30 De Marzo","Paris","Take 5","Temple Bar"]},{"album":"Rodrigo Y Gabriela","year":"2006","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Rodrigo%20Y%20Gabriela","songs":["Tamacun","Diablo Rojo","Vikingman","Satori","Ixtapa","Stairway To Heaven","Orion","Juan Loco","PPA"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo_Y_Gabriela%20Other%20Songs","songs":["Mr. Tang","Oogie Boogie's Song"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '1416',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:10:11 GMT',
  age: '451',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3160-WIKIA, cache-iad2120-IAD',
  'x-cache': 'HIT, HIT',
  'x-cache-hits': '2, 5',
  'x-timer': 'S1427829011.016653,VS0,VE0',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=poSyhYIlpJ; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:10:11 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=rodrigo%20y%20gabriela&fmt=json')
  .reply(200, {"artist":"Rodrigo Y Gabriela","albums":[{"album":"Foc","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Foc","songs":["Foc","Georges St","Temple Bar","Syf","Amuleto","Paris","30 De Marzo","Strøget","Sangre Y Ritmo"]},{"album":"Re-Foc","year":"2002","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Re-Foc","songs":["Diem","New One","Foc","Georges Street / The Tartar Frigate","30 De Marzo","Paris","Take 5","Temple Bar"]},{"album":"Rodrigo Y Gabriela","year":"2006","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Rodrigo%20Y%20Gabriela","songs":["Tamacun","Diablo Rojo","Vikingman","Satori","Ixtapa","Stairway To Heaven","Orion","Juan Loco","PPA"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo_Y_Gabriela%20Other%20Songs","songs":["Mr. Tang","Oogie Boogie's Song"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '1416',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:10:11 GMT',
  age: '452',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3160-WIKIA, cache-iad2129-IAD',
  'x-cache': 'HIT, HIT',
  'x-cache-hits': '2, 7',
  'x-timer': 'S1427829011.199800,VS0,VE0',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=LjQSjRNtzy; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:10:11 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=rodrigo%20y%20gabriela&fmt=json')
  .reply(200, {"artist":"Rodrigo Y Gabriela","albums":[{"album":"Foc","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Foc","songs":["Foc","Georges St","Temple Bar","Syf","Amuleto","Paris","30 De Marzo","Strøget","Sangre Y Ritmo"]},{"album":"Re-Foc","year":"2002","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Re-Foc","songs":["Diem","New One","Foc","Georges Street / The Tartar Frigate","30 De Marzo","Paris","Take 5","Temple Bar"]},{"album":"Rodrigo Y Gabriela","year":"2006","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Rodrigo%20Y%20Gabriela","songs":["Tamacun","Diablo Rojo","Vikingman","Satori","Ixtapa","Stairway To Heaven","Orion","Juan Loco","PPA"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo_Y_Gabriela%20Other%20Songs","songs":["Mr. Tang","Oogie Boogie's Song"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '1416',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:10:11 GMT',
  age: '452',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3160-WIKIA, cache-iad2144-IAD',
  'x-cache': 'HIT, HIT',
  'x-cache-hits': '2, 2',
  'x-timer': 'S1427829011.364965,VS0,VE0',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=MqrK8_Zvrp; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:10:11 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=rodrigo%20y%20gabriela&fmt=json')
  .reply(200, {"artist":"Rodrigo Y Gabriela","albums":[{"album":"Foc","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Foc","songs":["Foc","Georges St","Temple Bar","Syf","Amuleto","Paris","30 De Marzo","Strøget","Sangre Y Ritmo"]},{"album":"Re-Foc","year":"2002","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Re-Foc","songs":["Diem","New One","Foc","Georges Street / The Tartar Frigate","30 De Marzo","Paris","Take 5","Temple Bar"]},{"album":"Rodrigo Y Gabriela","year":"2006","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo%20Y%20Gabriela%20Rodrigo%20Y%20Gabriela","songs":["Tamacun","Diablo Rojo","Vikingman","Satori","Ixtapa","Stairway To Heaven","Orion","Juan Loco","PPA"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Rodrigo_Y_Gabriela%20Other%20Songs","songs":["Mr. Tang","Oogie Boogie's Song"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '1416',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:10:11 GMT',
  age: '452',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3160-WIKIA, cache-iad2121-IAD',
  'x-cache': 'HIT, HIT',
  'x-cache-hits': '2, 2',
  'x-timer': 'S1427829011.544738,VS0,VE0',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=nkUWiH8AZJ; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:10:11 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=radiohead&fmt=json')
  .reply(200, {"artist":"Radiohead","albums":[{"album":"Pablo Honey","year":"1993","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Pablo%20Honey","songs":["You","Creep","How Do You?","Stop Whispering","Thinking About You","Anyone Can Play Guitar","Ripcord","Vegetable","Prove Yourself","I Can't","Lurgee","Blow Out","Creep (Clean)"]},{"album":"Itch","year":"1994","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Itch","songs":["Stop Whispering","Thinking About You","Faithless, The Wonder Boy","Banana Co.","Killer Cars","Vegetable","You","Creep"]},{"album":"My Iron Lung","year":"1994","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20My%20Iron%20Lung","songs":["My Iron Lung","The Trickster","Lewis (Mistreated)","Punchdrunk Lovesick Singalong","Permanent Daylight","Lozenge Of Love","You Never Wash Up After Yourself","Creep"]},{"album":"The Bends","year":"1995","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20The%20Bends","songs":["Planet Telex","The Bends","High And Dry","Fake Plastic Trees","Bones","(Nice Dream)","Just","My Iron Lung","Bullet Proof..I Wish I Was","Black Star","Sulk","Street Spirit (Fade Out)"]},{"album":"OK Computer","year":"1997","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20OK%20Computer","songs":["Airbag","Paranoid Android","Subterranean Homesick Alien","Exit Music (For A Film)","Let Down","Karma Police","Fitter Happier","Electioneering","Climbing Up The Walls","No Surprises","Lucky","The Tourist"]},{"album":"No Surprises/Running From Demons","year":"1997","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20No%20Surprises/Running%20From%20Demons","songs":["No Surprises","Pearly*","Melatonin","Meeting In The Aisle","Bishop's Robes","A Reminder"]},{"album":"Airbag/How Am I Driving?","year":"1998","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Airbag/How%20Am%20I%20Driving?","songs":["Airbag","Pearly*","Meeting In The Aisle","A Reminder","Polyethylene (Parts 1 & 2)","Melatonin","Palo Alto"]},{"album":"Kid A","year":"2000","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Kid%20A","songs":["Everything In Its Right Place","Kid A","The National Anthem","How To Disappear Completely","Treefingers","Optimistic","In Limbo","Idioteque","Morning Bell","Motion Picture Soundtrack"]},{"album":"Amnesiac","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Amnesiac","songs":["Packt Like Sardines In A Crushd Tin Box","Pyramid Song","Pulk/Pull Revolving Doors","You And Whose Army?","I Might Be Wrong","Knives Out","Morning Bell/Amnesiac","Dollars & Cents","Hunting Bears","Like Spinning Plates","Life In A Glasshouse"]},{"album":"Hail To The Thief","year":"2003","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Hail%20To%20The%20Thief","songs":["2 + 2 = 5 (The Lukewarm.)","Sit Down. Stand Up. (Snakes & Ladders.)","Sail To The Moon. (Brush The Cobwebs Out Of The Sky.)","Backdrifts. (Honeymoon Is Over.)","Go To Sleep. (Little Man Being Erased.)","Where I End And You Begin. (The Sky Is Falling In.)","We Suck Young Blood. (Your Time Is Up.)","The Gloaming. (Softly Open Our Mouths In The Cold.)","There There. (The Boney King Of Nowhere.)","I Will. (No Man's Land.)","A Punchup At A Wedding. (No No No No No No No No.)","Myxomatosis. (Judge, Jury & Executioner.)","Scatterbrain. (As Dead As Leaves.)","A Wolf At The Door. (It Girl. Rag Doll.)"]},{"album":"In Rainbows","year":"2007","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20In%20Rainbows","songs":["15 Step","Bodysnatchers","Nude","Weird Fishes/Arpeggi","All I Need","Faust Arp","Reckoner","House Of Cards","Jigsaw Falling Into Place","Videotape","MK 1","Down Is The New Up","Go Slowly","MK 2","Last Flowers","Up On The Ladder","Bangers + Mash","4 Minute Warning"]},{"album":"The King Of Limbs","year":"2011","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20The%20King%20Of%20Limbs","songs":["Bloom","Morning Mr Magpie","Little By Little","Feral","Lotus Flower","Codex","Give Up The Ghost","Separator"]},{"album":"B-Sides","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20B-Sides","songs":["Inside My Head","Million Dollar Question","Yes I Am","Coke Babies","Maquiladora","India Rubber","How Can You Be Sure?","Talk Show Host","Bishop's Robes","Molasses","Lull","How I Made My Millions","The Amazing Sounds Of Orgy","Trans-Atlantic Drawl","Kinetic","Fast-Track","Cuttooth","Worrywort","Fog","Paperbag Writer","Where Bluebirds Fly","Fog (Again)","Gagging Order","I Am A Wicked Child","I Am Citizen Insane"]},{"album":"Unreleased","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Unreleased","songs":["Big Boots","The Chains","Climbing Up A Bloody Great Hill","Cut A Hole","The Daily Mail","Feeling Pulled Apart By Horses (AKA Reckoner Old Version)","Follow Me Around","Give It Up","Happy Song","Identikit","I Froze Up","Innocents Civilian","I Promise","I Want None Of This","Lift","Nobody Does It Better","No Surprises Please","Nothing Touches Me","Phillipa Chicken","The Present Tense","Rattlesnake","The Rip","Sinking Ship","Spooks","Staircase","Stupid Car","Tell Me Why","To Be A Brilliant Light","True Love Waits","Union City Blue","Unravel"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Other%20Songs","songs":["Cinnamon Girl (Neil Young Cover)","Good Evening Mrs. Magpie","Harry Patch (In Memory Of)","Man-O-War","Pop Is Dead","Remyxomatosis","Supercollider","The Butcher","These Are My Twisted Words","What Is It That You Say"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '7476',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:11:46 GMT',
  age: '10644',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3161-WIKIA, cache-atl6222-ATL',
  'x-cache': 'HIT, HIT',
  'x-cache-hits': '1, 1',
  'x-timer': 'S1427829106.530777,VS0,VE1',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=aCPBncyaNI; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:11:46 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=radiohead&fmt=json')
  .reply(200, {"artist":"Radiohead","albums":[{"album":"Pablo Honey","year":"1993","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Pablo%20Honey","songs":["You","Creep","How Do You?","Stop Whispering","Thinking About You","Anyone Can Play Guitar","Ripcord","Vegetable","Prove Yourself","I Can't","Lurgee","Blow Out","Creep (Clean)"]},{"album":"Itch","year":"1994","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Itch","songs":["Stop Whispering","Thinking About You","Faithless, The Wonder Boy","Banana Co.","Killer Cars","Vegetable","You","Creep"]},{"album":"My Iron Lung","year":"1994","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20My%20Iron%20Lung","songs":["My Iron Lung","The Trickster","Lewis (Mistreated)","Punchdrunk Lovesick Singalong","Permanent Daylight","Lozenge Of Love","You Never Wash Up After Yourself","Creep"]},{"album":"The Bends","year":"1995","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20The%20Bends","songs":["Planet Telex","The Bends","High And Dry","Fake Plastic Trees","Bones","(Nice Dream)","Just","My Iron Lung","Bullet Proof..I Wish I Was","Black Star","Sulk","Street Spirit (Fade Out)"]},{"album":"OK Computer","year":"1997","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20OK%20Computer","songs":["Airbag","Paranoid Android","Subterranean Homesick Alien","Exit Music (For A Film)","Let Down","Karma Police","Fitter Happier","Electioneering","Climbing Up The Walls","No Surprises","Lucky","The Tourist"]},{"album":"No Surprises/Running From Demons","year":"1997","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20No%20Surprises/Running%20From%20Demons","songs":["No Surprises","Pearly*","Melatonin","Meeting In The Aisle","Bishop's Robes","A Reminder"]},{"album":"Airbag/How Am I Driving?","year":"1998","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Airbag/How%20Am%20I%20Driving?","songs":["Airbag","Pearly*","Meeting In The Aisle","A Reminder","Polyethylene (Parts 1 & 2)","Melatonin","Palo Alto"]},{"album":"Kid A","year":"2000","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Kid%20A","songs":["Everything In Its Right Place","Kid A","The National Anthem","How To Disappear Completely","Treefingers","Optimistic","In Limbo","Idioteque","Morning Bell","Motion Picture Soundtrack"]},{"album":"Amnesiac","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Amnesiac","songs":["Packt Like Sardines In A Crushd Tin Box","Pyramid Song","Pulk/Pull Revolving Doors","You And Whose Army?","I Might Be Wrong","Knives Out","Morning Bell/Amnesiac","Dollars & Cents","Hunting Bears","Like Spinning Plates","Life In A Glasshouse"]},{"album":"Hail To The Thief","year":"2003","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Hail%20To%20The%20Thief","songs":["2 + 2 = 5 (The Lukewarm.)","Sit Down. Stand Up. (Snakes & Ladders.)","Sail To The Moon. (Brush The Cobwebs Out Of The Sky.)","Backdrifts. (Honeymoon Is Over.)","Go To Sleep. (Little Man Being Erased.)","Where I End And You Begin. (The Sky Is Falling In.)","We Suck Young Blood. (Your Time Is Up.)","The Gloaming. (Softly Open Our Mouths In The Cold.)","There There. (The Boney King Of Nowhere.)","I Will. (No Man's Land.)","A Punchup At A Wedding. (No No No No No No No No.)","Myxomatosis. (Judge, Jury & Executioner.)","Scatterbrain. (As Dead As Leaves.)","A Wolf At The Door. (It Girl. Rag Doll.)"]},{"album":"In Rainbows","year":"2007","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20In%20Rainbows","songs":["15 Step","Bodysnatchers","Nude","Weird Fishes/Arpeggi","All I Need","Faust Arp","Reckoner","House Of Cards","Jigsaw Falling Into Place","Videotape","MK 1","Down Is The New Up","Go Slowly","MK 2","Last Flowers","Up On The Ladder","Bangers + Mash","4 Minute Warning"]},{"album":"The King Of Limbs","year":"2011","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20The%20King%20Of%20Limbs","songs":["Bloom","Morning Mr Magpie","Little By Little","Feral","Lotus Flower","Codex","Give Up The Ghost","Separator"]},{"album":"B-Sides","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20B-Sides","songs":["Inside My Head","Million Dollar Question","Yes I Am","Coke Babies","Maquiladora","India Rubber","How Can You Be Sure?","Talk Show Host","Bishop's Robes","Molasses","Lull","How I Made My Millions","The Amazing Sounds Of Orgy","Trans-Atlantic Drawl","Kinetic","Fast-Track","Cuttooth","Worrywort","Fog","Paperbag Writer","Where Bluebirds Fly","Fog (Again)","Gagging Order","I Am A Wicked Child","I Am Citizen Insane"]},{"album":"Unreleased","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Unreleased","songs":["Big Boots","The Chains","Climbing Up A Bloody Great Hill","Cut A Hole","The Daily Mail","Feeling Pulled Apart By Horses (AKA Reckoner Old Version)","Follow Me Around","Give It Up","Happy Song","Identikit","I Froze Up","Innocents Civilian","I Promise","I Want None Of This","Lift","Nobody Does It Better","No Surprises Please","Nothing Touches Me","Phillipa Chicken","The Present Tense","Rattlesnake","The Rip","Sinking Ship","Spooks","Staircase","Stupid Car","Tell Me Why","To Be A Brilliant Light","True Love Waits","Union City Blue","Unravel"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Other%20Songs","songs":["Cinnamon Girl (Neil Young Cover)","Good Evening Mrs. Magpie","Harry Patch (In Memory Of)","Man-O-War","Pop Is Dead","Remyxomatosis","Supercollider","The Butcher","These Are My Twisted Words","What Is It That You Say"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '7476',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:11:48 GMT',
  age: '10647',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3161-WIKIA, cache-atl6224-ATL',
  'x-cache': 'HIT, HIT',
  'x-cache-hits': '1, 1',
  'x-timer': 'S1427829108.600866,VS0,VE3',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=8xaB-m6M2z; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:11:48 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=radiohead&fmt=json')
  .reply(200, {"artist":"Radiohead","albums":[{"album":"Pablo Honey","year":"1993","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Pablo%20Honey","songs":["You","Creep","How Do You?","Stop Whispering","Thinking About You","Anyone Can Play Guitar","Ripcord","Vegetable","Prove Yourself","I Can't","Lurgee","Blow Out","Creep (Clean)"]},{"album":"Itch","year":"1994","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Itch","songs":["Stop Whispering","Thinking About You","Faithless, The Wonder Boy","Banana Co.","Killer Cars","Vegetable","You","Creep"]},{"album":"My Iron Lung","year":"1994","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20My%20Iron%20Lung","songs":["My Iron Lung","The Trickster","Lewis (Mistreated)","Punchdrunk Lovesick Singalong","Permanent Daylight","Lozenge Of Love","You Never Wash Up After Yourself","Creep"]},{"album":"The Bends","year":"1995","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20The%20Bends","songs":["Planet Telex","The Bends","High And Dry","Fake Plastic Trees","Bones","(Nice Dream)","Just","My Iron Lung","Bullet Proof..I Wish I Was","Black Star","Sulk","Street Spirit (Fade Out)"]},{"album":"OK Computer","year":"1997","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20OK%20Computer","songs":["Airbag","Paranoid Android","Subterranean Homesick Alien","Exit Music (For A Film)","Let Down","Karma Police","Fitter Happier","Electioneering","Climbing Up The Walls","No Surprises","Lucky","The Tourist"]},{"album":"No Surprises/Running From Demons","year":"1997","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20No%20Surprises/Running%20From%20Demons","songs":["No Surprises","Pearly*","Melatonin","Meeting In The Aisle","Bishop's Robes","A Reminder"]},{"album":"Airbag/How Am I Driving?","year":"1998","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Airbag/How%20Am%20I%20Driving?","songs":["Airbag","Pearly*","Meeting In The Aisle","A Reminder","Polyethylene (Parts 1 & 2)","Melatonin","Palo Alto"]},{"album":"Kid A","year":"2000","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Kid%20A","songs":["Everything In Its Right Place","Kid A","The National Anthem","How To Disappear Completely","Treefingers","Optimistic","In Limbo","Idioteque","Morning Bell","Motion Picture Soundtrack"]},{"album":"Amnesiac","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Amnesiac","songs":["Packt Like Sardines In A Crushd Tin Box","Pyramid Song","Pulk/Pull Revolving Doors","You And Whose Army?","I Might Be Wrong","Knives Out","Morning Bell/Amnesiac","Dollars & Cents","Hunting Bears","Like Spinning Plates","Life In A Glasshouse"]},{"album":"Hail To The Thief","year":"2003","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Hail%20To%20The%20Thief","songs":["2 + 2 = 5 (The Lukewarm.)","Sit Down. Stand Up. (Snakes & Ladders.)","Sail To The Moon. (Brush The Cobwebs Out Of The Sky.)","Backdrifts. (Honeymoon Is Over.)","Go To Sleep. (Little Man Being Erased.)","Where I End And You Begin. (The Sky Is Falling In.)","We Suck Young Blood. (Your Time Is Up.)","The Gloaming. (Softly Open Our Mouths In The Cold.)","There There. (The Boney King Of Nowhere.)","I Will. (No Man's Land.)","A Punchup At A Wedding. (No No No No No No No No.)","Myxomatosis. (Judge, Jury & Executioner.)","Scatterbrain. (As Dead As Leaves.)","A Wolf At The Door. (It Girl. Rag Doll.)"]},{"album":"In Rainbows","year":"2007","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20In%20Rainbows","songs":["15 Step","Bodysnatchers","Nude","Weird Fishes/Arpeggi","All I Need","Faust Arp","Reckoner","House Of Cards","Jigsaw Falling Into Place","Videotape","MK 1","Down Is The New Up","Go Slowly","MK 2","Last Flowers","Up On The Ladder","Bangers + Mash","4 Minute Warning"]},{"album":"The King Of Limbs","year":"2011","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20The%20King%20Of%20Limbs","songs":["Bloom","Morning Mr Magpie","Little By Little","Feral","Lotus Flower","Codex","Give Up The Ghost","Separator"]},{"album":"B-Sides","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20B-Sides","songs":["Inside My Head","Million Dollar Question","Yes I Am","Coke Babies","Maquiladora","India Rubber","How Can You Be Sure?","Talk Show Host","Bishop's Robes","Molasses","Lull","How I Made My Millions","The Amazing Sounds Of Orgy","Trans-Atlantic Drawl","Kinetic","Fast-Track","Cuttooth","Worrywort","Fog","Paperbag Writer","Where Bluebirds Fly","Fog (Again)","Gagging Order","I Am A Wicked Child","I Am Citizen Insane"]},{"album":"Unreleased","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Unreleased","songs":["Big Boots","The Chains","Climbing Up A Bloody Great Hill","Cut A Hole","The Daily Mail","Feeling Pulled Apart By Horses (AKA Reckoner Old Version)","Follow Me Around","Give It Up","Happy Song","Identikit","I Froze Up","Innocents Civilian","I Promise","I Want None Of This","Lift","Nobody Does It Better","No Surprises Please","Nothing Touches Me","Phillipa Chicken","The Present Tense","Rattlesnake","The Rip","Sinking Ship","Spooks","Staircase","Stupid Car","Tell Me Why","To Be A Brilliant Light","True Love Waits","Union City Blue","Unravel"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Other%20Songs","songs":["Cinnamon Girl (Neil Young Cover)","Good Evening Mrs. Magpie","Harry Patch (In Memory Of)","Man-O-War","Pop Is Dead","Remyxomatosis","Supercollider","The Butcher","These Are My Twisted Words","What Is It That You Say"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '7476',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:12:53 GMT',
  age: '10712',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3161-WIKIA, cache-atl6231-ATL',
  'x-cache': 'HIT, HIT',
  'x-cache-hits': '1, 1',
  'x-timer': 'S1427829173.902424,VS0,VE1',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=YF1FAEtWVG; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:12:53 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=radiohead&fmt=json')
  .reply(200, {"artist":"Radiohead","albums":[{"album":"Pablo Honey","year":"1993","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Pablo%20Honey","songs":["You","Creep","How Do You?","Stop Whispering","Thinking About You","Anyone Can Play Guitar","Ripcord","Vegetable","Prove Yourself","I Can't","Lurgee","Blow Out","Creep (Clean)"]},{"album":"Itch","year":"1994","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Itch","songs":["Stop Whispering","Thinking About You","Faithless, The Wonder Boy","Banana Co.","Killer Cars","Vegetable","You","Creep"]},{"album":"My Iron Lung","year":"1994","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20My%20Iron%20Lung","songs":["My Iron Lung","The Trickster","Lewis (Mistreated)","Punchdrunk Lovesick Singalong","Permanent Daylight","Lozenge Of Love","You Never Wash Up After Yourself","Creep"]},{"album":"The Bends","year":"1995","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20The%20Bends","songs":["Planet Telex","The Bends","High And Dry","Fake Plastic Trees","Bones","(Nice Dream)","Just","My Iron Lung","Bullet Proof..I Wish I Was","Black Star","Sulk","Street Spirit (Fade Out)"]},{"album":"OK Computer","year":"1997","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20OK%20Computer","songs":["Airbag","Paranoid Android","Subterranean Homesick Alien","Exit Music (For A Film)","Let Down","Karma Police","Fitter Happier","Electioneering","Climbing Up The Walls","No Surprises","Lucky","The Tourist"]},{"album":"No Surprises/Running From Demons","year":"1997","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20No%20Surprises/Running%20From%20Demons","songs":["No Surprises","Pearly*","Melatonin","Meeting In The Aisle","Bishop's Robes","A Reminder"]},{"album":"Airbag/How Am I Driving?","year":"1998","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Airbag/How%20Am%20I%20Driving?","songs":["Airbag","Pearly*","Meeting In The Aisle","A Reminder","Polyethylene (Parts 1 & 2)","Melatonin","Palo Alto"]},{"album":"Kid A","year":"2000","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Kid%20A","songs":["Everything In Its Right Place","Kid A","The National Anthem","How To Disappear Completely","Treefingers","Optimistic","In Limbo","Idioteque","Morning Bell","Motion Picture Soundtrack"]},{"album":"Amnesiac","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Amnesiac","songs":["Packt Like Sardines In A Crushd Tin Box","Pyramid Song","Pulk/Pull Revolving Doors","You And Whose Army?","I Might Be Wrong","Knives Out","Morning Bell/Amnesiac","Dollars & Cents","Hunting Bears","Like Spinning Plates","Life In A Glasshouse"]},{"album":"Hail To The Thief","year":"2003","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Hail%20To%20The%20Thief","songs":["2 + 2 = 5 (The Lukewarm.)","Sit Down. Stand Up. (Snakes & Ladders.)","Sail To The Moon. (Brush The Cobwebs Out Of The Sky.)","Backdrifts. (Honeymoon Is Over.)","Go To Sleep. (Little Man Being Erased.)","Where I End And You Begin. (The Sky Is Falling In.)","We Suck Young Blood. (Your Time Is Up.)","The Gloaming. (Softly Open Our Mouths In The Cold.)","There There. (The Boney King Of Nowhere.)","I Will. (No Man's Land.)","A Punchup At A Wedding. (No No No No No No No No.)","Myxomatosis. (Judge, Jury & Executioner.)","Scatterbrain. (As Dead As Leaves.)","A Wolf At The Door. (It Girl. Rag Doll.)"]},{"album":"In Rainbows","year":"2007","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20In%20Rainbows","songs":["15 Step","Bodysnatchers","Nude","Weird Fishes/Arpeggi","All I Need","Faust Arp","Reckoner","House Of Cards","Jigsaw Falling Into Place","Videotape","MK 1","Down Is The New Up","Go Slowly","MK 2","Last Flowers","Up On The Ladder","Bangers + Mash","4 Minute Warning"]},{"album":"The King Of Limbs","year":"2011","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20The%20King%20Of%20Limbs","songs":["Bloom","Morning Mr Magpie","Little By Little","Feral","Lotus Flower","Codex","Give Up The Ghost","Separator"]},{"album":"B-Sides","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20B-Sides","songs":["Inside My Head","Million Dollar Question","Yes I Am","Coke Babies","Maquiladora","India Rubber","How Can You Be Sure?","Talk Show Host","Bishop's Robes","Molasses","Lull","How I Made My Millions","The Amazing Sounds Of Orgy","Trans-Atlantic Drawl","Kinetic","Fast-Track","Cuttooth","Worrywort","Fog","Paperbag Writer","Where Bluebirds Fly","Fog (Again)","Gagging Order","I Am A Wicked Child","I Am Citizen Insane"]},{"album":"Unreleased","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Unreleased","songs":["Big Boots","The Chains","Climbing Up A Bloody Great Hill","Cut A Hole","The Daily Mail","Feeling Pulled Apart By Horses (AKA Reckoner Old Version)","Follow Me Around","Give It Up","Happy Song","Identikit","I Froze Up","Innocents Civilian","I Promise","I Want None Of This","Lift","Nobody Does It Better","No Surprises Please","Nothing Touches Me","Phillipa Chicken","The Present Tense","Rattlesnake","The Rip","Sinking Ship","Spooks","Staircase","Stupid Car","Tell Me Why","To Be A Brilliant Light","True Love Waits","Union City Blue","Unravel"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Other%20Songs","songs":["Cinnamon Girl (Neil Young Cover)","Good Evening Mrs. Magpie","Harry Patch (In Memory Of)","Man-O-War","Pop Is Dead","Remyxomatosis","Supercollider","The Butcher","These Are My Twisted Words","What Is It That You Say"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '7476',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:12:54 GMT',
  age: '10713',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3161-WIKIA, cache-atl6228-ATL',
  'x-cache': 'HIT, HIT',
  'x-cache-hits': '1, 1',
  'x-timer': 'S1427829174.691381,VS0,VE1',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=5XvC1KEdeZ; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:12:54 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=radiohead&fmt=json')
  .reply(200, {"artist":"Radiohead","albums":[{"album":"Pablo Honey","year":"1993","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Pablo%20Honey","songs":["You","Creep","How Do You?","Stop Whispering","Thinking About You","Anyone Can Play Guitar","Ripcord","Vegetable","Prove Yourself","I Can't","Lurgee","Blow Out","Creep (Clean)"]},{"album":"Itch","year":"1994","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Itch","songs":["Stop Whispering","Thinking About You","Faithless, The Wonder Boy","Banana Co.","Killer Cars","Vegetable","You","Creep"]},{"album":"My Iron Lung","year":"1994","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20My%20Iron%20Lung","songs":["My Iron Lung","The Trickster","Lewis (Mistreated)","Punchdrunk Lovesick Singalong","Permanent Daylight","Lozenge Of Love","You Never Wash Up After Yourself","Creep"]},{"album":"The Bends","year":"1995","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20The%20Bends","songs":["Planet Telex","The Bends","High And Dry","Fake Plastic Trees","Bones","(Nice Dream)","Just","My Iron Lung","Bullet Proof..I Wish I Was","Black Star","Sulk","Street Spirit (Fade Out)"]},{"album":"OK Computer","year":"1997","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20OK%20Computer","songs":["Airbag","Paranoid Android","Subterranean Homesick Alien","Exit Music (For A Film)","Let Down","Karma Police","Fitter Happier","Electioneering","Climbing Up The Walls","No Surprises","Lucky","The Tourist"]},{"album":"No Surprises/Running From Demons","year":"1997","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20No%20Surprises/Running%20From%20Demons","songs":["No Surprises","Pearly*","Melatonin","Meeting In The Aisle","Bishop's Robes","A Reminder"]},{"album":"Airbag/How Am I Driving?","year":"1998","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Airbag/How%20Am%20I%20Driving?","songs":["Airbag","Pearly*","Meeting In The Aisle","A Reminder","Polyethylene (Parts 1 & 2)","Melatonin","Palo Alto"]},{"album":"Kid A","year":"2000","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Kid%20A","songs":["Everything In Its Right Place","Kid A","The National Anthem","How To Disappear Completely","Treefingers","Optimistic","In Limbo","Idioteque","Morning Bell","Motion Picture Soundtrack"]},{"album":"Amnesiac","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Amnesiac","songs":["Packt Like Sardines In A Crushd Tin Box","Pyramid Song","Pulk/Pull Revolving Doors","You And Whose Army?","I Might Be Wrong","Knives Out","Morning Bell/Amnesiac","Dollars & Cents","Hunting Bears","Like Spinning Plates","Life In A Glasshouse"]},{"album":"Hail To The Thief","year":"2003","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Hail%20To%20The%20Thief","songs":["2 + 2 = 5 (The Lukewarm.)","Sit Down. Stand Up. (Snakes & Ladders.)","Sail To The Moon. (Brush The Cobwebs Out Of The Sky.)","Backdrifts. (Honeymoon Is Over.)","Go To Sleep. (Little Man Being Erased.)","Where I End And You Begin. (The Sky Is Falling In.)","We Suck Young Blood. (Your Time Is Up.)","The Gloaming. (Softly Open Our Mouths In The Cold.)","There There. (The Boney King Of Nowhere.)","I Will. (No Man's Land.)","A Punchup At A Wedding. (No No No No No No No No.)","Myxomatosis. (Judge, Jury & Executioner.)","Scatterbrain. (As Dead As Leaves.)","A Wolf At The Door. (It Girl. Rag Doll.)"]},{"album":"In Rainbows","year":"2007","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20In%20Rainbows","songs":["15 Step","Bodysnatchers","Nude","Weird Fishes/Arpeggi","All I Need","Faust Arp","Reckoner","House Of Cards","Jigsaw Falling Into Place","Videotape","MK 1","Down Is The New Up","Go Slowly","MK 2","Last Flowers","Up On The Ladder","Bangers + Mash","4 Minute Warning"]},{"album":"The King Of Limbs","year":"2011","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20The%20King%20Of%20Limbs","songs":["Bloom","Morning Mr Magpie","Little By Little","Feral","Lotus Flower","Codex","Give Up The Ghost","Separator"]},{"album":"B-Sides","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20B-Sides","songs":["Inside My Head","Million Dollar Question","Yes I Am","Coke Babies","Maquiladora","India Rubber","How Can You Be Sure?","Talk Show Host","Bishop's Robes","Molasses","Lull","How I Made My Millions","The Amazing Sounds Of Orgy","Trans-Atlantic Drawl","Kinetic","Fast-Track","Cuttooth","Worrywort","Fog","Paperbag Writer","Where Bluebirds Fly","Fog (Again)","Gagging Order","I Am A Wicked Child","I Am Citizen Insane"]},{"album":"Unreleased","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Unreleased","songs":["Big Boots","The Chains","Climbing Up A Bloody Great Hill","Cut A Hole","The Daily Mail","Feeling Pulled Apart By Horses (AKA Reckoner Old Version)","Follow Me Around","Give It Up","Happy Song","Identikit","I Froze Up","Innocents Civilian","I Promise","I Want None Of This","Lift","Nobody Does It Better","No Surprises Please","Nothing Touches Me","Phillipa Chicken","The Present Tense","Rattlesnake","The Rip","Sinking Ship","Spooks","Staircase","Stupid Car","Tell Me Why","To Be A Brilliant Light","True Love Waits","Union City Blue","Unravel"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Other%20Songs","songs":["Cinnamon Girl (Neil Young Cover)","Good Evening Mrs. Magpie","Harry Patch (In Memory Of)","Man-O-War","Pop Is Dead","Remyxomatosis","Supercollider","The Butcher","These Are My Twisted Words","What Is It That You Say"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '7476',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:12:55 GMT',
  age: '10714',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3161-WIKIA, cache-atl6228-ATL',
  'x-cache': 'HIT, HIT',
  'x-cache-hits': '1, 2',
  'x-timer': 'S1427829175.542251,VS0,VE0',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=DU50f5OwFH; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:12:55 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=radiohead&fmt=json')
  .reply(200, {"artist":"Radiohead","albums":[{"album":"Pablo Honey","year":"1993","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Pablo%20Honey","songs":["You","Creep","How Do You?","Stop Whispering","Thinking About You","Anyone Can Play Guitar","Ripcord","Vegetable","Prove Yourself","I Can't","Lurgee","Blow Out","Creep (Clean)"]},{"album":"Itch","year":"1994","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Itch","songs":["Stop Whispering","Thinking About You","Faithless, The Wonder Boy","Banana Co.","Killer Cars","Vegetable","You","Creep"]},{"album":"My Iron Lung","year":"1994","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20My%20Iron%20Lung","songs":["My Iron Lung","The Trickster","Lewis (Mistreated)","Punchdrunk Lovesick Singalong","Permanent Daylight","Lozenge Of Love","You Never Wash Up After Yourself","Creep"]},{"album":"The Bends","year":"1995","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20The%20Bends","songs":["Planet Telex","The Bends","High And Dry","Fake Plastic Trees","Bones","(Nice Dream)","Just","My Iron Lung","Bullet Proof..I Wish I Was","Black Star","Sulk","Street Spirit (Fade Out)"]},{"album":"OK Computer","year":"1997","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20OK%20Computer","songs":["Airbag","Paranoid Android","Subterranean Homesick Alien","Exit Music (For A Film)","Let Down","Karma Police","Fitter Happier","Electioneering","Climbing Up The Walls","No Surprises","Lucky","The Tourist"]},{"album":"No Surprises/Running From Demons","year":"1997","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20No%20Surprises/Running%20From%20Demons","songs":["No Surprises","Pearly*","Melatonin","Meeting In The Aisle","Bishop's Robes","A Reminder"]},{"album":"Airbag/How Am I Driving?","year":"1998","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Airbag/How%20Am%20I%20Driving?","songs":["Airbag","Pearly*","Meeting In The Aisle","A Reminder","Polyethylene (Parts 1 & 2)","Melatonin","Palo Alto"]},{"album":"Kid A","year":"2000","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Kid%20A","songs":["Everything In Its Right Place","Kid A","The National Anthem","How To Disappear Completely","Treefingers","Optimistic","In Limbo","Idioteque","Morning Bell","Motion Picture Soundtrack"]},{"album":"Amnesiac","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Amnesiac","songs":["Packt Like Sardines In A Crushd Tin Box","Pyramid Song","Pulk/Pull Revolving Doors","You And Whose Army?","I Might Be Wrong","Knives Out","Morning Bell/Amnesiac","Dollars & Cents","Hunting Bears","Like Spinning Plates","Life In A Glasshouse"]},{"album":"Hail To The Thief","year":"2003","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Hail%20To%20The%20Thief","songs":["2 + 2 = 5 (The Lukewarm.)","Sit Down. Stand Up. (Snakes & Ladders.)","Sail To The Moon. (Brush The Cobwebs Out Of The Sky.)","Backdrifts. (Honeymoon Is Over.)","Go To Sleep. (Little Man Being Erased.)","Where I End And You Begin. (The Sky Is Falling In.)","We Suck Young Blood. (Your Time Is Up.)","The Gloaming. (Softly Open Our Mouths In The Cold.)","There There. (The Boney King Of Nowhere.)","I Will. (No Man's Land.)","A Punchup At A Wedding. (No No No No No No No No.)","Myxomatosis. (Judge, Jury & Executioner.)","Scatterbrain. (As Dead As Leaves.)","A Wolf At The Door. (It Girl. Rag Doll.)"]},{"album":"In Rainbows","year":"2007","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20In%20Rainbows","songs":["15 Step","Bodysnatchers","Nude","Weird Fishes/Arpeggi","All I Need","Faust Arp","Reckoner","House Of Cards","Jigsaw Falling Into Place","Videotape","MK 1","Down Is The New Up","Go Slowly","MK 2","Last Flowers","Up On The Ladder","Bangers + Mash","4 Minute Warning"]},{"album":"The King Of Limbs","year":"2011","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20The%20King%20Of%20Limbs","songs":["Bloom","Morning Mr Magpie","Little By Little","Feral","Lotus Flower","Codex","Give Up The Ghost","Separator"]},{"album":"B-Sides","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20B-Sides","songs":["Inside My Head","Million Dollar Question","Yes I Am","Coke Babies","Maquiladora","India Rubber","How Can You Be Sure?","Talk Show Host","Bishop's Robes","Molasses","Lull","How I Made My Millions","The Amazing Sounds Of Orgy","Trans-Atlantic Drawl","Kinetic","Fast-Track","Cuttooth","Worrywort","Fog","Paperbag Writer","Where Bluebirds Fly","Fog (Again)","Gagging Order","I Am A Wicked Child","I Am Citizen Insane"]},{"album":"Unreleased","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Unreleased","songs":["Big Boots","The Chains","Climbing Up A Bloody Great Hill","Cut A Hole","The Daily Mail","Feeling Pulled Apart By Horses (AKA Reckoner Old Version)","Follow Me Around","Give It Up","Happy Song","Identikit","I Froze Up","Innocents Civilian","I Promise","I Want None Of This","Lift","Nobody Does It Better","No Surprises Please","Nothing Touches Me","Phillipa Chicken","The Present Tense","Rattlesnake","The Rip","Sinking Ship","Spooks","Staircase","Stupid Car","Tell Me Why","To Be A Brilliant Light","True Love Waits","Union City Blue","Unravel"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Other%20Songs","songs":["Cinnamon Girl (Neil Young Cover)","Good Evening Mrs. Magpie","Harry Patch (In Memory Of)","Man-O-War","Pop Is Dead","Remyxomatosis","Supercollider","The Butcher","These Are My Twisted Words","What Is It That You Say"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '7476',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:12:56 GMT',
  age: '10715',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3161-WIKIA, cache-atl6231-ATL',
  'x-cache': 'HIT, HIT',
  'x-cache-hits': '1, 2',
  'x-timer': 'S1427829176.417718,VS0,VE0',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=ogauAeFxgv; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:12:56 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=radiohead&fmt=json')
  .reply(200, {"artist":"Radiohead","albums":[{"album":"Pablo Honey","year":"1993","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Pablo%20Honey","songs":["You","Creep","How Do You?","Stop Whispering","Thinking About You","Anyone Can Play Guitar","Ripcord","Vegetable","Prove Yourself","I Can't","Lurgee","Blow Out","Creep (Clean)"]},{"album":"Itch","year":"1994","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Itch","songs":["Stop Whispering","Thinking About You","Faithless, The Wonder Boy","Banana Co.","Killer Cars","Vegetable","You","Creep"]},{"album":"My Iron Lung","year":"1994","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20My%20Iron%20Lung","songs":["My Iron Lung","The Trickster","Lewis (Mistreated)","Punchdrunk Lovesick Singalong","Permanent Daylight","Lozenge Of Love","You Never Wash Up After Yourself","Creep"]},{"album":"The Bends","year":"1995","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20The%20Bends","songs":["Planet Telex","The Bends","High And Dry","Fake Plastic Trees","Bones","(Nice Dream)","Just","My Iron Lung","Bullet Proof..I Wish I Was","Black Star","Sulk","Street Spirit (Fade Out)"]},{"album":"OK Computer","year":"1997","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20OK%20Computer","songs":["Airbag","Paranoid Android","Subterranean Homesick Alien","Exit Music (For A Film)","Let Down","Karma Police","Fitter Happier","Electioneering","Climbing Up The Walls","No Surprises","Lucky","The Tourist"]},{"album":"No Surprises/Running From Demons","year":"1997","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20No%20Surprises/Running%20From%20Demons","songs":["No Surprises","Pearly*","Melatonin","Meeting In The Aisle","Bishop's Robes","A Reminder"]},{"album":"Airbag/How Am I Driving?","year":"1998","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Airbag/How%20Am%20I%20Driving?","songs":["Airbag","Pearly*","Meeting In The Aisle","A Reminder","Polyethylene (Parts 1 & 2)","Melatonin","Palo Alto"]},{"album":"Kid A","year":"2000","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Kid%20A","songs":["Everything In Its Right Place","Kid A","The National Anthem","How To Disappear Completely","Treefingers","Optimistic","In Limbo","Idioteque","Morning Bell","Motion Picture Soundtrack"]},{"album":"Amnesiac","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Amnesiac","songs":["Packt Like Sardines In A Crushd Tin Box","Pyramid Song","Pulk/Pull Revolving Doors","You And Whose Army?","I Might Be Wrong","Knives Out","Morning Bell/Amnesiac","Dollars & Cents","Hunting Bears","Like Spinning Plates","Life In A Glasshouse"]},{"album":"Hail To The Thief","year":"2003","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Hail%20To%20The%20Thief","songs":["2 + 2 = 5 (The Lukewarm.)","Sit Down. Stand Up. (Snakes & Ladders.)","Sail To The Moon. (Brush The Cobwebs Out Of The Sky.)","Backdrifts. (Honeymoon Is Over.)","Go To Sleep. (Little Man Being Erased.)","Where I End And You Begin. (The Sky Is Falling In.)","We Suck Young Blood. (Your Time Is Up.)","The Gloaming. (Softly Open Our Mouths In The Cold.)","There There. (The Boney King Of Nowhere.)","I Will. (No Man's Land.)","A Punchup At A Wedding. (No No No No No No No No.)","Myxomatosis. (Judge, Jury & Executioner.)","Scatterbrain. (As Dead As Leaves.)","A Wolf At The Door. (It Girl. Rag Doll.)"]},{"album":"In Rainbows","year":"2007","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20In%20Rainbows","songs":["15 Step","Bodysnatchers","Nude","Weird Fishes/Arpeggi","All I Need","Faust Arp","Reckoner","House Of Cards","Jigsaw Falling Into Place","Videotape","MK 1","Down Is The New Up","Go Slowly","MK 2","Last Flowers","Up On The Ladder","Bangers + Mash","4 Minute Warning"]},{"album":"The King Of Limbs","year":"2011","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20The%20King%20Of%20Limbs","songs":["Bloom","Morning Mr Magpie","Little By Little","Feral","Lotus Flower","Codex","Give Up The Ghost","Separator"]},{"album":"B-Sides","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20B-Sides","songs":["Inside My Head","Million Dollar Question","Yes I Am","Coke Babies","Maquiladora","India Rubber","How Can You Be Sure?","Talk Show Host","Bishop's Robes","Molasses","Lull","How I Made My Millions","The Amazing Sounds Of Orgy","Trans-Atlantic Drawl","Kinetic","Fast-Track","Cuttooth","Worrywort","Fog","Paperbag Writer","Where Bluebirds Fly","Fog (Again)","Gagging Order","I Am A Wicked Child","I Am Citizen Insane"]},{"album":"Unreleased","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Unreleased","songs":["Big Boots","The Chains","Climbing Up A Bloody Great Hill","Cut A Hole","The Daily Mail","Feeling Pulled Apart By Horses (AKA Reckoner Old Version)","Follow Me Around","Give It Up","Happy Song","Identikit","I Froze Up","Innocents Civilian","I Promise","I Want None Of This","Lift","Nobody Does It Better","No Surprises Please","Nothing Touches Me","Phillipa Chicken","The Present Tense","Rattlesnake","The Rip","Sinking Ship","Spooks","Staircase","Stupid Car","Tell Me Why","To Be A Brilliant Light","True Love Waits","Union City Blue","Unravel"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Other%20Songs","songs":["Cinnamon Girl (Neil Young Cover)","Good Evening Mrs. Magpie","Harry Patch (In Memory Of)","Man-O-War","Pop Is Dead","Remyxomatosis","Supercollider","The Butcher","These Are My Twisted Words","What Is It That You Say"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '7476',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:12:58 GMT',
  age: '10716',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3161-WIKIA, cache-atl6223-ATL',
  'x-cache': 'HIT, HIT',
  'x-cache-hits': '1, 1',
  'x-timer': 'S1427829178.417624,VS0,VE1',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=e9MJpGvlbv; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:12:58 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=radiohead&fmt=json')
  .reply(200, {"artist":"Radiohead","albums":[{"album":"Pablo Honey","year":"1993","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Pablo%20Honey","songs":["You","Creep","How Do You?","Stop Whispering","Thinking About You","Anyone Can Play Guitar","Ripcord","Vegetable","Prove Yourself","I Can't","Lurgee","Blow Out","Creep (Clean)"]},{"album":"Itch","year":"1994","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Itch","songs":["Stop Whispering","Thinking About You","Faithless, The Wonder Boy","Banana Co.","Killer Cars","Vegetable","You","Creep"]},{"album":"My Iron Lung","year":"1994","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20My%20Iron%20Lung","songs":["My Iron Lung","The Trickster","Lewis (Mistreated)","Punchdrunk Lovesick Singalong","Permanent Daylight","Lozenge Of Love","You Never Wash Up After Yourself","Creep"]},{"album":"The Bends","year":"1995","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20The%20Bends","songs":["Planet Telex","The Bends","High And Dry","Fake Plastic Trees","Bones","(Nice Dream)","Just","My Iron Lung","Bullet Proof..I Wish I Was","Black Star","Sulk","Street Spirit (Fade Out)"]},{"album":"OK Computer","year":"1997","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20OK%20Computer","songs":["Airbag","Paranoid Android","Subterranean Homesick Alien","Exit Music (For A Film)","Let Down","Karma Police","Fitter Happier","Electioneering","Climbing Up The Walls","No Surprises","Lucky","The Tourist"]},{"album":"No Surprises/Running From Demons","year":"1997","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20No%20Surprises/Running%20From%20Demons","songs":["No Surprises","Pearly*","Melatonin","Meeting In The Aisle","Bishop's Robes","A Reminder"]},{"album":"Airbag/How Am I Driving?","year":"1998","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Airbag/How%20Am%20I%20Driving?","songs":["Airbag","Pearly*","Meeting In The Aisle","A Reminder","Polyethylene (Parts 1 & 2)","Melatonin","Palo Alto"]},{"album":"Kid A","year":"2000","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Kid%20A","songs":["Everything In Its Right Place","Kid A","The National Anthem","How To Disappear Completely","Treefingers","Optimistic","In Limbo","Idioteque","Morning Bell","Motion Picture Soundtrack"]},{"album":"Amnesiac","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Amnesiac","songs":["Packt Like Sardines In A Crushd Tin Box","Pyramid Song","Pulk/Pull Revolving Doors","You And Whose Army?","I Might Be Wrong","Knives Out","Morning Bell/Amnesiac","Dollars & Cents","Hunting Bears","Like Spinning Plates","Life In A Glasshouse"]},{"album":"Hail To The Thief","year":"2003","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Hail%20To%20The%20Thief","songs":["2 + 2 = 5 (The Lukewarm.)","Sit Down. Stand Up. (Snakes & Ladders.)","Sail To The Moon. (Brush The Cobwebs Out Of The Sky.)","Backdrifts. (Honeymoon Is Over.)","Go To Sleep. (Little Man Being Erased.)","Where I End And You Begin. (The Sky Is Falling In.)","We Suck Young Blood. (Your Time Is Up.)","The Gloaming. (Softly Open Our Mouths In The Cold.)","There There. (The Boney King Of Nowhere.)","I Will. (No Man's Land.)","A Punchup At A Wedding. (No No No No No No No No.)","Myxomatosis. (Judge, Jury & Executioner.)","Scatterbrain. (As Dead As Leaves.)","A Wolf At The Door. (It Girl. Rag Doll.)"]},{"album":"In Rainbows","year":"2007","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20In%20Rainbows","songs":["15 Step","Bodysnatchers","Nude","Weird Fishes/Arpeggi","All I Need","Faust Arp","Reckoner","House Of Cards","Jigsaw Falling Into Place","Videotape","MK 1","Down Is The New Up","Go Slowly","MK 2","Last Flowers","Up On The Ladder","Bangers + Mash","4 Minute Warning"]},{"album":"The King Of Limbs","year":"2011","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20The%20King%20Of%20Limbs","songs":["Bloom","Morning Mr Magpie","Little By Little","Feral","Lotus Flower","Codex","Give Up The Ghost","Separator"]},{"album":"B-Sides","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20B-Sides","songs":["Inside My Head","Million Dollar Question","Yes I Am","Coke Babies","Maquiladora","India Rubber","How Can You Be Sure?","Talk Show Host","Bishop's Robes","Molasses","Lull","How I Made My Millions","The Amazing Sounds Of Orgy","Trans-Atlantic Drawl","Kinetic","Fast-Track","Cuttooth","Worrywort","Fog","Paperbag Writer","Where Bluebirds Fly","Fog (Again)","Gagging Order","I Am A Wicked Child","I Am Citizen Insane"]},{"album":"Unreleased","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Unreleased","songs":["Big Boots","The Chains","Climbing Up A Bloody Great Hill","Cut A Hole","The Daily Mail","Feeling Pulled Apart By Horses (AKA Reckoner Old Version)","Follow Me Around","Give It Up","Happy Song","Identikit","I Froze Up","Innocents Civilian","I Promise","I Want None Of This","Lift","Nobody Does It Better","No Surprises Please","Nothing Touches Me","Phillipa Chicken","The Present Tense","Rattlesnake","The Rip","Sinking Ship","Spooks","Staircase","Stupid Car","Tell Me Why","To Be A Brilliant Light","True Love Waits","Union City Blue","Unravel"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Other%20Songs","songs":["Cinnamon Girl (Neil Young Cover)","Good Evening Mrs. Magpie","Harry Patch (In Memory Of)","Man-O-War","Pop Is Dead","Remyxomatosis","Supercollider","The Butcher","These Are My Twisted Words","What Is It That You Say"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '7476',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:12:59 GMT',
  age: '10717',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3161-WIKIA, cache-atl6222-ATL',
  'x-cache': 'HIT, HIT',
  'x-cache-hits': '1, 2',
  'x-timer': 'S1427829179.605692,VS0,VE0',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=eTw57B5KQX; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:12:59 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=radiohead&fmt=json')
  .reply(200, {"artist":"Radiohead","albums":[{"album":"Pablo Honey","year":"1993","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Pablo%20Honey","songs":["You","Creep","How Do You?","Stop Whispering","Thinking About You","Anyone Can Play Guitar","Ripcord","Vegetable","Prove Yourself","I Can't","Lurgee","Blow Out","Creep (Clean)"]},{"album":"Itch","year":"1994","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Itch","songs":["Stop Whispering","Thinking About You","Faithless, The Wonder Boy","Banana Co.","Killer Cars","Vegetable","You","Creep"]},{"album":"My Iron Lung","year":"1994","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20My%20Iron%20Lung","songs":["My Iron Lung","The Trickster","Lewis (Mistreated)","Punchdrunk Lovesick Singalong","Permanent Daylight","Lozenge Of Love","You Never Wash Up After Yourself","Creep"]},{"album":"The Bends","year":"1995","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20The%20Bends","songs":["Planet Telex","The Bends","High And Dry","Fake Plastic Trees","Bones","(Nice Dream)","Just","My Iron Lung","Bullet Proof..I Wish I Was","Black Star","Sulk","Street Spirit (Fade Out)"]},{"album":"OK Computer","year":"1997","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20OK%20Computer","songs":["Airbag","Paranoid Android","Subterranean Homesick Alien","Exit Music (For A Film)","Let Down","Karma Police","Fitter Happier","Electioneering","Climbing Up The Walls","No Surprises","Lucky","The Tourist"]},{"album":"No Surprises/Running From Demons","year":"1997","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20No%20Surprises/Running%20From%20Demons","songs":["No Surprises","Pearly*","Melatonin","Meeting In The Aisle","Bishop's Robes","A Reminder"]},{"album":"Airbag/How Am I Driving?","year":"1998","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Airbag/How%20Am%20I%20Driving?","songs":["Airbag","Pearly*","Meeting In The Aisle","A Reminder","Polyethylene (Parts 1 & 2)","Melatonin","Palo Alto"]},{"album":"Kid A","year":"2000","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Kid%20A","songs":["Everything In Its Right Place","Kid A","The National Anthem","How To Disappear Completely","Treefingers","Optimistic","In Limbo","Idioteque","Morning Bell","Motion Picture Soundtrack"]},{"album":"Amnesiac","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Amnesiac","songs":["Packt Like Sardines In A Crushd Tin Box","Pyramid Song","Pulk/Pull Revolving Doors","You And Whose Army?","I Might Be Wrong","Knives Out","Morning Bell/Amnesiac","Dollars & Cents","Hunting Bears","Like Spinning Plates","Life In A Glasshouse"]},{"album":"Hail To The Thief","year":"2003","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Hail%20To%20The%20Thief","songs":["2 + 2 = 5 (The Lukewarm.)","Sit Down. Stand Up. (Snakes & Ladders.)","Sail To The Moon. (Brush The Cobwebs Out Of The Sky.)","Backdrifts. (Honeymoon Is Over.)","Go To Sleep. (Little Man Being Erased.)","Where I End And You Begin. (The Sky Is Falling In.)","We Suck Young Blood. (Your Time Is Up.)","The Gloaming. (Softly Open Our Mouths In The Cold.)","There There. (The Boney King Of Nowhere.)","I Will. (No Man's Land.)","A Punchup At A Wedding. (No No No No No No No No.)","Myxomatosis. (Judge, Jury & Executioner.)","Scatterbrain. (As Dead As Leaves.)","A Wolf At The Door. (It Girl. Rag Doll.)"]},{"album":"In Rainbows","year":"2007","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20In%20Rainbows","songs":["15 Step","Bodysnatchers","Nude","Weird Fishes/Arpeggi","All I Need","Faust Arp","Reckoner","House Of Cards","Jigsaw Falling Into Place","Videotape","MK 1","Down Is The New Up","Go Slowly","MK 2","Last Flowers","Up On The Ladder","Bangers + Mash","4 Minute Warning"]},{"album":"The King Of Limbs","year":"2011","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20The%20King%20Of%20Limbs","songs":["Bloom","Morning Mr Magpie","Little By Little","Feral","Lotus Flower","Codex","Give Up The Ghost","Separator"]},{"album":"B-Sides","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20B-Sides","songs":["Inside My Head","Million Dollar Question","Yes I Am","Coke Babies","Maquiladora","India Rubber","How Can You Be Sure?","Talk Show Host","Bishop's Robes","Molasses","Lull","How I Made My Millions","The Amazing Sounds Of Orgy","Trans-Atlantic Drawl","Kinetic","Fast-Track","Cuttooth","Worrywort","Fog","Paperbag Writer","Where Bluebirds Fly","Fog (Again)","Gagging Order","I Am A Wicked Child","I Am Citizen Insane"]},{"album":"Unreleased","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Unreleased","songs":["Big Boots","The Chains","Climbing Up A Bloody Great Hill","Cut A Hole","The Daily Mail","Feeling Pulled Apart By Horses (AKA Reckoner Old Version)","Follow Me Around","Give It Up","Happy Song","Identikit","I Froze Up","Innocents Civilian","I Promise","I Want None Of This","Lift","Nobody Does It Better","No Surprises Please","Nothing Touches Me","Phillipa Chicken","The Present Tense","Rattlesnake","The Rip","Sinking Ship","Spooks","Staircase","Stupid Car","Tell Me Why","To Be A Brilliant Light","True Love Waits","Union City Blue","Unravel"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Other%20Songs","songs":["Cinnamon Girl (Neil Young Cover)","Good Evening Mrs. Magpie","Harry Patch (In Memory Of)","Man-O-War","Pop Is Dead","Remyxomatosis","Supercollider","The Butcher","These Are My Twisted Words","What Is It That You Say"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '7476',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:13:00 GMT',
  age: '10719',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3161-WIKIA, cache-atl6231-ATL',
  'x-cache': 'HIT, HIT',
  'x-cache-hits': '1, 3',
  'x-timer': 'S1427829180.436347,VS0,VE0',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=aYBhuIl7ts; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:13:00 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=radiohead&fmt=json')
  .reply(200, {"artist":"Radiohead","albums":[{"album":"Pablo Honey","year":"1993","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Pablo%20Honey","songs":["You","Creep","How Do You?","Stop Whispering","Thinking About You","Anyone Can Play Guitar","Ripcord","Vegetable","Prove Yourself","I Can't","Lurgee","Blow Out","Creep (Clean)"]},{"album":"Itch","year":"1994","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Itch","songs":["Stop Whispering","Thinking About You","Faithless, The Wonder Boy","Banana Co.","Killer Cars","Vegetable","You","Creep"]},{"album":"My Iron Lung","year":"1994","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20My%20Iron%20Lung","songs":["My Iron Lung","The Trickster","Lewis (Mistreated)","Punchdrunk Lovesick Singalong","Permanent Daylight","Lozenge Of Love","You Never Wash Up After Yourself","Creep"]},{"album":"The Bends","year":"1995","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20The%20Bends","songs":["Planet Telex","The Bends","High And Dry","Fake Plastic Trees","Bones","(Nice Dream)","Just","My Iron Lung","Bullet Proof..I Wish I Was","Black Star","Sulk","Street Spirit (Fade Out)"]},{"album":"OK Computer","year":"1997","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20OK%20Computer","songs":["Airbag","Paranoid Android","Subterranean Homesick Alien","Exit Music (For A Film)","Let Down","Karma Police","Fitter Happier","Electioneering","Climbing Up The Walls","No Surprises","Lucky","The Tourist"]},{"album":"No Surprises/Running From Demons","year":"1997","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20No%20Surprises/Running%20From%20Demons","songs":["No Surprises","Pearly*","Melatonin","Meeting In The Aisle","Bishop's Robes","A Reminder"]},{"album":"Airbag/How Am I Driving?","year":"1998","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Airbag/How%20Am%20I%20Driving?","songs":["Airbag","Pearly*","Meeting In The Aisle","A Reminder","Polyethylene (Parts 1 & 2)","Melatonin","Palo Alto"]},{"album":"Kid A","year":"2000","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Kid%20A","songs":["Everything In Its Right Place","Kid A","The National Anthem","How To Disappear Completely","Treefingers","Optimistic","In Limbo","Idioteque","Morning Bell","Motion Picture Soundtrack"]},{"album":"Amnesiac","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Amnesiac","songs":["Packt Like Sardines In A Crushd Tin Box","Pyramid Song","Pulk/Pull Revolving Doors","You And Whose Army?","I Might Be Wrong","Knives Out","Morning Bell/Amnesiac","Dollars & Cents","Hunting Bears","Like Spinning Plates","Life In A Glasshouse"]},{"album":"Hail To The Thief","year":"2003","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Hail%20To%20The%20Thief","songs":["2 + 2 = 5 (The Lukewarm.)","Sit Down. Stand Up. (Snakes & Ladders.)","Sail To The Moon. (Brush The Cobwebs Out Of The Sky.)","Backdrifts. (Honeymoon Is Over.)","Go To Sleep. (Little Man Being Erased.)","Where I End And You Begin. (The Sky Is Falling In.)","We Suck Young Blood. (Your Time Is Up.)","The Gloaming. (Softly Open Our Mouths In The Cold.)","There There. (The Boney King Of Nowhere.)","I Will. (No Man's Land.)","A Punchup At A Wedding. (No No No No No No No No.)","Myxomatosis. (Judge, Jury & Executioner.)","Scatterbrain. (As Dead As Leaves.)","A Wolf At The Door. (It Girl. Rag Doll.)"]},{"album":"In Rainbows","year":"2007","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20In%20Rainbows","songs":["15 Step","Bodysnatchers","Nude","Weird Fishes/Arpeggi","All I Need","Faust Arp","Reckoner","House Of Cards","Jigsaw Falling Into Place","Videotape","MK 1","Down Is The New Up","Go Slowly","MK 2","Last Flowers","Up On The Ladder","Bangers + Mash","4 Minute Warning"]},{"album":"The King Of Limbs","year":"2011","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20The%20King%20Of%20Limbs","songs":["Bloom","Morning Mr Magpie","Little By Little","Feral","Lotus Flower","Codex","Give Up The Ghost","Separator"]},{"album":"B-Sides","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20B-Sides","songs":["Inside My Head","Million Dollar Question","Yes I Am","Coke Babies","Maquiladora","India Rubber","How Can You Be Sure?","Talk Show Host","Bishop's Robes","Molasses","Lull","How I Made My Millions","The Amazing Sounds Of Orgy","Trans-Atlantic Drawl","Kinetic","Fast-Track","Cuttooth","Worrywort","Fog","Paperbag Writer","Where Bluebirds Fly","Fog (Again)","Gagging Order","I Am A Wicked Child","I Am Citizen Insane"]},{"album":"Unreleased","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Unreleased","songs":["Big Boots","The Chains","Climbing Up A Bloody Great Hill","Cut A Hole","The Daily Mail","Feeling Pulled Apart By Horses (AKA Reckoner Old Version)","Follow Me Around","Give It Up","Happy Song","Identikit","I Froze Up","Innocents Civilian","I Promise","I Want None Of This","Lift","Nobody Does It Better","No Surprises Please","Nothing Touches Me","Phillipa Chicken","The Present Tense","Rattlesnake","The Rip","Sinking Ship","Spooks","Staircase","Stupid Car","Tell Me Why","To Be A Brilliant Light","True Love Waits","Union City Blue","Unravel"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Other%20Songs","songs":["Cinnamon Girl (Neil Young Cover)","Good Evening Mrs. Magpie","Harry Patch (In Memory Of)","Man-O-War","Pop Is Dead","Remyxomatosis","Supercollider","The Butcher","These Are My Twisted Words","What Is It That You Say"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '7476',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:15:45 GMT',
  age: '10884',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3161-WIKIA, cache-atl6221-ATL',
  'x-cache': 'HIT, HIT',
  'x-cache-hits': '1, 1',
  'x-timer': 'S1427829345.923679,VS0,VE0',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=CSrjf4KT0A; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:15:45 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=radiohead&fmt=json')
  .reply(200, {"artist":"Radiohead","albums":[{"album":"Pablo Honey","year":"1993","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Pablo%20Honey","songs":["You","Creep","How Do You?","Stop Whispering","Thinking About You","Anyone Can Play Guitar","Ripcord","Vegetable","Prove Yourself","I Can't","Lurgee","Blow Out","Creep (Clean)"]},{"album":"Itch","year":"1994","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Itch","songs":["Stop Whispering","Thinking About You","Faithless, The Wonder Boy","Banana Co.","Killer Cars","Vegetable","You","Creep"]},{"album":"My Iron Lung","year":"1994","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20My%20Iron%20Lung","songs":["My Iron Lung","The Trickster","Lewis (Mistreated)","Punchdrunk Lovesick Singalong","Permanent Daylight","Lozenge Of Love","You Never Wash Up After Yourself","Creep"]},{"album":"The Bends","year":"1995","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20The%20Bends","songs":["Planet Telex","The Bends","High And Dry","Fake Plastic Trees","Bones","(Nice Dream)","Just","My Iron Lung","Bullet Proof..I Wish I Was","Black Star","Sulk","Street Spirit (Fade Out)"]},{"album":"OK Computer","year":"1997","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20OK%20Computer","songs":["Airbag","Paranoid Android","Subterranean Homesick Alien","Exit Music (For A Film)","Let Down","Karma Police","Fitter Happier","Electioneering","Climbing Up The Walls","No Surprises","Lucky","The Tourist"]},{"album":"No Surprises/Running From Demons","year":"1997","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20No%20Surprises/Running%20From%20Demons","songs":["No Surprises","Pearly*","Melatonin","Meeting In The Aisle","Bishop's Robes","A Reminder"]},{"album":"Airbag/How Am I Driving?","year":"1998","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Airbag/How%20Am%20I%20Driving?","songs":["Airbag","Pearly*","Meeting In The Aisle","A Reminder","Polyethylene (Parts 1 & 2)","Melatonin","Palo Alto"]},{"album":"Kid A","year":"2000","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Kid%20A","songs":["Everything In Its Right Place","Kid A","The National Anthem","How To Disappear Completely","Treefingers","Optimistic","In Limbo","Idioteque","Morning Bell","Motion Picture Soundtrack"]},{"album":"Amnesiac","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Amnesiac","songs":["Packt Like Sardines In A Crushd Tin Box","Pyramid Song","Pulk/Pull Revolving Doors","You And Whose Army?","I Might Be Wrong","Knives Out","Morning Bell/Amnesiac","Dollars & Cents","Hunting Bears","Like Spinning Plates","Life In A Glasshouse"]},{"album":"Hail To The Thief","year":"2003","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Hail%20To%20The%20Thief","songs":["2 + 2 = 5 (The Lukewarm.)","Sit Down. Stand Up. (Snakes & Ladders.)","Sail To The Moon. (Brush The Cobwebs Out Of The Sky.)","Backdrifts. (Honeymoon Is Over.)","Go To Sleep. (Little Man Being Erased.)","Where I End And You Begin. (The Sky Is Falling In.)","We Suck Young Blood. (Your Time Is Up.)","The Gloaming. (Softly Open Our Mouths In The Cold.)","There There. (The Boney King Of Nowhere.)","I Will. (No Man's Land.)","A Punchup At A Wedding. (No No No No No No No No.)","Myxomatosis. (Judge, Jury & Executioner.)","Scatterbrain. (As Dead As Leaves.)","A Wolf At The Door. (It Girl. Rag Doll.)"]},{"album":"In Rainbows","year":"2007","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20In%20Rainbows","songs":["15 Step","Bodysnatchers","Nude","Weird Fishes/Arpeggi","All I Need","Faust Arp","Reckoner","House Of Cards","Jigsaw Falling Into Place","Videotape","MK 1","Down Is The New Up","Go Slowly","MK 2","Last Flowers","Up On The Ladder","Bangers + Mash","4 Minute Warning"]},{"album":"The King Of Limbs","year":"2011","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20The%20King%20Of%20Limbs","songs":["Bloom","Morning Mr Magpie","Little By Little","Feral","Lotus Flower","Codex","Give Up The Ghost","Separator"]},{"album":"B-Sides","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20B-Sides","songs":["Inside My Head","Million Dollar Question","Yes I Am","Coke Babies","Maquiladora","India Rubber","How Can You Be Sure?","Talk Show Host","Bishop's Robes","Molasses","Lull","How I Made My Millions","The Amazing Sounds Of Orgy","Trans-Atlantic Drawl","Kinetic","Fast-Track","Cuttooth","Worrywort","Fog","Paperbag Writer","Where Bluebirds Fly","Fog (Again)","Gagging Order","I Am A Wicked Child","I Am Citizen Insane"]},{"album":"Unreleased","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Unreleased","songs":["Big Boots","The Chains","Climbing Up A Bloody Great Hill","Cut A Hole","The Daily Mail","Feeling Pulled Apart By Horses (AKA Reckoner Old Version)","Follow Me Around","Give It Up","Happy Song","Identikit","I Froze Up","Innocents Civilian","I Promise","I Want None Of This","Lift","Nobody Does It Better","No Surprises Please","Nothing Touches Me","Phillipa Chicken","The Present Tense","Rattlesnake","The Rip","Sinking Ship","Spooks","Staircase","Stupid Car","Tell Me Why","To Be A Brilliant Light","True Love Waits","Union City Blue","Unravel"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Other%20Songs","songs":["Cinnamon Girl (Neil Young Cover)","Good Evening Mrs. Magpie","Harry Patch (In Memory Of)","Man-O-War","Pop Is Dead","Remyxomatosis","Supercollider","The Butcher","These Are My Twisted Words","What Is It That You Say"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '7476',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:16:17 GMT',
  age: '10915',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3161-WIKIA, cache-atl6223-ATL',
  'x-cache': 'HIT, HIT',
  'x-cache-hits': '1, 2',
  'x-timer': 'S1427829377.086434,VS0,VE0',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=0m2N2WrAEC; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:16:17 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=radiohead&fmt=json')
  .reply(200, {"artist":"Radiohead","albums":[{"album":"Pablo Honey","year":"1993","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Pablo%20Honey","songs":["You","Creep","How Do You?","Stop Whispering","Thinking About You","Anyone Can Play Guitar","Ripcord","Vegetable","Prove Yourself","I Can't","Lurgee","Blow Out","Creep (Clean)"]},{"album":"Itch","year":"1994","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Itch","songs":["Stop Whispering","Thinking About You","Faithless, The Wonder Boy","Banana Co.","Killer Cars","Vegetable","You","Creep"]},{"album":"My Iron Lung","year":"1994","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20My%20Iron%20Lung","songs":["My Iron Lung","The Trickster","Lewis (Mistreated)","Punchdrunk Lovesick Singalong","Permanent Daylight","Lozenge Of Love","You Never Wash Up After Yourself","Creep"]},{"album":"The Bends","year":"1995","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20The%20Bends","songs":["Planet Telex","The Bends","High And Dry","Fake Plastic Trees","Bones","(Nice Dream)","Just","My Iron Lung","Bullet Proof..I Wish I Was","Black Star","Sulk","Street Spirit (Fade Out)"]},{"album":"OK Computer","year":"1997","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20OK%20Computer","songs":["Airbag","Paranoid Android","Subterranean Homesick Alien","Exit Music (For A Film)","Let Down","Karma Police","Fitter Happier","Electioneering","Climbing Up The Walls","No Surprises","Lucky","The Tourist"]},{"album":"No Surprises/Running From Demons","year":"1997","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20No%20Surprises/Running%20From%20Demons","songs":["No Surprises","Pearly*","Melatonin","Meeting In The Aisle","Bishop's Robes","A Reminder"]},{"album":"Airbag/How Am I Driving?","year":"1998","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Airbag/How%20Am%20I%20Driving?","songs":["Airbag","Pearly*","Meeting In The Aisle","A Reminder","Polyethylene (Parts 1 & 2)","Melatonin","Palo Alto"]},{"album":"Kid A","year":"2000","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Kid%20A","songs":["Everything In Its Right Place","Kid A","The National Anthem","How To Disappear Completely","Treefingers","Optimistic","In Limbo","Idioteque","Morning Bell","Motion Picture Soundtrack"]},{"album":"Amnesiac","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Amnesiac","songs":["Packt Like Sardines In A Crushd Tin Box","Pyramid Song","Pulk/Pull Revolving Doors","You And Whose Army?","I Might Be Wrong","Knives Out","Morning Bell/Amnesiac","Dollars & Cents","Hunting Bears","Like Spinning Plates","Life In A Glasshouse"]},{"album":"Hail To The Thief","year":"2003","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Hail%20To%20The%20Thief","songs":["2 + 2 = 5 (The Lukewarm.)","Sit Down. Stand Up. (Snakes & Ladders.)","Sail To The Moon. (Brush The Cobwebs Out Of The Sky.)","Backdrifts. (Honeymoon Is Over.)","Go To Sleep. (Little Man Being Erased.)","Where I End And You Begin. (The Sky Is Falling In.)","We Suck Young Blood. (Your Time Is Up.)","The Gloaming. (Softly Open Our Mouths In The Cold.)","There There. (The Boney King Of Nowhere.)","I Will. (No Man's Land.)","A Punchup At A Wedding. (No No No No No No No No.)","Myxomatosis. (Judge, Jury & Executioner.)","Scatterbrain. (As Dead As Leaves.)","A Wolf At The Door. (It Girl. Rag Doll.)"]},{"album":"In Rainbows","year":"2007","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20In%20Rainbows","songs":["15 Step","Bodysnatchers","Nude","Weird Fishes/Arpeggi","All I Need","Faust Arp","Reckoner","House Of Cards","Jigsaw Falling Into Place","Videotape","MK 1","Down Is The New Up","Go Slowly","MK 2","Last Flowers","Up On The Ladder","Bangers + Mash","4 Minute Warning"]},{"album":"The King Of Limbs","year":"2011","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20The%20King%20Of%20Limbs","songs":["Bloom","Morning Mr Magpie","Little By Little","Feral","Lotus Flower","Codex","Give Up The Ghost","Separator"]},{"album":"B-Sides","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20B-Sides","songs":["Inside My Head","Million Dollar Question","Yes I Am","Coke Babies","Maquiladora","India Rubber","How Can You Be Sure?","Talk Show Host","Bishop's Robes","Molasses","Lull","How I Made My Millions","The Amazing Sounds Of Orgy","Trans-Atlantic Drawl","Kinetic","Fast-Track","Cuttooth","Worrywort","Fog","Paperbag Writer","Where Bluebirds Fly","Fog (Again)","Gagging Order","I Am A Wicked Child","I Am Citizen Insane"]},{"album":"Unreleased","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Unreleased","songs":["Big Boots","The Chains","Climbing Up A Bloody Great Hill","Cut A Hole","The Daily Mail","Feeling Pulled Apart By Horses (AKA Reckoner Old Version)","Follow Me Around","Give It Up","Happy Song","Identikit","I Froze Up","Innocents Civilian","I Promise","I Want None Of This","Lift","Nobody Does It Better","No Surprises Please","Nothing Touches Me","Phillipa Chicken","The Present Tense","Rattlesnake","The Rip","Sinking Ship","Spooks","Staircase","Stupid Car","Tell Me Why","To Be A Brilliant Light","True Love Waits","Union City Blue","Unravel"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Other%20Songs","songs":["Cinnamon Girl (Neil Young Cover)","Good Evening Mrs. Magpie","Harry Patch (In Memory Of)","Man-O-War","Pop Is Dead","Remyxomatosis","Supercollider","The Butcher","These Are My Twisted Words","What Is It That You Say"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '7476',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:16:24 GMT',
  age: '10922',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3161-WIKIA, cache-atl6234-ATL',
  'x-cache': 'HIT, HIT',
  'x-cache-hits': '1, 1',
  'x-timer': 'S1427829384.267726,VS0,VE1',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=UNqKG4Uc9j; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:16:24 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=radiohead&fmt=json')
  .reply(200, {"artist":"Radiohead","albums":[{"album":"Pablo Honey","year":"1993","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Pablo%20Honey","songs":["You","Creep","How Do You?","Stop Whispering","Thinking About You","Anyone Can Play Guitar","Ripcord","Vegetable","Prove Yourself","I Can't","Lurgee","Blow Out","Creep (Clean)"]},{"album":"Itch","year":"1994","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Itch","songs":["Stop Whispering","Thinking About You","Faithless, The Wonder Boy","Banana Co.","Killer Cars","Vegetable","You","Creep"]},{"album":"My Iron Lung","year":"1994","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20My%20Iron%20Lung","songs":["My Iron Lung","The Trickster","Lewis (Mistreated)","Punchdrunk Lovesick Singalong","Permanent Daylight","Lozenge Of Love","You Never Wash Up After Yourself","Creep"]},{"album":"The Bends","year":"1995","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20The%20Bends","songs":["Planet Telex","The Bends","High And Dry","Fake Plastic Trees","Bones","(Nice Dream)","Just","My Iron Lung","Bullet Proof..I Wish I Was","Black Star","Sulk","Street Spirit (Fade Out)"]},{"album":"OK Computer","year":"1997","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20OK%20Computer","songs":["Airbag","Paranoid Android","Subterranean Homesick Alien","Exit Music (For A Film)","Let Down","Karma Police","Fitter Happier","Electioneering","Climbing Up The Walls","No Surprises","Lucky","The Tourist"]},{"album":"No Surprises/Running From Demons","year":"1997","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20No%20Surprises/Running%20From%20Demons","songs":["No Surprises","Pearly*","Melatonin","Meeting In The Aisle","Bishop's Robes","A Reminder"]},{"album":"Airbag/How Am I Driving?","year":"1998","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Airbag/How%20Am%20I%20Driving?","songs":["Airbag","Pearly*","Meeting In The Aisle","A Reminder","Polyethylene (Parts 1 & 2)","Melatonin","Palo Alto"]},{"album":"Kid A","year":"2000","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Kid%20A","songs":["Everything In Its Right Place","Kid A","The National Anthem","How To Disappear Completely","Treefingers","Optimistic","In Limbo","Idioteque","Morning Bell","Motion Picture Soundtrack"]},{"album":"Amnesiac","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Amnesiac","songs":["Packt Like Sardines In A Crushd Tin Box","Pyramid Song","Pulk/Pull Revolving Doors","You And Whose Army?","I Might Be Wrong","Knives Out","Morning Bell/Amnesiac","Dollars & Cents","Hunting Bears","Like Spinning Plates","Life In A Glasshouse"]},{"album":"Hail To The Thief","year":"2003","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Hail%20To%20The%20Thief","songs":["2 + 2 = 5 (The Lukewarm.)","Sit Down. Stand Up. (Snakes & Ladders.)","Sail To The Moon. (Brush The Cobwebs Out Of The Sky.)","Backdrifts. (Honeymoon Is Over.)","Go To Sleep. (Little Man Being Erased.)","Where I End And You Begin. (The Sky Is Falling In.)","We Suck Young Blood. (Your Time Is Up.)","The Gloaming. (Softly Open Our Mouths In The Cold.)","There There. (The Boney King Of Nowhere.)","I Will. (No Man's Land.)","A Punchup At A Wedding. (No No No No No No No No.)","Myxomatosis. (Judge, Jury & Executioner.)","Scatterbrain. (As Dead As Leaves.)","A Wolf At The Door. (It Girl. Rag Doll.)"]},{"album":"In Rainbows","year":"2007","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20In%20Rainbows","songs":["15 Step","Bodysnatchers","Nude","Weird Fishes/Arpeggi","All I Need","Faust Arp","Reckoner","House Of Cards","Jigsaw Falling Into Place","Videotape","MK 1","Down Is The New Up","Go Slowly","MK 2","Last Flowers","Up On The Ladder","Bangers + Mash","4 Minute Warning"]},{"album":"The King Of Limbs","year":"2011","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20The%20King%20Of%20Limbs","songs":["Bloom","Morning Mr Magpie","Little By Little","Feral","Lotus Flower","Codex","Give Up The Ghost","Separator"]},{"album":"B-Sides","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20B-Sides","songs":["Inside My Head","Million Dollar Question","Yes I Am","Coke Babies","Maquiladora","India Rubber","How Can You Be Sure?","Talk Show Host","Bishop's Robes","Molasses","Lull","How I Made My Millions","The Amazing Sounds Of Orgy","Trans-Atlantic Drawl","Kinetic","Fast-Track","Cuttooth","Worrywort","Fog","Paperbag Writer","Where Bluebirds Fly","Fog (Again)","Gagging Order","I Am A Wicked Child","I Am Citizen Insane"]},{"album":"Unreleased","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Unreleased","songs":["Big Boots","The Chains","Climbing Up A Bloody Great Hill","Cut A Hole","The Daily Mail","Feeling Pulled Apart By Horses (AKA Reckoner Old Version)","Follow Me Around","Give It Up","Happy Song","Identikit","I Froze Up","Innocents Civilian","I Promise","I Want None Of This","Lift","Nobody Does It Better","No Surprises Please","Nothing Touches Me","Phillipa Chicken","The Present Tense","Rattlesnake","The Rip","Sinking Ship","Spooks","Staircase","Stupid Car","Tell Me Why","To Be A Brilliant Light","True Love Waits","Union City Blue","Unravel"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Other%20Songs","songs":["Cinnamon Girl (Neil Young Cover)","Good Evening Mrs. Magpie","Harry Patch (In Memory Of)","Man-O-War","Pop Is Dead","Remyxomatosis","Supercollider","The Butcher","These Are My Twisted Words","What Is It That You Say"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '7476',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:16:28 GMT',
  age: '10926',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3161-WIKIA, cache-atl6223-ATL',
  'x-cache': 'HIT, HIT',
  'x-cache-hits': '1, 3',
  'x-timer': 'S1427829388.508953,VS0,VE0',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=G21t0xOhTy; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:16:28 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=radiohead&fmt=json')
  .reply(200, {"artist":"Radiohead","albums":[{"album":"Pablo Honey","year":"1993","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Pablo%20Honey","songs":["You","Creep","How Do You?","Stop Whispering","Thinking About You","Anyone Can Play Guitar","Ripcord","Vegetable","Prove Yourself","I Can't","Lurgee","Blow Out","Creep (Clean)"]},{"album":"Itch","year":"1994","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Itch","songs":["Stop Whispering","Thinking About You","Faithless, The Wonder Boy","Banana Co.","Killer Cars","Vegetable","You","Creep"]},{"album":"My Iron Lung","year":"1994","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20My%20Iron%20Lung","songs":["My Iron Lung","The Trickster","Lewis (Mistreated)","Punchdrunk Lovesick Singalong","Permanent Daylight","Lozenge Of Love","You Never Wash Up After Yourself","Creep"]},{"album":"The Bends","year":"1995","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20The%20Bends","songs":["Planet Telex","The Bends","High And Dry","Fake Plastic Trees","Bones","(Nice Dream)","Just","My Iron Lung","Bullet Proof..I Wish I Was","Black Star","Sulk","Street Spirit (Fade Out)"]},{"album":"OK Computer","year":"1997","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20OK%20Computer","songs":["Airbag","Paranoid Android","Subterranean Homesick Alien","Exit Music (For A Film)","Let Down","Karma Police","Fitter Happier","Electioneering","Climbing Up The Walls","No Surprises","Lucky","The Tourist"]},{"album":"No Surprises/Running From Demons","year":"1997","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20No%20Surprises/Running%20From%20Demons","songs":["No Surprises","Pearly*","Melatonin","Meeting In The Aisle","Bishop's Robes","A Reminder"]},{"album":"Airbag/How Am I Driving?","year":"1998","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Airbag/How%20Am%20I%20Driving?","songs":["Airbag","Pearly*","Meeting In The Aisle","A Reminder","Polyethylene (Parts 1 & 2)","Melatonin","Palo Alto"]},{"album":"Kid A","year":"2000","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Kid%20A","songs":["Everything In Its Right Place","Kid A","The National Anthem","How To Disappear Completely","Treefingers","Optimistic","In Limbo","Idioteque","Morning Bell","Motion Picture Soundtrack"]},{"album":"Amnesiac","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Amnesiac","songs":["Packt Like Sardines In A Crushd Tin Box","Pyramid Song","Pulk/Pull Revolving Doors","You And Whose Army?","I Might Be Wrong","Knives Out","Morning Bell/Amnesiac","Dollars & Cents","Hunting Bears","Like Spinning Plates","Life In A Glasshouse"]},{"album":"Hail To The Thief","year":"2003","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Hail%20To%20The%20Thief","songs":["2 + 2 = 5 (The Lukewarm.)","Sit Down. Stand Up. (Snakes & Ladders.)","Sail To The Moon. (Brush The Cobwebs Out Of The Sky.)","Backdrifts. (Honeymoon Is Over.)","Go To Sleep. (Little Man Being Erased.)","Where I End And You Begin. (The Sky Is Falling In.)","We Suck Young Blood. (Your Time Is Up.)","The Gloaming. (Softly Open Our Mouths In The Cold.)","There There. (The Boney King Of Nowhere.)","I Will. (No Man's Land.)","A Punchup At A Wedding. (No No No No No No No No.)","Myxomatosis. (Judge, Jury & Executioner.)","Scatterbrain. (As Dead As Leaves.)","A Wolf At The Door. (It Girl. Rag Doll.)"]},{"album":"In Rainbows","year":"2007","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20In%20Rainbows","songs":["15 Step","Bodysnatchers","Nude","Weird Fishes/Arpeggi","All I Need","Faust Arp","Reckoner","House Of Cards","Jigsaw Falling Into Place","Videotape","MK 1","Down Is The New Up","Go Slowly","MK 2","Last Flowers","Up On The Ladder","Bangers + Mash","4 Minute Warning"]},{"album":"The King Of Limbs","year":"2011","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20The%20King%20Of%20Limbs","songs":["Bloom","Morning Mr Magpie","Little By Little","Feral","Lotus Flower","Codex","Give Up The Ghost","Separator"]},{"album":"B-Sides","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20B-Sides","songs":["Inside My Head","Million Dollar Question","Yes I Am","Coke Babies","Maquiladora","India Rubber","How Can You Be Sure?","Talk Show Host","Bishop's Robes","Molasses","Lull","How I Made My Millions","The Amazing Sounds Of Orgy","Trans-Atlantic Drawl","Kinetic","Fast-Track","Cuttooth","Worrywort","Fog","Paperbag Writer","Where Bluebirds Fly","Fog (Again)","Gagging Order","I Am A Wicked Child","I Am Citizen Insane"]},{"album":"Unreleased","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Unreleased","songs":["Big Boots","The Chains","Climbing Up A Bloody Great Hill","Cut A Hole","The Daily Mail","Feeling Pulled Apart By Horses (AKA Reckoner Old Version)","Follow Me Around","Give It Up","Happy Song","Identikit","I Froze Up","Innocents Civilian","I Promise","I Want None Of This","Lift","Nobody Does It Better","No Surprises Please","Nothing Touches Me","Phillipa Chicken","The Present Tense","Rattlesnake","The Rip","Sinking Ship","Spooks","Staircase","Stupid Car","Tell Me Why","To Be A Brilliant Light","True Love Waits","Union City Blue","Unravel"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Other%20Songs","songs":["Cinnamon Girl (Neil Young Cover)","Good Evening Mrs. Magpie","Harry Patch (In Memory Of)","Man-O-War","Pop Is Dead","Remyxomatosis","Supercollider","The Butcher","These Are My Twisted Words","What Is It That You Say"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '7476',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:16:50 GMT',
  age: '10948',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3160-WIKIA, cache-iad2122-IAD',
  'x-cache': 'MISS, HIT',
  'x-cache-hits': '0, 1',
  'x-timer': 'S1427829410.158116,VS0,VE0',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=o_oVxoYeSh; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:16:50 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=radiohead&fmt=json')
  .reply(200, {"artist":"Radiohead","albums":[{"album":"Pablo Honey","year":"1993","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Pablo%20Honey","songs":["You","Creep","How Do You?","Stop Whispering","Thinking About You","Anyone Can Play Guitar","Ripcord","Vegetable","Prove Yourself","I Can't","Lurgee","Blow Out","Creep (Clean)"]},{"album":"Itch","year":"1994","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Itch","songs":["Stop Whispering","Thinking About You","Faithless, The Wonder Boy","Banana Co.","Killer Cars","Vegetable","You","Creep"]},{"album":"My Iron Lung","year":"1994","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20My%20Iron%20Lung","songs":["My Iron Lung","The Trickster","Lewis (Mistreated)","Punchdrunk Lovesick Singalong","Permanent Daylight","Lozenge Of Love","You Never Wash Up After Yourself","Creep"]},{"album":"The Bends","year":"1995","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20The%20Bends","songs":["Planet Telex","The Bends","High And Dry","Fake Plastic Trees","Bones","(Nice Dream)","Just","My Iron Lung","Bullet Proof..I Wish I Was","Black Star","Sulk","Street Spirit (Fade Out)"]},{"album":"OK Computer","year":"1997","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20OK%20Computer","songs":["Airbag","Paranoid Android","Subterranean Homesick Alien","Exit Music (For A Film)","Let Down","Karma Police","Fitter Happier","Electioneering","Climbing Up The Walls","No Surprises","Lucky","The Tourist"]},{"album":"No Surprises/Running From Demons","year":"1997","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20No%20Surprises/Running%20From%20Demons","songs":["No Surprises","Pearly*","Melatonin","Meeting In The Aisle","Bishop's Robes","A Reminder"]},{"album":"Airbag/How Am I Driving?","year":"1998","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Airbag/How%20Am%20I%20Driving?","songs":["Airbag","Pearly*","Meeting In The Aisle","A Reminder","Polyethylene (Parts 1 & 2)","Melatonin","Palo Alto"]},{"album":"Kid A","year":"2000","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Kid%20A","songs":["Everything In Its Right Place","Kid A","The National Anthem","How To Disappear Completely","Treefingers","Optimistic","In Limbo","Idioteque","Morning Bell","Motion Picture Soundtrack"]},{"album":"Amnesiac","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Amnesiac","songs":["Packt Like Sardines In A Crushd Tin Box","Pyramid Song","Pulk/Pull Revolving Doors","You And Whose Army?","I Might Be Wrong","Knives Out","Morning Bell/Amnesiac","Dollars & Cents","Hunting Bears","Like Spinning Plates","Life In A Glasshouse"]},{"album":"Hail To The Thief","year":"2003","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Hail%20To%20The%20Thief","songs":["2 + 2 = 5 (The Lukewarm.)","Sit Down. Stand Up. (Snakes & Ladders.)","Sail To The Moon. (Brush The Cobwebs Out Of The Sky.)","Backdrifts. (Honeymoon Is Over.)","Go To Sleep. (Little Man Being Erased.)","Where I End And You Begin. (The Sky Is Falling In.)","We Suck Young Blood. (Your Time Is Up.)","The Gloaming. (Softly Open Our Mouths In The Cold.)","There There. (The Boney King Of Nowhere.)","I Will. (No Man's Land.)","A Punchup At A Wedding. (No No No No No No No No.)","Myxomatosis. (Judge, Jury & Executioner.)","Scatterbrain. (As Dead As Leaves.)","A Wolf At The Door. (It Girl. Rag Doll.)"]},{"album":"In Rainbows","year":"2007","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20In%20Rainbows","songs":["15 Step","Bodysnatchers","Nude","Weird Fishes/Arpeggi","All I Need","Faust Arp","Reckoner","House Of Cards","Jigsaw Falling Into Place","Videotape","MK 1","Down Is The New Up","Go Slowly","MK 2","Last Flowers","Up On The Ladder","Bangers + Mash","4 Minute Warning"]},{"album":"The King Of Limbs","year":"2011","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20The%20King%20Of%20Limbs","songs":["Bloom","Morning Mr Magpie","Little By Little","Feral","Lotus Flower","Codex","Give Up The Ghost","Separator"]},{"album":"B-Sides","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20B-Sides","songs":["Inside My Head","Million Dollar Question","Yes I Am","Coke Babies","Maquiladora","India Rubber","How Can You Be Sure?","Talk Show Host","Bishop's Robes","Molasses","Lull","How I Made My Millions","The Amazing Sounds Of Orgy","Trans-Atlantic Drawl","Kinetic","Fast-Track","Cuttooth","Worrywort","Fog","Paperbag Writer","Where Bluebirds Fly","Fog (Again)","Gagging Order","I Am A Wicked Child","I Am Citizen Insane"]},{"album":"Unreleased","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Unreleased","songs":["Big Boots","The Chains","Climbing Up A Bloody Great Hill","Cut A Hole","The Daily Mail","Feeling Pulled Apart By Horses (AKA Reckoner Old Version)","Follow Me Around","Give It Up","Happy Song","Identikit","I Froze Up","Innocents Civilian","I Promise","I Want None Of This","Lift","Nobody Does It Better","No Surprises Please","Nothing Touches Me","Phillipa Chicken","The Present Tense","Rattlesnake","The Rip","Sinking Ship","Spooks","Staircase","Stupid Car","Tell Me Why","To Be A Brilliant Light","True Love Waits","Union City Blue","Unravel"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Other%20Songs","songs":["Cinnamon Girl (Neil Young Cover)","Good Evening Mrs. Magpie","Harry Patch (In Memory Of)","Man-O-War","Pop Is Dead","Remyxomatosis","Supercollider","The Butcher","These Are My Twisted Words","What Is It That You Say"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '7476',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:16:51 GMT',
  age: '10950',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3160-WIKIA, cache-iad2130-IAD',
  'x-cache': 'MISS, HIT',
  'x-cache-hits': '0, 1',
  'x-timer': 'S1427829411.905863,VS0,VE0',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=IFAAgrHfyh; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:16:51 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=radiohead&fmt=json')
  .reply(200, {"artist":"Radiohead","albums":[{"album":"Pablo Honey","year":"1993","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Pablo%20Honey","songs":["You","Creep","How Do You?","Stop Whispering","Thinking About You","Anyone Can Play Guitar","Ripcord","Vegetable","Prove Yourself","I Can't","Lurgee","Blow Out","Creep (Clean)"]},{"album":"Itch","year":"1994","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Itch","songs":["Stop Whispering","Thinking About You","Faithless, The Wonder Boy","Banana Co.","Killer Cars","Vegetable","You","Creep"]},{"album":"My Iron Lung","year":"1994","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20My%20Iron%20Lung","songs":["My Iron Lung","The Trickster","Lewis (Mistreated)","Punchdrunk Lovesick Singalong","Permanent Daylight","Lozenge Of Love","You Never Wash Up After Yourself","Creep"]},{"album":"The Bends","year":"1995","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20The%20Bends","songs":["Planet Telex","The Bends","High And Dry","Fake Plastic Trees","Bones","(Nice Dream)","Just","My Iron Lung","Bullet Proof..I Wish I Was","Black Star","Sulk","Street Spirit (Fade Out)"]},{"album":"OK Computer","year":"1997","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20OK%20Computer","songs":["Airbag","Paranoid Android","Subterranean Homesick Alien","Exit Music (For A Film)","Let Down","Karma Police","Fitter Happier","Electioneering","Climbing Up The Walls","No Surprises","Lucky","The Tourist"]},{"album":"No Surprises/Running From Demons","year":"1997","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20No%20Surprises/Running%20From%20Demons","songs":["No Surprises","Pearly*","Melatonin","Meeting In The Aisle","Bishop's Robes","A Reminder"]},{"album":"Airbag/How Am I Driving?","year":"1998","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Airbag/How%20Am%20I%20Driving?","songs":["Airbag","Pearly*","Meeting In The Aisle","A Reminder","Polyethylene (Parts 1 & 2)","Melatonin","Palo Alto"]},{"album":"Kid A","year":"2000","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Kid%20A","songs":["Everything In Its Right Place","Kid A","The National Anthem","How To Disappear Completely","Treefingers","Optimistic","In Limbo","Idioteque","Morning Bell","Motion Picture Soundtrack"]},{"album":"Amnesiac","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Amnesiac","songs":["Packt Like Sardines In A Crushd Tin Box","Pyramid Song","Pulk/Pull Revolving Doors","You And Whose Army?","I Might Be Wrong","Knives Out","Morning Bell/Amnesiac","Dollars & Cents","Hunting Bears","Like Spinning Plates","Life In A Glasshouse"]},{"album":"Hail To The Thief","year":"2003","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Hail%20To%20The%20Thief","songs":["2 + 2 = 5 (The Lukewarm.)","Sit Down. Stand Up. (Snakes & Ladders.)","Sail To The Moon. (Brush The Cobwebs Out Of The Sky.)","Backdrifts. (Honeymoon Is Over.)","Go To Sleep. (Little Man Being Erased.)","Where I End And You Begin. (The Sky Is Falling In.)","We Suck Young Blood. (Your Time Is Up.)","The Gloaming. (Softly Open Our Mouths In The Cold.)","There There. (The Boney King Of Nowhere.)","I Will. (No Man's Land.)","A Punchup At A Wedding. (No No No No No No No No.)","Myxomatosis. (Judge, Jury & Executioner.)","Scatterbrain. (As Dead As Leaves.)","A Wolf At The Door. (It Girl. Rag Doll.)"]},{"album":"In Rainbows","year":"2007","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20In%20Rainbows","songs":["15 Step","Bodysnatchers","Nude","Weird Fishes/Arpeggi","All I Need","Faust Arp","Reckoner","House Of Cards","Jigsaw Falling Into Place","Videotape","MK 1","Down Is The New Up","Go Slowly","MK 2","Last Flowers","Up On The Ladder","Bangers + Mash","4 Minute Warning"]},{"album":"The King Of Limbs","year":"2011","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20The%20King%20Of%20Limbs","songs":["Bloom","Morning Mr Magpie","Little By Little","Feral","Lotus Flower","Codex","Give Up The Ghost","Separator"]},{"album":"B-Sides","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20B-Sides","songs":["Inside My Head","Million Dollar Question","Yes I Am","Coke Babies","Maquiladora","India Rubber","How Can You Be Sure?","Talk Show Host","Bishop's Robes","Molasses","Lull","How I Made My Millions","The Amazing Sounds Of Orgy","Trans-Atlantic Drawl","Kinetic","Fast-Track","Cuttooth","Worrywort","Fog","Paperbag Writer","Where Bluebirds Fly","Fog (Again)","Gagging Order","I Am A Wicked Child","I Am Citizen Insane"]},{"album":"Unreleased","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Unreleased","songs":["Big Boots","The Chains","Climbing Up A Bloody Great Hill","Cut A Hole","The Daily Mail","Feeling Pulled Apart By Horses (AKA Reckoner Old Version)","Follow Me Around","Give It Up","Happy Song","Identikit","I Froze Up","Innocents Civilian","I Promise","I Want None Of This","Lift","Nobody Does It Better","No Surprises Please","Nothing Touches Me","Phillipa Chicken","The Present Tense","Rattlesnake","The Rip","Sinking Ship","Spooks","Staircase","Stupid Car","Tell Me Why","To Be A Brilliant Light","True Love Waits","Union City Blue","Unravel"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Other%20Songs","songs":["Cinnamon Girl (Neil Young Cover)","Good Evening Mrs. Magpie","Harry Patch (In Memory Of)","Man-O-War","Pop Is Dead","Remyxomatosis","Supercollider","The Butcher","These Are My Twisted Words","What Is It That You Say"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '7476',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:17:10 GMT',
  age: '10968',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3160-WIKIA, cache-iad2145-IAD',
  'x-cache': 'MISS, HIT',
  'x-cache-hits': '0, 1',
  'x-timer': 'S1427829430.210053,VS0,VE0',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=HDhCf3FFrE; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:17:10 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=radiohead&fmt=json')
  .reply(200, {"artist":"Radiohead","albums":[{"album":"Pablo Honey","year":"1993","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Pablo%20Honey","songs":["You","Creep","How Do You?","Stop Whispering","Thinking About You","Anyone Can Play Guitar","Ripcord","Vegetable","Prove Yourself","I Can't","Lurgee","Blow Out","Creep (Clean)"]},{"album":"Itch","year":"1994","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Itch","songs":["Stop Whispering","Thinking About You","Faithless, The Wonder Boy","Banana Co.","Killer Cars","Vegetable","You","Creep"]},{"album":"My Iron Lung","year":"1994","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20My%20Iron%20Lung","songs":["My Iron Lung","The Trickster","Lewis (Mistreated)","Punchdrunk Lovesick Singalong","Permanent Daylight","Lozenge Of Love","You Never Wash Up After Yourself","Creep"]},{"album":"The Bends","year":"1995","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20The%20Bends","songs":["Planet Telex","The Bends","High And Dry","Fake Plastic Trees","Bones","(Nice Dream)","Just","My Iron Lung","Bullet Proof..I Wish I Was","Black Star","Sulk","Street Spirit (Fade Out)"]},{"album":"OK Computer","year":"1997","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20OK%20Computer","songs":["Airbag","Paranoid Android","Subterranean Homesick Alien","Exit Music (For A Film)","Let Down","Karma Police","Fitter Happier","Electioneering","Climbing Up The Walls","No Surprises","Lucky","The Tourist"]},{"album":"No Surprises/Running From Demons","year":"1997","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20No%20Surprises/Running%20From%20Demons","songs":["No Surprises","Pearly*","Melatonin","Meeting In The Aisle","Bishop's Robes","A Reminder"]},{"album":"Airbag/How Am I Driving?","year":"1998","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Airbag/How%20Am%20I%20Driving?","songs":["Airbag","Pearly*","Meeting In The Aisle","A Reminder","Polyethylene (Parts 1 & 2)","Melatonin","Palo Alto"]},{"album":"Kid A","year":"2000","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Kid%20A","songs":["Everything In Its Right Place","Kid A","The National Anthem","How To Disappear Completely","Treefingers","Optimistic","In Limbo","Idioteque","Morning Bell","Motion Picture Soundtrack"]},{"album":"Amnesiac","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Amnesiac","songs":["Packt Like Sardines In A Crushd Tin Box","Pyramid Song","Pulk/Pull Revolving Doors","You And Whose Army?","I Might Be Wrong","Knives Out","Morning Bell/Amnesiac","Dollars & Cents","Hunting Bears","Like Spinning Plates","Life In A Glasshouse"]},{"album":"Hail To The Thief","year":"2003","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Hail%20To%20The%20Thief","songs":["2 + 2 = 5 (The Lukewarm.)","Sit Down. Stand Up. (Snakes & Ladders.)","Sail To The Moon. (Brush The Cobwebs Out Of The Sky.)","Backdrifts. (Honeymoon Is Over.)","Go To Sleep. (Little Man Being Erased.)","Where I End And You Begin. (The Sky Is Falling In.)","We Suck Young Blood. (Your Time Is Up.)","The Gloaming. (Softly Open Our Mouths In The Cold.)","There There. (The Boney King Of Nowhere.)","I Will. (No Man's Land.)","A Punchup At A Wedding. (No No No No No No No No.)","Myxomatosis. (Judge, Jury & Executioner.)","Scatterbrain. (As Dead As Leaves.)","A Wolf At The Door. (It Girl. Rag Doll.)"]},{"album":"In Rainbows","year":"2007","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20In%20Rainbows","songs":["15 Step","Bodysnatchers","Nude","Weird Fishes/Arpeggi","All I Need","Faust Arp","Reckoner","House Of Cards","Jigsaw Falling Into Place","Videotape","MK 1","Down Is The New Up","Go Slowly","MK 2","Last Flowers","Up On The Ladder","Bangers + Mash","4 Minute Warning"]},{"album":"The King Of Limbs","year":"2011","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20The%20King%20Of%20Limbs","songs":["Bloom","Morning Mr Magpie","Little By Little","Feral","Lotus Flower","Codex","Give Up The Ghost","Separator"]},{"album":"B-Sides","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20B-Sides","songs":["Inside My Head","Million Dollar Question","Yes I Am","Coke Babies","Maquiladora","India Rubber","How Can You Be Sure?","Talk Show Host","Bishop's Robes","Molasses","Lull","How I Made My Millions","The Amazing Sounds Of Orgy","Trans-Atlantic Drawl","Kinetic","Fast-Track","Cuttooth","Worrywort","Fog","Paperbag Writer","Where Bluebirds Fly","Fog (Again)","Gagging Order","I Am A Wicked Child","I Am Citizen Insane"]},{"album":"Unreleased","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Unreleased","songs":["Big Boots","The Chains","Climbing Up A Bloody Great Hill","Cut A Hole","The Daily Mail","Feeling Pulled Apart By Horses (AKA Reckoner Old Version)","Follow Me Around","Give It Up","Happy Song","Identikit","I Froze Up","Innocents Civilian","I Promise","I Want None Of This","Lift","Nobody Does It Better","No Surprises Please","Nothing Touches Me","Phillipa Chicken","The Present Tense","Rattlesnake","The Rip","Sinking Ship","Spooks","Staircase","Stupid Car","Tell Me Why","To Be A Brilliant Light","True Love Waits","Union City Blue","Unravel"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Other%20Songs","songs":["Cinnamon Girl (Neil Young Cover)","Good Evening Mrs. Magpie","Harry Patch (In Memory Of)","Man-O-War","Pop Is Dead","Remyxomatosis","Supercollider","The Butcher","These Are My Twisted Words","What Is It That You Say"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '7476',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:17:14 GMT',
  age: '10972',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3160-WIKIA, cache-iad2120-IAD',
  'x-cache': 'MISS, HIT',
  'x-cache-hits': '0, 2',
  'x-timer': 'S1427829434.245877,VS0,VE0',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=cgV8bw05hO; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:17:14 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=radiohead&fmt=json')
  .reply(200, {"artist":"Radiohead","albums":[{"album":"Pablo Honey","year":"1993","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Pablo%20Honey","songs":["You","Creep","How Do You?","Stop Whispering","Thinking About You","Anyone Can Play Guitar","Ripcord","Vegetable","Prove Yourself","I Can't","Lurgee","Blow Out","Creep (Clean)"]},{"album":"Itch","year":"1994","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Itch","songs":["Stop Whispering","Thinking About You","Faithless, The Wonder Boy","Banana Co.","Killer Cars","Vegetable","You","Creep"]},{"album":"My Iron Lung","year":"1994","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20My%20Iron%20Lung","songs":["My Iron Lung","The Trickster","Lewis (Mistreated)","Punchdrunk Lovesick Singalong","Permanent Daylight","Lozenge Of Love","You Never Wash Up After Yourself","Creep"]},{"album":"The Bends","year":"1995","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20The%20Bends","songs":["Planet Telex","The Bends","High And Dry","Fake Plastic Trees","Bones","(Nice Dream)","Just","My Iron Lung","Bullet Proof..I Wish I Was","Black Star","Sulk","Street Spirit (Fade Out)"]},{"album":"OK Computer","year":"1997","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20OK%20Computer","songs":["Airbag","Paranoid Android","Subterranean Homesick Alien","Exit Music (For A Film)","Let Down","Karma Police","Fitter Happier","Electioneering","Climbing Up The Walls","No Surprises","Lucky","The Tourist"]},{"album":"No Surprises/Running From Demons","year":"1997","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20No%20Surprises/Running%20From%20Demons","songs":["No Surprises","Pearly*","Melatonin","Meeting In The Aisle","Bishop's Robes","A Reminder"]},{"album":"Airbag/How Am I Driving?","year":"1998","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Airbag/How%20Am%20I%20Driving?","songs":["Airbag","Pearly*","Meeting In The Aisle","A Reminder","Polyethylene (Parts 1 & 2)","Melatonin","Palo Alto"]},{"album":"Kid A","year":"2000","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Kid%20A","songs":["Everything In Its Right Place","Kid A","The National Anthem","How To Disappear Completely","Treefingers","Optimistic","In Limbo","Idioteque","Morning Bell","Motion Picture Soundtrack"]},{"album":"Amnesiac","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Amnesiac","songs":["Packt Like Sardines In A Crushd Tin Box","Pyramid Song","Pulk/Pull Revolving Doors","You And Whose Army?","I Might Be Wrong","Knives Out","Morning Bell/Amnesiac","Dollars & Cents","Hunting Bears","Like Spinning Plates","Life In A Glasshouse"]},{"album":"Hail To The Thief","year":"2003","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Hail%20To%20The%20Thief","songs":["2 + 2 = 5 (The Lukewarm.)","Sit Down. Stand Up. (Snakes & Ladders.)","Sail To The Moon. (Brush The Cobwebs Out Of The Sky.)","Backdrifts. (Honeymoon Is Over.)","Go To Sleep. (Little Man Being Erased.)","Where I End And You Begin. (The Sky Is Falling In.)","We Suck Young Blood. (Your Time Is Up.)","The Gloaming. (Softly Open Our Mouths In The Cold.)","There There. (The Boney King Of Nowhere.)","I Will. (No Man's Land.)","A Punchup At A Wedding. (No No No No No No No No.)","Myxomatosis. (Judge, Jury & Executioner.)","Scatterbrain. (As Dead As Leaves.)","A Wolf At The Door. (It Girl. Rag Doll.)"]},{"album":"In Rainbows","year":"2007","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20In%20Rainbows","songs":["15 Step","Bodysnatchers","Nude","Weird Fishes/Arpeggi","All I Need","Faust Arp","Reckoner","House Of Cards","Jigsaw Falling Into Place","Videotape","MK 1","Down Is The New Up","Go Slowly","MK 2","Last Flowers","Up On The Ladder","Bangers + Mash","4 Minute Warning"]},{"album":"The King Of Limbs","year":"2011","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20The%20King%20Of%20Limbs","songs":["Bloom","Morning Mr Magpie","Little By Little","Feral","Lotus Flower","Codex","Give Up The Ghost","Separator"]},{"album":"B-Sides","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20B-Sides","songs":["Inside My Head","Million Dollar Question","Yes I Am","Coke Babies","Maquiladora","India Rubber","How Can You Be Sure?","Talk Show Host","Bishop's Robes","Molasses","Lull","How I Made My Millions","The Amazing Sounds Of Orgy","Trans-Atlantic Drawl","Kinetic","Fast-Track","Cuttooth","Worrywort","Fog","Paperbag Writer","Where Bluebirds Fly","Fog (Again)","Gagging Order","I Am A Wicked Child","I Am Citizen Insane"]},{"album":"Unreleased","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Unreleased","songs":["Big Boots","The Chains","Climbing Up A Bloody Great Hill","Cut A Hole","The Daily Mail","Feeling Pulled Apart By Horses (AKA Reckoner Old Version)","Follow Me Around","Give It Up","Happy Song","Identikit","I Froze Up","Innocents Civilian","I Promise","I Want None Of This","Lift","Nobody Does It Better","No Surprises Please","Nothing Touches Me","Phillipa Chicken","The Present Tense","Rattlesnake","The Rip","Sinking Ship","Spooks","Staircase","Stupid Car","Tell Me Why","To Be A Brilliant Light","True Love Waits","Union City Blue","Unravel"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Other%20Songs","songs":["Cinnamon Girl (Neil Young Cover)","Good Evening Mrs. Magpie","Harry Patch (In Memory Of)","Man-O-War","Pop Is Dead","Remyxomatosis","Supercollider","The Butcher","These Are My Twisted Words","What Is It That You Say"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '7476',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:19:38 GMT',
  age: '11117',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3160-WIKIA, cache-iad2120-IAD',
  'x-cache': 'MISS, HIT',
  'x-cache-hits': '0, 3',
  'x-timer': 'S1427829578.633010,VS0,VE0',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=mP7OqmfsHf; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:19:38 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=radiohead&fmt=json')
  .reply(200, {"artist":"Radiohead","albums":[{"album":"Pablo Honey","year":"1993","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Pablo%20Honey","songs":["You","Creep","How Do You?","Stop Whispering","Thinking About You","Anyone Can Play Guitar","Ripcord","Vegetable","Prove Yourself","I Can't","Lurgee","Blow Out","Creep (Clean)"]},{"album":"Itch","year":"1994","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Itch","songs":["Stop Whispering","Thinking About You","Faithless, The Wonder Boy","Banana Co.","Killer Cars","Vegetable","You","Creep"]},{"album":"My Iron Lung","year":"1994","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20My%20Iron%20Lung","songs":["My Iron Lung","The Trickster","Lewis (Mistreated)","Punchdrunk Lovesick Singalong","Permanent Daylight","Lozenge Of Love","You Never Wash Up After Yourself","Creep"]},{"album":"The Bends","year":"1995","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20The%20Bends","songs":["Planet Telex","The Bends","High And Dry","Fake Plastic Trees","Bones","(Nice Dream)","Just","My Iron Lung","Bullet Proof..I Wish I Was","Black Star","Sulk","Street Spirit (Fade Out)"]},{"album":"OK Computer","year":"1997","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20OK%20Computer","songs":["Airbag","Paranoid Android","Subterranean Homesick Alien","Exit Music (For A Film)","Let Down","Karma Police","Fitter Happier","Electioneering","Climbing Up The Walls","No Surprises","Lucky","The Tourist"]},{"album":"No Surprises/Running From Demons","year":"1997","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20No%20Surprises/Running%20From%20Demons","songs":["No Surprises","Pearly*","Melatonin","Meeting In The Aisle","Bishop's Robes","A Reminder"]},{"album":"Airbag/How Am I Driving?","year":"1998","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Airbag/How%20Am%20I%20Driving?","songs":["Airbag","Pearly*","Meeting In The Aisle","A Reminder","Polyethylene (Parts 1 & 2)","Melatonin","Palo Alto"]},{"album":"Kid A","year":"2000","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Kid%20A","songs":["Everything In Its Right Place","Kid A","The National Anthem","How To Disappear Completely","Treefingers","Optimistic","In Limbo","Idioteque","Morning Bell","Motion Picture Soundtrack"]},{"album":"Amnesiac","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Amnesiac","songs":["Packt Like Sardines In A Crushd Tin Box","Pyramid Song","Pulk/Pull Revolving Doors","You And Whose Army?","I Might Be Wrong","Knives Out","Morning Bell/Amnesiac","Dollars & Cents","Hunting Bears","Like Spinning Plates","Life In A Glasshouse"]},{"album":"Hail To The Thief","year":"2003","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Hail%20To%20The%20Thief","songs":["2 + 2 = 5 (The Lukewarm.)","Sit Down. Stand Up. (Snakes & Ladders.)","Sail To The Moon. (Brush The Cobwebs Out Of The Sky.)","Backdrifts. (Honeymoon Is Over.)","Go To Sleep. (Little Man Being Erased.)","Where I End And You Begin. (The Sky Is Falling In.)","We Suck Young Blood. (Your Time Is Up.)","The Gloaming. (Softly Open Our Mouths In The Cold.)","There There. (The Boney King Of Nowhere.)","I Will. (No Man's Land.)","A Punchup At A Wedding. (No No No No No No No No.)","Myxomatosis. (Judge, Jury & Executioner.)","Scatterbrain. (As Dead As Leaves.)","A Wolf At The Door. (It Girl. Rag Doll.)"]},{"album":"In Rainbows","year":"2007","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20In%20Rainbows","songs":["15 Step","Bodysnatchers","Nude","Weird Fishes/Arpeggi","All I Need","Faust Arp","Reckoner","House Of Cards","Jigsaw Falling Into Place","Videotape","MK 1","Down Is The New Up","Go Slowly","MK 2","Last Flowers","Up On The Ladder","Bangers + Mash","4 Minute Warning"]},{"album":"The King Of Limbs","year":"2011","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20The%20King%20Of%20Limbs","songs":["Bloom","Morning Mr Magpie","Little By Little","Feral","Lotus Flower","Codex","Give Up The Ghost","Separator"]},{"album":"B-Sides","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20B-Sides","songs":["Inside My Head","Million Dollar Question","Yes I Am","Coke Babies","Maquiladora","India Rubber","How Can You Be Sure?","Talk Show Host","Bishop's Robes","Molasses","Lull","How I Made My Millions","The Amazing Sounds Of Orgy","Trans-Atlantic Drawl","Kinetic","Fast-Track","Cuttooth","Worrywort","Fog","Paperbag Writer","Where Bluebirds Fly","Fog (Again)","Gagging Order","I Am A Wicked Child","I Am Citizen Insane"]},{"album":"Unreleased","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Unreleased","songs":["Big Boots","The Chains","Climbing Up A Bloody Great Hill","Cut A Hole","The Daily Mail","Feeling Pulled Apart By Horses (AKA Reckoner Old Version)","Follow Me Around","Give It Up","Happy Song","Identikit","I Froze Up","Innocents Civilian","I Promise","I Want None Of This","Lift","Nobody Does It Better","No Surprises Please","Nothing Touches Me","Phillipa Chicken","The Present Tense","Rattlesnake","The Rip","Sinking Ship","Spooks","Staircase","Stupid Car","Tell Me Why","To Be A Brilliant Light","True Love Waits","Union City Blue","Unravel"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Other%20Songs","songs":["Cinnamon Girl (Neil Young Cover)","Good Evening Mrs. Magpie","Harry Patch (In Memory Of)","Man-O-War","Pop Is Dead","Remyxomatosis","Supercollider","The Butcher","These Are My Twisted Words","What Is It That You Say"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '7476',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:20:16 GMT',
  age: '11156',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3160-WIKIA, cache-jfk1020-JFK',
  'x-cache': 'HIT, HIT',
  'x-cache-hits': '1, 2',
  'x-timer': 'S1427829616.937230,VS0,VE0',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=zoUCtWclra; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:20:16 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=radiohead&fmt=json')
  .reply(200, {"artist":"Radiohead","albums":[{"album":"Pablo Honey","year":"1993","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Pablo%20Honey","songs":["You","Creep","How Do You?","Stop Whispering","Thinking About You","Anyone Can Play Guitar","Ripcord","Vegetable","Prove Yourself","I Can't","Lurgee","Blow Out","Creep (Clean)"]},{"album":"Itch","year":"1994","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Itch","songs":["Stop Whispering","Thinking About You","Faithless, The Wonder Boy","Banana Co.","Killer Cars","Vegetable","You","Creep"]},{"album":"My Iron Lung","year":"1994","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20My%20Iron%20Lung","songs":["My Iron Lung","The Trickster","Lewis (Mistreated)","Punchdrunk Lovesick Singalong","Permanent Daylight","Lozenge Of Love","You Never Wash Up After Yourself","Creep"]},{"album":"The Bends","year":"1995","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20The%20Bends","songs":["Planet Telex","The Bends","High And Dry","Fake Plastic Trees","Bones","(Nice Dream)","Just","My Iron Lung","Bullet Proof..I Wish I Was","Black Star","Sulk","Street Spirit (Fade Out)"]},{"album":"OK Computer","year":"1997","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20OK%20Computer","songs":["Airbag","Paranoid Android","Subterranean Homesick Alien","Exit Music (For A Film)","Let Down","Karma Police","Fitter Happier","Electioneering","Climbing Up The Walls","No Surprises","Lucky","The Tourist"]},{"album":"No Surprises/Running From Demons","year":"1997","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20No%20Surprises/Running%20From%20Demons","songs":["No Surprises","Pearly*","Melatonin","Meeting In The Aisle","Bishop's Robes","A Reminder"]},{"album":"Airbag/How Am I Driving?","year":"1998","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Airbag/How%20Am%20I%20Driving?","songs":["Airbag","Pearly*","Meeting In The Aisle","A Reminder","Polyethylene (Parts 1 & 2)","Melatonin","Palo Alto"]},{"album":"Kid A","year":"2000","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Kid%20A","songs":["Everything In Its Right Place","Kid A","The National Anthem","How To Disappear Completely","Treefingers","Optimistic","In Limbo","Idioteque","Morning Bell","Motion Picture Soundtrack"]},{"album":"Amnesiac","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Amnesiac","songs":["Packt Like Sardines In A Crushd Tin Box","Pyramid Song","Pulk/Pull Revolving Doors","You And Whose Army?","I Might Be Wrong","Knives Out","Morning Bell/Amnesiac","Dollars & Cents","Hunting Bears","Like Spinning Plates","Life In A Glasshouse"]},{"album":"Hail To The Thief","year":"2003","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Hail%20To%20The%20Thief","songs":["2 + 2 = 5 (The Lukewarm.)","Sit Down. Stand Up. (Snakes & Ladders.)","Sail To The Moon. (Brush The Cobwebs Out Of The Sky.)","Backdrifts. (Honeymoon Is Over.)","Go To Sleep. (Little Man Being Erased.)","Where I End And You Begin. (The Sky Is Falling In.)","We Suck Young Blood. (Your Time Is Up.)","The Gloaming. (Softly Open Our Mouths In The Cold.)","There There. (The Boney King Of Nowhere.)","I Will. (No Man's Land.)","A Punchup At A Wedding. (No No No No No No No No.)","Myxomatosis. (Judge, Jury & Executioner.)","Scatterbrain. (As Dead As Leaves.)","A Wolf At The Door. (It Girl. Rag Doll.)"]},{"album":"In Rainbows","year":"2007","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20In%20Rainbows","songs":["15 Step","Bodysnatchers","Nude","Weird Fishes/Arpeggi","All I Need","Faust Arp","Reckoner","House Of Cards","Jigsaw Falling Into Place","Videotape","MK 1","Down Is The New Up","Go Slowly","MK 2","Last Flowers","Up On The Ladder","Bangers + Mash","4 Minute Warning"]},{"album":"The King Of Limbs","year":"2011","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20The%20King%20Of%20Limbs","songs":["Bloom","Morning Mr Magpie","Little By Little","Feral","Lotus Flower","Codex","Give Up The Ghost","Separator"]},{"album":"B-Sides","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20B-Sides","songs":["Inside My Head","Million Dollar Question","Yes I Am","Coke Babies","Maquiladora","India Rubber","How Can You Be Sure?","Talk Show Host","Bishop's Robes","Molasses","Lull","How I Made My Millions","The Amazing Sounds Of Orgy","Trans-Atlantic Drawl","Kinetic","Fast-Track","Cuttooth","Worrywort","Fog","Paperbag Writer","Where Bluebirds Fly","Fog (Again)","Gagging Order","I Am A Wicked Child","I Am Citizen Insane"]},{"album":"Unreleased","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Unreleased","songs":["Big Boots","The Chains","Climbing Up A Bloody Great Hill","Cut A Hole","The Daily Mail","Feeling Pulled Apart By Horses (AKA Reckoner Old Version)","Follow Me Around","Give It Up","Happy Song","Identikit","I Froze Up","Innocents Civilian","I Promise","I Want None Of This","Lift","Nobody Does It Better","No Surprises Please","Nothing Touches Me","Phillipa Chicken","The Present Tense","Rattlesnake","The Rip","Sinking Ship","Spooks","Staircase","Stupid Car","Tell Me Why","To Be A Brilliant Light","True Love Waits","Union City Blue","Unravel"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Other%20Songs","songs":["Cinnamon Girl (Neil Young Cover)","Good Evening Mrs. Magpie","Harry Patch (In Memory Of)","Man-O-War","Pop Is Dead","Remyxomatosis","Supercollider","The Butcher","These Are My Twisted Words","What Is It That You Say"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '7476',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:20:35 GMT',
  age: '11174',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3160-WIKIA, cache-jfk1028-JFK',
  'x-cache': 'HIT, HIT',
  'x-cache-hits': '1, 1',
  'x-timer': 'S1427829635.408486,VS0,VE0',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=Y3XYzSc-Sz; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:20:35 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=radiohead&fmt=json')
  .reply(200, {"artist":"Radiohead","albums":[{"album":"Pablo Honey","year":"1993","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Pablo%20Honey","songs":["You","Creep","How Do You?","Stop Whispering","Thinking About You","Anyone Can Play Guitar","Ripcord","Vegetable","Prove Yourself","I Can't","Lurgee","Blow Out","Creep (Clean)"]},{"album":"Itch","year":"1994","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Itch","songs":["Stop Whispering","Thinking About You","Faithless, The Wonder Boy","Banana Co.","Killer Cars","Vegetable","You","Creep"]},{"album":"My Iron Lung","year":"1994","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20My%20Iron%20Lung","songs":["My Iron Lung","The Trickster","Lewis (Mistreated)","Punchdrunk Lovesick Singalong","Permanent Daylight","Lozenge Of Love","You Never Wash Up After Yourself","Creep"]},{"album":"The Bends","year":"1995","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20The%20Bends","songs":["Planet Telex","The Bends","High And Dry","Fake Plastic Trees","Bones","(Nice Dream)","Just","My Iron Lung","Bullet Proof..I Wish I Was","Black Star","Sulk","Street Spirit (Fade Out)"]},{"album":"OK Computer","year":"1997","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20OK%20Computer","songs":["Airbag","Paranoid Android","Subterranean Homesick Alien","Exit Music (For A Film)","Let Down","Karma Police","Fitter Happier","Electioneering","Climbing Up The Walls","No Surprises","Lucky","The Tourist"]},{"album":"No Surprises/Running From Demons","year":"1997","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20No%20Surprises/Running%20From%20Demons","songs":["No Surprises","Pearly*","Melatonin","Meeting In The Aisle","Bishop's Robes","A Reminder"]},{"album":"Airbag/How Am I Driving?","year":"1998","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Airbag/How%20Am%20I%20Driving?","songs":["Airbag","Pearly*","Meeting In The Aisle","A Reminder","Polyethylene (Parts 1 & 2)","Melatonin","Palo Alto"]},{"album":"Kid A","year":"2000","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Kid%20A","songs":["Everything In Its Right Place","Kid A","The National Anthem","How To Disappear Completely","Treefingers","Optimistic","In Limbo","Idioteque","Morning Bell","Motion Picture Soundtrack"]},{"album":"Amnesiac","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Amnesiac","songs":["Packt Like Sardines In A Crushd Tin Box","Pyramid Song","Pulk/Pull Revolving Doors","You And Whose Army?","I Might Be Wrong","Knives Out","Morning Bell/Amnesiac","Dollars & Cents","Hunting Bears","Like Spinning Plates","Life In A Glasshouse"]},{"album":"Hail To The Thief","year":"2003","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Hail%20To%20The%20Thief","songs":["2 + 2 = 5 (The Lukewarm.)","Sit Down. Stand Up. (Snakes & Ladders.)","Sail To The Moon. (Brush The Cobwebs Out Of The Sky.)","Backdrifts. (Honeymoon Is Over.)","Go To Sleep. (Little Man Being Erased.)","Where I End And You Begin. (The Sky Is Falling In.)","We Suck Young Blood. (Your Time Is Up.)","The Gloaming. (Softly Open Our Mouths In The Cold.)","There There. (The Boney King Of Nowhere.)","I Will. (No Man's Land.)","A Punchup At A Wedding. (No No No No No No No No.)","Myxomatosis. (Judge, Jury & Executioner.)","Scatterbrain. (As Dead As Leaves.)","A Wolf At The Door. (It Girl. Rag Doll.)"]},{"album":"In Rainbows","year":"2007","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20In%20Rainbows","songs":["15 Step","Bodysnatchers","Nude","Weird Fishes/Arpeggi","All I Need","Faust Arp","Reckoner","House Of Cards","Jigsaw Falling Into Place","Videotape","MK 1","Down Is The New Up","Go Slowly","MK 2","Last Flowers","Up On The Ladder","Bangers + Mash","4 Minute Warning"]},{"album":"The King Of Limbs","year":"2011","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20The%20King%20Of%20Limbs","songs":["Bloom","Morning Mr Magpie","Little By Little","Feral","Lotus Flower","Codex","Give Up The Ghost","Separator"]},{"album":"B-Sides","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20B-Sides","songs":["Inside My Head","Million Dollar Question","Yes I Am","Coke Babies","Maquiladora","India Rubber","How Can You Be Sure?","Talk Show Host","Bishop's Robes","Molasses","Lull","How I Made My Millions","The Amazing Sounds Of Orgy","Trans-Atlantic Drawl","Kinetic","Fast-Track","Cuttooth","Worrywort","Fog","Paperbag Writer","Where Bluebirds Fly","Fog (Again)","Gagging Order","I Am A Wicked Child","I Am Citizen Insane"]},{"album":"Unreleased","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Unreleased","songs":["Big Boots","The Chains","Climbing Up A Bloody Great Hill","Cut A Hole","The Daily Mail","Feeling Pulled Apart By Horses (AKA Reckoner Old Version)","Follow Me Around","Give It Up","Happy Song","Identikit","I Froze Up","Innocents Civilian","I Promise","I Want None Of This","Lift","Nobody Does It Better","No Surprises Please","Nothing Touches Me","Phillipa Chicken","The Present Tense","Rattlesnake","The Rip","Sinking Ship","Spooks","Staircase","Stupid Car","Tell Me Why","To Be A Brilliant Light","True Love Waits","Union City Blue","Unravel"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Other%20Songs","songs":["Cinnamon Girl (Neil Young Cover)","Good Evening Mrs. Magpie","Harry Patch (In Memory Of)","Man-O-War","Pop Is Dead","Remyxomatosis","Supercollider","The Butcher","These Are My Twisted Words","What Is It That You Say"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '7476',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:20:40 GMT',
  age: '11179',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3160-WIKIA, cache-jfk1030-JFK',
  'x-cache': 'HIT, HIT',
  'x-cache-hits': '1, 1',
  'x-timer': 'S1427829640.607695,VS0,VE0',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=YuZ6xgPsH9; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:20:40 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=radiohead&fmt=json')
  .reply(200, {"artist":"Radiohead","albums":[{"album":"Pablo Honey","year":"1993","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Pablo%20Honey","songs":["You","Creep","How Do You?","Stop Whispering","Thinking About You","Anyone Can Play Guitar","Ripcord","Vegetable","Prove Yourself","I Can't","Lurgee","Blow Out","Creep (Clean)"]},{"album":"Itch","year":"1994","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Itch","songs":["Stop Whispering","Thinking About You","Faithless, The Wonder Boy","Banana Co.","Killer Cars","Vegetable","You","Creep"]},{"album":"My Iron Lung","year":"1994","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20My%20Iron%20Lung","songs":["My Iron Lung","The Trickster","Lewis (Mistreated)","Punchdrunk Lovesick Singalong","Permanent Daylight","Lozenge Of Love","You Never Wash Up After Yourself","Creep"]},{"album":"The Bends","year":"1995","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20The%20Bends","songs":["Planet Telex","The Bends","High And Dry","Fake Plastic Trees","Bones","(Nice Dream)","Just","My Iron Lung","Bullet Proof..I Wish I Was","Black Star","Sulk","Street Spirit (Fade Out)"]},{"album":"OK Computer","year":"1997","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20OK%20Computer","songs":["Airbag","Paranoid Android","Subterranean Homesick Alien","Exit Music (For A Film)","Let Down","Karma Police","Fitter Happier","Electioneering","Climbing Up The Walls","No Surprises","Lucky","The Tourist"]},{"album":"No Surprises/Running From Demons","year":"1997","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20No%20Surprises/Running%20From%20Demons","songs":["No Surprises","Pearly*","Melatonin","Meeting In The Aisle","Bishop's Robes","A Reminder"]},{"album":"Airbag/How Am I Driving?","year":"1998","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Airbag/How%20Am%20I%20Driving?","songs":["Airbag","Pearly*","Meeting In The Aisle","A Reminder","Polyethylene (Parts 1 & 2)","Melatonin","Palo Alto"]},{"album":"Kid A","year":"2000","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Kid%20A","songs":["Everything In Its Right Place","Kid A","The National Anthem","How To Disappear Completely","Treefingers","Optimistic","In Limbo","Idioteque","Morning Bell","Motion Picture Soundtrack"]},{"album":"Amnesiac","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Amnesiac","songs":["Packt Like Sardines In A Crushd Tin Box","Pyramid Song","Pulk/Pull Revolving Doors","You And Whose Army?","I Might Be Wrong","Knives Out","Morning Bell/Amnesiac","Dollars & Cents","Hunting Bears","Like Spinning Plates","Life In A Glasshouse"]},{"album":"Hail To The Thief","year":"2003","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Hail%20To%20The%20Thief","songs":["2 + 2 = 5 (The Lukewarm.)","Sit Down. Stand Up. (Snakes & Ladders.)","Sail To The Moon. (Brush The Cobwebs Out Of The Sky.)","Backdrifts. (Honeymoon Is Over.)","Go To Sleep. (Little Man Being Erased.)","Where I End And You Begin. (The Sky Is Falling In.)","We Suck Young Blood. (Your Time Is Up.)","The Gloaming. (Softly Open Our Mouths In The Cold.)","There There. (The Boney King Of Nowhere.)","I Will. (No Man's Land.)","A Punchup At A Wedding. (No No No No No No No No.)","Myxomatosis. (Judge, Jury & Executioner.)","Scatterbrain. (As Dead As Leaves.)","A Wolf At The Door. (It Girl. Rag Doll.)"]},{"album":"In Rainbows","year":"2007","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20In%20Rainbows","songs":["15 Step","Bodysnatchers","Nude","Weird Fishes/Arpeggi","All I Need","Faust Arp","Reckoner","House Of Cards","Jigsaw Falling Into Place","Videotape","MK 1","Down Is The New Up","Go Slowly","MK 2","Last Flowers","Up On The Ladder","Bangers + Mash","4 Minute Warning"]},{"album":"The King Of Limbs","year":"2011","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20The%20King%20Of%20Limbs","songs":["Bloom","Morning Mr Magpie","Little By Little","Feral","Lotus Flower","Codex","Give Up The Ghost","Separator"]},{"album":"B-Sides","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20B-Sides","songs":["Inside My Head","Million Dollar Question","Yes I Am","Coke Babies","Maquiladora","India Rubber","How Can You Be Sure?","Talk Show Host","Bishop's Robes","Molasses","Lull","How I Made My Millions","The Amazing Sounds Of Orgy","Trans-Atlantic Drawl","Kinetic","Fast-Track","Cuttooth","Worrywort","Fog","Paperbag Writer","Where Bluebirds Fly","Fog (Again)","Gagging Order","I Am A Wicked Child","I Am Citizen Insane"]},{"album":"Unreleased","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Unreleased","songs":["Big Boots","The Chains","Climbing Up A Bloody Great Hill","Cut A Hole","The Daily Mail","Feeling Pulled Apart By Horses (AKA Reckoner Old Version)","Follow Me Around","Give It Up","Happy Song","Identikit","I Froze Up","Innocents Civilian","I Promise","I Want None Of This","Lift","Nobody Does It Better","No Surprises Please","Nothing Touches Me","Phillipa Chicken","The Present Tense","Rattlesnake","The Rip","Sinking Ship","Spooks","Staircase","Stupid Car","Tell Me Why","To Be A Brilliant Light","True Love Waits","Union City Blue","Unravel"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Other%20Songs","songs":["Cinnamon Girl (Neil Young Cover)","Good Evening Mrs. Magpie","Harry Patch (In Memory Of)","Man-O-War","Pop Is Dead","Remyxomatosis","Supercollider","The Butcher","These Are My Twisted Words","What Is It That You Say"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '7476',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:21:07 GMT',
  age: '11205',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3160-WIKIA, cache-iad2146-IAD',
  'x-cache': 'MISS, HIT',
  'x-cache-hits': '0, 1',
  'x-timer': 'S1427829667.032289,VS0,VE0',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=WpvyaeRqBx; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:21:07 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=radiohead&fmt=json')
  .reply(200, {"artist":"Radiohead","albums":[{"album":"Pablo Honey","year":"1993","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Pablo%20Honey","songs":["You","Creep","How Do You?","Stop Whispering","Thinking About You","Anyone Can Play Guitar","Ripcord","Vegetable","Prove Yourself","I Can't","Lurgee","Blow Out","Creep (Clean)"]},{"album":"Itch","year":"1994","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Itch","songs":["Stop Whispering","Thinking About You","Faithless, The Wonder Boy","Banana Co.","Killer Cars","Vegetable","You","Creep"]},{"album":"My Iron Lung","year":"1994","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20My%20Iron%20Lung","songs":["My Iron Lung","The Trickster","Lewis (Mistreated)","Punchdrunk Lovesick Singalong","Permanent Daylight","Lozenge Of Love","You Never Wash Up After Yourself","Creep"]},{"album":"The Bends","year":"1995","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20The%20Bends","songs":["Planet Telex","The Bends","High And Dry","Fake Plastic Trees","Bones","(Nice Dream)","Just","My Iron Lung","Bullet Proof..I Wish I Was","Black Star","Sulk","Street Spirit (Fade Out)"]},{"album":"OK Computer","year":"1997","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20OK%20Computer","songs":["Airbag","Paranoid Android","Subterranean Homesick Alien","Exit Music (For A Film)","Let Down","Karma Police","Fitter Happier","Electioneering","Climbing Up The Walls","No Surprises","Lucky","The Tourist"]},{"album":"No Surprises/Running From Demons","year":"1997","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20No%20Surprises/Running%20From%20Demons","songs":["No Surprises","Pearly*","Melatonin","Meeting In The Aisle","Bishop's Robes","A Reminder"]},{"album":"Airbag/How Am I Driving?","year":"1998","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Airbag/How%20Am%20I%20Driving?","songs":["Airbag","Pearly*","Meeting In The Aisle","A Reminder","Polyethylene (Parts 1 & 2)","Melatonin","Palo Alto"]},{"album":"Kid A","year":"2000","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Kid%20A","songs":["Everything In Its Right Place","Kid A","The National Anthem","How To Disappear Completely","Treefingers","Optimistic","In Limbo","Idioteque","Morning Bell","Motion Picture Soundtrack"]},{"album":"Amnesiac","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Amnesiac","songs":["Packt Like Sardines In A Crushd Tin Box","Pyramid Song","Pulk/Pull Revolving Doors","You And Whose Army?","I Might Be Wrong","Knives Out","Morning Bell/Amnesiac","Dollars & Cents","Hunting Bears","Like Spinning Plates","Life In A Glasshouse"]},{"album":"Hail To The Thief","year":"2003","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Hail%20To%20The%20Thief","songs":["2 + 2 = 5 (The Lukewarm.)","Sit Down. Stand Up. (Snakes & Ladders.)","Sail To The Moon. (Brush The Cobwebs Out Of The Sky.)","Backdrifts. (Honeymoon Is Over.)","Go To Sleep. (Little Man Being Erased.)","Where I End And You Begin. (The Sky Is Falling In.)","We Suck Young Blood. (Your Time Is Up.)","The Gloaming. (Softly Open Our Mouths In The Cold.)","There There. (The Boney King Of Nowhere.)","I Will. (No Man's Land.)","A Punchup At A Wedding. (No No No No No No No No.)","Myxomatosis. (Judge, Jury & Executioner.)","Scatterbrain. (As Dead As Leaves.)","A Wolf At The Door. (It Girl. Rag Doll.)"]},{"album":"In Rainbows","year":"2007","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20In%20Rainbows","songs":["15 Step","Bodysnatchers","Nude","Weird Fishes/Arpeggi","All I Need","Faust Arp","Reckoner","House Of Cards","Jigsaw Falling Into Place","Videotape","MK 1","Down Is The New Up","Go Slowly","MK 2","Last Flowers","Up On The Ladder","Bangers + Mash","4 Minute Warning"]},{"album":"The King Of Limbs","year":"2011","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20The%20King%20Of%20Limbs","songs":["Bloom","Morning Mr Magpie","Little By Little","Feral","Lotus Flower","Codex","Give Up The Ghost","Separator"]},{"album":"B-Sides","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20B-Sides","songs":["Inside My Head","Million Dollar Question","Yes I Am","Coke Babies","Maquiladora","India Rubber","How Can You Be Sure?","Talk Show Host","Bishop's Robes","Molasses","Lull","How I Made My Millions","The Amazing Sounds Of Orgy","Trans-Atlantic Drawl","Kinetic","Fast-Track","Cuttooth","Worrywort","Fog","Paperbag Writer","Where Bluebirds Fly","Fog (Again)","Gagging Order","I Am A Wicked Child","I Am Citizen Insane"]},{"album":"Unreleased","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Unreleased","songs":["Big Boots","The Chains","Climbing Up A Bloody Great Hill","Cut A Hole","The Daily Mail","Feeling Pulled Apart By Horses (AKA Reckoner Old Version)","Follow Me Around","Give It Up","Happy Song","Identikit","I Froze Up","Innocents Civilian","I Promise","I Want None Of This","Lift","Nobody Does It Better","No Surprises Please","Nothing Touches Me","Phillipa Chicken","The Present Tense","Rattlesnake","The Rip","Sinking Ship","Spooks","Staircase","Stupid Car","Tell Me Why","To Be A Brilliant Light","True Love Waits","Union City Blue","Unravel"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Other%20Songs","songs":["Cinnamon Girl (Neil Young Cover)","Good Evening Mrs. Magpie","Harry Patch (In Memory Of)","Man-O-War","Pop Is Dead","Remyxomatosis","Supercollider","The Butcher","These Are My Twisted Words","What Is It That You Say"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '7476',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:21:14 GMT',
  age: '11213',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3160-WIKIA, cache-iad2143-IAD',
  'x-cache': 'MISS, HIT',
  'x-cache-hits': '0, 1',
  'x-timer': 'S1427829674.635623,VS0,VE0',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=LaED9Ipk1z; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:21:14 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=radiohead&fmt=json')
  .reply(200, {"artist":"Radiohead","albums":[{"album":"Pablo Honey","year":"1993","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Pablo%20Honey","songs":["You","Creep","How Do You?","Stop Whispering","Thinking About You","Anyone Can Play Guitar","Ripcord","Vegetable","Prove Yourself","I Can't","Lurgee","Blow Out","Creep (Clean)"]},{"album":"Itch","year":"1994","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Itch","songs":["Stop Whispering","Thinking About You","Faithless, The Wonder Boy","Banana Co.","Killer Cars","Vegetable","You","Creep"]},{"album":"My Iron Lung","year":"1994","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20My%20Iron%20Lung","songs":["My Iron Lung","The Trickster","Lewis (Mistreated)","Punchdrunk Lovesick Singalong","Permanent Daylight","Lozenge Of Love","You Never Wash Up After Yourself","Creep"]},{"album":"The Bends","year":"1995","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20The%20Bends","songs":["Planet Telex","The Bends","High And Dry","Fake Plastic Trees","Bones","(Nice Dream)","Just","My Iron Lung","Bullet Proof..I Wish I Was","Black Star","Sulk","Street Spirit (Fade Out)"]},{"album":"OK Computer","year":"1997","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20OK%20Computer","songs":["Airbag","Paranoid Android","Subterranean Homesick Alien","Exit Music (For A Film)","Let Down","Karma Police","Fitter Happier","Electioneering","Climbing Up The Walls","No Surprises","Lucky","The Tourist"]},{"album":"No Surprises/Running From Demons","year":"1997","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20No%20Surprises/Running%20From%20Demons","songs":["No Surprises","Pearly*","Melatonin","Meeting In The Aisle","Bishop's Robes","A Reminder"]},{"album":"Airbag/How Am I Driving?","year":"1998","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Airbag/How%20Am%20I%20Driving?","songs":["Airbag","Pearly*","Meeting In The Aisle","A Reminder","Polyethylene (Parts 1 & 2)","Melatonin","Palo Alto"]},{"album":"Kid A","year":"2000","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Kid%20A","songs":["Everything In Its Right Place","Kid A","The National Anthem","How To Disappear Completely","Treefingers","Optimistic","In Limbo","Idioteque","Morning Bell","Motion Picture Soundtrack"]},{"album":"Amnesiac","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Amnesiac","songs":["Packt Like Sardines In A Crushd Tin Box","Pyramid Song","Pulk/Pull Revolving Doors","You And Whose Army?","I Might Be Wrong","Knives Out","Morning Bell/Amnesiac","Dollars & Cents","Hunting Bears","Like Spinning Plates","Life In A Glasshouse"]},{"album":"Hail To The Thief","year":"2003","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Hail%20To%20The%20Thief","songs":["2 + 2 = 5 (The Lukewarm.)","Sit Down. Stand Up. (Snakes & Ladders.)","Sail To The Moon. (Brush The Cobwebs Out Of The Sky.)","Backdrifts. (Honeymoon Is Over.)","Go To Sleep. (Little Man Being Erased.)","Where I End And You Begin. (The Sky Is Falling In.)","We Suck Young Blood. (Your Time Is Up.)","The Gloaming. (Softly Open Our Mouths In The Cold.)","There There. (The Boney King Of Nowhere.)","I Will. (No Man's Land.)","A Punchup At A Wedding. (No No No No No No No No.)","Myxomatosis. (Judge, Jury & Executioner.)","Scatterbrain. (As Dead As Leaves.)","A Wolf At The Door. (It Girl. Rag Doll.)"]},{"album":"In Rainbows","year":"2007","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20In%20Rainbows","songs":["15 Step","Bodysnatchers","Nude","Weird Fishes/Arpeggi","All I Need","Faust Arp","Reckoner","House Of Cards","Jigsaw Falling Into Place","Videotape","MK 1","Down Is The New Up","Go Slowly","MK 2","Last Flowers","Up On The Ladder","Bangers + Mash","4 Minute Warning"]},{"album":"The King Of Limbs","year":"2011","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20The%20King%20Of%20Limbs","songs":["Bloom","Morning Mr Magpie","Little By Little","Feral","Lotus Flower","Codex","Give Up The Ghost","Separator"]},{"album":"B-Sides","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20B-Sides","songs":["Inside My Head","Million Dollar Question","Yes I Am","Coke Babies","Maquiladora","India Rubber","How Can You Be Sure?","Talk Show Host","Bishop's Robes","Molasses","Lull","How I Made My Millions","The Amazing Sounds Of Orgy","Trans-Atlantic Drawl","Kinetic","Fast-Track","Cuttooth","Worrywort","Fog","Paperbag Writer","Where Bluebirds Fly","Fog (Again)","Gagging Order","I Am A Wicked Child","I Am Citizen Insane"]},{"album":"Unreleased","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Unreleased","songs":["Big Boots","The Chains","Climbing Up A Bloody Great Hill","Cut A Hole","The Daily Mail","Feeling Pulled Apart By Horses (AKA Reckoner Old Version)","Follow Me Around","Give It Up","Happy Song","Identikit","I Froze Up","Innocents Civilian","I Promise","I Want None Of This","Lift","Nobody Does It Better","No Surprises Please","Nothing Touches Me","Phillipa Chicken","The Present Tense","Rattlesnake","The Rip","Sinking Ship","Spooks","Staircase","Stupid Car","Tell Me Why","To Be A Brilliant Light","True Love Waits","Union City Blue","Unravel"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Other%20Songs","songs":["Cinnamon Girl (Neil Young Cover)","Good Evening Mrs. Magpie","Harry Patch (In Memory Of)","Man-O-War","Pop Is Dead","Remyxomatosis","Supercollider","The Butcher","These Are My Twisted Words","What Is It That You Say"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '7476',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:21:42 GMT',
  age: '11241',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3161-WIKIA, cache-atl6222-ATL',
  'x-cache': 'HIT, HIT',
  'x-cache-hits': '1, 1',
  'x-timer': 'S1427829702.958900,VS0,VE2',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=Cj_QXlR7Zk; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:21:42 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=radiohead&fmt=json')
  .reply(200, {"artist":"Radiohead","albums":[{"album":"Pablo Honey","year":"1993","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Pablo%20Honey","songs":["You","Creep","How Do You?","Stop Whispering","Thinking About You","Anyone Can Play Guitar","Ripcord","Vegetable","Prove Yourself","I Can't","Lurgee","Blow Out","Creep (Clean)"]},{"album":"Itch","year":"1994","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Itch","songs":["Stop Whispering","Thinking About You","Faithless, The Wonder Boy","Banana Co.","Killer Cars","Vegetable","You","Creep"]},{"album":"My Iron Lung","year":"1994","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20My%20Iron%20Lung","songs":["My Iron Lung","The Trickster","Lewis (Mistreated)","Punchdrunk Lovesick Singalong","Permanent Daylight","Lozenge Of Love","You Never Wash Up After Yourself","Creep"]},{"album":"The Bends","year":"1995","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20The%20Bends","songs":["Planet Telex","The Bends","High And Dry","Fake Plastic Trees","Bones","(Nice Dream)","Just","My Iron Lung","Bullet Proof..I Wish I Was","Black Star","Sulk","Street Spirit (Fade Out)"]},{"album":"OK Computer","year":"1997","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20OK%20Computer","songs":["Airbag","Paranoid Android","Subterranean Homesick Alien","Exit Music (For A Film)","Let Down","Karma Police","Fitter Happier","Electioneering","Climbing Up The Walls","No Surprises","Lucky","The Tourist"]},{"album":"No Surprises/Running From Demons","year":"1997","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20No%20Surprises/Running%20From%20Demons","songs":["No Surprises","Pearly*","Melatonin","Meeting In The Aisle","Bishop's Robes","A Reminder"]},{"album":"Airbag/How Am I Driving?","year":"1998","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Airbag/How%20Am%20I%20Driving?","songs":["Airbag","Pearly*","Meeting In The Aisle","A Reminder","Polyethylene (Parts 1 & 2)","Melatonin","Palo Alto"]},{"album":"Kid A","year":"2000","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Kid%20A","songs":["Everything In Its Right Place","Kid A","The National Anthem","How To Disappear Completely","Treefingers","Optimistic","In Limbo","Idioteque","Morning Bell","Motion Picture Soundtrack"]},{"album":"Amnesiac","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Amnesiac","songs":["Packt Like Sardines In A Crushd Tin Box","Pyramid Song","Pulk/Pull Revolving Doors","You And Whose Army?","I Might Be Wrong","Knives Out","Morning Bell/Amnesiac","Dollars & Cents","Hunting Bears","Like Spinning Plates","Life In A Glasshouse"]},{"album":"Hail To The Thief","year":"2003","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Hail%20To%20The%20Thief","songs":["2 + 2 = 5 (The Lukewarm.)","Sit Down. Stand Up. (Snakes & Ladders.)","Sail To The Moon. (Brush The Cobwebs Out Of The Sky.)","Backdrifts. (Honeymoon Is Over.)","Go To Sleep. (Little Man Being Erased.)","Where I End And You Begin. (The Sky Is Falling In.)","We Suck Young Blood. (Your Time Is Up.)","The Gloaming. (Softly Open Our Mouths In The Cold.)","There There. (The Boney King Of Nowhere.)","I Will. (No Man's Land.)","A Punchup At A Wedding. (No No No No No No No No.)","Myxomatosis. (Judge, Jury & Executioner.)","Scatterbrain. (As Dead As Leaves.)","A Wolf At The Door. (It Girl. Rag Doll.)"]},{"album":"In Rainbows","year":"2007","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20In%20Rainbows","songs":["15 Step","Bodysnatchers","Nude","Weird Fishes/Arpeggi","All I Need","Faust Arp","Reckoner","House Of Cards","Jigsaw Falling Into Place","Videotape","MK 1","Down Is The New Up","Go Slowly","MK 2","Last Flowers","Up On The Ladder","Bangers + Mash","4 Minute Warning"]},{"album":"The King Of Limbs","year":"2011","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20The%20King%20Of%20Limbs","songs":["Bloom","Morning Mr Magpie","Little By Little","Feral","Lotus Flower","Codex","Give Up The Ghost","Separator"]},{"album":"B-Sides","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20B-Sides","songs":["Inside My Head","Million Dollar Question","Yes I Am","Coke Babies","Maquiladora","India Rubber","How Can You Be Sure?","Talk Show Host","Bishop's Robes","Molasses","Lull","How I Made My Millions","The Amazing Sounds Of Orgy","Trans-Atlantic Drawl","Kinetic","Fast-Track","Cuttooth","Worrywort","Fog","Paperbag Writer","Where Bluebirds Fly","Fog (Again)","Gagging Order","I Am A Wicked Child","I Am Citizen Insane"]},{"album":"Unreleased","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Unreleased","songs":["Big Boots","The Chains","Climbing Up A Bloody Great Hill","Cut A Hole","The Daily Mail","Feeling Pulled Apart By Horses (AKA Reckoner Old Version)","Follow Me Around","Give It Up","Happy Song","Identikit","I Froze Up","Innocents Civilian","I Promise","I Want None Of This","Lift","Nobody Does It Better","No Surprises Please","Nothing Touches Me","Phillipa Chicken","The Present Tense","Rattlesnake","The Rip","Sinking Ship","Spooks","Staircase","Stupid Car","Tell Me Why","To Be A Brilliant Light","True Love Waits","Union City Blue","Unravel"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Other%20Songs","songs":["Cinnamon Girl (Neil Young Cover)","Good Evening Mrs. Magpie","Harry Patch (In Memory Of)","Man-O-War","Pop Is Dead","Remyxomatosis","Supercollider","The Butcher","These Are My Twisted Words","What Is It That You Say"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '7476',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:22:29 GMT',
  age: '11287',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3160-WIKIA, cache-iad2129-IAD',
  'x-cache': 'MISS, HIT',
  'x-cache-hits': '0, 1',
  'x-timer': 'S1427829749.012959,VS0,VE0',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=9L0bluD_rg; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:22:29 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=radiohead&fmt=json')
  .reply(200, {"artist":"Radiohead","albums":[{"album":"Pablo Honey","year":"1993","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Pablo%20Honey","songs":["You","Creep","How Do You?","Stop Whispering","Thinking About You","Anyone Can Play Guitar","Ripcord","Vegetable","Prove Yourself","I Can't","Lurgee","Blow Out","Creep (Clean)"]},{"album":"Itch","year":"1994","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Itch","songs":["Stop Whispering","Thinking About You","Faithless, The Wonder Boy","Banana Co.","Killer Cars","Vegetable","You","Creep"]},{"album":"My Iron Lung","year":"1994","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20My%20Iron%20Lung","songs":["My Iron Lung","The Trickster","Lewis (Mistreated)","Punchdrunk Lovesick Singalong","Permanent Daylight","Lozenge Of Love","You Never Wash Up After Yourself","Creep"]},{"album":"The Bends","year":"1995","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20The%20Bends","songs":["Planet Telex","The Bends","High And Dry","Fake Plastic Trees","Bones","(Nice Dream)","Just","My Iron Lung","Bullet Proof..I Wish I Was","Black Star","Sulk","Street Spirit (Fade Out)"]},{"album":"OK Computer","year":"1997","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20OK%20Computer","songs":["Airbag","Paranoid Android","Subterranean Homesick Alien","Exit Music (For A Film)","Let Down","Karma Police","Fitter Happier","Electioneering","Climbing Up The Walls","No Surprises","Lucky","The Tourist"]},{"album":"No Surprises/Running From Demons","year":"1997","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20No%20Surprises/Running%20From%20Demons","songs":["No Surprises","Pearly*","Melatonin","Meeting In The Aisle","Bishop's Robes","A Reminder"]},{"album":"Airbag/How Am I Driving?","year":"1998","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Airbag/How%20Am%20I%20Driving?","songs":["Airbag","Pearly*","Meeting In The Aisle","A Reminder","Polyethylene (Parts 1 & 2)","Melatonin","Palo Alto"]},{"album":"Kid A","year":"2000","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Kid%20A","songs":["Everything In Its Right Place","Kid A","The National Anthem","How To Disappear Completely","Treefingers","Optimistic","In Limbo","Idioteque","Morning Bell","Motion Picture Soundtrack"]},{"album":"Amnesiac","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Amnesiac","songs":["Packt Like Sardines In A Crushd Tin Box","Pyramid Song","Pulk/Pull Revolving Doors","You And Whose Army?","I Might Be Wrong","Knives Out","Morning Bell/Amnesiac","Dollars & Cents","Hunting Bears","Like Spinning Plates","Life In A Glasshouse"]},{"album":"Hail To The Thief","year":"2003","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Hail%20To%20The%20Thief","songs":["2 + 2 = 5 (The Lukewarm.)","Sit Down. Stand Up. (Snakes & Ladders.)","Sail To The Moon. (Brush The Cobwebs Out Of The Sky.)","Backdrifts. (Honeymoon Is Over.)","Go To Sleep. (Little Man Being Erased.)","Where I End And You Begin. (The Sky Is Falling In.)","We Suck Young Blood. (Your Time Is Up.)","The Gloaming. (Softly Open Our Mouths In The Cold.)","There There. (The Boney King Of Nowhere.)","I Will. (No Man's Land.)","A Punchup At A Wedding. (No No No No No No No No.)","Myxomatosis. (Judge, Jury & Executioner.)","Scatterbrain. (As Dead As Leaves.)","A Wolf At The Door. (It Girl. Rag Doll.)"]},{"album":"In Rainbows","year":"2007","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20In%20Rainbows","songs":["15 Step","Bodysnatchers","Nude","Weird Fishes/Arpeggi","All I Need","Faust Arp","Reckoner","House Of Cards","Jigsaw Falling Into Place","Videotape","MK 1","Down Is The New Up","Go Slowly","MK 2","Last Flowers","Up On The Ladder","Bangers + Mash","4 Minute Warning"]},{"album":"The King Of Limbs","year":"2011","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20The%20King%20Of%20Limbs","songs":["Bloom","Morning Mr Magpie","Little By Little","Feral","Lotus Flower","Codex","Give Up The Ghost","Separator"]},{"album":"B-Sides","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20B-Sides","songs":["Inside My Head","Million Dollar Question","Yes I Am","Coke Babies","Maquiladora","India Rubber","How Can You Be Sure?","Talk Show Host","Bishop's Robes","Molasses","Lull","How I Made My Millions","The Amazing Sounds Of Orgy","Trans-Atlantic Drawl","Kinetic","Fast-Track","Cuttooth","Worrywort","Fog","Paperbag Writer","Where Bluebirds Fly","Fog (Again)","Gagging Order","I Am A Wicked Child","I Am Citizen Insane"]},{"album":"Unreleased","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Unreleased","songs":["Big Boots","The Chains","Climbing Up A Bloody Great Hill","Cut A Hole","The Daily Mail","Feeling Pulled Apart By Horses (AKA Reckoner Old Version)","Follow Me Around","Give It Up","Happy Song","Identikit","I Froze Up","Innocents Civilian","I Promise","I Want None Of This","Lift","Nobody Does It Better","No Surprises Please","Nothing Touches Me","Phillipa Chicken","The Present Tense","Rattlesnake","The Rip","Sinking Ship","Spooks","Staircase","Stupid Car","Tell Me Why","To Be A Brilliant Light","True Love Waits","Union City Blue","Unravel"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Other%20Songs","songs":["Cinnamon Girl (Neil Young Cover)","Good Evening Mrs. Magpie","Harry Patch (In Memory Of)","Man-O-War","Pop Is Dead","Remyxomatosis","Supercollider","The Butcher","These Are My Twisted Words","What Is It That You Say"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '7476',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:22:42 GMT',
  age: '11301',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3160-WIKIA, cache-iad2147-IAD',
  'x-cache': 'MISS, HIT',
  'x-cache-hits': '0, 1',
  'x-timer': 'S1427829762.714246,VS0,VE0',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=aheGbGh_vZ; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:22:42 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=radiohead&fmt=json')
  .reply(200, {"artist":"Radiohead","albums":[{"album":"Pablo Honey","year":"1993","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Pablo%20Honey","songs":["You","Creep","How Do You?","Stop Whispering","Thinking About You","Anyone Can Play Guitar","Ripcord","Vegetable","Prove Yourself","I Can't","Lurgee","Blow Out","Creep (Clean)"]},{"album":"Itch","year":"1994","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Itch","songs":["Stop Whispering","Thinking About You","Faithless, The Wonder Boy","Banana Co.","Killer Cars","Vegetable","You","Creep"]},{"album":"My Iron Lung","year":"1994","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20My%20Iron%20Lung","songs":["My Iron Lung","The Trickster","Lewis (Mistreated)","Punchdrunk Lovesick Singalong","Permanent Daylight","Lozenge Of Love","You Never Wash Up After Yourself","Creep"]},{"album":"The Bends","year":"1995","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20The%20Bends","songs":["Planet Telex","The Bends","High And Dry","Fake Plastic Trees","Bones","(Nice Dream)","Just","My Iron Lung","Bullet Proof..I Wish I Was","Black Star","Sulk","Street Spirit (Fade Out)"]},{"album":"OK Computer","year":"1997","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20OK%20Computer","songs":["Airbag","Paranoid Android","Subterranean Homesick Alien","Exit Music (For A Film)","Let Down","Karma Police","Fitter Happier","Electioneering","Climbing Up The Walls","No Surprises","Lucky","The Tourist"]},{"album":"No Surprises/Running From Demons","year":"1997","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20No%20Surprises/Running%20From%20Demons","songs":["No Surprises","Pearly*","Melatonin","Meeting In The Aisle","Bishop's Robes","A Reminder"]},{"album":"Airbag/How Am I Driving?","year":"1998","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Airbag/How%20Am%20I%20Driving?","songs":["Airbag","Pearly*","Meeting In The Aisle","A Reminder","Polyethylene (Parts 1 & 2)","Melatonin","Palo Alto"]},{"album":"Kid A","year":"2000","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Kid%20A","songs":["Everything In Its Right Place","Kid A","The National Anthem","How To Disappear Completely","Treefingers","Optimistic","In Limbo","Idioteque","Morning Bell","Motion Picture Soundtrack"]},{"album":"Amnesiac","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Amnesiac","songs":["Packt Like Sardines In A Crushd Tin Box","Pyramid Song","Pulk/Pull Revolving Doors","You And Whose Army?","I Might Be Wrong","Knives Out","Morning Bell/Amnesiac","Dollars & Cents","Hunting Bears","Like Spinning Plates","Life In A Glasshouse"]},{"album":"Hail To The Thief","year":"2003","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Hail%20To%20The%20Thief","songs":["2 + 2 = 5 (The Lukewarm.)","Sit Down. Stand Up. (Snakes & Ladders.)","Sail To The Moon. (Brush The Cobwebs Out Of The Sky.)","Backdrifts. (Honeymoon Is Over.)","Go To Sleep. (Little Man Being Erased.)","Where I End And You Begin. (The Sky Is Falling In.)","We Suck Young Blood. (Your Time Is Up.)","The Gloaming. (Softly Open Our Mouths In The Cold.)","There There. (The Boney King Of Nowhere.)","I Will. (No Man's Land.)","A Punchup At A Wedding. (No No No No No No No No.)","Myxomatosis. (Judge, Jury & Executioner.)","Scatterbrain. (As Dead As Leaves.)","A Wolf At The Door. (It Girl. Rag Doll.)"]},{"album":"In Rainbows","year":"2007","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20In%20Rainbows","songs":["15 Step","Bodysnatchers","Nude","Weird Fishes/Arpeggi","All I Need","Faust Arp","Reckoner","House Of Cards","Jigsaw Falling Into Place","Videotape","MK 1","Down Is The New Up","Go Slowly","MK 2","Last Flowers","Up On The Ladder","Bangers + Mash","4 Minute Warning"]},{"album":"The King Of Limbs","year":"2011","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20The%20King%20Of%20Limbs","songs":["Bloom","Morning Mr Magpie","Little By Little","Feral","Lotus Flower","Codex","Give Up The Ghost","Separator"]},{"album":"B-Sides","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20B-Sides","songs":["Inside My Head","Million Dollar Question","Yes I Am","Coke Babies","Maquiladora","India Rubber","How Can You Be Sure?","Talk Show Host","Bishop's Robes","Molasses","Lull","How I Made My Millions","The Amazing Sounds Of Orgy","Trans-Atlantic Drawl","Kinetic","Fast-Track","Cuttooth","Worrywort","Fog","Paperbag Writer","Where Bluebirds Fly","Fog (Again)","Gagging Order","I Am A Wicked Child","I Am Citizen Insane"]},{"album":"Unreleased","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Unreleased","songs":["Big Boots","The Chains","Climbing Up A Bloody Great Hill","Cut A Hole","The Daily Mail","Feeling Pulled Apart By Horses (AKA Reckoner Old Version)","Follow Me Around","Give It Up","Happy Song","Identikit","I Froze Up","Innocents Civilian","I Promise","I Want None Of This","Lift","Nobody Does It Better","No Surprises Please","Nothing Touches Me","Phillipa Chicken","The Present Tense","Rattlesnake","The Rip","Sinking Ship","Spooks","Staircase","Stupid Car","Tell Me Why","To Be A Brilliant Light","True Love Waits","Union City Blue","Unravel"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Other%20Songs","songs":["Cinnamon Girl (Neil Young Cover)","Good Evening Mrs. Magpie","Harry Patch (In Memory Of)","Man-O-War","Pop Is Dead","Remyxomatosis","Supercollider","The Butcher","These Are My Twisted Words","What Is It That You Say"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '7476',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:23:02 GMT',
  age: '11321',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3160-WIKIA, cache-jfk1020-JFK',
  'x-cache': 'HIT, HIT',
  'x-cache-hits': '1, 3',
  'x-timer': 'S1427829782.292113,VS0,VE0',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=8dpQ0ucqQk; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:23:02 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=radiohead&fmt=json')
  .reply(200, {"artist":"Radiohead","albums":[{"album":"Pablo Honey","year":"1993","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Pablo%20Honey","songs":["You","Creep","How Do You?","Stop Whispering","Thinking About You","Anyone Can Play Guitar","Ripcord","Vegetable","Prove Yourself","I Can't","Lurgee","Blow Out","Creep (Clean)"]},{"album":"Itch","year":"1994","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Itch","songs":["Stop Whispering","Thinking About You","Faithless, The Wonder Boy","Banana Co.","Killer Cars","Vegetable","You","Creep"]},{"album":"My Iron Lung","year":"1994","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20My%20Iron%20Lung","songs":["My Iron Lung","The Trickster","Lewis (Mistreated)","Punchdrunk Lovesick Singalong","Permanent Daylight","Lozenge Of Love","You Never Wash Up After Yourself","Creep"]},{"album":"The Bends","year":"1995","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20The%20Bends","songs":["Planet Telex","The Bends","High And Dry","Fake Plastic Trees","Bones","(Nice Dream)","Just","My Iron Lung","Bullet Proof..I Wish I Was","Black Star","Sulk","Street Spirit (Fade Out)"]},{"album":"OK Computer","year":"1997","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20OK%20Computer","songs":["Airbag","Paranoid Android","Subterranean Homesick Alien","Exit Music (For A Film)","Let Down","Karma Police","Fitter Happier","Electioneering","Climbing Up The Walls","No Surprises","Lucky","The Tourist"]},{"album":"No Surprises/Running From Demons","year":"1997","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20No%20Surprises/Running%20From%20Demons","songs":["No Surprises","Pearly*","Melatonin","Meeting In The Aisle","Bishop's Robes","A Reminder"]},{"album":"Airbag/How Am I Driving?","year":"1998","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Airbag/How%20Am%20I%20Driving?","songs":["Airbag","Pearly*","Meeting In The Aisle","A Reminder","Polyethylene (Parts 1 & 2)","Melatonin","Palo Alto"]},{"album":"Kid A","year":"2000","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Kid%20A","songs":["Everything In Its Right Place","Kid A","The National Anthem","How To Disappear Completely","Treefingers","Optimistic","In Limbo","Idioteque","Morning Bell","Motion Picture Soundtrack"]},{"album":"Amnesiac","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Amnesiac","songs":["Packt Like Sardines In A Crushd Tin Box","Pyramid Song","Pulk/Pull Revolving Doors","You And Whose Army?","I Might Be Wrong","Knives Out","Morning Bell/Amnesiac","Dollars & Cents","Hunting Bears","Like Spinning Plates","Life In A Glasshouse"]},{"album":"Hail To The Thief","year":"2003","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Hail%20To%20The%20Thief","songs":["2 + 2 = 5 (The Lukewarm.)","Sit Down. Stand Up. (Snakes & Ladders.)","Sail To The Moon. (Brush The Cobwebs Out Of The Sky.)","Backdrifts. (Honeymoon Is Over.)","Go To Sleep. (Little Man Being Erased.)","Where I End And You Begin. (The Sky Is Falling In.)","We Suck Young Blood. (Your Time Is Up.)","The Gloaming. (Softly Open Our Mouths In The Cold.)","There There. (The Boney King Of Nowhere.)","I Will. (No Man's Land.)","A Punchup At A Wedding. (No No No No No No No No.)","Myxomatosis. (Judge, Jury & Executioner.)","Scatterbrain. (As Dead As Leaves.)","A Wolf At The Door. (It Girl. Rag Doll.)"]},{"album":"In Rainbows","year":"2007","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20In%20Rainbows","songs":["15 Step","Bodysnatchers","Nude","Weird Fishes/Arpeggi","All I Need","Faust Arp","Reckoner","House Of Cards","Jigsaw Falling Into Place","Videotape","MK 1","Down Is The New Up","Go Slowly","MK 2","Last Flowers","Up On The Ladder","Bangers + Mash","4 Minute Warning"]},{"album":"The King Of Limbs","year":"2011","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20The%20King%20Of%20Limbs","songs":["Bloom","Morning Mr Magpie","Little By Little","Feral","Lotus Flower","Codex","Give Up The Ghost","Separator"]},{"album":"B-Sides","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20B-Sides","songs":["Inside My Head","Million Dollar Question","Yes I Am","Coke Babies","Maquiladora","India Rubber","How Can You Be Sure?","Talk Show Host","Bishop's Robes","Molasses","Lull","How I Made My Millions","The Amazing Sounds Of Orgy","Trans-Atlantic Drawl","Kinetic","Fast-Track","Cuttooth","Worrywort","Fog","Paperbag Writer","Where Bluebirds Fly","Fog (Again)","Gagging Order","I Am A Wicked Child","I Am Citizen Insane"]},{"album":"Unreleased","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Unreleased","songs":["Big Boots","The Chains","Climbing Up A Bloody Great Hill","Cut A Hole","The Daily Mail","Feeling Pulled Apart By Horses (AKA Reckoner Old Version)","Follow Me Around","Give It Up","Happy Song","Identikit","I Froze Up","Innocents Civilian","I Promise","I Want None Of This","Lift","Nobody Does It Better","No Surprises Please","Nothing Touches Me","Phillipa Chicken","The Present Tense","Rattlesnake","The Rip","Sinking Ship","Spooks","Staircase","Stupid Car","Tell Me Why","To Be A Brilliant Light","True Love Waits","Union City Blue","Unravel"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Other%20Songs","songs":["Cinnamon Girl (Neil Young Cover)","Good Evening Mrs. Magpie","Harry Patch (In Memory Of)","Man-O-War","Pop Is Dead","Remyxomatosis","Supercollider","The Butcher","These Are My Twisted Words","What Is It That You Say"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '7476',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:23:47 GMT',
  age: '11366',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3160-WIKIA, cache-iad2133-IAD',
  'x-cache': 'MISS, HIT',
  'x-cache-hits': '0, 1',
  'x-timer': 'S1427829827.782557,VS0,VE0',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=htwPPHmcxN; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:23:47 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=radiohead&fmt=json')
  .reply(200, {"artist":"Radiohead","albums":[{"album":"Pablo Honey","year":"1993","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Pablo%20Honey","songs":["You","Creep","How Do You?","Stop Whispering","Thinking About You","Anyone Can Play Guitar","Ripcord","Vegetable","Prove Yourself","I Can't","Lurgee","Blow Out","Creep (Clean)"]},{"album":"Itch","year":"1994","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Itch","songs":["Stop Whispering","Thinking About You","Faithless, The Wonder Boy","Banana Co.","Killer Cars","Vegetable","You","Creep"]},{"album":"My Iron Lung","year":"1994","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20My%20Iron%20Lung","songs":["My Iron Lung","The Trickster","Lewis (Mistreated)","Punchdrunk Lovesick Singalong","Permanent Daylight","Lozenge Of Love","You Never Wash Up After Yourself","Creep"]},{"album":"The Bends","year":"1995","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20The%20Bends","songs":["Planet Telex","The Bends","High And Dry","Fake Plastic Trees","Bones","(Nice Dream)","Just","My Iron Lung","Bullet Proof..I Wish I Was","Black Star","Sulk","Street Spirit (Fade Out)"]},{"album":"OK Computer","year":"1997","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20OK%20Computer","songs":["Airbag","Paranoid Android","Subterranean Homesick Alien","Exit Music (For A Film)","Let Down","Karma Police","Fitter Happier","Electioneering","Climbing Up The Walls","No Surprises","Lucky","The Tourist"]},{"album":"No Surprises/Running From Demons","year":"1997","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20No%20Surprises/Running%20From%20Demons","songs":["No Surprises","Pearly*","Melatonin","Meeting In The Aisle","Bishop's Robes","A Reminder"]},{"album":"Airbag/How Am I Driving?","year":"1998","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Airbag/How%20Am%20I%20Driving?","songs":["Airbag","Pearly*","Meeting In The Aisle","A Reminder","Polyethylene (Parts 1 & 2)","Melatonin","Palo Alto"]},{"album":"Kid A","year":"2000","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Kid%20A","songs":["Everything In Its Right Place","Kid A","The National Anthem","How To Disappear Completely","Treefingers","Optimistic","In Limbo","Idioteque","Morning Bell","Motion Picture Soundtrack"]},{"album":"Amnesiac","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Amnesiac","songs":["Packt Like Sardines In A Crushd Tin Box","Pyramid Song","Pulk/Pull Revolving Doors","You And Whose Army?","I Might Be Wrong","Knives Out","Morning Bell/Amnesiac","Dollars & Cents","Hunting Bears","Like Spinning Plates","Life In A Glasshouse"]},{"album":"Hail To The Thief","year":"2003","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Hail%20To%20The%20Thief","songs":["2 + 2 = 5 (The Lukewarm.)","Sit Down. Stand Up. (Snakes & Ladders.)","Sail To The Moon. (Brush The Cobwebs Out Of The Sky.)","Backdrifts. (Honeymoon Is Over.)","Go To Sleep. (Little Man Being Erased.)","Where I End And You Begin. (The Sky Is Falling In.)","We Suck Young Blood. (Your Time Is Up.)","The Gloaming. (Softly Open Our Mouths In The Cold.)","There There. (The Boney King Of Nowhere.)","I Will. (No Man's Land.)","A Punchup At A Wedding. (No No No No No No No No.)","Myxomatosis. (Judge, Jury & Executioner.)","Scatterbrain. (As Dead As Leaves.)","A Wolf At The Door. (It Girl. Rag Doll.)"]},{"album":"In Rainbows","year":"2007","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20In%20Rainbows","songs":["15 Step","Bodysnatchers","Nude","Weird Fishes/Arpeggi","All I Need","Faust Arp","Reckoner","House Of Cards","Jigsaw Falling Into Place","Videotape","MK 1","Down Is The New Up","Go Slowly","MK 2","Last Flowers","Up On The Ladder","Bangers + Mash","4 Minute Warning"]},{"album":"The King Of Limbs","year":"2011","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20The%20King%20Of%20Limbs","songs":["Bloom","Morning Mr Magpie","Little By Little","Feral","Lotus Flower","Codex","Give Up The Ghost","Separator"]},{"album":"B-Sides","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20B-Sides","songs":["Inside My Head","Million Dollar Question","Yes I Am","Coke Babies","Maquiladora","India Rubber","How Can You Be Sure?","Talk Show Host","Bishop's Robes","Molasses","Lull","How I Made My Millions","The Amazing Sounds Of Orgy","Trans-Atlantic Drawl","Kinetic","Fast-Track","Cuttooth","Worrywort","Fog","Paperbag Writer","Where Bluebirds Fly","Fog (Again)","Gagging Order","I Am A Wicked Child","I Am Citizen Insane"]},{"album":"Unreleased","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Unreleased","songs":["Big Boots","The Chains","Climbing Up A Bloody Great Hill","Cut A Hole","The Daily Mail","Feeling Pulled Apart By Horses (AKA Reckoner Old Version)","Follow Me Around","Give It Up","Happy Song","Identikit","I Froze Up","Innocents Civilian","I Promise","I Want None Of This","Lift","Nobody Does It Better","No Surprises Please","Nothing Touches Me","Phillipa Chicken","The Present Tense","Rattlesnake","The Rip","Sinking Ship","Spooks","Staircase","Stupid Car","Tell Me Why","To Be A Brilliant Light","True Love Waits","Union City Blue","Unravel"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Other%20Songs","songs":["Cinnamon Girl (Neil Young Cover)","Good Evening Mrs. Magpie","Harry Patch (In Memory Of)","Man-O-War","Pop Is Dead","Remyxomatosis","Supercollider","The Butcher","These Are My Twisted Words","What Is It That You Say"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '7476',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:23:49 GMT',
  age: '11368',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3160-WIKIA, cache-iad2142-IAD',
  'x-cache': 'MISS, HIT',
  'x-cache-hits': '0, 1',
  'x-timer': 'S1427829829.299927,VS0,VE0',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=QlJSGs3C7V; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:23:49 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=radiohead&fmt=json')
  .reply(200, {"artist":"Radiohead","albums":[{"album":"Pablo Honey","year":"1993","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Pablo%20Honey","songs":["You","Creep","How Do You?","Stop Whispering","Thinking About You","Anyone Can Play Guitar","Ripcord","Vegetable","Prove Yourself","I Can't","Lurgee","Blow Out","Creep (Clean)"]},{"album":"Itch","year":"1994","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Itch","songs":["Stop Whispering","Thinking About You","Faithless, The Wonder Boy","Banana Co.","Killer Cars","Vegetable","You","Creep"]},{"album":"My Iron Lung","year":"1994","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20My%20Iron%20Lung","songs":["My Iron Lung","The Trickster","Lewis (Mistreated)","Punchdrunk Lovesick Singalong","Permanent Daylight","Lozenge Of Love","You Never Wash Up After Yourself","Creep"]},{"album":"The Bends","year":"1995","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20The%20Bends","songs":["Planet Telex","The Bends","High And Dry","Fake Plastic Trees","Bones","(Nice Dream)","Just","My Iron Lung","Bullet Proof..I Wish I Was","Black Star","Sulk","Street Spirit (Fade Out)"]},{"album":"OK Computer","year":"1997","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20OK%20Computer","songs":["Airbag","Paranoid Android","Subterranean Homesick Alien","Exit Music (For A Film)","Let Down","Karma Police","Fitter Happier","Electioneering","Climbing Up The Walls","No Surprises","Lucky","The Tourist"]},{"album":"No Surprises/Running From Demons","year":"1997","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20No%20Surprises/Running%20From%20Demons","songs":["No Surprises","Pearly*","Melatonin","Meeting In The Aisle","Bishop's Robes","A Reminder"]},{"album":"Airbag/How Am I Driving?","year":"1998","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Airbag/How%20Am%20I%20Driving?","songs":["Airbag","Pearly*","Meeting In The Aisle","A Reminder","Polyethylene (Parts 1 & 2)","Melatonin","Palo Alto"]},{"album":"Kid A","year":"2000","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Kid%20A","songs":["Everything In Its Right Place","Kid A","The National Anthem","How To Disappear Completely","Treefingers","Optimistic","In Limbo","Idioteque","Morning Bell","Motion Picture Soundtrack"]},{"album":"Amnesiac","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Amnesiac","songs":["Packt Like Sardines In A Crushd Tin Box","Pyramid Song","Pulk/Pull Revolving Doors","You And Whose Army?","I Might Be Wrong","Knives Out","Morning Bell/Amnesiac","Dollars & Cents","Hunting Bears","Like Spinning Plates","Life In A Glasshouse"]},{"album":"Hail To The Thief","year":"2003","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Hail%20To%20The%20Thief","songs":["2 + 2 = 5 (The Lukewarm.)","Sit Down. Stand Up. (Snakes & Ladders.)","Sail To The Moon. (Brush The Cobwebs Out Of The Sky.)","Backdrifts. (Honeymoon Is Over.)","Go To Sleep. (Little Man Being Erased.)","Where I End And You Begin. (The Sky Is Falling In.)","We Suck Young Blood. (Your Time Is Up.)","The Gloaming. (Softly Open Our Mouths In The Cold.)","There There. (The Boney King Of Nowhere.)","I Will. (No Man's Land.)","A Punchup At A Wedding. (No No No No No No No No.)","Myxomatosis. (Judge, Jury & Executioner.)","Scatterbrain. (As Dead As Leaves.)","A Wolf At The Door. (It Girl. Rag Doll.)"]},{"album":"In Rainbows","year":"2007","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20In%20Rainbows","songs":["15 Step","Bodysnatchers","Nude","Weird Fishes/Arpeggi","All I Need","Faust Arp","Reckoner","House Of Cards","Jigsaw Falling Into Place","Videotape","MK 1","Down Is The New Up","Go Slowly","MK 2","Last Flowers","Up On The Ladder","Bangers + Mash","4 Minute Warning"]},{"album":"The King Of Limbs","year":"2011","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20The%20King%20Of%20Limbs","songs":["Bloom","Morning Mr Magpie","Little By Little","Feral","Lotus Flower","Codex","Give Up The Ghost","Separator"]},{"album":"B-Sides","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20B-Sides","songs":["Inside My Head","Million Dollar Question","Yes I Am","Coke Babies","Maquiladora","India Rubber","How Can You Be Sure?","Talk Show Host","Bishop's Robes","Molasses","Lull","How I Made My Millions","The Amazing Sounds Of Orgy","Trans-Atlantic Drawl","Kinetic","Fast-Track","Cuttooth","Worrywort","Fog","Paperbag Writer","Where Bluebirds Fly","Fog (Again)","Gagging Order","I Am A Wicked Child","I Am Citizen Insane"]},{"album":"Unreleased","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Unreleased","songs":["Big Boots","The Chains","Climbing Up A Bloody Great Hill","Cut A Hole","The Daily Mail","Feeling Pulled Apart By Horses (AKA Reckoner Old Version)","Follow Me Around","Give It Up","Happy Song","Identikit","I Froze Up","Innocents Civilian","I Promise","I Want None Of This","Lift","Nobody Does It Better","No Surprises Please","Nothing Touches Me","Phillipa Chicken","The Present Tense","Rattlesnake","The Rip","Sinking Ship","Spooks","Staircase","Stupid Car","Tell Me Why","To Be A Brilliant Light","True Love Waits","Union City Blue","Unravel"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Other%20Songs","songs":["Cinnamon Girl (Neil Young Cover)","Good Evening Mrs. Magpie","Harry Patch (In Memory Of)","Man-O-War","Pop Is Dead","Remyxomatosis","Supercollider","The Butcher","These Are My Twisted Words","What Is It That You Say"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '7476',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:23:51 GMT',
  age: '11369',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3160-WIKIA, cache-iad2121-IAD',
  'x-cache': 'MISS, HIT',
  'x-cache-hits': '0, 1',
  'x-timer': 'S1427829831.037472,VS0,VE0',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=C2SahIlcJb; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:23:51 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=radiohead&fmt=json')
  .reply(200, {"artist":"Radiohead","albums":[{"album":"Pablo Honey","year":"1993","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Pablo%20Honey","songs":["You","Creep","How Do You?","Stop Whispering","Thinking About You","Anyone Can Play Guitar","Ripcord","Vegetable","Prove Yourself","I Can't","Lurgee","Blow Out","Creep (Clean)"]},{"album":"Itch","year":"1994","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Itch","songs":["Stop Whispering","Thinking About You","Faithless, The Wonder Boy","Banana Co.","Killer Cars","Vegetable","You","Creep"]},{"album":"My Iron Lung","year":"1994","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20My%20Iron%20Lung","songs":["My Iron Lung","The Trickster","Lewis (Mistreated)","Punchdrunk Lovesick Singalong","Permanent Daylight","Lozenge Of Love","You Never Wash Up After Yourself","Creep"]},{"album":"The Bends","year":"1995","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20The%20Bends","songs":["Planet Telex","The Bends","High And Dry","Fake Plastic Trees","Bones","(Nice Dream)","Just","My Iron Lung","Bullet Proof..I Wish I Was","Black Star","Sulk","Street Spirit (Fade Out)"]},{"album":"OK Computer","year":"1997","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20OK%20Computer","songs":["Airbag","Paranoid Android","Subterranean Homesick Alien","Exit Music (For A Film)","Let Down","Karma Police","Fitter Happier","Electioneering","Climbing Up The Walls","No Surprises","Lucky","The Tourist"]},{"album":"No Surprises/Running From Demons","year":"1997","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20No%20Surprises/Running%20From%20Demons","songs":["No Surprises","Pearly*","Melatonin","Meeting In The Aisle","Bishop's Robes","A Reminder"]},{"album":"Airbag/How Am I Driving?","year":"1998","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Airbag/How%20Am%20I%20Driving?","songs":["Airbag","Pearly*","Meeting In The Aisle","A Reminder","Polyethylene (Parts 1 & 2)","Melatonin","Palo Alto"]},{"album":"Kid A","year":"2000","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Kid%20A","songs":["Everything In Its Right Place","Kid A","The National Anthem","How To Disappear Completely","Treefingers","Optimistic","In Limbo","Idioteque","Morning Bell","Motion Picture Soundtrack"]},{"album":"Amnesiac","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Amnesiac","songs":["Packt Like Sardines In A Crushd Tin Box","Pyramid Song","Pulk/Pull Revolving Doors","You And Whose Army?","I Might Be Wrong","Knives Out","Morning Bell/Amnesiac","Dollars & Cents","Hunting Bears","Like Spinning Plates","Life In A Glasshouse"]},{"album":"Hail To The Thief","year":"2003","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Hail%20To%20The%20Thief","songs":["2 + 2 = 5 (The Lukewarm.)","Sit Down. Stand Up. (Snakes & Ladders.)","Sail To The Moon. (Brush The Cobwebs Out Of The Sky.)","Backdrifts. (Honeymoon Is Over.)","Go To Sleep. (Little Man Being Erased.)","Where I End And You Begin. (The Sky Is Falling In.)","We Suck Young Blood. (Your Time Is Up.)","The Gloaming. (Softly Open Our Mouths In The Cold.)","There There. (The Boney King Of Nowhere.)","I Will. (No Man's Land.)","A Punchup At A Wedding. (No No No No No No No No.)","Myxomatosis. (Judge, Jury & Executioner.)","Scatterbrain. (As Dead As Leaves.)","A Wolf At The Door. (It Girl. Rag Doll.)"]},{"album":"In Rainbows","year":"2007","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20In%20Rainbows","songs":["15 Step","Bodysnatchers","Nude","Weird Fishes/Arpeggi","All I Need","Faust Arp","Reckoner","House Of Cards","Jigsaw Falling Into Place","Videotape","MK 1","Down Is The New Up","Go Slowly","MK 2","Last Flowers","Up On The Ladder","Bangers + Mash","4 Minute Warning"]},{"album":"The King Of Limbs","year":"2011","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20The%20King%20Of%20Limbs","songs":["Bloom","Morning Mr Magpie","Little By Little","Feral","Lotus Flower","Codex","Give Up The Ghost","Separator"]},{"album":"B-Sides","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20B-Sides","songs":["Inside My Head","Million Dollar Question","Yes I Am","Coke Babies","Maquiladora","India Rubber","How Can You Be Sure?","Talk Show Host","Bishop's Robes","Molasses","Lull","How I Made My Millions","The Amazing Sounds Of Orgy","Trans-Atlantic Drawl","Kinetic","Fast-Track","Cuttooth","Worrywort","Fog","Paperbag Writer","Where Bluebirds Fly","Fog (Again)","Gagging Order","I Am A Wicked Child","I Am Citizen Insane"]},{"album":"Unreleased","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Unreleased","songs":["Big Boots","The Chains","Climbing Up A Bloody Great Hill","Cut A Hole","The Daily Mail","Feeling Pulled Apart By Horses (AKA Reckoner Old Version)","Follow Me Around","Give It Up","Happy Song","Identikit","I Froze Up","Innocents Civilian","I Promise","I Want None Of This","Lift","Nobody Does It Better","No Surprises Please","Nothing Touches Me","Phillipa Chicken","The Present Tense","Rattlesnake","The Rip","Sinking Ship","Spooks","Staircase","Stupid Car","Tell Me Why","To Be A Brilliant Light","True Love Waits","Union City Blue","Unravel"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Other%20Songs","songs":["Cinnamon Girl (Neil Young Cover)","Good Evening Mrs. Magpie","Harry Patch (In Memory Of)","Man-O-War","Pop Is Dead","Remyxomatosis","Supercollider","The Butcher","These Are My Twisted Words","What Is It That You Say"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '7476',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:24:14 GMT',
  age: '11394',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3160-WIKIA, cache-jfk1035-JFK',
  'x-cache': 'HIT, HIT',
  'x-cache-hits': '1, 14',
  'x-timer': 'S1427829854.940551,VS0,VE0',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=JiZHKkSeP0; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:24:14 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=radiohead&fmt=json')
  .reply(200, {"artist":"Radiohead","albums":[{"album":"Pablo Honey","year":"1993","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Pablo%20Honey","songs":["You","Creep","How Do You?","Stop Whispering","Thinking About You","Anyone Can Play Guitar","Ripcord","Vegetable","Prove Yourself","I Can't","Lurgee","Blow Out","Creep (Clean)"]},{"album":"Itch","year":"1994","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Itch","songs":["Stop Whispering","Thinking About You","Faithless, The Wonder Boy","Banana Co.","Killer Cars","Vegetable","You","Creep"]},{"album":"My Iron Lung","year":"1994","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20My%20Iron%20Lung","songs":["My Iron Lung","The Trickster","Lewis (Mistreated)","Punchdrunk Lovesick Singalong","Permanent Daylight","Lozenge Of Love","You Never Wash Up After Yourself","Creep"]},{"album":"The Bends","year":"1995","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20The%20Bends","songs":["Planet Telex","The Bends","High And Dry","Fake Plastic Trees","Bones","(Nice Dream)","Just","My Iron Lung","Bullet Proof..I Wish I Was","Black Star","Sulk","Street Spirit (Fade Out)"]},{"album":"OK Computer","year":"1997","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20OK%20Computer","songs":["Airbag","Paranoid Android","Subterranean Homesick Alien","Exit Music (For A Film)","Let Down","Karma Police","Fitter Happier","Electioneering","Climbing Up The Walls","No Surprises","Lucky","The Tourist"]},{"album":"No Surprises/Running From Demons","year":"1997","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20No%20Surprises/Running%20From%20Demons","songs":["No Surprises","Pearly*","Melatonin","Meeting In The Aisle","Bishop's Robes","A Reminder"]},{"album":"Airbag/How Am I Driving?","year":"1998","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Airbag/How%20Am%20I%20Driving?","songs":["Airbag","Pearly*","Meeting In The Aisle","A Reminder","Polyethylene (Parts 1 & 2)","Melatonin","Palo Alto"]},{"album":"Kid A","year":"2000","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Kid%20A","songs":["Everything In Its Right Place","Kid A","The National Anthem","How To Disappear Completely","Treefingers","Optimistic","In Limbo","Idioteque","Morning Bell","Motion Picture Soundtrack"]},{"album":"Amnesiac","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Amnesiac","songs":["Packt Like Sardines In A Crushd Tin Box","Pyramid Song","Pulk/Pull Revolving Doors","You And Whose Army?","I Might Be Wrong","Knives Out","Morning Bell/Amnesiac","Dollars & Cents","Hunting Bears","Like Spinning Plates","Life In A Glasshouse"]},{"album":"Hail To The Thief","year":"2003","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Hail%20To%20The%20Thief","songs":["2 + 2 = 5 (The Lukewarm.)","Sit Down. Stand Up. (Snakes & Ladders.)","Sail To The Moon. (Brush The Cobwebs Out Of The Sky.)","Backdrifts. (Honeymoon Is Over.)","Go To Sleep. (Little Man Being Erased.)","Where I End And You Begin. (The Sky Is Falling In.)","We Suck Young Blood. (Your Time Is Up.)","The Gloaming. (Softly Open Our Mouths In The Cold.)","There There. (The Boney King Of Nowhere.)","I Will. (No Man's Land.)","A Punchup At A Wedding. (No No No No No No No No.)","Myxomatosis. (Judge, Jury & Executioner.)","Scatterbrain. (As Dead As Leaves.)","A Wolf At The Door. (It Girl. Rag Doll.)"]},{"album":"In Rainbows","year":"2007","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20In%20Rainbows","songs":["15 Step","Bodysnatchers","Nude","Weird Fishes/Arpeggi","All I Need","Faust Arp","Reckoner","House Of Cards","Jigsaw Falling Into Place","Videotape","MK 1","Down Is The New Up","Go Slowly","MK 2","Last Flowers","Up On The Ladder","Bangers + Mash","4 Minute Warning"]},{"album":"The King Of Limbs","year":"2011","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20The%20King%20Of%20Limbs","songs":["Bloom","Morning Mr Magpie","Little By Little","Feral","Lotus Flower","Codex","Give Up The Ghost","Separator"]},{"album":"B-Sides","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20B-Sides","songs":["Inside My Head","Million Dollar Question","Yes I Am","Coke Babies","Maquiladora","India Rubber","How Can You Be Sure?","Talk Show Host","Bishop's Robes","Molasses","Lull","How I Made My Millions","The Amazing Sounds Of Orgy","Trans-Atlantic Drawl","Kinetic","Fast-Track","Cuttooth","Worrywort","Fog","Paperbag Writer","Where Bluebirds Fly","Fog (Again)","Gagging Order","I Am A Wicked Child","I Am Citizen Insane"]},{"album":"Unreleased","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Unreleased","songs":["Big Boots","The Chains","Climbing Up A Bloody Great Hill","Cut A Hole","The Daily Mail","Feeling Pulled Apart By Horses (AKA Reckoner Old Version)","Follow Me Around","Give It Up","Happy Song","Identikit","I Froze Up","Innocents Civilian","I Promise","I Want None Of This","Lift","Nobody Does It Better","No Surprises Please","Nothing Touches Me","Phillipa Chicken","The Present Tense","Rattlesnake","The Rip","Sinking Ship","Spooks","Staircase","Stupid Car","Tell Me Why","To Be A Brilliant Light","True Love Waits","Union City Blue","Unravel"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Other%20Songs","songs":["Cinnamon Girl (Neil Young Cover)","Good Evening Mrs. Magpie","Harry Patch (In Memory Of)","Man-O-War","Pop Is Dead","Remyxomatosis","Supercollider","The Butcher","These Are My Twisted Words","What Is It That You Say"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '7476',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:24:15 GMT',
  age: '11394',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3160-WIKIA, cache-jfk1024-JFK',
  'x-cache': 'HIT, HIT',
  'x-cache-hits': '1, 1',
  'x-timer': 'S1427829855.631116,VS0,VE0',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=iFC6GBPHOp; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:24:15 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>

<<<<<<-- cut here -->>>>>>

nock('http://lyrics.wikia.com:80')
  .get('/api.php?artist=radiohead&fmt=json')
  .reply(200, {"artist":"Radiohead","albums":[{"album":"Pablo Honey","year":"1993","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Pablo%20Honey","songs":["You","Creep","How Do You?","Stop Whispering","Thinking About You","Anyone Can Play Guitar","Ripcord","Vegetable","Prove Yourself","I Can't","Lurgee","Blow Out","Creep (Clean)"]},{"album":"Itch","year":"1994","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Itch","songs":["Stop Whispering","Thinking About You","Faithless, The Wonder Boy","Banana Co.","Killer Cars","Vegetable","You","Creep"]},{"album":"My Iron Lung","year":"1994","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20My%20Iron%20Lung","songs":["My Iron Lung","The Trickster","Lewis (Mistreated)","Punchdrunk Lovesick Singalong","Permanent Daylight","Lozenge Of Love","You Never Wash Up After Yourself","Creep"]},{"album":"The Bends","year":"1995","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20The%20Bends","songs":["Planet Telex","The Bends","High And Dry","Fake Plastic Trees","Bones","(Nice Dream)","Just","My Iron Lung","Bullet Proof..I Wish I Was","Black Star","Sulk","Street Spirit (Fade Out)"]},{"album":"OK Computer","year":"1997","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20OK%20Computer","songs":["Airbag","Paranoid Android","Subterranean Homesick Alien","Exit Music (For A Film)","Let Down","Karma Police","Fitter Happier","Electioneering","Climbing Up The Walls","No Surprises","Lucky","The Tourist"]},{"album":"No Surprises/Running From Demons","year":"1997","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20No%20Surprises/Running%20From%20Demons","songs":["No Surprises","Pearly*","Melatonin","Meeting In The Aisle","Bishop's Robes","A Reminder"]},{"album":"Airbag/How Am I Driving?","year":"1998","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Airbag/How%20Am%20I%20Driving?","songs":["Airbag","Pearly*","Meeting In The Aisle","A Reminder","Polyethylene (Parts 1 & 2)","Melatonin","Palo Alto"]},{"album":"Kid A","year":"2000","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Kid%20A","songs":["Everything In Its Right Place","Kid A","The National Anthem","How To Disappear Completely","Treefingers","Optimistic","In Limbo","Idioteque","Morning Bell","Motion Picture Soundtrack"]},{"album":"Amnesiac","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Amnesiac","songs":["Packt Like Sardines In A Crushd Tin Box","Pyramid Song","Pulk/Pull Revolving Doors","You And Whose Army?","I Might Be Wrong","Knives Out","Morning Bell/Amnesiac","Dollars & Cents","Hunting Bears","Like Spinning Plates","Life In A Glasshouse"]},{"album":"Hail To The Thief","year":"2003","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Hail%20To%20The%20Thief","songs":["2 + 2 = 5 (The Lukewarm.)","Sit Down. Stand Up. (Snakes & Ladders.)","Sail To The Moon. (Brush The Cobwebs Out Of The Sky.)","Backdrifts. (Honeymoon Is Over.)","Go To Sleep. (Little Man Being Erased.)","Where I End And You Begin. (The Sky Is Falling In.)","We Suck Young Blood. (Your Time Is Up.)","The Gloaming. (Softly Open Our Mouths In The Cold.)","There There. (The Boney King Of Nowhere.)","I Will. (No Man's Land.)","A Punchup At A Wedding. (No No No No No No No No.)","Myxomatosis. (Judge, Jury & Executioner.)","Scatterbrain. (As Dead As Leaves.)","A Wolf At The Door. (It Girl. Rag Doll.)"]},{"album":"In Rainbows","year":"2007","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20In%20Rainbows","songs":["15 Step","Bodysnatchers","Nude","Weird Fishes/Arpeggi","All I Need","Faust Arp","Reckoner","House Of Cards","Jigsaw Falling Into Place","Videotape","MK 1","Down Is The New Up","Go Slowly","MK 2","Last Flowers","Up On The Ladder","Bangers + Mash","4 Minute Warning"]},{"album":"The King Of Limbs","year":"2011","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20The%20King%20Of%20Limbs","songs":["Bloom","Morning Mr Magpie","Little By Little","Feral","Lotus Flower","Codex","Give Up The Ghost","Separator"]},{"album":"B-Sides","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20B-Sides","songs":["Inside My Head","Million Dollar Question","Yes I Am","Coke Babies","Maquiladora","India Rubber","How Can You Be Sure?","Talk Show Host","Bishop's Robes","Molasses","Lull","How I Made My Millions","The Amazing Sounds Of Orgy","Trans-Atlantic Drawl","Kinetic","Fast-Track","Cuttooth","Worrywort","Fog","Paperbag Writer","Where Bluebirds Fly","Fog (Again)","Gagging Order","I Am A Wicked Child","I Am Citizen Insane"]},{"album":"Unreleased","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Unreleased","songs":["Big Boots","The Chains","Climbing Up A Bloody Great Hill","Cut A Hole","The Daily Mail","Feeling Pulled Apart By Horses (AKA Reckoner Old Version)","Follow Me Around","Give It Up","Happy Song","Identikit","I Froze Up","Innocents Civilian","I Promise","I Want None Of This","Lift","Nobody Does It Better","No Surprises Please","Nothing Touches Me","Phillipa Chicken","The Present Tense","Rattlesnake","The Rip","Sinking Ship","Spooks","Staircase","Stupid Car","Tell Me Why","To Be A Brilliant Light","True Love Waits","Union City Blue","Unravel"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Other%20Songs","songs":["Cinnamon Girl (Neil Young Cover)","Good Evening Mrs. Magpie","Harry Patch (In Memory Of)","Man-O-War","Pop Is Dead","Remyxomatosis","Supercollider","The Butcher","These Are My Twisted Words","What Is It That You Say"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '7476',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 19:24:16 GMT',
  age: '11395',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3160-WIKIA, cache-jfk1022-JFK',
  'x-cache': 'HIT, HIT',
  'x-cache-hits': '1, 1',
  'x-timer': 'S1427829856.368593,VS0,VE0',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=UfemAJVh4B; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 19:24:16 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

<<<<<<-- cut here -->>>>>>
