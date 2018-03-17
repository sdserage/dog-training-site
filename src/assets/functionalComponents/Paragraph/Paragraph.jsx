import React from 'react';
/* Components */
import {Link} from 'react-router-dom';

export default function Paragraph(props){
  const {textBlock, before, after, parseChar, linksArr, className} = props;
  /*
    Splits the text by the parseChar into an array. Text with an even numbered
    index (e.g., 0, 2, 4, etc.) will be returned as normal text. Text with an odd
    numbered index (e.g., 1, 3, 5, etc.) will be converted into a span element
    with the class name 'generated-link-text' and will have a child Link
    Component. The child Link will receive as its 'to' value a string from the
    linksArr. The value it receives will intially be the first item in the linksArr
    and will increment for each link.
  */
  const parsedText = textBlock.split(`${parseChar}`);
  let linkInterator = 0;
  return (
    <p className={className}>
      {before}
      {
        parsedText.map((text, i)=>{
          if (i % 2 === 0){
            return text;
          }else{
            return (
              <span className='generated-link-text' key={i}>
                <Link to={linksArr[linkInterator++]}>
                  {text}
                </Link>
              </span>
            );
          }
        })
      }
      {after}
    </p>
  );
}

/*

  textBlock - String. The paragraph's main text.

  before -    HTML element. An HTML element that appears within the
              <p></p> ('p' tag) but before the main text.

  after -     HTML element. Same as before but, as the name suggests, appears
              after the main text (still within the tag).

  parseChar - String. The char(s) that will be used with the split() function,
              it will be used to divide the textBlock into alternating sections
              of normal text and hyper-link text.

  linksArr -  Array. An array of links. Each link is a string.
  
  className - String. The name(s) of the css class(es) that will be applied to the 'p'
              tag.

*/
