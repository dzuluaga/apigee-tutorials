var express = require('express'),
	app = express();
	path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
app.listen(9000);