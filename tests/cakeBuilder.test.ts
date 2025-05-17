import { CakeBuilder } from '../src/model/builder/cake.builder';
import { Cake } from '../src/model/Cake.model';

describe ('CakeBuilder', () => {
    it ('should build a Cake object with all properties correctly set',()=>{
        const cakeBuilder = new CakeBuilder();
        const cake = cakeBuilder
            .setType("Birthday")
            .setFlavor("Vanilla")
            .setFilling("Strawberry")
            .setSize(8)
            .setLayers(2)
            .setFrostingType("Buttercream")
            .setFrostingFlavor("Vanilla")
            .setDecorationType("Flowers")
            .setDecorationColor("Pink")
            .setCustomMessage("Happy Birthday!")
            .setShape("Round")
            .setAllergies("None")
            .setSpecialIngredients("Organic Vanilla")
            .setPackagingType("Box")
            .build();

        expect(cake.getCategory()).toBe('Cake');
        expect(cake.getType()).toBe('Birthday');
        expect(cake.getFlavor()).toBe('Vanilla');
        expect(cake.getFilling()).toBe('Strawberry');
        expect(cake.getSize()).toBe(8);
        expect(cake.getLayers()).toBe(2);
        expect(cake.getFrostingType()).toBe('Buttercream');
        expect(cake.getFrostingFlavor()).toBe('Vanilla');
        expect(cake.getDecorationType()).toBe('Flowers');
        expect(cake.getDecorationColor()).toBe('Pink');
        expect(cake.getCustomMessage()).toBe('Happy Birthday!');
        expect(cake.getShape()).toBe('Round');
        expect(cake.getAllergies()).toBe('None');
        expect(cake.getSpecialIngredients()).toBe('Organic Vanilla');
        expect(cake.getPackagingType()).toBe('Box');

    })
    it('should throw an error if a required field is missing',()=>{
        const buider = new CakeBuilder()
                .setType("Birthday")
                .setFlavor("Vanilla")
                .setFilling("Strawberry")
                .setSize(8)
                .setLayers(2)
                .setFrostingType("Buttercream")

        expect(()=>
            buider.build()).toThrow("All properties must be set before building the cake.");
    });

    // it('should throw if a property has incorrect type', () => {
    //     const builder = new CakeBuilder() as any;
    //     builder
    //       .setType("Birthday")
    //       .setFlavor("Vanilla")
    //       .setFilling("Strawberry")
    //       .setSize("large") // should be number
    //       .setLayers(2)
    //       .setFrostingType("Buttercream")
    //       .setFrostingFlavor("Vanilla")
    //       .setDecorationType("Flowers")
    //       .setDecorationColor("Pink")
    //       .setCustomMessage("Happy Birthday!")
    //       .setShape("Round")
    //       .setAllergies("None")
    //       .setSpecialIngredients("Organic Vanilla")
    //       .setPackagingType("Box");

    //     expect(() => builder.build()).toThrow();
    // });
});