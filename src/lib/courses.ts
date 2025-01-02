import axios from 'axios';

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL

const getCourses = async () => {
    const response = await axios.get<{
        data: {
            reviewText: string,
            rating: number,
            courseId?: {
                courseId: string,
                courseTitle: string,
            },
            reviewed_in_sem?: {
                semesterName: string,
            }
        }[]
    }>(`${backendUrl}/api/course-reviews`);
    console.log(response.data.data);
    const formattedData = response.data.data.map((review) => {
        const output: { courseId?: string, courseTitle?: string, reviewText: string, rating: number, semester?: string } = {
            courseId: review.courseId?.courseId,
            courseTitle: review.courseId?.courseTitle,
            reviewText: review.reviewText,
            rating: review.rating,
            semester: review.reviewed_in_sem?.semesterName,
        }

        return output;
    })

    return formattedData;
}

export {
    getCourses,
}