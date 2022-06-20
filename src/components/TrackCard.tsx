import * as React from 'react';
import { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import PauseIcon from '@mui/icons-material/Pause';
import StopIcon from '@mui/icons-material/Stop';

export type TrackCardProps = {
  trackAudio: string,
  trackTitle?: string,
  trackArtist?: string,
  trackArtwork?: string,
}

const TrackCard = (props: TrackCardProps) => {
  const { trackTitle, trackArtist = 'Artist', trackArtwork, trackAudio } = props;
  const theme = useTheme();
  const [audioFile, setAudioFile] = useState(new Audio());
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    audioFile.play().then(() => setIsPlaying(true));
  }

  const handlePause = () => {
    audioFile.pause();
    setIsPlaying(false);
  }

  const handleStop = () => {
    audioFile.pause()
    audioFile.currentTime = 0;
    setIsPlaying(false);
  }

  useEffect(() => {
    setAudioFile(new Audio(trackAudio));
  }, [trackAudio])

  useEffect(() => {
    audioFile.load()
  }, [audioFile])

  return (
    <Card sx={{ display: 'flex', maxWidth: '400px' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component='div' variant='h5'>
            {trackTitle}
          </Typography>
          <Typography variant='subtitle1' color='text.secondary' component='div'>
            {trackArtist}
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label='previous'>
            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </IconButton>
          {!isPlaying && (
            <IconButton aria-label='play' onClick={() => handlePlay()}>
              <PlayArrowIcon sx={{ height: 38, width: 38 }} />
            </IconButton>
          )}
          {isPlaying && (
            <IconButton aria-label='play' onClick={() => handlePause()}>
              <PauseIcon sx={{ height: 38, width: 38 }} />
            </IconButton>
          )}
          <IconButton aria-label='play' onClick={() => handleStop()}>
            <StopIcon sx={{ height: 38, width: 38 }} />
          </IconButton>
          <IconButton aria-label='next'>
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton>
        </Box>
      </Box>
      <Box>
        <CardMedia
          component='img'
          sx={{ width: 250 }}
          image={trackArtwork}
          alt='Track artwork'
        />
      </Box>
    </Card>
  );
}
export default TrackCard;