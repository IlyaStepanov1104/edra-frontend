import { IChatHistory } from "./types";
import { IBot } from "@/entity/bot";

const defaultChatHistory: IChatHistory = [
    {
        id: 1,
        isMe: true,
        text: 'Question: \n' +
            'Read the content and then write a 90–110-word response explaining two ways regular reading improves writing and describing one practical habit you will follow for a week to apply this idea.\n' +
            'Text: \n' +
            'Regular reading feeds writing in two main ways. First, it expands a writer’s toolbox by revealing new words in meaningful contexts. Second, it models how ideas are organized—from hooks and transitions to conclusions. While skimming headlines rarely changes how we write, active reading does: underlining effective sentences, asking why a paragraph works, and trying out the same pattern in a draft. Even ten focused minutes a day can make your next email clearer and your essays more engaging.',
    },
    {
        id: 2,
        isMe: false,
        text: 'Reading strengthens writing in two clear ways. First, it grows vocabulary in context, so I can choose precise, vivid words instead of vague ones. Second, it models structure: effective openings, smooth transitions, and purposeful conclusions that I can imitate in my drafts. This week, I will read for ten focused minutes each day, underline one strong sentence, and rewrite a two-sentence mini-paragraph that mirrors its structure. For instance, if the sentence uses parallelism or an appositive, I will copy that pattern with my own ideas. After seven days, I will review and use the best mini-paragraph in an email.',
    },
    {
        id: 3,
        isMe: true,
        text: 'Question: \n' +
            'Read the content and then write a 90–110-word response explaining two ways regular reading improves writing and describing one practical habit you will follow for a week to apply this idea.\n' +
            'Text: \n' +
            'Regular reading feeds writing in two main ways. First, it expands a writer’s toolbox by revealing new words in meaningful contexts. Second, it models how ideas are organized—from hooks and transitions to conclusions. While skimming headlines rarely changes how we write, active reading does: underlining effective sentences, asking why a paragraph works, and trying out the same pattern in a draft. Even ten focused minutes a day can make your next email clearer and your essays more engaging.',
    },
    {
        id: 4,
        isMe: false,
        text: 'Reading strengthens writing in two clear ways. First, it grows vocabulary in context, so I can choose precise, vivid words instead of vague ones. Second, it models structure: effective openings, smooth transitions, and purposeful conclusions that I can imitate in my drafts. This week, I will read for ten focused minutes each day, underline one strong sentence, and rewrite a two-sentence mini-paragraph that mirrors its structure. For instance, if the sentence uses parallelism or an appositive, I will copy that pattern with my own ideas. After seven days, I will review and use the best mini-paragraph in an email.',
    },
    {
        id: 5,
        isMe: true,
        text: 'Question: \n' +
            'Read the content and then write a 90–110-word response explaining two ways regular reading improves writing and describing one practical habit you will follow for a week to apply this idea.\n' +
            'Text: \n' +
            'Regular reading feeds writing in two main ways. First, it expands a writer’s toolbox by revealing new words in meaningful contexts. Second, it models how ideas are organized—from hooks and transitions to conclusions. While skimming headlines rarely changes how we write, active reading does: underlining effective sentences, asking why a paragraph works, and trying out the same pattern in a draft. Even ten focused minutes a day can make your next email clearer and your essays more engaging.',
    },
    {
        id: 6,
        isMe: false,
        text: 'Reading strengthens writing in two clear ways. First, it grows vocabulary in context, so I can choose precise, vivid words instead of vague ones. Second, it models structure: effective openings, smooth transitions, and purposeful conclusions that I can imitate in my drafts. This week, I will read for ten focused minutes each day, underline one strong sentence, and rewrite a two-sentence mini-paragraph that mirrors its structure. For instance, if the sentence uses parallelism or an appositive, I will copy that pattern with my own ideas. After seven days, I will review and use the best mini-paragraph in an email.',
    },
]

export const getBotChatHistory = (botSlug: string | null): IChatHistory => {
//     TODO: delete mock
    return defaultChatHistory;
}