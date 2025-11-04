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
        setFormula(number);
    },[number]);

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

    return {
        formula,
        buildNumber,
        clearNumber,
        toggleSign,
        deleteLast
    }
}

export { useCalculator }