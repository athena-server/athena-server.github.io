import { CardProps } from "@/components/Card"

export enum Teams {
    faculties = "Faculties",
    staff = "Staffs",
    admins = "Student Admins",
    webteam = "Web Team",
}

export type TeamsData = {
    [key: string]: CardProps[] | TeamsData;
};

export const dummyData: TeamsData = {
    staff: [
        {
            name: "Ajayachandran V R",
            imageUrl: "/Card/AjayChadran.png",
            socials: { email: "ajay@nitc.ac.in" }
        },
        {
            name: "Sachin S V",
            imageUrl: "/Card/sachin.jpg",
            socials: { email: "sachinsv2299@gmail.com" }
        },
        {
            name: "Rajina Danush",
            imageUrl: "/Card/Rajina.jpg",
            socials: { email: "myselfrajina21@gmail.com" }
        },
        {
            name: "Kasyap V K",
            imageUrl: "/Card/Kasyap.jpg",
            socials: { email: "kasyapdas123@gmail.com" }
        },
        {
            name: "Athira K",
            imageUrl: "/Card/Athira.jpg",
            socials: { email: "kathiramohanan95@gmail.com" }
        }
    ],
    faculties: {
        current: [
            {
                name: "Jimmy Jose",
                imageUrl: "/Card/Jimmy Jose.png",
                socials: { email: "jimmy@nitc.ac.in" }
            },
        ],
        previous: [
            {
                name: "Hiran V Nath",
                imageUrl: "/Card/Hiran V Nath.png",
                socials: { email: "hiranvnath@nitc.ac.in" }
            },
            {
                name: "Sumesh TA",
                imageUrl: "/Card/Sumesh TA.png",
                socials: { email: "sumesh@nitc.ac.in" }
            },
            {
                name: "Vinod Pathari",
                imageUrl: "/Card/Vinod Pathari.png",
                socials: { email: "patheri@nitc.ac.in" }
            }
        ]
    },
    admins: {
        current: {

            b21: [
                {
                    name: "Adil Abdul Jabbar C",
                    imageUrl: "/Card/mayank.jpg",
                    socials: { email: "hello@hello.com" }
                },
                {
                    name: "Bhaskar Pal",
                    imageUrl: "/Card/mayank.jpg",
                    socials: { email: "hello@hello.com" }
                },
                {
                    name: "Binshadh Basheer",
                    imageUrl: "/Card/mayank.jpg",
                    socials: { email: "hello@hello.com" }
                },
                {
                    name: "Mohammed Ameen",
                    imageUrl: "/Card/mayank.jpg",
                    socials: { email: "hello@hello.com" }
                },
                {
                    name: "Sanjay Rajakumar",
                    imageUrl: "/Card/mayank.jpg",
                    socials: { email: "hello@hello.com" }
                },
                {
                    name: "Shalin",
                    imageUrl: "/Card/mayank.jpg",
                    socials: { email: "hello@hello.com" }
                }
                
            ],
            b22: [
                {
                    name: "Aravind Anil",
                    imageUrl: "/Card/mayank.jpg",
                    socials: { email: "hello@hello.com" }
                },
                {
                    name: "Harshavardhan",
                    imageUrl: "/Card/mayank.jpg",
                    socials: { email: "hello@hello.com" }
                },
                {
                    name: "Jaefar Shameem",
                    imageUrl: "/Card/mayank.jpg",
                    socials: { email: "hello@hello.com" }
                },
                {
                    name: "Madhulokesh VLM",
                    imageUrl: "/Card/mayank.jpg",
                    socials: { email: "hello@hello.com" }
                },
                {
                    name: "Naila Fathima",
                    imageUrl: "/Card/mayank.jpg",
                    socials: { email: "hello@hello.com" }
                },
                {
                    name: "Thomas Rahul",
                    imageUrl: "/Card/mayank.jpg",
                    socials: { email: "hello@hello.com" }
                }
            ]
        },
        previous: {
            b20: [
                {
                    name: "Madhav Prabhu",
                    imageUrl: "/Card/mayank.jpg",
                },
                {
                    name: "Chacko James",
                    imageUrl: "/Card/mayank.jpg",
                },
                {
                    name: "Alen Anthony",
                    imageUrl: "/Card/mayank.jpg",
                },
                {
                    name: "Akshay R",
                    imageUrl: "/Card/mayank.jpg",
                },
                {
                    name: "Gokul Praveen",
                    imageUrl: "/Card/mayank.jpg",
                }

            ],
            b19: [
                {
                    name: "Cliford Joshy",
                    imageUrl: "/Card/mayank.jpg",
                },
                {
                    name: "Naveen SD",
                    imageUrl: "/Card/mayank.jpg",
                },
                {
                    name: "Hadif Hameed",
                    imageUrl: "/Card/mayank.jpg",
                },
                {
                    name: "Tarun Chakitha",
                    imageUrl: "/Card/mayank.jpg",
                }

            ],
            b18: [
                {
                    name: "Nikhil Rajesh",
                    imageUrl: "/Card/mayank.jpg",
                },
                {
                    name: "Alan Jojo",
                    imageUrl: "/Card/mayank.jpg",
                },
                {
                    name: "Anish Sharma",
                    imageUrl: "/Card/mayank.jpg",
                },
                {
                    name: "Aravind IM",
                    imageUrl: "/Card/mayank.jpg",
                },
                {
                    name: "Pati Chandhana",
                    imageUrl: "/Card/mayank.jpg",
                }

            ],
            b17: [
                {
                    name: "Edvin Basil Samuval",
                    imageUrl: "/Card/mayank.jpg",
                },
                {
                    name: "Goutham Krishna",
                    imageUrl: "/Card/mayank.jpg",
                },
                {
                    name: "Shubham Anand",
                    imageUrl: "/Card/mayank.jpg",
                },
                {
                    name: "Saptha GD",
                    imageUrl: "/Card/mayank.jpg",
                }

            ],
            b16: [
                {
                    name: "Nirmal KV",
                    imageUrl: "/Card/mayank.jpg",
                },
                {
                    name: "Hasan Jamil",
                    imageUrl: "/Card/mayank.jpg",
                },
                {
                    name: "Pravitha Sathyavan",
                    imageUrl: "/Card/mayank.jpg",
                }
            ],
            b15: [
                {
                    name: "Rajeev R Menon",
                    imageUrl: "/Card/mayank.jpg",
                },
                {
                    name: "Ansal Muhammed",
                    imageUrl: "/Card/mayank.jpg",
                },
                {
                    name: "Husni Mubarak",
                    imageUrl: "/Card/mayank.jpg",
                },
                {
                    name: "Gazala Muhamed",
                    imageUrl: "/Card/mayank.jpg",
                }
            ],
            b14: [
                {
                    name: "Yash Agarwal",
                    imageUrl: "/Card/mayank.jpg",
                },
                {
                    name: "Amal Jose",
                    imageUrl: "/Card/mayank.jpg",
                },
                {
                    name: "Muhammad Hamsa",
                    imageUrl: "/Card/mayank.jpg",
                }
            ],
            b13: [
                {
                    name: "Aashish Satyajith",
                    imageUrl: "/Card/mayank.jpg",
                },
                {
                    name: "Mohammed Azharullah Shariff",
                    imageUrl: "/Card/mayank.jpg",
                },
                {
                    name: "Simsarul Haq Vengasseri",
                    imageUrl: "/Card/mayank.jpg",
                }
            ],
            b12: [
                {
                    name: "P Surya Teja",
                    imageUrl: "/Card/mayank.jpg",
                },
                {
                    name: "Pranay Dhariwal",
                    imageUrl: "/Card/mayank.jpg",
                },
                {
                    name: "Harsh Parsuram Puria",
                    imageUrl: "/Card/mayank.jpg",
                }
            ],
            b11: [
                {
                    name: "Hemant Kumar",
                    imageUrl: "/Card/mayank.jpg",
                },
                {
                    name: "Araj Raju",
                    imageUrl: "/Card/mayank.jpg",
                },
                {
                    name: "Shiv Gupta",
                    imageUrl: "/Card/mayank.jpg",
                }
            ],
            b10: [
                {
                    name: "Roshan Piyush",
                    imageUrl: "/Card/mayank.jpg",
                },
                {
                    name: "Ashwin L",
                    imageUrl: "/Card/mayank.jpg",
                },
                {
                    name: "Nithin VR",
                    imageUrl: "/Card/mayank.jpg",
                }
            ],
            b09: [
                {
                    name: "Rahul P",
                    imageUrl: "/Card/mayank.jpg",
                },
                {
                    name: "Vivek Anand T Kallampally",
                    imageUrl: "/Card/mayank.jpg",
                },
                {
                    name: "Karthik Singhal",
                    imageUrl: "/Card/mayank.jpg",
                },
                {
                    name: "Aviral Nigam",
                    imageUrl: "/Card/mayank.jpg",
                },
                {
                    name: "Shilpa S Nair",
                    imageUrl: "/Card/mayank.jpg",
                }
            ],
            b08: [
                {
                    name: "Dhandeep M Lodaya",
                    imageUrl: "/Card/mayank.jpg",
                },
                {
                    name: "Arnab Bhattacharjee",
                    imageUrl: "/Card/mayank.jpg",
                },
                {
                    name: "Sumesh B",
                    imageUrl: "/Card/mayank.jpg",
                },
                {
                    name: "Ramnath J",
                    imageUrl: "/Card/mayank.jpg",
                }
            ],
            b07: [
                {
                    name: "Dinesh K",
                    imageUrl: "/Card/mayank.jpg",
                },
                {
                    name: "Chetan S Rao",
                    imageUrl: "/Card/mayank.jpg",
                },
                {
                    name: "Jeffrey John",
                    imageUrl: "/Card/mayank.jpg",
                },
                {
                    name: "Karthik R",
                    imageUrl: "/Card/mayank.jpg",
                },
                {
                    name: "Gopikrishna",
                    imageUrl: "/Card/mayank.jpg",
                },
                {
                    name: "Sherin Thomas",
                    imageUrl: "/Card/mayank.jpg",
                },
                {
                    name: "Sarath Krishna",
                    imageUrl: "/Card/mayank.jpg",
                },
                {
                    name: "Saud",
                    imageUrl: "/Card/mayank.jpg",
                },
                {
                    name: "Tarun Kumar Gupta",
                    imageUrl: "/Card/mayank.jpg",
                }
            ],
            b06: [
                {
                    name: "Mohamed H",
                    imageUrl: "/Card/mayank.jpg",
                },
                {
                    name: "Justin M Jacob",
                    imageUrl: "/Card/mayank.jpg",
                },
                {
                    name: "Manish K M",
                    imageUrl: "/Card/mayank.jpg",
                },
                {
                    name: "Johnu George",
                    imageUrl: "/Card/mayank.jpg",
                },
                {
                    name: "Muneeb V",
                    imageUrl: "/Card/mayank.jpg",
                },
                {
                    name: "Anna Thomas",
                    imageUrl: "/Card/mayank.jpg",
                },
                {
                    name: "Pathikrith Basu",
                    imageUrl: "/Card/mayank.jpg",
                },
                {
                    name: "Shyam Prasad",
                    imageUrl: "/Card/mayank.jpg",
                },
                {
                    name: "Renzil",
                    imageUrl: "/Card/mayank.jpg",
                },
                {
                    name: "Babinu",
                    imageUrl: "/Card/mayank.jpg",
                }
            ],
            b05: [
                {
                    name: "Girish Verma",
                    imageUrl: "/Card/mayank.jpg",
                },
                {
                    name: "Daniel J Mathew",
                    imageUrl: "/Card/mayank.jpg",
                },
                {
                    name: "Vinay Surya",
                    imageUrl: "/Card/mayank.jpg",
                },
                {
                    name: "Yadu Vasudev",
                    imageUrl: "/Card/mayank.jpg",
                },
                {
                    name: "Shaneed",
                    imageUrl: "/Card/mayank.jpg",
                }
            ],
            b04: [
                {
                    name: "Sreedal Menon",
                    imageUrl: "/Card/mayank.jpg",
                },
                {
                    name: "Feroz Basheer",
                    imageUrl: "/Card/mayank.jpg",
                },
                {
                    name: "Shivendra Ashish",
                    imageUrl: "/Card/mayank.jpg",
                }
            ],
            b03: [
                {
                    name: "Faiz Abdullah",
                    imageUrl: "/Card/mayank.jpg",
                },
                {
                    name: "Deepak Likose",
                    imageUrl: "/Card/mayank.jpg",
                },
                {
                    name: "Haynes George",
                    imageUrl: "/Card/mayank.jpg",
                },
                {
                    name: "Rejeesh",
                    imageUrl: "/Card/mayank.jpg",
                },
                {
                    name: "Jayasurian",
                    imageUrl: "/Card/mayank.jpg",
                }
            ],
            b02: [
                {
                    name: "Deepak Ravi",
                    imageUrl: "/Card/mayank.jpg",
                },
                {
                    name: "Amal Dev",
                    imageUrl: "/Card/mayank.jpg",
                },
                {
                    name: "Sandeep",
                    imageUrl: "/Card/mayank.jpg",
                }
            ],
            b01: [
                {
                    name: "Arunjith",
                    imageUrl: "/Card/mayank.jpg",
                },
                {
                    name: "Anand",
                    imageUrl: "/Card/mayank.jpg",
                },
                {
                    name: "Ajith",
                    imageUrl: "/Card/mayank.jpg",
                }
            ],
            
            

            
            
        }
    },
    webteam: {
        senior: [
            {
                name: "Diljith PD",
                imageUrl: "/Card/mayank.jpg",
                socials: { email: "hello@hello.com" }
            },
            {
                name: "Mayank Gupta",
                imageUrl: "/Card/mayank.jpg",
                socials: { email: "hello@hello.com" }
            }
        ],
        junior: [
            {
                name: "Harshini Babu",
                imageUrl: "/Card/mayank.jpg",
                socials: { email: "hello@hello.com" }
            },
            {
                name: "Naila Fathima",
                imageUrl: "/Card/mayank.jpg",
                socials: { email: "hello@hello.com" }
            },
            {
                name: "Nandana Anand",
                imageUrl: "/Card/mayank.jpg",
                socials: { email: "hello@hello.com" }
            },
            {
                name: "Vaishnavi Pai",
                imageUrl: "/Card/mayank.jpg",
                socials: { email: "hello@hello.com" }
            }
        ],
        design: [
            {
                name: "Mayank Gupta",
                imageUrl: "/Card/mayank.jpg",
                socials: { email: "hello@hello.com" }
            },
            {
                name: "Harshini babu",
                imageUrl: "/Card/mayank.jpg",
                socials: { email: "hello@hello.com" }
            },

            {
                name: "Shreelakshmi",
                imageUrl: "/Card/mayank.jpg",
                socials: { email: "hello@hello.com" }
            },
            {
                name: "Nandini",
                imageUrl: "/Card/mayank.jpg",
                socials: { email: "hello@hello.com" }
            }
        ],
    },

}


export const groups = [
    Teams.faculties,
    Teams.staff,
    Teams.admins,
    Teams.webteam
]