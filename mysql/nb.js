//通过JS==》对数据库 进行 增删改查！
//增加！！！
var mysql=require("mysql");
//准备连接的过程
var pool=mysql.createPool({   //连接池
	host:"localhost",    //主机名称
	user:"root",
	password:"admin",
	database:"mydata1"     //我要连接到那个数据库
});
pool.getConnection(function(err,connection){
	//  connection   第二个参数   ==》 获取链接
	if (err) throw err;
	//通过获取到的链接 ==》 发送JS里面执行的  对于数据库的操作！
	connection.query("insert into nb values(?,?,?,?,?,?)",[0,'笑笑',18,1,'1995/01/05','音乐'],function(err,data){
		if (err) {
			throw err;
		} else{
			console.log(data)
		}
	});
	connection.release();
});