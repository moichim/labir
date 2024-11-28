import { ThermalGroup } from "@labir/core";
import { BaseElement } from "../../../hierarchy/BaseElement";
import { property, queryAssignedElements, state, customElement } from "lit/decorators.js";
import { html, nothing } from "lit";
import { ifDefined } from 'lit/directives/if-defined.js';

@customElement("group-export-layout")
export class GroupExport extends BaseElement {

    @property({type: Object})
    group!:  ThermalGroup;

    @state()
    protected localGroup?: ThermalGroup;

    connectedCallback(): void {
        super.connectedCallback();

        const localId = Math.random().toString();

        const manager = this.group.registry.manager;
        const registry = manager.addOrGetRegistry(localId);
        this.localGroup = registry.groups.addOrGetGroup(localId);





    }

    protected render(): unknown {

        const hasGroup = this.localGroup !== undefined;


        return html`

            ${ hasGroup
                ? html`
                    <manager-mirror 
                        slug=${this.localGroup!.registry.manager.id}
                        palette=${this.localGroup!.registry.palette.value}
                    >
                        <registry-mirror 
                            slug=${this.localGroup!.registry.id} 
                            from=${ifDefined( this.localGroup?.registry.range.value?.from )}
                            to=${ifDefined( this.localGroup?.registry.range.value?.to )}
                        >

                            <group-mirror slug=${this.localGroup!.id}>

                                ${this.group.files.value.map( file => {

                                    return html`

                                        <file-provider
                                            thermal=${file.thermalUrl}
                                            visible=${file.visibleUrl}
                                            batch="true"
                                            analysis1="Bopdík;ellipsis;color:red;top:10;left:10;width:100;height:100"
                                        >
                                            <file-canvas></file-canvas>
                                            <file-analysis-table></file-analysis-table>
                                        </file-provider>
                                    
                                    `;

                                } )}
                            
                            </group-mirror>

                        </registry-mirror>
                    </manager-mirror>
                `
                : nothing
            }
            
        
        `;
    }

}