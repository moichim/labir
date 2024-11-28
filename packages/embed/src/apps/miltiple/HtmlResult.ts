import { html, nothing } from "lit";

export type HtmlResult = ReturnType<typeof html> | typeof nothing;
