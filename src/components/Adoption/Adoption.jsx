import React from 'react';
import './Adoption.css';
/* Images */

/* Components */
import DogInfoDisplay from './DogInfoDisplay';

/* Constants */
const formLink = 'https://docs.google.com/forms/d/1mrS9JsdkdfPGiethDCzblDJsWi64dPYej5yCyIVBna8/viewform?edit_requested=true';

function Adoption() {
  return (
    <section id='adoption'>
      <h1 className='main-header'>Train to Adopt</h1>
      <p className='adoption-main-paragraph primary-paragraph'>
        Our Train-to-Adopt program was established to help dogs from a variety
        of backgrounds become more adoptable. The primary focus of this program
        is to help dogs become better socialized and to give them a head start
        on their training before going to their new home. Each dog is evaluated
        in a variety of situations to figure out the best type of home they
        should be adopted into for both the dog and their forever family. To
        adopt one of our dogs,
        <span> <a href={formLink} target='_blank'> please fill out this application today!</a></span>
      </p>

      <h2 className='secondary-header'>Featured Dogs*</h2>
      <DogInfoDisplay/>
    </section>
  );
}

export default Adoption;

/*
NLOL Adoption Application
​
NLOL Adoption Application
Thank you for your interest in adoption one of our dogs! We take the time to get to know each dog individually to best know their personalities and their needs for their new homes. It is our goal to place our dogs in homes with the best match possible for them and their new families. Please take the time to fill this application out thoroughly and honestly so that we can help match you to the best furry companion possible.
* Required
Full Name *
Address *
Occupation *
Best phone number to reach you by *
E-mail *
How many adults live in the home? *
Are there any children in the home? If yes, what are their ages? *
What type of home do you live in? *
House
Townhouse
Manufactured House
Apartment
Other:
How would you describe your household? *
Very active
Active
Moderate
Fairly Quiet
Quiet
How often do you entertain guests in your home? This includes children's friends *
Daily
Very often
Often
Seldom
Rarely
Are you renting your home? If yes, what are the Landlord's rules on pets? *
Any allergies in the home? *
Does everyone in the home want a dog? *
Yes
No
Other:
How many hours will the dog be left unattended during the day on average? *
Where will the dog spend its time during the day? *
Where will your dog spend the night? *
Do you have a backyard and is it fenced? *
Yes, with a fence
Yes, without a fence
No yard
Are you a first time dog owner? *
Yes
No
Are there any pets currently in the home? If yes, please list. *
Are all pets current on vaccinations? *
Yes
No
Not Applicable (only if no pets are currently in the home)
Are all pets spayed or neutered? *
Yes
No
Not Applicable (only if no pets are currently in the home)
Have you ever owned a dog that required regular grooming? *
Yes
No
If yes, how were your dog's grooming needs met? Please select all that apply *
Groomed by a professional groomer regularly
Groomed by a professional groomer sometimes
Groomed at home sometimes
Groomed at home only
Not applicable (only if you have never owned a dog that required regular grooming)
Have you ever rehomed a pet before? If yes, please explain *
What gender do you prefer in your new companion? Please select all that apply *
Female
Male
No preference
Which age range are you looking to adopt? Please select all that apply *
Puppy (2 to 5 months)
Adolescent (6 months to 1 year)
Young Adult (1 to 2 years)
Adult (3 to 6 years)
Senior (7 years and older)
Do you have a breed preference? If yes, please list *
Is there a breed you would NOT adopt? If yes, please list and why *
Any color preferences? Please select all that apply *
Black
White
Chocolate
Apricot
Caramel
Red
Cream
Parti
Silver
Faded Chocolate
Brindle
Sable
Phantom
Merle
Tricolored
Peppered
Other:
Do you have a preference on coat type? Please select all that apply *
Short Fur
Long Fur
Wire Fur
Double Coated
Wool (minimal/no shedding)
Curly Fleece (minimal/no shedding)
Fleece (minimal/no shedding)
Straight Hair (minimal/no shedding)
No Preference
Is shedding okay? *
Yes
No
What energy level are you willing to adopt? Please select all that apply *
High Energy (running and hiking companion, sport dog)
Moderate/High Energy (good running and hiking companion)
Moderate Energy (running or walking companion)
Low Energy (good walking companion)
Couch Potatoe
Are there any dogs currently posted to the adoption page of the website that you are interested in? If yes, please list *
Who will have primary responsibility of the dog's daily care? *
What training methods will you use if your new dog develops any bad habits? *
How did you hear about New Lead On Life Dog Training? *
Facebook
Instagram
Search engine such as Google or Bing
APDT
Friend or word of mouth
Other:
Please list 2 personal references of individuals who know you and your pets (if you have any). Please provide their name, contact information, and how they know you. *
I agree to provide regular vet care for the dog I adopt *
Yes
No
I agree to contact and return the dog to New Lead On Life Dog Training should I decide that I can no longer care for or no longer want the dog *
Yes
No
I agree that the dog that I adopt will be a member of the family and will be and indoor dog *
Yes
No
I acknowledge that these dogs are a considered rescues and New Lead On Life Dog Training cannot guarantee that the dog I adopt will not develop any health issues throughout their life, breed-related or otherwise *
Yes
No
By signing my name below, I declare that the information I have provided above is true and correct, and acknowledge that this information will be used to determine if I am a suitable adopter for any particular dog that is available for adoption. I also acknowledge that completing this application does not guarantee that I will be matched with a dog. *
Never submit passwords through Google Forms.

*/
