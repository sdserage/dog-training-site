import React from 'react';
/* Components */
import SvgIcon from 'material-ui/SvgIcon';
import IconButton from 'material-ui/IconButton';

const iconStyle =   {width: 24, height: 24};
const buttonStyle = {width: 50, height: 50, padding: 13};

export default function ContactLink(props){
  const {
    isCustomSvg,
    target,
    pathAttributes,
    children,
    color,
    href
  } = props;
  return (
    <IconButton href={href} target={target} iconStyle={iconStyle} style={buttonStyle}>
      {
        isCustomSvg ?
          <SvgIcon viewBox="0 0 24 24" color={color}>
            <path {...pathAttributes}/>
          </SvgIcon>
        :
          children
      }
    </IconButton>
  );
}
