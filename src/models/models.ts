 interface Logs {
    time: string;
    type: string; // impressions, conversions
    user_id: number;
    revenue: number;
}


 interface User {
    Name: string;
    avatar: string;
    Id: number;
    occupation: string;

    revenue: number;
    impressions: number;
    conversions: number;
    data: number[]
}

 interface UsersProps {
    user: User;
  }

  
  interface PaginationProps {
    limit: number;
    offset: number;
  }
  
  interface Pagination extends PaginationProps {
    total: number;
  }
  
  interface PaginationData<T extends object> {
    pagination: Pagination;
    data: T[];
  }
  
  export type { User, Pagination, PaginationProps, PaginationData, Logs,  UsersProps};
  