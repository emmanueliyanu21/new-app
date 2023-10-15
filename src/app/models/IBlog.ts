export interface Blog {
    header?: string;
    text?: string;
    data?: {
        image: string;
        text: string;
        date: string;
        details: string;
        imageMain: string;
        user: string;
    }[];
    main?: {
        header: string;
        text: string;
    };
    faq?: {
        header: string;
        data: {
            text: string;
        }[];
    };
    content: string;
    customer?: string
}