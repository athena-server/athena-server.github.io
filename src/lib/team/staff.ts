import { CardProps } from '@/components/Card';
import { type Staff } from '@/types/backend';
import { type StaffData } from '@/types/frontend';
import axios from 'axios';

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;



const getStaff = async (): Promise<StaffData> => {
    const response = await axios.get<Staff>(`${backendUrl}/api/staff`)


    const formattedData: CardProps[] = response.data.data.current_staffs.map((staff) => {
        const output: CardProps = {
            imageUrl: `${backendUrl}${staff.image.url}`,
            name: staff.name,
            socials: {
                email: staff.socials.email ? staff.socials.email : undefined,
                github: staff.socials.github ? staff.socials.github : undefined,
                linkedin: staff.socials.linkedin ? staff.socials.linkedin : undefined,
            }
        }

        return output;
    })

    return formattedData;
}


export { getStaff }