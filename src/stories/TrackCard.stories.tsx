import TrackCard, { TrackCardProps } from '../components/TrackCard';
import { Story } from '@storybook/react';
import TestAudio from '../tracks/Smooth_Jazz_Funk_Jam_Track_in_A_min.mp3';

export default {
  title: 'Tracks / Track Card',
  component: TrackCard,
}

const Template:Story<TrackCardProps> = (props) => <TrackCard {...props} />

export const trackCard = Template.bind({});
trackCard.args = {
  trackAudio: TestAudio,
  trackTitle: 'Track Title',
  trackArtist: 'Track Artist',
  trackArtwork: 'https://mui.com/static/images/cards/live-from-space.jpg',
}