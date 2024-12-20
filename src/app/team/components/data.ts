import { CardProps } from "@/components/Card"
import Faculties from "./Faculties";

export enum Teams {
    faculties = "Faculties",
    staff = "Staff",
    admins = "Student Admins",
    webteam = "Web Team",
}

export type TeamsData = {
    [key: string]: CardProps[] | TeamsData;
};

export const dummyData: TeamsData = {
    staff: [
        {
            name: "Mayank Gupta",
            imageUrl: "/Card/mayank.jpg",
            socials: { email: "hello@hello.com" }
        },
        {
            name: "Mayank Gupta",
            imageUrl: "/Card/mayank.jpg",
            socials: { email: "hello@hello.com" }
        },
        {
            name: "Mayank Gupta",
            imageUrl: "/Card/mayank.jpg",
            socials: { email: "hello@hello.com" }
        },
        {
            name: "Mayank Gupta",
            imageUrl: "/Card/mayank.jpg",
            socials: { email: "hello@hello.com" }
        }
    ],
    faculties: {
        current: [
            {
                name: "Mayank Gupta",
                imageUrl: "/Card/mayank.jpg",
                socials: { email: "hello@hello.com" }
            },
        ],
        previous: [
            {
                name: "Mayank Gupta",
                imageUrl: "/Card/mayank.jpg",
                socials: { email: "hello@hello.com" }
            },
            {
                name: "Mayank Gupta",
                imageUrl: "/Card/mayank.jpg",
                socials: { email: "hello@hello.com" }
            },
            {
                name: "Mayank Gupta",
                imageUrl: "/Card/mayank.jpg",
                socials: { email: "hello@hello.com" }
            },
            {
                name: "Mayank Gupta",
                imageUrl: "/Card/mayank.jpg",
                socials: { email: "hello@hello.com" }
            }
        ]
    },
    admins: {
        current: {

            b21: [
                {
                    name: "Mayank Gupta",
                    imageUrl: "/Card/mayank.jpg",
                    socials: { email: "hello@hello.com" }
                },
                {
                    name: "Mayank Gupta",
                    imageUrl: "/Card/mayank.jpg",
                    socials: { email: "hello@hello.com" }
                }
            ],
            b22: [
                {
                    name: "Mayank Gupta",
                    imageUrl: "/Card/mayank.jpg",
                    socials: { email: "hello@hello.com" }
                },
                {
                    name: "Mayank Gupta",
                    imageUrl: "/Card/mayank.jpg",
                    socials: { email: "hello@hello.com" }
                }
            ]
        },
        previous: {
            b20: [
                {
                    name: "Mayank Gupta",
                    imageUrl: "/Card/mayank.jpg",
                    socials: { email: "hello@hello.com" }
                },
                {
                    name: "Mayank Gupta",
                    imageUrl: "/Card/mayank.jpg",
                    socials: { email: "hello@hello.com" }
                }
            ]
        }
    },
    webteam: [
        {
            name: "Mayank Gupta",
            imageUrl: "/Card/mayank.jpg",
            socials: { email: "hello@hello.com" }
        },
        {
            name: "Mayank Gupta",
            imageUrl: "/Card/mayank.jpg",
            socials: { email: "hello@hello.com" }
        },

        {
            name: "Mayank Gupta",
            imageUrl: "/Card/mayank.jpg",
            socials: { email: "hello@hello.com" }
        },
        {
            name: "Mayank Gupta",
            imageUrl: "/Card/mayank.jpg",
            socials: { email: "hello@hello.com" }
        }
    ]
}


export const groups = [
    Teams.faculties,
    Teams.staff,
    Teams.admins,
    Teams.webteam
]