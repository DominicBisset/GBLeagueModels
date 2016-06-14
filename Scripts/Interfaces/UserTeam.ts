import GBGameModels from "gb-game-models";
import {User} from "./Interfaces"
export interface UserTeam {
        id: Number;
        user: User;
        //team: Team;
        roster: Array<GBGameModels.Player>;
        //leagues: Array<League>;
        //teamPhotos: Array<UserImage>;
}