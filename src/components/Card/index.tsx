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
        <div>
            <h1>Card</h1>
        </div>
    )
}



export default Card;
export interface CardProps {
    imageUrl: string,
    name: string,
    // designation: string, // job title
    socials?: {
        email: string,
        linkedin?: string,
        github?: string,
    }
}