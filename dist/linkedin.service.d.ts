import { LinkedinEmailService } from "./linkedin/linkedin.email.service";
import { LinkedinConnectService } from "./linkedin/linkedin.connect.service";
import { LinkedinMessageService } from "./linkedin/linkedin.message.service";
import { LinkedinMessageWithView } from "./linkedin/linkedin.message.with.view";
import { LinkedinGlobalPageService } from "./linkedin/linkedin.global.page.service";
import { LinkedinAcceptedConnectionsService } from "./linkedin/linkedin.accepted.connection.request.service";
import { LinkedinMessagesFromChat } from "./linkedin/linkedin.messages.from.chat";
import { LinkedinLoginService } from "./linkedin/linkedin.login.service";
import { LinkedinMessagesService } from "./linkedin/linkedin.messages.service";
import { LinkedinEndorseService } from "./linkedin/linkedin.endorse.service";
import { LinkedinLikeService } from "./linkedin/linkedin.like.service";
import { LinkedinVisitService } from "./linkedin/linkedin.visit.service";
import { LinkedinEngagementService } from "./linkedin/linkedin.engagement.service";
import './helpers/colors';
import { LinkedinProfileViewsService } from "./linkedin/linkedin.profileViews.service";
export declare const services: {
    extract_information: LinkedinEmailService;
    connect: LinkedinConnectService;
    message: LinkedinMessageService;
    message_with_view: LinkedinMessageWithView;
    scraper: LinkedinGlobalPageService;
    accepted_connection_request: LinkedinAcceptedConnectionsService;
    chat: LinkedinMessagesFromChat;
    login: LinkedinLoginService;
    messages: LinkedinMessagesService;
    endorse: LinkedinEndorseService;
    like: LinkedinLikeService;
    visit: LinkedinVisitService;
    engagement: LinkedinEngagementService;
    profileViews: LinkedinProfileViewsService;
};
export declare const tools: {
    loadCursor: (page: import("puppeteer").Page, headless: boolean) => Promise<void>;
};
