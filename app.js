const client = require('./connection.js')
const express = require('express');
const app = express();
// Environment variable PORT, value is set outside of application
const port = process.env.PORT || 3000;

app.listen(port, (error) => {
    if(error){
        console.log('error occured', error)
    }
    console.log(`listening on port ${port}`)
})

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/male', (req, res) => {
    res.render('male')
})

app.get('/female', (req, res) => {
    res.render('female')
})

app.get('/head', (req, res) => {
    res.render('head')
})

app.get('/left-arm', (req, res) => {
    res.render('left-arm')
})

app.get('/left-leg', (req, res) => {
    res.render('left-leg')
})

app.get('/right-arm', (req, res) => {
    res.render('right-arm')
})

app.get('/right-leg', (req, res) => {
    res.render('right-leg')
})

app.get('/torso', (req, res) => {
    res.render('torso')
})

app.get('/form', (req, res) => {
    res.render('form', {title:"Submit a new request"})
})
client.connect();


app.get('/requests', (req, res)=>{
    let name = req.query.cname;
    if (name != undefined){
        res.redirect('/requests/'+ name)
    } else {
        client.query(`SELECT * FROM requests`, (err, result)=>{
            if(err){
                console.error('Error executing query', err);
            } else{
                console.log('Query result:', result.rows);
                //res.send(result.rows);
                res.render('requests', {data:result.rows, title:"Request Log", requestType:"all"});
            }
        });
        client.end;
    }
})


// To retrieve all requests from a user
app.get('/requests/:cname', (req, res)=>{
    client.query(`SELECT * FROM requests WHERE requests.cname='${req.params.cname}'`, (err, result)=>{
        if(err){
            console.error('Error executing query', err);
        } else{
            console.log('Query result:', result.rows);
            //res.send(result.rows);
            res.render('requests', {data:result.rows, title:"Requests by "+ req.params.cname, requestType:"name"});
        }
    });
    client.end;
})


// Handle form submission
app.post('/submit', (req, res) => {
    const request = req.body;
    const cname = request.cname;
    const cmessage = request.cmessage;
    const date_of_request = request.date_of_request;
    let insertquery = `INSERT INTO requests (cname, cmessage, date_of_request) VALUES ('${cname}', '${cmessage}', '${date_of_request}')`;
    client.query(insertquery, (err, result)=> {
        if(err){
            console.log(err)
            res.send(err)
        } else{
            console.log('DATA SUBMITTED: ' + insertquery);
            console.log(`Received form submission at timestamp: ${date_of_request}`);
            //res.send('Request sent, data saved sucessfully!');
            res.redirect('/form');
        }

    });
});


app.get('/charityinformation', (req, res) => {
    res.render('charityinformation')
})





