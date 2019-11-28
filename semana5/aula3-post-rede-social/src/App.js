import React from 'react';
import PostInstagram from './components/PostInstagram/PostInstagram'
import './App.css';

function App() {
  return (
    <div className="App">      
      <PostInstagram usuario="saulo.qo" imagem="https://picsum.photos/id/124/430/315" iconeComemtar="https://icon-icons.com/icons2/1863/PNG/512/add-comment_119466.png" iconeFavoritado="https://image.flaticon.com/icons/svg/1077/1077086.svg" iconeFavoritar="https://image.flaticon.com/icons/svg/1077/1077035.svg"/>
      <PostInstagram usuario="saulo.qo" imagem="https://picsum.photos/id/20/430/315" iconeComemtar="https://icon-icons.com/icons2/1863/PNG/512/add-comment_119466.png" iconeFavoritado="https://image.flaticon.com/icons/svg/1077/1077086.svg" iconeFavoritar="https://image.flaticon.com/icons/svg/1077/1077035.svg"/>
      <PostInstagram usuario="saulo.qo" imagem="https://picsum.photos/id/47/430/315" iconeComemtar="https://icon-icons.com/icons2/1863/PNG/512/add-comment_119466.png" iconeFavoritado="https://image.flaticon.com/icons/svg/1077/1077086.svg" iconeFavoritar="https://image.flaticon.com/icons/svg/1077/1077035.svg"/>
    </div>
  );
}

export default App;
