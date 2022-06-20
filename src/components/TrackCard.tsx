import * as React from 'react';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import PauseIcon from '@mui/icons-material/Pause';
import StopIcon from '@mui/icons-material/Stop';

export type TrackType = {
  trackId: number,
  trackAudio: string,
  trackTitle: string,
  trackArtist: string,
  trackArtwork: string,
  style: string[],
  key: string,
}

export type TrackCardProps = {
  trackProps: TrackType,
  nextFunction: Function,
}

const TrackCard = (props: TrackCardProps) => {
  const { trackProps, nextFunction } = props;
  const [audioFile, setAudioFile] = useState(new Audio());
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackStatus, setTrackStatus] = useState('')

  const handlePlay = () => {
    audioFile.play().then(() => setIsPlaying(true));
    setTrackStatus('Playing')
  }

  const handlePause = () => {
    audioFile.pause();
    setIsPlaying(false);
    setTrackStatus(`Paused at ${parseFloat(audioFile.currentTime.toString()).toFixed(2)}s`)
  }

  const handleStop = () => {
    if (isPlaying || trackStatus.split(' ').includes('Paused')) {
      audioFile.pause()
      audioFile.currentTime = 0;
      setIsPlaying(false);
      setTrackStatus('')
    }
  }

  const handleNext = () => {
    if (isPlaying) {
      audioFile.pause()
      audioFile.currentTime = 0;
      setIsPlaying(false);
    }
    setTrackStatus('');
    nextFunction();
  }

  useEffect(() => {
    setAudioFile(new Audio(trackProps.trackAudio));
  }, [trackProps.trackAudio])

  useEffect(() => {
    audioFile.load()
  }, [audioFile])

  return (
    <Card sx={{ display: 'flex', maxWidth: '400px' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component='div' variant='h5'>
            {trackProps.trackTitle}
          </Typography>
          <Typography variant='subtitle1' color='text.secondary' component='div'>
            {trackProps.trackArtist}
          </Typography>
        </CardContent>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant='subtitle2' fontSize='12px' color='text.secondary' component='div'>
            {trackStatus}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
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
          <IconButton aria-label='next' onClick={() => handleNext()}>
            <SkipNextIcon />
          </IconButton>
        </Box>
      </Box>
      <Box>
        <CardMedia
          component='img'
          sx={{ width: '100%', objectFit: 'contain' }}
          image={trackProps.trackArtwork}
          alt='Track artwork'
        />
      </Box>
    </Card>
  );
}
export default TrackCard;