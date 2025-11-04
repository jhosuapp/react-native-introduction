import { useEffect, useRef, useState } from "react";

enum Operator {
    add = '+',
    subtract = '-',
    multiply = 'x',
    divide = '÷'
}

const useCalculator = () => {
    const [formula, setFormula] = useState<string>('');
    const [number, setNumber] = useState<string>('');
    const [prevNumber, setPrevNumber] = useState<string>('');
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
                return setNumber(numberString);
            }
            
            if(numberString === '0' && !number.includes('.')){
                return;
            }

        }

        setNumber(number + numberString);
    }

    const clearNumber = () => {
        setNumber('');
    }

    return {
        formula,
        buildNumber,
        clearNumber
    }
}

export { useCalculator }