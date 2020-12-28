import { AbstractPlanFactory } from "./abstract-plan-factory";
import { SimplePlan } from "./simple-plan"
import { Character } from "./character"

export class SimplePlanFactory extends AbstractPlanFactory {
    public createSimplePlan(character: string, notes: string, description: string) {
        return new SimplePlan(character, notes, description)
    }
}