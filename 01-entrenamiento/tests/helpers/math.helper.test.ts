import {expect, describe, test } from 'vitest'
import { add, divide, multiply, subtract } from '../../src/helpers/math.helper';

describe('Add Test', () => {

    test('Add 2 numbers Test', () => {
    console.log('Running example test');
    // 1. Arrange
    const a = 2;
    const b = 3;    
    // 2. Act
    const result = add(a, b);
    console.log('Result of add(2, 3):', result);
    // 3. Assert
    expect(result).toBe(a+b);   
    });

    test('Add 2 numbers Test', () => {
    console.log('Running example test');
    // 1. Arrange
    const a = -332;
    const b = 3;    
    // 2. Act
    const result = add(a, b);
    console.log('Result of add(2, 3):', result);
    // 3. Assert
    expect(result).toBe(a+b);   
    });


});


describe('Subtract Test', () => {

    test('Subtract 2 numbers Test', () => {
    console.log('Running example test');
    // 1. Arrange
    const a = 2;
    const b = 3;    
    // 2. Act
    const result = subtract(a, b);
    console.log('Result of subtract(2, 3):', result);
    // 3. Assert
    expect(result).toBe(a-b);   
    });

    test('Subtract 2 numbers Test', () => {
    console.log('Running example test');
    // 1. Arrange
    const a = -332;
    const b = 3;    
    // 2. Act
    const result = subtract(a, b);
    console.log('Result of subtract(2, 3):', result);
    // 3. Assert
    expect(result).toBe(a-b);   
    });


});


describe('Multiply Test', () => {

    test('Multiply 2 numbers Test', () => {
    console.log('Running example test');
    // 1. Arrange
    const a = 2;
    const b = 3;    
    // 2. Act
    const result = multiply(a, b);
    console.log('Result of multiply(2, 3):', result);
    // 3. Assert
    expect(result).toBe(a*b);   
    });

    test('Multiply 2 numbers Test', () => {
    console.log('Running example test');
    // 1. Arrange
    const a = -332;
    const b = 3;    
    // 2. Act
    const result = multiply(a, b);
    console.log('Result of multiply(2, 3):', result);
    // 3. Assert
    expect(result).toBe(a*b);   
    });


});


describe('Divide Test', () => {

    test('Divide 2 numbers Test', () => {
    console.log('Running example test');
    // 1. Arrange
    const a = 2;
    const b = 3;    
    // 2. Act
    const result = divide(a, b);
    console.log('Result of divide(2, 3):', result);
    // 3. Assert
    expect(result).toBe(a/b);   
    });

    test('Divide 2 numbers Test', () => {
    console.log('Running example test');
    // 1. Arrange
    const a = -332;
    const b = 0;    
    // 2. Act
    const result = divide(a, b);
    console.log('Result of divide(2, 3):', result);
    // 3. Assert
    expect(result).toThrowError('Division by zero is not allowed');   
    });


});

