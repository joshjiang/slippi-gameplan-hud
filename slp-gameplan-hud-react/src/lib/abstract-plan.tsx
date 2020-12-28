import { v4 as uuidv4 } from 'uuid'
import { Character } from './character'

export abstract class AbstractPlan {
    character: string
    notes: string
    id: string
    timeLastUpdated: number
    constructor(character: string, notes: string) {
        this.character = character
        this.notes = notes
        this.id = uuidv4()
        this.timeLastUpdated = Date.now()
    }
}