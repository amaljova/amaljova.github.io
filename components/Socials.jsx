'use client';
import {
  RiYoutubeFill, 
  RiLinkedinFill, 
  RiGithubFill, 
  RiMediumFill, 
  RiInstagramFill,
  RiBehanceFill,
  RiGitlabFill
} from 'react-icons/ri';

import Link from 'next/link';
//icons
const icons = [
  {path:'https://www.linkedin.com/in/amaljova', name:<RiLinkedinFill/>},
  {path:'https://medium.com/@amaljova', name:<RiMediumFill/>},
  {path:'https://github.com/amaljova', name:<RiGithubFill/>},
  {path:'https://gitlab.com/amaljova', name:<RiGitlabFill/>},
  {path:'https://youtube.com/@amaljova', name:<RiYoutubeFill/>},
  {path:'https://instagram.com/amaljosephvarghese', name:<RiInstagramFill/>},
  {path:'https://www.behance.net/amaljoseph', name:<RiBehanceFill/>},
];

const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index)=>{
        return (
        <Link href={icon.path} key={index}>
          <div className={`${iconStyles}`}>{icon.name}</div>
        </Link>)
      })}
    </div>
  )
}

export default Socials;