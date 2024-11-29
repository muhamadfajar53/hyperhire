import { cache } from 'react';

const getCarouselData = cache(() => {
  return Array.from({ length: 5 }).map((_, index) => ({
    id: index,
    name: `Abhishek Gupta`,
    role: '마케팅',
    experience: '2y+',
    skills: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
    profile_picture: '/carousel/carousel-card-profile.png',
    flag: '/carousel/carousel-card-flag.jpg',
  }));
});

export async function GET() {
  const data = getCarouselData();
  return Response.json(data);
}
