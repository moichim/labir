import { nothing, Part } from "lit";
import { Directive } from "lit/directive.js";
import { T } from "../../../../translations/Languages";
import { t } from "i18next";

export abstract class AbstractConnectedDirective extends Directive {

    protected t(
        key: keyof typeof T
    ): string {
        return t( T[ key ] );
    }

    update(_part: Part, props: Array<unknown>): unknown {
        return this.render( ...props );
    }

    protected unknownContainsSomething( content: unknown ): boolean {

        if ( 
            content === nothing
            || content === null 
            || content === undefined 
        ) {
            return false;
        }

        if ( typeof content === "string" && content.trim().length === 0 ) {
            return false;
        }

        if ( Array.isArray( content ) ) {

            if ( content.length === 0 ) {
                return false;
            } else if ( ! content.some( item => this.unknownContainsSomething( item ) ) ) {
                return false;
            }

        }

        return true;
    }

}