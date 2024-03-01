"use client"

import React, { ChangeEvent, RefObject } from 'react';

type InputComponentProps = {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    label: string;
    id: string;
    value: string;
    type: string;
    name?: string;
    inputRef?: RefObject<HTMLInputElement>;
    autoComplete?: string;
    required?: boolean;
}

const Input: React.FC<InputComponentProps> = ({
    label,
    id,
    type,
    name,
    inputRef,
    autoComplete = 'off',
    onChange,
    value,
    required = false,
}) => {
    return (
        <div>
            <label
                className='block mb-2 text-sm font-medium text-white'
                htmlFor={id}>{label}:</label>
            <input
                className='border sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-pink-600 focus:border-pink-600 focus:outline-none'
                type={type}
                id={id}
                name={name}
                ref={inputRef}
                autoComplete={autoComplete}
                onChange={onChange}
                value={value}
                required={required}
            />
        </div>
    );
};

export default Input;