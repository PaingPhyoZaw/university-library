import { DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_CREATE_ROOT_CONTAINERS } from "react-dom/client";

interface Book {
    id: number;
    title: string;
    author: string;
    genre: string;
    rating: number;
    total_copies: number;
    available_copies: number;
    description: string;
    color: string;
    cover: string;
    video: string;
    summary: string;
    isLoanedBook?: boolean;
}