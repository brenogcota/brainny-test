import React from 'react';
import { randomColor } from '../../utils';

// import { Container } from './styles';

const colors = Array.from(Array(6).keys()).map(() => randomColor());

function ColorPicker({ onChange }) {

    return (
        <>
        {
            colors.map(color => {
                return <input 
                            className="background-none w-6 h-6" 
                            key={color} 
                            type="color" 
                            value={color} 
                            onChange={onChange}
                        />
            })
        }
        </>
    );
}

export default ColorPicker;