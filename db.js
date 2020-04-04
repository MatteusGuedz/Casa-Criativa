const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./CC.db')


db.serialize(()=> {
    db.run(`
    CREATE TABLE IF NOT EXISTS ideas(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        image TEXT,
        title TEXT,
        category TEXT,
        description TEXT,
        link TEXT

    );
    `)

    const query = `  
    INSERT INTO ideas(
            image, 
            title,
            category,
            description,
            link
    ) VALUES (?,?,?,?,?);
    `

    const values =  [
        "https://image.flaticon.com/icons/svg/2728/2728986.svg",
        "Cursos de Programação",
        "Estudo",
        " quae iusto neque minima consequuntur fuga doloremque natus beatae vitae assumenda tenetur!",
        "https://github.com/MatteusGuedz"
    ]
    // db.run(query,values, function(err){
    //     if (err) return console.log(err)

    //     console.log(this)
    // })


    // //deletar
    // db.run(`DELETE FROM ideas WHERE id = ?`, [1], function(err){
    //     if(err) return console.log(err)


    //     console.log('DELETEI', this)
    // })
    
    // db.all(`SELECT * FROM ideas`, function(err, rows){
    //     if (err) return console.log(err)

    //     console.log(rows)
    // })


})

module.exports = db;