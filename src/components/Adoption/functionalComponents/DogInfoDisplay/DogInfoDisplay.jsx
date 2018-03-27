import React from 'react';
/* Images */
import barnabyJones from '../../../../assets/images/barnabyJonesCollage.jpg';
import freddyTheYeti from '../../../../assets/images/freddyTheYetiCollage.jpg';
/* Components */
import DogInfo from '../DogInfo/DogInfo.jsx';

/* Constants */
const hardCodedDogs = [
  {
    image:        barnabyJones,
    name:         'Barnaby Jones',
    description:  'Hello! My name is Barnaby Jones and I am a Medium Australian Labradoodle! I was born in July of 2017 and I will grow to be around 30lbs! I\'m told that I have an adorable underbite that gives me charm, whatever that means! I love to snuggle up on the couch, play with toys that make me think, play fetch, chew on bones and bully sticks, and wrestle with my brother, Freddy the Yeti! The car is not my favorite place because it makes me feel sick to my stomach, but I love exploring and going to places like the mountains and the beach! I love chasing the seagulls at the dog beach, but always make sure to come back when called! My coat is considered curly fleece and I am considered hypoallergenic. My hair requires regular grooming to keep me looking like an adorable teddybear. I am pretty attached to my brother, Freddy, and would like to find a home with him, if I can! We promise to give you double the love and fun!',
    summary: 'Barnaby Jones is available for adoption for $1,200 by himself or $2,000 for him and Freddy the Yeti together. |Please email| for more information on Barnaby and the training he has had so far.',
    summaryLinks: [
      {
        url: 'mailto:marissa.newleadonlife@gmail.com',
        isOutside: true,
        target: ''
      }
    ]
  },
  {
    image:        freddyTheYeti,
    name:         'Freddy the Yeti',
    description:  'Hi there! My name is Freddy the Yeti and I am a Medium Australian Labradoodle! My name was given to me because when I first came to New Lead On Life Dog Training, I would make Yeti noises at night when I was feeling unsure. I was born in July of 2017 and I will grow to be around 30lbs! I am a little bit bigger than my brother, Barnaby, but I am told that I have a more slender build like my Poodle ancestors. I love to snuggle and give kisses! I\'m told that I have an anteater tongue, whatever that means! My favorite thing to do is snuggle, but I also love to meet new people, play with my brother, chew on bones and bully sticks, and find toys to play with. My coat is considered a fleece coat and I am also considered hypoallergenic. My hair requires regular grooming to keep me looking like an adorable teddybear! I am pretty attached to my brother, Barnaby, and would like to find a home with him if I can! We promise to give you double the love and fun!',
    summary: 'Freddy the Yeti is available for adoption for $1,200 by himself or $2,000 for him and Barnaby Jones together. |Please email| for more information on Freddy and the training he has had so far.',
    summaryLinks: [
      {
        url: 'mailto:marissa.newleadonlife@gmail.com',
        isOutside: true,
        target: ''
      }
    ]
  }
];

function DogInfoDisplay() {
  const dogs = hardCodedDogs.map((dog, i)=>{
    return (
      <DogInfo {...dog} key={i} index={i}/>
    );
  });
  return (
    <ul className='dog-info-display'>
      {dogs}
    </ul>
  );
}

export default DogInfoDisplay;
