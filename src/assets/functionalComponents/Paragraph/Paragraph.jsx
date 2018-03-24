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
  const PARSE_CHAR = parseChar || '|'; //Defaults to '|' if not specified
  const parsedText = typeof textBlock === 'string' ? // Verifies if textBlock is a string
    textBlock.split(`${PARSE_CHAR}`) // Sets parsedText to an array of strings
      :
    []; // Sets parsedText to an empty array
  let linkInterator = 0;
  return (
    <p className={className}>
      {before}
      {
        parsedText.map((text, i)=>{
          if (i % 2 === 0){
            return text;
          }else{
            const {url, isOutside, alt, target} = linksArr[linkInterator++];
            const TARGET = target || '_blank'; // Defaults to '_blank' if not specified
            if(isOutside){
              return (
                <span className='generated-link-text' key={i}>
                  <a href={url?url:''} target={TARGET} alt={alt}>
                    {text}
                  </a>
                </span>
              );
            }else{
              return (
                <span className='generated-link-text' key={i}>
                  <Link to={url?url:''} alt={alt}>
                    {text}
                  </Link>
                </span>
              );
            }
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

  linksArr -  Array. An array of links. Each link is a link object. Link objects
              must have a url prop that is a string and can optionally have an
              isOutside prop that is bool. If isOutside is true, an 'a' tag will
              be used instead of a Link component.

  className - String. The name(s) of the css class(es) that will be applied to the 'p'
              tag.

*/
