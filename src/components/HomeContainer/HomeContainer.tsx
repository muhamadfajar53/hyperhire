import { lazy, Suspense } from 'react';
import type { TCarouselCardData } from '@/types/carousel-data.type';
import type { TSliderItem } from '@/types/slider-data.type';
import HomeMainText from './HomeMainText/HomeMainText';
import HomeSkillsCheckbox from './HomeSkillsCheckbox/HomeSkillsCheckbox';

const HomeSlider = lazy(() => import('./HomeSlider/HomeSlider'));
const HomeCarousel = lazy(() => import('./HomeCarousel/HomeCarousel'));

interface IProps {
  carouselData: TCarouselCardData[];
  sliderData: TSliderItem[];
}

const HomeContainer: React.FC<IProps> = ({ carouselData, sliderData }) => {
  return (
    <main className="grid relative w-full pb-14 lg:pb-[120px] text-white pt-[36px] sm:pt-10 md:pt-16 lg:pt-20 xl:pt-24">
      <div className="flex container flex-col lg:flex-row gap-14">
        <HomeMainText />
        <Suspense fallback={<div>Loading...</div>}>
          <HomeCarousel carouselData={carouselData} />
        </Suspense>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <HomeSlider sliderData={sliderData} />
      </Suspense>

      <HomeSkillsCheckbox />
    </main>
  );
};

export default HomeContainer;
