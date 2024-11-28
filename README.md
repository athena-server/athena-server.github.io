# Athena server 
This repository contains the code to athena landing site

## Links
- [main host](https://athena.nitc.ac.in)
- [staging host]()
- [figma file]()

## Developer guidelines
The following guidelines are to be followed to ensure uniform coding standards amongst all team members
- tailwind integration has been pre setup
- use either tailwind or module.css 
- don't edit globals.css
- CI/CD is configured for vercel host at updation of main branch
- associate every major branch with a github-issue
- every branch should be named &lt;details&gt;-&lt;issueNo&gt;
    - eg: a branch for creating navbar would be navbar-1
- don't merge into main without review
- follow naming schemes and folder structure as per [Directory Structure](#directory│structure)
- use google fonts wherever possible else refer fonts folder for available fonts


## Directory Structure
```plaintext
athena/
├── public/                         # for static files (e.g. images/pdfs/json etc)                     
|   ├── general/
|   ├── egComponent/
|   ├── docs/
|   ├── json/
└───src/
    ├── fonts/
    |   ├── *.woff|.tff|.otf
    |   └── index.ts                # refer examples for instructions
    ├── app/
    |   ├── example-route/
    |   |   └── page.tsx            # refer examples for instructions
    |   └── (debug)/                # do any tests here, ignored by git
    |       ├── test1/
    |       |   └── page.tsx
    |       └── test2/
    |           └── page.tsx
    ├── components/
    │   └── EgComponent/            # refer examples for instructions
    |       ├── childComponent.tsx  # (optional) 
    │       ├── index.tsx           # main component
    │       └── styles.module.css   # (optional)
    ├── hooks/
    |   └── useHook.ts              # any custom hooks needed
    ├── lib/                        # (redundant) any REST calls
    └── types.ts                    # (optional) any type that might be reused in multiple pages, add here
```
 

## Examples

### Routes
- use lowercase letters with dashes
```ts
filePath: 'src/app/example-route/page.tsx'

'use client' // add directive for client-side rendering
import EgComponent from '@/components/EgComponent';
const Page = () => {

    const buttonHandler = useCallback(() => {
        // wrap every function within useCallback
    }, [/* dependencies */]);

    const dummyData = useMemo(() => {
        // wrap every constant value within useMemo
    }, [/* dependencies */]);

    return (
        <EgComponent 
            {...props}
        />
    )
}

export default Page;
```

### Components
```ts
filePath: 'src/components/EgComponent/index.tsx'

import styles from './styles.module.css';
/**
* write brief description about component
* @param prop1 [number] give info
* @param prop2 [string] give info
* @author you
*/
const EgComponent = ({ // name this same as the folder
    prop1,
    prop2,
    ...
} : {
    prop1: number,
    prop2: string,
    ...
}) => {
    return (
        <div className="flex flex-col"> // tailwind css
            <div className={styles['your-classname']}> // modular css
                hello
            </div>
        </div>
    )
};

export default EgComponent;
```

