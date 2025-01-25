import { CardProps } from "@/components/Card";
import { dummyData, TeamsData } from "@/data/teamData"

export const getStaffData = (): CardProps[] => {
    const staff = (dummyData.staff) as CardProps[];

    return [];

    return staff;
}

export const getFacultyData = (): {
    currentFaculty: CardProps[],
    prevFaculties: CardProps[],
} => {
    const currentFaculty = (dummyData.faculties as TeamsData).current as CardProps[]
    const prevFaculties = ((dummyData.faculties as TeamsData).previous as CardProps[]);



    return {
        currentFaculty: [],
        prevFaculties: [],
    }

    return {
        currentFaculty,
        prevFaculties,
    }
}

export const getAdminData = (): {
    currentAdmins: TeamsData,
    prevAdmins: TeamsData,
} => {
    const currentAdmins = ((dummyData.admins as TeamsData).current as TeamsData);
    const prevAdmins = ((dummyData.admins as TeamsData).previous as TeamsData);


    return {
        currentAdmins: {},
        prevAdmins: {},
    }

    return {
        currentAdmins,
        prevAdmins
    }
}

export const getWebTeamData = (): {
    seniorDevs: CardProps[],
    juniorDevs: CardProps[],
    designers: CardProps[],
} => {

    const webteam = (dummyData.webteam) as TeamsData;
    const seniorDevs = webteam.senior as CardProps[];
    const juniorDevs = webteam.junior as CardProps[];
    const designers = webteam.design as CardProps[];
    
    return {
        seniorDevs: [],
        juniorDevs: [],
        designers: [],
    }


    return {
        seniorDevs,
        juniorDevs,
        designers,
    }
}