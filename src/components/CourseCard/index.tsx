import { alumniSans } from "@/fonts";
import styles from './styles.module.css';

/**
* Cards for the Course Review page
* @param {string} [props.courseTitle] - Course Title
* @param {string} [props.courseId] - Course ID
* @param {number} [props.reviewCount] - Review Count
* 
* @author Vaishnavi R Pai
*/
const CourseCard = ({ 
    courseTitle,
    courseId,
    reviewCount,
}: CardProps) : JSX.Element => {
    return (
        <div className={`flex flex-col w-[350px] h-[120px] p-[4px_11px_4px_11px] gap-[16px] border-b-[1px] ${styles.card}`}> 
            <div className="w-[328px] h-[64px]"> 
                <p className={`${alumniSans.className} w-11/12 text-[28px] font-bold leading-[32px] text-white`}>
                    {courseTitle}
                </p>
            </div>

            <div className="flex flex-row w-[328px] h-[32px] gap-0 justify-between">
                <div className="w-[64px]h-[32px]">
                    <p className={`${alumniSans.className} text-[24px] font-bold leading-[32px] text-white`}>
                        {courseId}
                    </p>
                </div>

                <div className = "flex flex-row gap-[5px] w-[78px] h-[32px]">
                    <div className="w-[10px]">
                        <p className={`${alumniSans.className} text-[24px] font-bold leading-[32px] text-white`}>
                            {reviewCount}
                        </p>
                    </div>

                    <div className="w-[65px]">
                        <p className={`${alumniSans.className} text-[24px] font-bold leading-[32px] text-white`}>
                            Reviews
                        </p>
                    </div>
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