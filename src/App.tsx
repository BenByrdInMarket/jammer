import React from 'react';
import TrackCard from './components/TrackCard';
import TrackAudio from './tracks/Smooth_Jazz_Funk_Jam_Track_in_A_min.mp3';
import TrackArtwork from './tracks/Smooth_Jazz_Funk_Jam_Track_in_A_min.png';

const App = () => {
  return (
    <div>
      <TrackCard
        trackAudio={TrackAudio}
        trackArtist='Benjamin Harrison'
        trackTitle='Smooth Jazz Funk Jam in A minor'
        trackArtwork={TrackArtwork}
      />
    </div>
  );
}

export default App;
