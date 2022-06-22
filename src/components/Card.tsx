import React , {useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';


// typage des props
interface Iprops {
    firstName: string
    lastName: string
    image: string
    maidenName: string
    username: string
    email: string
    birthDate: string
    gender: string
    height: string
    weight: string
    adress: string
    adressCity: string
    adressPostalCode: string
}

const MediaCard   = (props : Iprops) => {

    const {firstName, lastName, image, maidenName , username, email , 
           birthDate, gender , height, weight, adress, adressCity , adressPostalCode} = props


    // permet de gérer l'affichage de l'icône favoris
    const [IconBorder, setIconBorder] = useState ('flex');
    const [Icon, setIcon] = useState ('none');

    const onClickIconBorder = () => {
        setIconBorder('none')
        setIcon('flex')
    }

    const onClickIcon = () => {
        setIconBorder('flex')
        setIcon('none')
    }

    return (

        //Card de material UI (https://mui.com/material-ui/react-card/)
       
        <Card sx={{ maxWidth: 800 , width: 290, marginTop: 8, backgroundColor: '#E4E4E4'}}>
        <div id='containImg'>
        <CardMedia
          component="img"
          width="50%"
          height="150"
          image={image}
          alt="users avatars"
          sx={{borderWidth: 10, borderColor: 'blue', borderRadius: 180, width: '50%', 
                borderStyle: 'solid' , backgroundColor: '#2F2F2F', justifySelf: 'center', display: 'flex', marginTop: 4}}
        />
        </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={title}>
          {firstName}
          </Typography>
          <Typography gutterBottom variant="h5" component="div" sx={title}>
          {lastName}
          </Typography>
          <Typography gutterBottom variant="h5" component="div" sx={title}>
            {maidenName}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={subTitle}>
           @{username}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={subTitle}>
           {email}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ justifyContent: 'center', display: 'flex', marginTop: 3}}>
           *************************
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={subTitle}>
           anniversaire: {birthDate}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={subTitle}>
           genre: {gender}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={subTitle}>
           taille: {height}cm / poids: {weight}kg
          </Typography>
          <div id='containAdress'>
          <Typography variant="body2" color="text.secondary" sx={subTitle}>
           {adress}
         </Typography>
          <Typography variant="body2" color="text.secondary" sx={subTitle}>
           {adressCity}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={subTitle}>
           {adressCity} {adressPostalCode}
          </Typography>
          </div>
        </CardContent>
        <CardActions sx={{display: 'flex', flexDirection: 'row-reverse'}}>
          <Button size="small" sx={{display: (IconBorder)}}
          onClick= {() => onClickIconBorder()}>
          <FavoriteBorderIcon />
          </Button>
          <Button size="small" sx={{display: (Icon)}}
          onClick= {() => onClickIcon()}>
          <FavoriteIcon />
          </Button>
          <Button size="small">Learn More</Button>
          
        </CardActions>
      </Card>
    )
}

export default MediaCard

const title= {
    justifyContent: 'center',
    display: 'flex', 
    fontSize: 32,
}

const subTitle= {
    justifyContent: 'center', 
    display: 'flex', 
    fontSize: 16
}

