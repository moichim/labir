"use client";

import { Instance } from "../file/instance";


export abstract class BaseStructureObject {

    public abstract getInstances(): Instance[];

}