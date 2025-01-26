import { inter } from "@/fonts";

/**
 * Cards for the Course Review page
 * @param {string} [props.semester] - Semester
 * @param {number} [props.index] - index of the review
 * @param {number} [props.totalReviews] - Count of all the Reviews
 * @param {string} [props.review] - Review
 * @param {number} [props.rating] - Rating out of 5
 *
 * @author Naila Fathima
 */

const ReviewCard = ({
    semester,
    index,
    totalReviews,
    review,
    rating,
}: CardProps): JSX.Element => {
    return (
<<<<<<< HEAD
        <div className="content-center w-full p-[14px_11px_56px_17px] rounded-[12px] bg-[#E5E5E5]">
            <div className="flex flex-row justify-between items-center top-[14px] left-[17px] right-[17px]">
                <div className="top-[14px] left-[17px] opacity-75">
                    <h2
                        className={`${inter.className} text-[20px] font-bold text-[#000000] opacity-90 leading-[19.36px]`}
                    >
=======
        <div className="flex flex-col content-center w-[307px] p-[14px_11px_56px_17px] rounded-[12px] bg-[#E5E5E5]"> 
            <div className = "h-[200px]"></div>
            <div className="flex flex-row justify-between top-[14px] left-[17px] right-[17px]">
                <div className="w-[150px] h-[19px] top-[14px] left-[17px] opacity-75">
                    <p className={`${inter.className} text-[16px] font-bold leading-[19.36px] text-[#000000] opacity-90`}>
>>>>>>> 536c252de9534bb43f1773df58012f1246e665b3
                        {semester}
                    </h2>
                </div>

                <div className="w-[16px] top-[14px]">
                    <p className="text-[12px] font-bold text-[#000000] opacity-45">
                        {index}/{totalReviews}
                    </p>
                </div>
            </div>

            <div className="flex flex-row w-[60px] top-[36px] left-[17px] pt-1 gap-0">
                {Array.from({ length: rating }, (_, index) => (
                    <img
<<<<<<< HEAD
                        key={index}
                        src="/ReviewCard/star.png"
                        alt="star"
                        className="w-[12px] h-[12px]"
                    />
                ))}
=======
                        src='/star.svg'
                        alt="star"
                        className="w-[12px] h-[12px]"
                    />
                    <img
                        src="/star.svg"
                        alt="star"
                        className="w-[12px] h-[12px]"
                    />
                    <img
                        src="/star.svg"
                        alt="star"
                        className="w-[12px] h-[12px]"
                    />
                    <img
                        src="/star.svg"
                        alt="star"
                        className="w-[12px] h-[12px]"
                    />
                </div>
>>>>>>> 536c252de9534bb43f1773df58012f1246e665b3
            </div>

            <div className="pt-4">
                <p
                    className={`${inter.className} text-base font-medium text-[#000000] opacity-90`}
                >
                    {review}
                </p>
            </div>
        </div>
    );
};

export default ReviewCard;
export interface CardProps {
    semester: string;
    index: number;
    totalReviews: number;
    review: string;
    rating: number;
}
