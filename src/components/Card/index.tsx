/*
    * remove these comments once u have read them
    * the comments are just for guidance
    * the second comment is jsDocs comment, don't remove those
    * they are for refernece for the people who are going to use this component
    * 
    * use tailwindcss preferably
    * in case you need modular css, createa `styles.module.css` file within this same folder use similar to how it is being used in src/components/Button component
    * 
    * by default the font is inter, so no change is needed
    * i have imported alumniSansa and geo font in case it is needed. To see how those fonts are being used you can refer the other pages with sections where those fonts are used
    * 
    * do not edit any file other than files in this folder
    * 
    * to test out the component, use the (debug) folder as it is gitignored
    * 
    * don't create any additional components without asking
    * 
    * to use images or static files, save the file to "/public/Card/{filename}"
    * and to use them within the <img /> use src="/Card/{filename}"
    * 
    * clarify any doubts before acting on them
*/



import { alumniSans, geo } from "@/fonts";
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
    const { email, linkedin, github } = socials || {};
    return (
        <div className="flex flex-col gap-[5px] w-[250px]" >
            <div className="relative flex items-center justify-center w-[250px] h-[250px] bg-neonGreen">
                <img
                    src={imageUrl}
                    alt="Circular Image"
                    className="w-full h-full rounded-full object-cover bg-black"
                />
  
                <div className="absolute bottom-0 h-1/2 w-full bg-[radial-gradient(circle_at_bottom_left,_#3F56E9_0%,_transparent_35%)] pointer-events-none z-10"></div>
            </div>

            <div className="w-[250px] border-[1px] border-solid border-neonGreen px-[9px] py-[7px] flex flex-col items-start gap-[8px]">
                <p className={`${alumniSans.className} w-full font-bold text-[32px] leading-[38px]`}>{name}</p>
                {socials && 
                    <div className="flex flex-row gap-[12px] items-center p-0">
                        {socials.email && 
                            <a href={`mailto:${socials.email}?`} >
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
    // designation: string, // job title
    socials?: {
        email?: string,
        linkedin?: string,
        github?: string,
    }
}