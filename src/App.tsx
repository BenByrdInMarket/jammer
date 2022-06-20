import React, { useEffect, useState } from 'react';
import TrackCard from './components/TrackCard';
import mockData from './mockData/mockData';

export type TrackType = {
  trackId: number,
  trackAudio: string,
  trackTitle: string,
  trackArtist: string,
  trackArtwork: string,
}

const App = () => {
  const [trackData, setTrackData] = useState<TrackType>();

  const getRandomTrack = () => {
    console.log(mockData);
    const randomTrack = mockData.filter(track => track.trackId === 0);
    setTrackData(randomTrack[0]);
  }

  useEffect(() => {
    getRandomTrack()
  }, [])

  return (
    <div>
      {trackData && (
        <TrackCard
          trackAudio={trackData.trackAudio}
          trackArtist='Benjamin Harrison'
          trackTitle='Smooth Jazz Funk Jam in A minor'
          trackArtwork={trackData.trackArtwork}
        />
      )}
    </div>
  );
}

export default App;
