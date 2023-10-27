import React, { ChangeEvent } from 'react';

interface CategoryPickerProps {
    selectedCategory: string;
    categories: string[];
    isCondition: boolean;
    onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const CategoryPicker: React.FC<CategoryPickerProps> = ({ selectedCategory, categories = [], onChange, isCondition = false }) => {
    return (
        <div className="flex flex-col w-full">
            <label htmlFor="category" className="text-md font-medium text-start">
                {isCondition ? 'Condition:' : 'Product Category:'}
            </label>
            <select
                id="category"
                className="border border-gray-300 rounded px-2 py-2 mt-1"
                value={selectedCategory}
                onChange={(e) => onChange(e)}
            >
                {categories.map((category) => (
                    <option key={category} value={category}>
                        {category}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default CategoryPicker;