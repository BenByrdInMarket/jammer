import React, { useEffect, useState } from 'react';
import TrackCard, { TrackType } from './components/TrackCard';
import mockData from './mockData/mockData';

const App = () => {
  const [trackData, setTrackData] = useState<TrackType>();

  const getRandomTrack = () => {
    const id = getRandomArbitrary(3);
    const data = mockData.filter(track => track.trackId === id)[0];
    setTrackData(data);
  }

  const getRandomArbitrary = (max: number) => {
    const trackId = Math.floor(Math.random() * max);

    if (trackData && trackId === trackData.trackId) {
      setTimeout(() => {
        getRandomTrack();
      }, 100)
    }
    else {
      return trackId;
    }
  }

  useEffect(() => {
    getRandomTrack();
  }, [])

  return (
    <div>
      {trackData && (
        <TrackCard
          trackProps={{
            trackId: trackData.trackId,
            trackAudio: trackData.trackAudio,
            trackTitle: trackData.trackTitle,
            trackArtist: trackData.trackArtist,
            trackArtwork: trackData.trackArtwork,
            style: trackData.style,
            key: trackData.key,
          }}
          nextFunction={getRandomTrack}
        />
      )}
    </div>
  );
}

export default App;
