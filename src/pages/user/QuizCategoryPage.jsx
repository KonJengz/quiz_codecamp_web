import React from 'react';
import Card from '../../components/Card';
import Jupiter from '../../icons/Jupiter';
import Rocket from '../../icons/Rocket';

const data = [
  {
    name: 'Variable',
    isSuccess: true,
    finish: 78,
    total: 120
  },
  {
    name: 'basic object',
    isSuccess: false,
    finish: 38,
    total: 1200
  },
  {
    name: 'Loop',
    isSuccess: false,
    finish: 798,
    total: 1290
  },
  {
    name: 'basic array',
    isSuccess: true,
    finish: 20,
    total: 120
  },
  {
    name: 'basic array2',
    isSuccess: false,
    finish: 8,
    total: 180
  }
];

function QuizCategoryPage() {
  const hdlClick = () => {
    console.log('first');
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {data.map((item, index) => (
          <div key={index} onClick={() => hdlClick()}>
            <Card
              key={index}
              finish={item.finish}
              total={item.total}
              name={item.name}
              icon={
                item.isSuccess ? (
                  <Jupiter />
                ) : (
                  <Rocket width={'120'} height={'120'} />
                )
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuizCategoryPage;
