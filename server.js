var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
    'article-one' :{
        title:'Article One Nusha Jareer',
        heading:'Article One',
        date:'August 10 ,2017',
        content:`
            <p>hi this is my some attempt to build a web app cvhi this is my some attempt to build a web app hi this is my some attempt to build a web app hi this is my some attempt to build a web app hi this is my some attempt to build a web apphi this is my some attempt to build a web apphi this is my some attempt to build a web apphi this is my some attempt to build a web apphi this is my some attempt to build a web apphi this is my some attempt to build a web apphi this is my some attempt to build a web apphi this is my some attempt to build a web apphi this is my some attempt to build a web apphi this is my some attempt to build a web apphi this is my some attempt to build a web apphi this is my some attempt to build a web apphi this is my some attempt to build a web app
            </p>
            <p>
               let me try let me try let me try let me try let me trylet me try
               let me try let me try let me try let me try let me try let me try
               let me try let me try
            </p>
            <p>
                thanks alot for given me a chance   thanks alot for given me a chance   thanks alot for given me a chance   thanks alot for given me a chance   thanks alot for given me a chance   thanks alot for given me a chance   thanks alot for given me a chance   thanks alot for given me a chance   thanks alot for given me a chance   thanks alot for given me a chance   thanks alot for given me a chance   thanks alot for given me a chance   
            </p>` 
    },
    'article-two':{
        title:'Article One Nusha Jareer',
        heading:'Article Two',
        date:'August 12 ,2017',
        content:`
        <p>
               let me try let me try let me try let me try let me trylet me try
               let me try let me try let me try let me try let me try let me try
               let me try let me try
            </p>`
        
    },
    'article-three':{
        title:'Article One Nusha Jareer',
        heading:'Article Three',
        date:'August 13 ,2017',
        content:`
        <p>
                thanks alot for given me a chance   thanks alot for given me a chance   thanks alot for given me a chance   thanks alot for given me a chance   thanks alot for given me a chance   thanks alot for given me a chance   thanks alot for given me a chance   thanks alot for given me a chance   thanks alot for given me a chance   thanks alot for given me a chance   thanks alot for given me a chance   thanks alot for given me a chance   
            </p>` 
        
    }
};

function createTemplate(data){
    var title= data.title;
    var heading =data.heading;
    var date = data.date;
    var content = data.content;
    
    var htmlTemplate = `<html>
    <head>
        <title>${title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
        <div>
            <a href = "/">Home</a>
        </div>
        <hr/>
        <h3>${heading}</h3>
        <div>
           ${date}
        </div>
        <div>
           ${content}
        </div>
        </div>
       
    </body>
           
</html>`;
return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName',function(req,res){
    //articleName==article-one
    //articles[articleName]=={} content for article-one
    var articleName= req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
