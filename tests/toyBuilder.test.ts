import { ToyBuilder } from '../src/model/builder/toy.builder';
import { Toy } from '../src/model/toy.model';

describe('ToyBuilder', () => {
    it ('should build a Toy object with all properties correctly set', () => {
        const toyBuilder = new ToyBuilder();
        const toy = toyBuilder
            .setName("Teddy Bear")
            .setMaterial("Plush")
            .setAgeGroup("3+")
            .setColor("Brown")
            .build();

        expect(toy.getCategory()).toBe('Toy');
        expect(toy.getName()).toBe('Teddy Bear');
        expect(toy.getMaterial()).toBe('Plush');
        expect(toy.getAgeGroup()).toBe('3+');
        expect(toy.getColor()).toBe('Brown');
    });

    it ('should throw an error if a required field is missing', () => {
        const builder = new ToyBuilder() as any;
        builder
            .setName("Teddy Bear")
            .setMaterial("Plush")
            .setAgeGroup("3+");

        expect(() => builder.build()).toThrow("All properties must be set before building the Toy.");
    });

    // it ('should throw if a property has incorrect type', () => {
    //     const builder = new ToyBuilder() as any;
    //     builder
    //         .setName("Teddy Bear")
    //         .setMaterial("Plush")
    //         .setAgeGroup("3+")
    //         .setColor(123); // should be string

    //     expect(() => builder.build()).toThrow();
    // });

});