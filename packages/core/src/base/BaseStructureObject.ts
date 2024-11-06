"use client";

import { Instance } from "../file/instance";
import { AbstractFilter } from "../filters/AbstractFilter";


export abstract class BaseStructureObject {

    public abstract getInstances(): Instance[];

}