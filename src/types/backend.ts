import { CardProps } from "../components/Card";

export interface Information {
    id: string,
    name: string,
    image: Image,
    socials: Socials,
}

export interface Batch {
    id: string,
    batchCode: string,
    admins: Information[],
}


export interface WebTeam {
    data: {
        id: string;
        design: Information[],
        juniors: Information[],
        seniors: Information[],
    }
}
export interface Faculty {
    data: {
        id: string,
        current_faculties: Information[],
        previous_faculties: Information[],
    }
}

export interface Facility {
    data: {
        id: string,
        data: Image[],
    }
}

export interface Admin {
    data: {
        id: string,
        current_admins: Batch[],
        previous_admins: Batch[],
    }
}

export interface Staff {
    data: {
        id: string,
        current_staffs: Information[],
    }
}

export type Socials = {
    email: string | null,
    github: string | null,
    linkedin: string | null,
} | null;

export type Image = {
    id: string,
    url: string,
}