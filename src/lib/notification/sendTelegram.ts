import { CONFIG } from "../../config/index.js";

export const sendTelegram = async ({
   message,
}: {
   message: string;
}): Promise<{ message: string } | void> => {
   const controller = new AbortController();
   const timeout = setTimeout(() => controller.abort(), 10000);

   try {
      if (!CONFIG.TELEGRAM.BOT_TOKEN || !CONFIG.TELEGRAM.CHAT_ID) {
         clearTimeout(timeout);
         return;
      }

      const response = await fetch(
         `https://api.telegram.org/bot${CONFIG.TELEGRAM.BOT_TOKEN}/sendMessage`,
         {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
               chat_id: CONFIG.TELEGRAM.CHAT_ID,
               text: message,
               parse_mode: "HTML",
               link_preview_options: {
                  is_disabled: CONFIG.TELEGRAM.DISABLE_LINK_PREVIEW,
               },
            }),
            signal: controller.signal,
         },
      );

      const result = await response.json();

      clearTimeout(timeout);

      if (!response.ok || !result?.ok) {
         console.warn(
            `Error sending message to telegram bot: ${result?.description || response.statusText}`,
         );
         return;
      }

      return { message: "Message sent successfully" };
   } catch (error) {
      clearTimeout(timeout);
      console.warn(
         "Error sending message to telegram bot:",
         error instanceof Error ? error.message : String(error),
      );
      return;
   }
};
