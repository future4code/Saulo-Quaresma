import { PostDB } from "../../../data/postDataBase";
import { Post, PostType } from "../../entities/post";
import { InvalidParameterError } from "../../error/InvalidParameterError";
import { v4 } from "uuid";

export class CreatePostUC {
  constructor(private db: PostDB) {}

  public async execute(input: CreatePostUCInput): Promise<CreatePostUCOutput> {
    const id = v4();
    let type = PostType.normal;
    if (input.type === "event") {
      type = PostType.event;
    } else if (input.type !== "normal") {
      throw new InvalidParameterError("Invalid type");
    }

    const post = new Post(
      id,
      input.title,
      input.content,
      type,
      input.userId,
      input.image
    );

    await this.db.createPost(post);

    return {
      message: "Post created successfully"
    };
  }
}

export interface CreatePostUCInput {
  title: string;
  content: string;
  type: string;
  userId: string;
  image?: string;
}

export interface CreatePostUCOutput {
  message: string;
}


//1=
//R: pode ser dois tipos, event ou normal. 
//Sendo representados por um PostType.event ou PostType.normal (PostType é um enum).

//2=
//R: Ele valida o tipo de evento. Se for do tipo normal, ele cai em um erro que é tratada por uma função
//chamada InvalidParameterError passando um código de erro e uma mensagem.
//Se for do tipo event, ele segue para a criação do código normalmente.

//3=
//R: Para que ninguém possa modificar esse código e mexer com todo o esquema de conexão com o banco de dados.
//Nela está todo os campos necessários para essa conexão.

//4=
//R: Ela cria a conexão com o banco de dados, passando o que vem da requisição (no caso, no body),
//ao criar um novo Post neste endpoint.

//5=
//R: Ela é uma váriavel do tipo Post que contém todos os inputs necessários para a criação de um novo post.
// Por isso ele é passado na linha 27 como um parâmetro para a função.

//6=
//R: Vem das interfaces CreatePostUCInput e CreatePostUCOutput.

//7=
//R: Vem da classe Post do arquivo post.ts em entities.

//8=
//R: É usada para criar um novo post com ou sem passar uma imagem no input. Caso não tivesse, pode
//ocorrer um erro ao criar o novo post sem esse input de imagem.