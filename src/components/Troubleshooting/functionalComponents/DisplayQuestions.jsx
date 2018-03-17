import React from 'react';
/* Components */
import QA from '../QA/QA';
/* Constants */
const hardCodedQs=[
  {
    q:        "Why won't my dog sit unless I have a treat?",
    a:        "Most dogs won't sit when asked unless they think there is something in it for them. The next time your dog wants to be let out or have a toy thrown, require them to sit. Allow your dog the opportunity to earn his meals or play sessions. For more questions on how to incorporate life rewards in your routine, |set up a private training session today!",
    links:    ['/services']
  },
  {
    q:        "Why won't my dog come when I call him?",
    a:        "This is a complex question and the answer could be any number of things, but consider some of the following. Do you punish the dog when you do finally get ahold of him? Whether it's by scolding for running off in the first place or by making him take a bath, you are teaching your dog that unpleasant things happen when you tell them to Come and they learn to run the other way. You could also be teaching them that their fun ends when they come to you and they don't ever want their fun to end! You always want to make sure that you praise your dog for coming when called, even if you are upset that they ran off in the first place. For more questions on teaching a reliable \"Come\", |set up a private training session today!",
    links:    ['/services']
  },
  {
    q:        "Why does my dog run away when they have something they shouldn't?",
    a:        "Playing chase is a fun game for dogs and they learn that their fun ends when you take the item away from them. Instead of sternly telling them to drop it and trying to forcefully take it away from them, try being excited about it and offering them a trade for something they like even better! For example, ask them what they've got in a happy voice, then offer them a juicy bone or a fun game of tug instead. Make it exciting and worth the trade to them! This should help to reduce the urge to run off and should be paired with training the command \"Leave It\". Important disclaimer! Never practice this when a dog has a potentially hazardous item! Keep all hazardous items out of reach at all times and practice this technique with items that are safe and that you don't mind using for practicing this behavior with. For more on this topic, |schedule a private training session today!",
    links:    ['/services']
  },
  {
    q:        "My dog doesn't like treats, how am I supposed to train him?",
    a:        "    Have you tried every treat on the market? Just like with people, not every dog likes every treat. Try taking your dog to the local pet store and let him find treats that he thinks are good. Also, try scheduling your training sessions for when you know your dog is hungry, such as before meal times. I have found that the best kind of treats for training are small, bitesized, soft treats that give your dog just a taste. Training sessions are significantly slower when your dog has to spend several seconds chewing each treat you give him! I have had great success with Bil Jac's Little Jacs training treats and I have yet to find a dog that doesn't like them!"
  }
];

export default function DisplayQuestions(props){
  const qas = hardCodedQs.map((question, i)=>{
    return (
      <QA {...question} key={i}/>
    );
  });
  return(
    <section>
      {qas}
    </section>
  );
}
