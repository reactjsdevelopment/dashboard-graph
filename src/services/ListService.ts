import http from '../http-common';
import { User } from '../models/models';
// import { IBook } from '../models/book';
// import { IChapter } from '../models/chapter';

const getUsers = () => {
    return http.get<Array<User>>('Users?maxRecords=100&view=Grid%20view');
    // return http.get<Array<User>>('Users?maxRecords=100&view=Grid%20view&&fields%5B%5D=Id&fields%5B%5D=Name');
    // return http.get<Array<User>>('Users?maxRecords=100&view=Grid%20view&&sort%5B0%5D%5Bfield%5D=Id');
    // return http.get<Array<User>>('Users?maxRecords=100&view=Grid%20view&&sort%5B0%5D%5Bdirection%5D=desc&&sort%5B0%5D%5Bfield%5D=Id');
};

// const getBookDetails = (bookId: number) => {
//     return http.get<IBook>(`/books/${bookId}/`);
// };

// const getChapterDetails = (chapterId: number) => {
//     return http.get<IChapter>(`/chapters/${chapterId}/`);
// };

const ListService = {
    getUsers,
    // getBookDetails,
    // getChapterDetails,
};

export default ListService;
