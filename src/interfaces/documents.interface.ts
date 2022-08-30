export interface ITranslateResponse extends Record<string, unknown>{
    DOCUMENTS_PAGE: DOCUMENTSPAGE;

}

export interface About {
    __html: string;
}

export interface Description {
    __html: string;
}

export interface Experience {
    enterprise: string;
    year: string;
    description: Description;
    title: string;
}

export interface Description2 {
    __html: string;
}

export interface Academic {
    enterprise: string;
    year: string;
    description: Description2;
    title: string;
}

export interface IData {
    profile: string;
    links: ILinks;
    info: string[];
    skills: string[];
    hobbies: string[];
    langs: string[];
    about: About;
    experience: Experience[];
    academic: Academic[];
    files: Record<string, string>[];
    filename: string;
}

export interface ILinks {
    "instagram": string
    "facebook": string
    "whatsapp": string
    "github": string
    "dribble": string
    "linkedin": string
    "email": string
}

export interface CURRICULUM {
    data: IData;
}

export interface DOCUMENTSPAGE {
    CURRICULUM: CURRICULUM;
}
