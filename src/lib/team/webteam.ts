import { type CardProps } from '@/components/Card'
import { type WebTeam } from '@/types/backend'
import { type WebTeamData } from '@/types/frontend'
import axios from 'axios'

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL

const getWebTeam = async (): Promise<WebTeamData> => {
    const response = await axios.get<WebTeam>(`${backendUrl}/api/web-team`)

    const design: CardProps[] = response.data.data.design.map(people => ({
        name: people.name,
        imageUrl: people.image.url,
        socials: {
            email: people.socials.email || undefined,
            github: people.socials.github || undefined,
            linkedin: people.socials.linkedin || undefined,
        }
    }));

    const juniors: CardProps[] = response.data.data.juniors.map(people => ({
        name: people.name,
        imageUrl: people.image.url,
        socials: {
            email: people.socials.email || undefined,
            github: people.socials.github || undefined,
            linkedin: people.socials.linkedin || undefined,
        }
    }));

    const seniors: CardProps[] = response.data.data.seniors.map(people => ({
        name: people.name,
        imageUrl: people.image.url,
        socials: {
            email: people.socials.email || undefined,
            github: people.socials.github || undefined,
            linkedin: people.socials.linkedin || undefined,
        }
    }));

    return {
        design,
        juniors,
        seniors,
    }
}

export { getWebTeam }