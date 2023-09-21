const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const mycon = require('mysql');
const fileupload = require('express-fileupload');

const app = express();
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(fileupload());
app.use(express.static('public'));

const c = mycon.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "Bala1997@",
  database: "bike_service"
});

c.connect(function (error) {
  if (error) { console.log(error); }
  else { console.log('Database Connected'); }
})
app.listen(3005, () => {
  console.log('Server is listening on port 3005');
});

app.post('/Signup',(req,res)=>{
  let {user_name,email,pass_word} = req.body;

  let sql = 'insert into signup(user_name,email,pass_word) values (?,?,?)';

  c.query(sql,[user_name,email,pass_word],(error,result)=>{
      if(error){
          let s = {"status":"error"};
          res.send(s);
      }
      else{
          let s = {"status":"Registered"};
          res.send(s);
      }
  })

})

// ... (previous imports and setup)

app.post('/Signin', (req, res) => {
  let { user_name, pass_word } = req.body;
  let sql = 'SELECT * FROM signup WHERE user_name=?';

  c.query(sql, [user_name], (error, result) => {
    if (error) {
      let s = { "status": "error" };
      res.send(s);
    } else if (result.length > 0) {
      let user_id = result[0].user_id;
      let username1 = result[0].user_name;
      let password1 = result[0].pass_word; // Corrected column name to 'pass_word'
      if (username1 === user_name && password1 === pass_word) { // Use strict equality '==='
        let s = { "status": "Success", "user_id": user_id };
        res.send(s);
      } else {
        let s = { "status": "Invalid" };
        res.send(s);
      }
    } else {
      let s = { "status": "final_error" };
      res.send(s);
    }
  });
});

// ... (rest of your code)


app.post('/user1', (req, res) => {
  let { user_name, email, ph_number, place } = req.body;

  let sql = 'INSERT INTO user1 (user_name, email, ph_number, place) VALUES (?, ?, ?, ?)';

  c.query(sql, [user_name, email, ph_number, place], (error, result) => {
    if (error) {
      console.error(error);
      let s = { "status": "error" };
      res.send(s);
    } else {
      let s = { "status": "Registered" };
      res.send(s);
    }
  });
});   


app.post('/Registration', (req, res) => {
  let { customer, service, bikestation, booking_date,status } = req.body;

  let sql = 'insert into booking3(customer,service,bikestation,booking_date,status) values (?,?,?,?,?)';

  c.query(sql, [customer, service, bikestation, booking_date,status], (error, result) => {
    if (error) {
      let s = { "status": "error" };
      res.send(s);
    }
    else {
      let s = { "status": "Registered" };
      res.send(s);
    }
  })

})






app.get('/getdata', (req, res) => {
  const sql = `select * from booking3`
  c.query(sql, (error, result) => {
    if (error) {
      let s = { "status": "error" };
      res.send(s);
    }
    else {

      res.send(result);
    }
  })
})

app.get('/getid', (req, res) => {
  const id = req.query.id;
  const sql = `select * from booking3 where id=?`
  c.query(sql, [id], (error, result) => {
    if (error) {
      let s = { "status": "error" };
      res.send(s);
    }
    else {

      res.send(result);
    }
  })
})
app.get('/Get_update/:id',(request,response)=>{

  let {id} =request.params;
  
  

  let sql = 'select * from booking3 where id=?';

  c.query(sql,[id],(error,result)=>{
      if(error){
          response.send(error);
      }
      else{
          response.send(result);
      }
  })
})

app.put('/update/:id', (req, res) => {
  const { customer, service, bikestation, booking_date, id } = req.body;
  const sql = `update booking3 set customer=?,service=?,bikestation=?,booking_date=? where id=? `
  c.query(sql, [customer, service, bikestation, booking_date, id], (error, result) => {
    if (error) {
      let s = { "status": "error" };
      res.send(s);
    }
    else {
      let s = { "status": "updated" };
      res.send(s);
    }
  })
})
app.delete('/delete/:id', (req, res) => {
  const { id } = req.params;
  const sql = `DELETE FROM booking3 WHERE id=?`;

  c.query(sql, [id], (error, result) => {
    if (error) {
      console.error(error);
      res.status(500).json({ status: 'error' });
    } else if (result.affectedRows === 0) {
      // If no rows were affected, it means no booking was found with that ID
      res.status(404).json({ status: 'not found' });
    } else {
      res.status(200).json({ status: 'deleted' });
    }
  });
});


// app.post('/delete/:id', (req, res) => {
//   const { id } = req.body.id;
//   const sql = `delete from booking3  where id=? `
//   c.query(sql, [id], (error, result) => {
//     if (error) {
//       let s = { "status": "error" };
//       res.send(s);
//     }
//     else {
//       let s = { "status": "deleted" };
//       res.send(s);
//     }
//   })
// })

