/** @format */

import { ICommandExecuteState } from "interfaces/ExecuteState";
import { getDefaultCommanderProperty } from "./DefaultHandling";
import { ICommanderProperty } from "./types/ICommander";

export class Commander {
    private readonly selfProperty: ICommanderProperty;

    public constructor(props?: ICommanderProperty) {
        this.selfProperty = props || getDefaultCommanderProperty();
    }

    public get props(): ICommanderProperty {
        return this.selfProperty;
    }

    public parse(argv: string[]): ICommandExecuteState {
        return {};
    }
}
