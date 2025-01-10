import { faker } from "@faker-js/faker";
import { Logs, PaginationData, PaginationProps, User } from "../models/models";
import ListService from "./ListService";
import logs from '../assets/logs.json';

const mockResponse = {
   Name: 'string',
    avatar: 'string',
    Id: 1,
    occupation: 'string',

    revenue: 2,
    impressions: 3,
    conversions: 4,
  data: {
    records: [
      { fields: { id: 1, name: "John Doe", email: "john.doe@example.com" } },
      { fields: { id: 2, name: "Jane Smith", email: "jane.smith@example.com" } },
      { fields: { id: 3, name: "Alice Johnson", email: "alice.johnson@example.com" } },
    ]
  }
};

const getTableData = async <T extends object>({
    limit,
    offset,
  }: PaginationProps): Promise<PaginationData<T>> => {
    // const response: any = await ListService.getUsers()
    const response: any = mockResponse;
    console.log(response);
      let result: User[] = response.data.records.map((a: any) => a.fields);
      let updateData = prepareData(result);
      const data = updateData.slice(offset, limit + offset) as T[];
    return {
      pagination: { limit, offset, total: 1000 },
      data,
    };
  };
export default getTableData;

function prepareData(users: User[]){
  const log: Logs[] = JSON.parse(JSON.stringify(logs));

  for (let index = 0; index < users.length; index++) {
    let initializeRevenue = 0;
    let initializeImpressions = 0;
    let initializeConversions = 0;

    for (let j = 0; j < log.length; j++) {

      if (users[index].Id== log[j].user_id) {
        initializeRevenue = initializeRevenue + log[j].revenue;
        users[index].revenue = initializeRevenue;
      }
      
      if (users[index].Id== log[j].user_id && log[j].type == "impression") {
        initializeImpressions = initializeImpressions + 1;
        users[index].impressions = initializeImpressions;
      }
      if (users[index].Id== log[j].user_id && log[j].type == "conversion") {
        initializeConversions = initializeConversions + 1;
        users[index].conversions = initializeConversions;
      }
    }
  }
  return users; 
}