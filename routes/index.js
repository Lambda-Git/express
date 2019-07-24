const express = require('express');
const mysql = require('mysql');
const router = express.Router();
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'mysql',
  port: '3306'
})
connection.connect(function (err) {
  if ( err ) {
    console.log('---:'+err);
    return;
  }
  console.log('连接数据库成功！');
})
connection.query('insert into userlist (username, password, country) values(?,?,?)',['天海翼', '004' ,'japanese'],function (err, rs) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('插入数据库成功！');
})
connection.query('select * from userlist',function (err, rs) {
  rs.forEach( curData => {
    console.log('用户名:' + curData.username + '密码:'+ curData.password + '国籍:' + curData.country)
  })
})
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
