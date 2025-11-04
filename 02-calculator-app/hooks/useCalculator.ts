import { useEffect, useRef, useState } from "react";

enum Operator {
    add = '+',
    subtract = '-',
    multiply = 'x',
    divide = '÷'
}

const useCalculator = () => {
    const [formula, setFormula] = useState<string>('0');
    const [number, setNumber] = useState<string>('0');
    const [prevNumber, setPrevNumber] = useState<string>('0');
    const lastOperation = useRef<Operator | undefined>(undefined);

    useEffect(()=>{
        if(lastOperation.current){
            const firstFormulaPart = formula.split(' ').at(0);
            setFormula(`${firstFormulaPart} ${lastOperation.current} ${number}`);
        }else{
            setFormula(number);
        }
    },[number]);

    useEffect(()=>{
        const subResult = calculateSubResult();
        setPrevNumber(String(subResult));
    },[formula]);

    useEffect(()=>{
        if(formula === 'Infinity'){
            clearNumber();
        }
    },[formula, prevNumber]);

    const calculateSubResult = () => {
        const [ firstNumber, operation, secondNumber ] = formula.split(' ');

        const num1 = Number(firstNumber);
        const num2 = Number(secondNumber);

        if(isNaN(num2)) return firstNumber;

        switch( operation ) {
            case Operator.add: 
                return num1 + num2;
            case Operator.subtract: 
                return num1 - num2;
            case Operator.divide: 
                return num1 / num2;
            case Operator.multiply:
                return num1 * num2;
            default:
                throw new Error(`Operation ${ operation } not implemented`);
        }

    }

    const calculateResult = () => {
        const result = calculateSubResult();
        setFormula(String(result));
        setNumber(String(result));
        lastOperation.current = undefined;
        setPrevNumber('0');
    }

    const buildNumber = (numberString: string) => {
        if(number.includes('.') && numberString === '.') return;

        if(number.startsWith('0') || number.startsWith('-0')){
            
            if(numberString === '.') {
                return setNumber(number + numberString);
            }
            
            if(numberString === '0' && numberString.includes('.')){                
                return setNumber(number + numberString);
            }
            
            if(numberString !== '0' && !number.includes('.')){
                if(number.includes('-')){
                    return setNumber('-' + numberString);
                }else{
                    return setNumber(numberString);
                }
            }
            
            if(numberString === '0' && !number.includes('.')){
                return;
            }

        }

        setNumber(number + numberString);
    }

    const toggleSign = () => {
        if(number.includes('-')){
            setNumber(number.replace('-', ''));
        }else{
            setNumber('-' + number);
        }
    }

    const deleteLast = () => {
        let currentSign = ''
        let temporalNumber = number;

        if(number.includes('-')){
            currentSign = '-';
            temporalNumber = number.replace('-', '');
        }

        if(temporalNumber.length > 1){
            return setNumber(currentSign + temporalNumber.slice(0, -1));
        }

        if(temporalNumber.length === 1){
            clearNumber();
        }
    }

    const clearNumber = () => {
        setNumber('0');
        setFormula('0');
        setPrevNumber('0');
        lastOperation.current = undefined;
    }

    const setLastNumber = () => {
        calculateResult();
        if(number.endsWith('.')){
            setPrevNumber(number.slice(0, -1));
        }
        setPrevNumber(number);
        setNumber('0');
    }

    const divideOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.divide;
    }

    const multiplyOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.multiply;
    }
    
    const addOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.add;
    }
    
    const subtractOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.subtract;
    }

    return {
        // Props
        formula,
        prevNumber,
        //Methods
        buildNumber,
        clearNumber,
        toggleSign,
        deleteLast,
        divideOperation,
        multiplyOperation,
        addOperation,
        subtractOperation,
        calculateSubResult,
        calculateResult
    }
}

export { useCalculator }