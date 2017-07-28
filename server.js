const express = require('express');
const bodyParser = require('body-parser');
const Quote = require('./models.js');
const app = express();

console.log('May the Node Be With You');

const port = 3000;

app.listen(port, () => {
    console.log(`listening on ${port}`);
})

app.use(express.static('output'))
// app.use(bodyParser.urlencoded({ exdended: true }))
app.use(bodyParser.json());

app.get('/quotes', (req, res) => {
   Quote.findAll({}).then(result => {  
    res.status(200).send(result);
    //var text = {result.map(item => item.)}
   }) 
})

//    Quote.findAll({}).then(result => {
//     console.log('the GET result is ', result);   
    
//     //var text = {result.map(item => item.)}
//    }) 

// Message.findAll({}).then((result) => {
//             var text = result.map(item => item.text);
//             console.log('the database is ', text);  
//             res.send(text);
//         });

app.post('/quotes', (req, res) => {
    Quote.create({ name: req.body.name, quote: req.body.quote });
    res.status(201).send('POST request accepted');

})

app.put('/quotes', (req, res) => {
    Quote.findAll({
        limit: 1,
        where:{},
        order: [['createdAt', 'DESC']]
    })
    .then(entries => {
        //update entry
        console.log(entries[0]);
        Quote.update(
            {name: req.body.name, quote: req.body.quote}, {where: { id: entries[0].dataValues.id } }
        );
        res.status(201).send('Accepted your PUT request');
    })
    .catch(err => {
        console.log(err)
    })
})

app.delete('/quotes', (req, res) => {
    Quote.findAll()
        .then(entries => {
            entries.forEach(entry => entry.destroy());
           // console.log(entries)
            //entries.destroy();
            res.status(200).send('Finished deleting!');
        })
        .catch(err => {
            console.log(err)
        })
})

