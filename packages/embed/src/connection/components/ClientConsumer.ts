import { consume } from "@lit/context";
import { Client } from "packages/server/client/src/Client";
import { clientContext } from "../ClientContext";
import { BaseElement } from "../../hierarchy/BaseElement";

export abstract class ClientConsumer extends BaseElement {

    @consume({ context: clientContext, subscribe: true })
    protected client?: Client;

}