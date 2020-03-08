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
         '/createUser': "cria um usuário com todas as informações necessárias através do Postman",
         '/editUser/:userId': "edita o nickname do usuário pelo Postman através do id",
         '/deleteUser/:userId': "deleta um usuário passando um id",
         '/getUserByIdOrName/:data': 'pega um usuário pelo nome ou id',
         '/getAllUsers/?order&birthday=': "pegar todos os usuários, mostrando somente o nickname. Podendo ser ordem alfabética ou data de nascimento",
         '/createTask': "cria uma tarefa com todas as informações necessárias através do Postman",
         '/editTask/:userId': "edita a descrição ou tempo limite de uma tarefa passando o id dela pelo Postman",
         '/addTaskResponsibleUser/:taskId/:userId': "Atribui um id de um usuário à uma tarefa pelo Postman",
         '/getTasksCreatedByUser/:userId': "pega as tarefas criada por um usuário pelo id da tarefa",
         '/getTasksGivenToUser/:userId': "pega as tarefas dadas à um usuário pelo id da tarefa",
         '/getAllTasks': "pega todas as tarefas e ordenar por descrição ou nome do usuários alfabeticamente"
      }
   }
   res.send(resposta)
});

//PARTE DE USUÁRIOS

//Criar novos usuários pelo postman
app.post('/createUser', (req: Request, res: Response) => {
   const nonQuery = connection.insert(req.body).into('usuarios');
   nonQuery.then(() => {
      res.send(`O usuário ${req.body.name} foi criado com sucesso!`);
   }).catch((err) => {
      res.send(err);
   });
});

//Editar nickname de um usuário pelo id
app.put('/editUser/:userId', (req: Request, res: Response) => {
   const nonQuery = connection('usuarios').where({ 'id': req.params.userId }).update({ nickname: req.body.nickname });
   nonQuery.then(() => {
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

//PARTE DE TAREFAS

//Criar uma nova tarefa pelo postman
app.post('/createTask', (req: Request, res: Response) => {
   const nonQuery = connection.insert(req.body).into('tarefas');
   nonQuery.then(() => {
      res.send(`A tarefa ${req.body.description} foi criada com sucesso!`)
   }).catch((err) => {
      res.send(err);
   });
});

//Editar a descrição ou tempo limite da tarefa passando o id dela pelo postman
app.put('/editTask/:userId', (req: Request, res: Response) => {
   const description = req.body.description;
   const timeLimit = req.body.time_limit;
   let nonQuery = connection('tarefas').where({'id': req.params.userId});
      
   if(description) {
      nonQuery.update({description: req.body.description})
   };

   if(timeLimit) {
      nonQuery.update({time_limit: req.body.time_limit})
   }
   nonQuery.then(() => {
      res.send(`Descrição atualizada com sucesso!`)
   }).catch((err) => {
      res.send(err)
   });
});

//Atribuir um id de um usuário à uma tarefa pelo postman
app.put('/addTaskResponsibleUser/:taskId/:userId', (req: Request, res: Response) => {
   const nonQuery = connection('tarefas').where({'id': req.params.taskId}).update({responsible_userId: req.params.userId});
   nonQuery.then(() => {
      res.send('O id do usuário responsável foi atribuído à tarefa com sucesso!')
   }).catch((err) => {
      res.send(err)
   });
});

//Pegar tarefas criada por um usuário pelo id da tarefa
app.get('/getTasksCreatedByUser/:userId', (req: Request, res: Response) => {
   const limitTime = req.query.timeLimit;
   let query = connection.select('*').from('tarefas').where('requesting_userId', req.params.userId);
   
   if(limitTime) {
      query = query.andWhere('time_limit', limitTime)
   }

   query.then((result) => {
      res.send(result)
   }).catch((err) => {
      res.send(err)
   })
});

//Pegar tarefas dadas à um usuário pelo id da tarefa
app.get('/getTasksGivenToUser/:userId', (req: Request, res: Response) => {
   const limitTime = req.query.timeLimit;
   let query = connection.select('*').from('tarefas').where('responsible_userId', req.params.userId);
   
   if(limitTime) {
      query = query.andWhere('time_limit', limitTime)
   }

   query.then((result) => {
      res.send(result)
   }).catch((err) => {
      res.send(err)
   });
});

//Pegar todas as tarefas e ordenar por descrição ou nome do usuários alfabeticamente
app.get('/getAllTasks', (req: Request, res: Response) => {
   const orderByDescription = req.query.orderByDescription;
   const orderByName = req.query.orderByName;
   const timeLimit = req.query.timeLimit;
   let query = connection.select('*').from('tarefas').join('usuarios', 'tarefas.requesting_UserId', '=', 'usuarios.id');

   if(orderByDescription){
      query = query.orderBy('description', orderByDescription)
   };

   if(orderByName) {
      query = query.orderBy('name', orderByName)
   };

   if(timeLimit) {
      query = query.where('time_limit', timeLimit)
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