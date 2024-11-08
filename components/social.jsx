import Link from "next/link"
import {FaGithub,FaLinkedinIn,FaYoutube,FaTwitter} from "react-icons/fa"

const social=[
    {icon:<FaGithub/>,path:'https://github.com/HariMenon2002'},
    {icon:<FaLinkedinIn/>,path:'https://www.linkedin.com/in/hari-menon-971bbb17a/'},
    
    {icon:<FaTwitter/>,path:'https://twitter.com/HariMenon2002'},
]
const Social = ({containerStyles,iconStyles}) => {
  return (
    <div className={containerStyles}>
      {social.map((item,index)=>{
        return <Link key={index} href={item.path} className={iconStyles} target="_blank" rel="noopener noreferrer">{item.icon}</Link>
      })}
    </div>
  )
}

export default Social
