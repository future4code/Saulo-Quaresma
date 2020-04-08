import React, { Component } from 'react';
import '../../style/VideoCards.css';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

class VideoCards extends Component {
   render() {
      return (
         <div className="main-container">
            <div className="filter-container">
               <h3>Filtros</h3>
               <input placeholder="Digite um tipo de vídeo" />
               <input placeholder="Digite um tipo de vídeo" />
               <input placeholder="Digite um tipo de vídeo" />
               <input placeholder="Digite um tipo de vídeo" />
               <input placeholder="Digite um tipo de vídeo" />
            </div>

            <div className="videos-container">
               <Card className="video-card">
                  <CardActionArea onPlaying>
                     <CardMedia component="iframe" alt="video-1" height="200" title="video-1" src="https://www.youtube.com/embed/oUPaJxk6TZ0" frameborder="0" />
                     <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                           Video 1
                           </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                           Exemplo de card com vídeos.
                           </Typography>
                     </CardContent>
                  </CardActionArea>
               </Card>
            </div>
         </div>
      )
   };
}

export default VideoCards;