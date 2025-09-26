export interface IMessage {
    id: number;
    isMe: boolean;
    text: string;
}

export type IChatHistory = IMessage[];