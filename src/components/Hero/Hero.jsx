import './Hero.scss';
import { HeroPicture } from './HeroPicture';
import { PostContent } from './PostContent';

export const Hero = () => {
  return (
    <main className="Hero">
      <PostContent />
      <HeroPicture />
    </main>
  );
};
