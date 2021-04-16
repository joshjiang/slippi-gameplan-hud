import { AbstractPlan } from "./abstract-plan";

export class SimplePlan extends AbstractPlan {
  description: string;
  constructor(character: string, notes: string, description: string) {
    super(character, notes);
    this.description = description;
  }
}
