import {User} from "./Interfaces"
export interface League {
        id: Number;
        admins: Array<User>;
        players: Array<User>;
}