import { v4 as uuidv4 } from 'uuid'
import { AbstractPlan } from './abstract-plan'
import { Character } from './character'

export class SimplePlan extends AbstractPlan {
    description: string
    constructor(character: string, notes: string, description: string) {
        super(character, notes)
        this.description = description
    }
}