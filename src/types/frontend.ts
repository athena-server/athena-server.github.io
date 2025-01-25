import { CardProps } from "@/components/Card"

export type BatchData = {
    batch: string,
    admins: CardProps[],
}

export type AdminData = {
    currentAdmins: BatchData[],
    previousAdmins: BatchData[],
}

export type FacultyData = {
    previousFaculties: CardProps[],
    currentFaculties: CardProps[],
}

export type WebTeamData = {
    design: CardProps[],
    juniors: CardProps[],
    seniors: CardProps[],
}

export type StaffData = CardProps[]