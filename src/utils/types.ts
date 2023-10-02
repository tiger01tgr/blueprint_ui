import { IconType } from "react-icons"

export interface SocialIcon {
    id: string,
    icon: IconType,
    text: string,
    signIn: () => void,
}