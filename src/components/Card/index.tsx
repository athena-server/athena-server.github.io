import { alumniSans } from "@/fonts";
import styles from "./styles.module.css";


/**
 * Card component to be used across different pages for a coherent design 
 *  
 * @param {string} [ChildProps.imageUrl] - image url
 * @param {string} [ChildProps.name] - name of the person
 * @param {Object} [ChildProps.socials] - social media links
 * @returns {JSX.Element} - Card component
 * 
 * 
 * @author Nandana Anand
 */
const Card = ({
    imageUrl,
    name,
    // designation,
    socials,
}: CardProps): JSX.Element => {
    return (
        <div className="flex flex-col gap-[5px] w-[250px]" >
            <div className="relative flex items-center justify-center w-[250px] h-[250px] bg-neonGreen">
                <img
                    src={imageUrl}
                    alt="Circular Image"
                    className="w-full h-full rounded-full object-cover bg-black"
                />
  
                <div className="absolute bottom-0 h-1/2 w-full 
                    bg-[radial-gradient(circle_at_20%_99%,_rgba(63,86,233,1)_0%,_transparent_45%)]
                    opacity-65
                    pointer-events-none z-10"/>
                <div className="absolute bottom-0 h-1/2 w-full 
                    bg-[radial-gradient(ellipse_at_4%_99%,_rgba(63,86,233,1)_0%,_transparent_18%)]
                    opacity-40
                    pointer-events-none z-10"/>
            </div>

            <div className="w-[250px] border-[1px] border-solid border-neonGreen px-[9px] py-[7px] flex flex-col  items-start gap-[8px]">
                <div className={`${socials===undefined? "place-self-center":""}`}>
                    <p className={`${alumniSans.className} ${socials===undefined? "text-center":""} font-bold text-[32px]  leading-[38px]`}>{name}</p>
                </div>
                {socials && 
                    <div className="flex flex-row gap-[12px] items-center p-0">
                        {socials.email && 
                            <a href={`mailto:${socials.email}`} >
                                <img src="/Card/email.svg" alt={`icon-email`} className={`${styles.txtshadow}`}/>
                            </a>
                        }
                        {socials.linkedin && 
                            <a href={socials.linkedin} className="">
                                <img src="/Card/linkedin.svg" alt={`icon-linkedin`} className={`${styles.txtshadow}`}/>
                            </a>
                        }
                        {socials.github && 
                            <a href={socials.github} className="">
                                <img src="/Card/github.svg" alt={`icon-github`} className={`${styles.txtshadow}`}/>
                            </a>
                        }
                    </div>
                }
            </div>
        </div>
    )
}


export default Card;
export interface CardProps {
    imageUrl: string,
    name: string,
    socials?: {
        email?: string,
        linkedin?: string,
        github?: string,
    }
}