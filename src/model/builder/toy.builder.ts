import logger from '../../util/logger';
import { Toy } from '../toy.model';

export class ToyBuilder {
    private name!: string;
    private material!: string;
    private ageGroup!: string;
    private color!: string;


    public setName(name: string): ToyBuilder {
        this.name = name;
        return this;
    }

    public setMaterial(material: string): ToyBuilder {
        this.material = material;
        return this;
    }

    public setAgeGroup(ageGroup: string): ToyBuilder {
        this.ageGroup = ageGroup;
        return this;
 
    }
    public setColor(color: string): ToyBuilder {
        this.color = color;
        return this;
    }

    public build () :Toy{
        const requiredproperties =[
            this.name,
            this.material,
            this.ageGroup,
            this.color
        ]
        for (const property of requiredproperties) {
            if (!property) {
                logger.error("All properties must be set before building the Toy.");
                throw new Error("All properties must be set before building the Toy.");
            }
        }
        return new Toy(
            this.name,
            this.material,
            this.ageGroup,
            this.color
        );
    }

}