import http from '../http-common';
import { User } from '../models/models';
// import { IBook } from '../models/book';
// import { IChapter } from '../models/chapter';

const getUsers = () => {
    // return http.get<Array<User>>('Users?maxRecords=100&view=Grid%20view');
    // return http.get<Array<User>>('Users?maxRecords=100&view=Grid%20view&&fields%5B%5D=Id&fields%5B%5D=Name');
    // return http.get<Array<User>>('Users?maxRecords=100&view=Grid%20view&&sort%5B0%5D%5Bfield%5D=Id');
    // return http.get<Array<User>>('Users?maxRecords=100&view=Grid%20view&&sort%5B0%5D%5Bdirection%5D=desc&&sort%5B0%5D%5Bfield%5D=Id');

    return [{ Name: 'string',
        avatar: 'string',
        Id: 1,
        occupation: 'string',
    
        revenue: 2,
        impressions: 3,
        conversions: 4,
        data: mockResponse
    }]
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

const mockResponse = {
      records: [
        { fields: { id: 1, name: "John Doe", email: "john.doe@example.com" } },
        { fields: { id: 2, name: "Jane Smith", email: "jane.smith@example.com" } },
        { fields: { id: 3, name: "Alice Johnson", email: "alice.johnson@example.com" } },
      ]
  };