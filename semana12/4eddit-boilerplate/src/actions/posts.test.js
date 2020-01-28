import {setPosts, getPostDetailAction, setPostIdSelected, getPosts} from './posts'
import { act } from 'react-dom/test-utils'

describe("Posts Action-Creators", () => {
   test("Testa a setPosts action ", () => {
      //preparação
      const textoTeste = "testando action"

      //execução
      const action = setPosts(textoTeste)      

      //verificação
      expect(action.type).toEqual("SET_POSTS")
      expect(action.payload).toEqual({allPosts: "testando action"})  
   })

   test("Testa a getPostDetail action", () => {
      //preparação
      const postId = 1

      //execução
      const action = getPostDetailAction(postId)

      //verificação
      expect(action.type).toEqual("SET_POST_DETAIL")
      expect(action.payload).toEqual({post: 1})
      
   })

   test("Testa a setPostIdSelected action", () => {
      //preparação
      const postId = 2

      //execução
      const action = setPostIdSelected(postId)

      //verificação
      expect(action.type).toEqual("SET_POST_ID")
      expect(action.payload).toEqual({postIdSelected: 2})
   })

   // test("Testa a getPosts action", () => {
   //    const posts = {
   //       post: [{
   //          text: "Oi",
   //       }]

   //    }
   //    const token = "testToken"
   //    const axiosHeader = {
   //       headers: {
   //          auth: token
   //       },
   //    }

   //    const action = getPosts(posts, axiosHeader)

   //    expect(action.posts).toEqual(posts)
   // })
})