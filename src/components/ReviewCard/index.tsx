import { inter } from "@/fonts";

/**
* Cards for the Course Review page
* @param {string} - Course Title
* @param {string} - Course ID
* @param {number} - Review Count
* 
* @author Vaishnavi R Pai
*/

const ReviewCard = ({ 
    semester,
    reviewNumber,
    rating,
}: CardProps) : JSX.Element => {
    return (
        <div className="flex content-center w-[307px] h-[500px] top-[21px] left-[357px] p-[14px_11px_56px_17px] rounded-[12px] bg-[#E5E5E5]"> 
            <div className="h-[200px]"></div>
            <div className="flex flex-row justify-between items-center top-[14px] left-[17px] right-[17px]">
                <div className="w-[150px] h-[19px] top-[14px] left-[17px] opacity-75">
                    <p className={`${inter.className} text-[16px] font-bold leading-[19.36px] text-[#000000] opacity-90`}>
                        {semester}
                    </p>
                </div>

                <div className="w-[16px] h-[12px] top-[14px]">
                    <p className="text-[10px] font-bold text-[#000000] opacity-45">
                        {reviewNumber}
                    </p>
                </div>
            </div>

                <div className="flex flex-row w-[60px] h-[12px] top-[36px] left-[17px] gap-0">
                    <img
                        src="./star.png"
                        alt="star"
                        className="w-[12px] h-[12px]"
                    />
                    <img
                        src="./star.png"
                        alt="star"
                        className="w-[12px] h-[12px]"
                    />
                    <img
                        src="./star.png"
                        alt="star"
                        className="w-[12px] h-[12px]"
                    />
                    <img
                        src="./star.png"
                        alt="star"
                        className="w-[12px] h-[12px]"
                    />
                </div>
            </div>
    )
};

export default ReviewCard;
export interface CardProps {
    semester: string,
    reviewNumber: string,
    rating: number,
}