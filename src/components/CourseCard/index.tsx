import { alumniSans } from "@/fonts";
import styles from './styles.module.css';

/**
* Cards for the Course Review page
* @param {string} - Course Title
* @param {string} - Course ID
* @param {number} - Review Count
* 
* @author Vaishnavi R Pai
*/
const CourseCard = ({ 
    courseTitle,
    courseId,
    reviewCount,
}: CardProps) : JSX.Element => {
    return (
        <div className="flex flex-col w-[350px] h-[240px] p-[4px_11px_4px_11px] gap-[16px] border-b-[1px] border"> 
        <div className="h-[120px]"></div>
            <div className="w-[328px] h-[64px] border"> 
                <p className={`${alumniSans.className} text-[28px] font-[700] leading-[32px] text-white`}>
                    {courseTitle}
                </p>
            </div>

            <div className="flex flex-row w-[328px] h-[32px] gap-0 justify-between">
                <div className="w-[64px] h-[32px] gap-0">
                    <p className={`${alumniSans.className} text-[24px] font-bold leading-[32px] text-white`}>
                        {courseId}
                    </p>
                </div>

                <div className="w-[78px] h-[32px] gap-0">
                    <p className={`${alumniSans.className} text-[24px] font-bold leading-[32px] text-white`}>
                        {reviewCount}
                    </p>
                </div>
            </div>
        </div>
    )
};

export default CourseCard;
export interface CardProps {
    courseTitle: string,
    courseId: string,
    reviewCount: string,
}