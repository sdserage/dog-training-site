import React from 'react';
import './About.css';
/* Images */
import marissaTreece from '../../assets/images/marissaTreeceTemp.jpg';
import tyTreece from '../../assets/images/tyTreeceTemp.jpg';
import alli from '../../assets/images/alliTemp.jpg';
import murdock from '../../assets/images/murdockTemp.jpg';
import sampson from '../../assets/images/sampsonTemp.jpg';
import portia from '../../assets/images/portiaTemp.jpg';
import winnie from '../../assets/images/winnieTemp.jpg';

function About() {
  return (
    <section id='about'>
      <h1 className='main-header'>
        About Us
      </h1>

      <p className='about-paragraph primary-paragraph'>
        New Lead On Life Dog Training was established in the summer of 2015 and
        is based on positive reinforcement. We are dedicated to staying up to
        date on the latest science based positive reinforcement training. As a
        member of the Association of Professional Dog Trainers since September
        of 2014, continuing education has never been easier between the annual
        education conference, webinars, and monthly educational newsletter.
      </p>

      <h2 className='secondary-header'>
        Meet the Trainer
      </h2>

      <img
        src={marissaTreece}
        alt='Marissa Treece'
        className='circle-portrait'
      />

      <h3 className='tertiary-header'>
        Marissa Treece
      </h3>

      <p className='about-paragraph'>
        Marissa Treece has been training dogs professionally since 2012. Her
        love of dog training all started from childhood where she trained her
        family dog a variety of tricks, including sliding down slides, playing
        dead, and wiping her eyes on cue.
      </p>

      <p className='about-paragraph sans-padding-top'>
        As an adult, Marissa started out her
        career in the animal field by socializing puppies and then expanded into
        formal training, animal husbandry, puppy photographer, and more. She
        decided to further her education on the Dog Training Field by studying
        through CATCH Canine Trainers Academy where she completed the Master's
        Course with an over all grade of 90% in 2017, receiving high regards
        from both her program adviser and her mentor trainer.
      </p>

      <p className='about-paragraph sans-padding-top'>
        Marissa is a firm
        believer in positive reinforcement training and making the training
        process fun for both the dog and the owner and her goal is to improve
        the lives of dogs and their owners within the community.
      </p>

      <h2  className='secondary-header'>
        Meet Her Family
      </h2>

      <img
        src={tyTreece}
        alt='Ty Treece'
        className='circle-portrait'
      />

      <h3 className='tertiary-header'>
        Ty Treece
      </h3>

      <p className='about-paragraph paragraph-bottom-spacer'>
        Marissa's husband and the 'official dog snuggler'.
        Duis purus nisi, aliquam sit amet varius finibus, egestas fermentum
        mauris. In mattis ac dui vel tempus. Nam vel accumsan metus, ut
        tincidunt mi. Suspendisse ornare quam sed enim mattis, ut lobortis leo
        eleifend. Curabitur viverra libero sodales, tincidunt dolor ut,
        condimentum neque.
      </p>

      <img
        src={alli}
        alt='Alli'
        className='circle-portrait'
      />

      <h3 className='tertiary-header'>
        Alli
      </h3>

      <p className='about-paragraph paragraph-bottom-spacer'>
        Brindle Border Collie mix (2009).
        Duis purus nisi, aliquam sit amet varius finibus, egestas fermentum
        mauris. In mattis ac dui vel tempus. Nam vel accumsan metus, ut
        tincidunt mi. Suspendisse ornare quam sed enim mattis, ut lobortis leo
        eleifend. Curabitur viverra libero sodales, tincidunt dolor ut,
        condimentum neque.
      </p>

      <img
        src={murdock}
        alt='Murdock'
        className='circle-portrait'
      />

      <h3 className='tertiary-header'>
        Murdock
      </h3>

      <p className='about-paragraph paragraph-bottom-spacer'>
        Murdock the Coonhound Border Collie mix disguised as a Black Lab
        look-a-like (2010)
        Duis purus nisi, aliquam sit amet varius finibus, egestas fermentum
        mauris. In mattis ac dui vel tempus. Nam vel accumsan metus, ut
        tincidunt mi. Suspendisse ornare quam sed enim mattis, ut lobortis leo
        eleifend. Curabitur viverra libero sodales, tincidunt dolor ut,
        condimentum neque.
      </p>

      <img
        src={sampson}
        alt='Sampson'
        className='circle-portrait'
      />

      <h3 className='tertiary-header'>
        Sampson
      </h3>

      <p className='about-paragraph paragraph-bottom-spacer'>
        Sampson the Shepherd mix (2011)
        Duis purus nisi, aliquam sit amet varius finibus, egestas fermentum
        mauris. In mattis ac dui vel tempus. Nam vel accumsan metus, ut
        tincidunt mi. Suspendisse ornare quam sed enim mattis, ut lobortis leo
        eleifend. Curabitur viverra libero sodales, tincidunt dolor ut,
        condimentum neque.
      </p>

      <img
        src={portia}
        alt='Portia'
        className='circle-portrait'
      />

      <h3 className='tertiary-header'>
        Portia
      </h3>

      <p className='about-paragraph paragraph-bottom-spacer'>
        Portia the red
        Australian Labradoodle (2012)
        Duis purus nisi, aliquam sit amet varius finibus, egestas fermentum
        mauris. In mattis ac dui vel tempus. Nam vel accumsan metus, ut
        tincidunt mi. Suspendisse ornare quam sed enim mattis, ut lobortis leo
        eleifend. Curabitur viverra libero sodales, tincidunt dolor ut,
        condimentum neque.
      </p>

      <img
        src={winnie}
        alt='Winnie'
        className='circle-portrait'
      />

      <h3 className='tertiary-header'>
        Winnie
      </h3>

      <p className='about-paragraph'>
        Winnie the cream Australian
        Labradoodle and daughter of Portia (2015).
        Duis purus nisi, aliquam sit amet varius finibus, egestas fermentum
        mauris. In mattis ac dui vel tempus. Nam vel accumsan metus, ut
        tincidunt mi. Suspendisse ornare quam sed enim mattis, ut lobortis leo
        eleifend. Curabitur viverra libero sodales, tincidunt dolor ut,
        condimentum neque.
      </p>

    </section>
  );
}

export default About;

// Marissa and her
// husband have 5 furry children--Alli the brindle Border Collie mix
// (2009), Murdock the Coonhound Border Collie mix disguised as a Black Lab
// look-a-like (2010), Sampson the Shepherd mix (2011), Portia the red
// Australian Labradoodle (2012), and Winnie the cream Australian
// Labradoodle and daughter of Portia (2015). Marissa's husband is also the
// official dog snuggler!
