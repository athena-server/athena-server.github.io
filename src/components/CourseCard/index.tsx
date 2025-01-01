import { alumniSans } from "@/fonts";
import styles from './styles.module.css';

/**
* Cards for the Course Review page
* @param {string} - Course Title
* @param {number} - Course ID
* @param {string} - Review Count
* 
* @author Vaishnavi R Pai
*/
const CourseCard = ({ 
    courseTitle,
    courseId,
    reviewCount,
}: CardProps) : JSX.Element => {
    return (
        <div className="flex flex-col w-[350px] h-[120px] p-[4px_11px] gap-[16px] border-b-[1px] opacity-0"> 
            <div className="w-[328px] h-[64px] gap-0 opacity-0"> 
                <p className={`${alumniSans.className} text-[28px] font-bold leading-[32px] text-left underline underline-offset-auto decoration-skip-none`}>
                    {courseTitle}
                </p>
            </div>
        </div>
    )
};

export default CourseCard;
export interface CardProps {
    courseTitle: string,
    courseId: number,
    reviewCount: string,
}