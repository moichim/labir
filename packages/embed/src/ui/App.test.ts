// @vitest-environment jsdom
import { describe, expect, it } from "vitest";
import { ThermalAppElement } from "./App";

class ResizeObserverStub {
    observe(): void { }
    unobserve(): void { }
    disconnect(): void { }
}

globalThis.ResizeObserver ??= ResizeObserverStub as unknown as typeof ResizeObserver;

customElements.define("test-slot-app", ThermalAppElement);

async function settle(element: ThermalAppElement): Promise<void> {
    await element.updateComplete;
    await new Promise(resolve => setTimeout(resolve, 0));
    await element.updateComplete;
}

function mount(innerHTML: string): ThermalAppElement {
    const element = document.createElement("test-slot-app") as ThermalAppElement;
    element.language = "en";
    element.innerHTML = innerHTML;
    document.body.appendChild(element);
    return element;
}

function assigned(element: ThermalAppElement, slotName: string): Element[] {
    const slot = element.shadowRoot!.querySelector(`slot[name="${slotName}"]`) as HTMLSlotElement | null;
    return slot ? slot.assignedElements({ flatten: true }) : [];
}

describe("ThermalAppElement slots", () => {

    it("renders and fills the named slots whenever content is provided", async () => {

        const element = mount(`
            <div slot="bar-header">header</div>
            <div slot="pre-bar">pre bar</div>
            <div slot="pre">pre</div>
            <div slot="content">content</div>
        `);

        await settle(element);

        for (const name of ["bar-header", "pre-bar", "pre", "content"]) {
            expect(assigned(element, name).length, name).toBe(1);
        }

        expect(element.shadowRoot!.querySelector(".bar-header")!.hasAttribute("hidden")).toBe(false);
        expect(element.shadowRoot!.querySelector(".pre-bar")!.hasAttribute("hidden")).toBe(false);

        element.remove();

    });

    it("hides the wrappers of empty slots", async () => {

        const element = mount("");

        await settle(element);

        expect(element.shadowRoot!.querySelector(".bar-header")!.hasAttribute("hidden")).toBe(true);
        expect(element.shadowRoot!.querySelector(".pre-bar")!.hasAttribute("hidden")).toBe(true);

        element.remove();

    });

    it("reacts to content added after the first render", async () => {

        const element = mount("");

        await settle(element);

        const header = document.createElement("div");
        header.slot = "bar-header";
        element.appendChild(header);

        await settle(element);

        expect(assigned(element, "bar-header").length).toBe(1);
        expect(element.shadowRoot!.querySelector(".bar-header")!.hasAttribute("hidden")).toBe(false);

        element.remove();

    });

});
