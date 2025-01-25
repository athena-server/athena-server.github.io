import { CardProps } from '@/components/Card';
import { type Faculty } from '@/types/backend';
import { type FacultyData } from '@/types/frontend';
import axios from 'axios';

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL

const getFaculties = async (): Promise<FacultyData> => {
    const response = await axios.get<Faculty>(`${backendUrl}/api/faculty`)

    const currentFaculties: CardProps[] = response.data.data.current_faculties.map((faculty) => ({
        name: faculty.name,
        imageUrl: faculty.image.url,
        socials: {
            email: faculty.socials.email ? faculty.socials.email : undefined,
            github: faculty.socials.github ? faculty.socials.github : undefined,
            linkedin: faculty.socials.linkedin ? faculty.socials.linkedin : undefined,
        }
    }));

    const previousFaculties: CardProps[] = response.data.data.previous_faculties.map((faculty) => ({
        name: faculty.name,
        imageUrl: faculty.image.url,
        socials: {
            email: faculty.socials.email ? faculty.socials.email : undefined,
            github: faculty.socials.github ? faculty.socials.github : undefined,
            linkedin: faculty.socials.linkedin ? faculty.socials.linkedin : undefined,
        }
    }));

    return {
        previousFaculties,
        currentFaculties,
    }
}

export { getFaculties }