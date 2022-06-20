import TrackCard, { TrackCardProps } from '../components/TrackCard';
import { Story } from '@storybook/react';
import TestAudio from '../tracks/Smooth_Jazz_Funk_Jam_Track_in_A_min.mp3';
import TrackArtwork from '../tracks/Smooth_Jazz_Funk_Jam_Track_in_A_min.png';

export default {
  title: 'Tracks / Track Card',
  component: TrackCard,
}

const Template:Story<TrackCardProps> = (props) => <TrackCard {...props} />

export const trackCard = Template.bind({});
trackCard.args = {
  trackAudio: TestAudio,
  trackTitle: 'Smooth Jazz Funk Jam in A minor',
  trackArtist: 'Benjamin Harrison',
  trackArtwork: TrackArtwork,
}