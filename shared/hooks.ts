import { useParams } from "next/navigation";
import { INVITED_FRIENDS_INFO } from "./constants";

export const useInvitedUser = () => {
  const { slug } = useParams();
  const invitedFriendInfo = INVITED_FRIENDS_INFO[slug as keyof typeof INVITED_FRIENDS_INFO];

  return invitedFriendInfo;
};
