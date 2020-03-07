import express, { Request, Response, response, request } from "express";
import { AddressInfo } from 'net'
import knex from 'knex';

const app = express();
app.use(express.json());

const connection = knex({
   client: 'mysql',
   connection: {
      host: 'ec2-18-229-236-15.sa-east-1.compute.amazonaws.com',
      user: 'saulo',
      password: 'Q5KHF$2pWchdsDvVu0ot',
      database: 'bouman-saulo'
   }
});

//Mosta página inicial
app.get('/', (req: Request, res: Response) => {
   const resposta = {
      endpoints: {
         '/': "página inicial",
         '/createUser': "cria o usuário com todas as informações necessárias através do postman",
         '/editUser/:userId': "edita o nickname do usuário pelo postman através do id",
         '/deleteUser/:userId': "deleta um usuário passando um id",
         '/getUserByIdOrName/:data': 'pega um usuário pelo nome ou id',
         '/getAllUsers/?order&birthday=': "pegar todos os usuários, mostrando somente o nickname. Podendo ser ordem alfabética ou data de nascimento",
      }
   }
   res.send(resposta)
});

//Criar novos usuários
app.post('/createUser', (req: Request, res: Response) => {
   const nonQuery = connection.insert(req.body).into('usuarios');
   nonQuery.then((result) => {
      res.send(`O usuário ${req.body.name} foi criado com sucesso!`);
   }).catch((err) => {
      res.send(err);
   });
});

//Editar nickname de um usuário pelo id
app.put('/editUser/:userId', (req: Request, res: Response) => {
   const nonQuery = connection('usuarios').where({ 'id': req.params.userId }).update({ nickname: req.body.nickname });
   nonQuery.then((result) => {
      res.send(`O nickname do usuário foi editado com sucesso!`)
   }).catch((err) => {
      res.send(err)
   });
});

//Deletar nickname de um usuário pelo id
app.delete('/deleteUser/:userId', (req: Request, res: Response) => {
   const nonQuery = connection('usuarios').where({ 'id': req.params.userId }).del();
   nonQuery.then(() => {
      res.send(`Usuário deletado com sucesso`)
   }).catch((err) => {
      res.send(err)
   });
});

//Pegar usuários por id ou nome
app.get('/getUserByIdOrName/:data', (req: Request, res: Response) => {
   const query = connection.select('*').from('usuarios').where({ 'id': req.params.data }).orWhere({ 'name': req.params.data });
   query.then((result) => {
      res.send(result)
   }).catch((err) => {
      res.send(err)
   });
});

//Pegar todos os usuários, mostrando somente o nickname
app.get('/getAllUsers/', (req: Request, res: Response) => {
   const order = req.query.order;
   const birthday = req.query.birthday;
   let query = connection.select('*').from('usuarios');

   if (order) {
      query = query.orderBy('name', order)
   };

   if (birthday) {
      query = query.where('birthday', birthday)
   };

   query.then((result) => {
      res.send(result)
   }).catch((err) => {
      res.send(err)
   });
});

// Trecho do código responsável por inicializar todas as APIs
const server = app.listen(process.env.PORT || 3000, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   };
});