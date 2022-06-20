import React from 'react'
import './Footer.css';
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import PlayCircleOutlined from '@mui/icons-material/PlayCircleOutlined';
import { Grid, Slider } from '@mui/material';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';

function Footer() {
  return (
    <div className="Footer">
      <div className="footer__left">

      </div>
      <div className="footer__center">
        <ShuffleIcon className="footer__green"/>
        <SkipPreviousIcon className="footer__icon" />
        <PlayCircleOutlined fontSize="large" className="footer__icon"/>
        <SkipNextIcon className="footer__icon" />
        <RepeatIcon className="footer__green" />
      </div>
      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby="continuous-slider"/>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Footer