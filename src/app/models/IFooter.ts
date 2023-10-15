export interface Footer {
    logo: string;
    text: string;
    caption: string;
    data: {
        header: string;
        links: {
            name: string;
            url: string;
        }[];
    }[];
}