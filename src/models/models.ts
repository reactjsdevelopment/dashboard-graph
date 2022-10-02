export interface Logs {
    time: string;
    type: string; // impressions, conversions
    user_id: number;
    revenue: number;
}


export interface User {
    Name: string;
    avatar: string;
    Id: number;
    occupation: string;

    revenue: number;
    impressions: number;
    conversions: number;

}

export interface UsersProps {
    user: User;
  }