const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
app.use(cors());
app.use(express.json());

require('dotenv').config({ path: 'variaveis.env' });

const bodyParser = require('body-parser');
const { json } = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));



const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    multipleStatements: true
}); 


//CREATE post um
app.post("/enquete", (req, res) =>{

    const nome = req.body.nome;
    const data_inicio = req.body.data_inicio;
    const data_termino = req.body.data_termino;
    const pergunta = req.body.pergunta;
    
    db.query('INSERT INTO enquetes (nome, data_inicio, data_termino, pergunta) VALUES (?, ?, ?, ?)', [nome, data_inicio, data_termino, pergunta], (error, results) => {
        if (error) { 
            console.log(error); 
        }else{
            res.send("Valores criados no DB");
        }
    });
});

//Delete deletar uma enquete
app.delete("/enquete/:codigo", (req,res) =>{
    const codigo = req.params.codigo;
    db.query("DELETE FROM enquetes WHERE codigo = '" + codigo +"'", (err, result) =>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    });
});



//Read todas enquetes
app.get("/enquetes", (req,res) =>{
    db.query("SELECT * FROM enquetes", (err, result) =>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    });
});


app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando em: http://localhost:${process.env.PORT}`);
});