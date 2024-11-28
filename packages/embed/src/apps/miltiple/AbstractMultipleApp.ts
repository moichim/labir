import { css, CSSResultGroup } from "lit";
import { BaseElement } from "../../hierarchy/BaseElement";
import { InstanceRenderer } from "./InstanceRenderer";
import { GroupRenderer } from "./GroupRenderer";
import { state } from "lit/decorators.js";

export abstract class AbstractMultipleApp extends BaseElement {

    @state()
    highlightFrom?: number;

    @state()
    highlightTo?: number;

    static styles? = [
        InstanceRenderer.styles,
        GroupRenderer.styles,
        css`
    
        `
    ];

    protected readonly instanceRenderer = new InstanceRenderer(this);

    protected readonly groupRenderer = new GroupRenderer( this );

}