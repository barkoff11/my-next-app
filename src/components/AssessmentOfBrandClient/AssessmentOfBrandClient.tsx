'use client';

import dynamic from 'next/dynamic';

const AssessmentOfBrand = dynamic(
  () => import('@/AssessmentOfBrand/AssessmentOfBrand'),
  { 
    ssr: false,
    loading: () => <div>Загрузка...</div>
  }
);

export default AssessmentOfBrand;