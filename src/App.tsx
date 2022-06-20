import React, { useEffect, useState } from 'react';
import TrackCard, { TrackType } from './components/TrackCard';
import mockData from './mockData/mockData';

const App = () => {
  const [trackData, setTrackData] = useState<TrackType>();
  const [detailsHidden, setDetailsHidden] = useState(false);

  const getRandomTrack = () => {
    const id = getRandomArbitrary(mockData.length);
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
          detailsHidden={detailsHidden}
          setDetailsHidden={setDetailsHidden}
        />
      )}
    </div>
  );
}

export default App;
