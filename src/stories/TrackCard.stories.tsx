import TrackCard, { TrackCardProps } from '../components/TrackCard';
import { Story } from '@storybook/react';

export default {
  title: 'Tracks / Track Card',
  component: TrackCard,
}

const Template:Story<TrackCardProps> = (props) => <TrackCard {...props} />



export const trackCard = Template.bind({});
trackCard.args = {
  trackProps: {
    trackAudio: 'https://jammer-tracks.s3.us-west-2.amazonaws.com/track-audio/Smooth_Jazz_Funk_Jam_Track_in_A_min.mp3',
    trackTitle: 'Smooth Jazz Funk Jam in A minor',
    trackArtist: 'Benjamin Harrison',
    trackArtwork: 'https://jammer-tracks.s3.us-west-2.amazonaws.com/track-artwork/Smooth_Jazz_Funk_Jam_Track_in_A_min.png',
    trackId: 0,
    style: ['Funk', 'Jazz'],
    key: 'Am',
  },
  nextFunction: () => null,
}