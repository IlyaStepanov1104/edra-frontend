import { FC, useEffect, useRef, useState } from 'react'
import cn from "classnames";

import styles from './Chat.module.css';
import { Avatar, Button, Text, TextArea, Timeline, View } from "reshaped";
import { IconBot } from "@features/Chat/Chat.assets/IconBot";
import { IconUser } from "@shared/Header/Header.assets/IconUser";
import { useUnit } from 'effector-react';
import { getBotChatHistory, IChatHistory } from "@/entity/message";
import { IconMic } from "@features/Chat/Chat.assets/IconMic";
import { IconSend } from "@features/Chat/Chat.assets/IconSend";
import { PageModel } from "@shared/lib/pages";
import { IconQRCode } from './Chat.assets/IconQRCode';
import { SimpleTooltip } from "@shared/SimpleTooltip";


const Marker: FC<{isMe: boolean}> = ({isMe}) => {
    return <Avatar
        size={7}
        color="primary"
        variant={isMe ? 'faded' : 'solid'}
        icon={isMe ? IconUser : IconBot}
    ></Avatar>;
}

export const Chat: FC = ({}) => {
    const params = useUnit(PageModel.$pageParams);
    const botSlug = params?.bot ?? null;
    const page = params?.page;
    const [chatHistory, setChatHistory] = useState<IChatHistory>([]);
    const [inputValue, setInputValue] = useState('');
    const [isMessageLoading, setIsMessageLoading] = useState(false);
    const [messageLoadingCounter, setMessageLoadingCounter] = useState<number>(0);
    const chatContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const history = getBotChatHistory(botSlug);
        setChatHistory(history)
    }, [botSlug]);

    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [chatContainerRef, chatHistory]);

    useEffect(() => {
        if (isMessageLoading) {
            const interval = setInterval(() => {
                setMessageLoadingCounter((prev) => prev + 1);
            }, 650);

            return () => clearInterval(interval);
        }
    }, [isMessageLoading]);

    const getHandleSend = () => () => {
        if (!inputValue) return;
        setChatHistory((prev) => [...prev, {
            id: prev.length + 1,
            text: inputValue,
            isMe: true,
        }]);
        setInputValue('');
        setIsMessageLoading(true);
        setTimeout(() => {
            setIsMessageLoading(false);
            setChatHistory((prev) => [...prev, {
                id: prev.length + 1,
                text: 'Is a bot answer!',
                isMe: false,
            }]);
        }, 4000);
    };

    const LoadingMessage = () => isMessageLoading ?
        (
            <Timeline.Item
                markerSlot={<Marker isMe={false}/>}
            >
                <Text variant="body-1">{'.'.repeat((messageLoadingCounter % 3) + 1)}</Text>
            </Timeline.Item>
        )
        : undefined

    return botSlug ? (
            <div className={styles.ChatWrapper}>
                <div className={cn(styles.Chat, styles.Card)} ref={chatContainerRef}>
                    <Timeline>
                        {chatHistory.map((message) => {
                            return (
                                <Timeline.Item
                                    markerSlot={<Marker isMe={message.isMe}/>}
                                    key={message.id}
                                >
                                    <Text variant="body-1">{message.text}</Text>
                                </Timeline.Item>
                            );
                        })}
                        <LoadingMessage/>
                    </Timeline>
                </div>
                <View direction="row" justify="space-between" className={styles.Card} gap={4}>
                    <div className={styles.ChatInputContainer}>
                        <TextArea
                            name='input'
                            value={inputValue}
                            onChange={
                                (event) => {
                                    console.log("%c 1 --> Line: 61||Chat.tsx\n event: ", "color:#f0f;", event);
                                    setInputValue(event.value)
                                }
                            }
                            placeholder="Type message here..."
                            resize='none'
                            size='large'
                        >
                        </TextArea>
                        <View justify="space-between" direction="row">
                            <SimpleTooltip content="This button not workin without backend!">
                                <Button
                                    icon={IconMic}
                                    color='primary'
                                    variant='faded'
                                    size='medium'
                                    rounded
                                    className={styles.ChatInputButton}
                                />
                            </SimpleTooltip>

                            <Button
                                icon={IconSend}
                                color='primary'
                                variant='solid'
                                size='medium'
                                rounded
                                className={styles.ChatInputButton}
                                onClick={getHandleSend()}
                            />
                        </View>
                    </div>
                    {page === 'math' && (
                        <div
                            data-tooltip-id="qr-code-button"
                            className={styles.QRCodeButtonWrapper}
                        >
                            <SimpleTooltip content={
                                <span>
                            Generate QR to scan and upload your<br/>
                            math photo; the bot parses and helps
                        </span>}
                                           id="qr-code-button">
                                <Button
                                    icon={IconQRCode}
                                    color='primary'
                                    variant='faded'
                                    className={styles.QRCodeButton}
                                />
                            </SimpleTooltip>
                        </div>
                    )}
                </View>
            </div>
        ) :
        (
            <div className={cn(styles.Card, styles.CardEmpty)}>
                <Text variant="featured-1" align="center">Select a topic on the left to open the chat.</Text>
            </div>
        );
}