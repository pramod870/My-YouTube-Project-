import { MY_GOOGLE_API_KEY } from "./apiKeys";

export const YOUTUBE_VIDEOS_API = (regionCode) =>`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=${regionCode}&key=`
                                    + MY_GOOGLE_API_KEY; 


// export const YOUTUBE_VIDEOS_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key="
//                                     + MY_GOOGLE_API_KEY;                                 