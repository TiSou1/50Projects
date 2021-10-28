package main

import (
	"database/sql"
	"fmt"
	"net/http"

	_ "github.com/go-sql-driver/mysql"
)

var db *sql.DB

func initDb() {
	dsn := "root:root@tcp(127.0.0.1:3306)/go_test"
	var err error
	db, err = sql.Open("mysql", dsn)

	if err != nil {
		fmt.Println("连接失败")
		return
	}

	//设置与数据库的连接最大数目
	db.SetMaxOpenConns(10)
	//设置最大闲置数
	db.SetMaxIdleConns(20)

	err = db.Ping()
	if err != nil {
		return
	}
	fmt.Println("连接成功...")
}

func preQuery(id string) {
	sqlStr := "select name,age from users where id = ?"
	//使用预处理
	stmt, err := db.Prepare(sqlStr)
	if err != nil {
		fmt.Printf("预加载失败,%s\n", err)
		return
	}

	defer stmt.Close()

	row, err := stmt.Query(id)
	if err != nil {
		return
	}
	defer row.Close()
	for row.Next() {
		var name string
		var age int

		err := row.Scan(&name, &age)
		if err != nil {
			return

		}
		fmt.Println(name, age)
		// }
	}
}

func main() {
	http.HandleFunc("/", func(rw http.ResponseWriter, r *http.Request) {
		err := r.ParseForm()
		if err != nil {
			return
		}
		//获取id
		id := r.Form["id"][0]
		//根据id查询数据库
		initDb()
		preQuery(id)
		fmt.Println(r.Form)
		fmt.Fprintln(rw, "hellow word")
	})
	err := http.ListenAndServe(":9090", nil)
	if err != nil {
		fmt.Printf("服务启动失败%s", err)
		return
	}

}
