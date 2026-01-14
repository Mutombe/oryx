import React from 'react';
import { forwardRef } from 'react';
import { motion } from 'framer-motion';

// Input Component
export const Input = forwardRef(({
  label,
  error,
  icon: Icon,
  className = '',
  ...props
}, ref) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
      )}
      <div className="relative">
        {Icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
            <Icon className="w-5 h-5" />
          </div>
        )}
        <input
          ref={ref}
          className={`
            w-full px-4 py-3 ${Icon ? 'pl-12' : ''} 
            bg-white border border-gray-200 rounded-xl
            text-oryx-blue placeholder:text-gray-400
            focus:outline-none focus:ring-2 focus:ring-oryx-orange/30 focus:border-oryx-orange
            transition-all duration-300
            ${error ? 'border-red-500 focus:ring-red-500/30 focus:border-red-500' : ''}
            ${className}
          `}
          {...props}
        />
      </div>
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-2 text-sm text-red-500"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

// Textarea Component
export const Textarea = forwardRef(({
  label,
  error,
  className = '',
  rows = 4,
  ...props
}, ref) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
      )}
      <textarea
        ref={ref}
        rows={rows}
        className={`
          w-full px-4 py-3 
          bg-white border border-gray-200 rounded-xl
          text-oryx-blue placeholder:text-gray-400
          focus:outline-none focus:ring-2 focus:ring-oryx-orange/30 focus:border-oryx-orange
          transition-all duration-300 resize-none
          ${error ? 'border-red-500 focus:ring-red-500/30 focus:border-red-500' : ''}
          ${className}
        `}
        {...props}
      />
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-2 text-sm text-red-500"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
});

Textarea.displayName = 'Textarea';

// Select Component
export const Select = forwardRef(({
  label,
  error,
  options = [],
  placeholder = 'Select an option',
  className = '',
  ...props
}, ref) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
      )}
      <select
        ref={ref}
        className={`
          w-full px-4 py-3 
          bg-white border border-gray-200 rounded-xl
          text-oryx-blue
          focus:outline-none focus:ring-2 focus:ring-oryx-orange/30 focus:border-oryx-orange
          transition-all duration-300
          appearance-none cursor-pointer
          bg-[url('data:image/svg+xml;charset=US-ASCII,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="%231a2744" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/></svg>')] 
          bg-no-repeat bg-[right_1rem_center]
          ${error ? 'border-red-500 focus:ring-red-500/30 focus:border-red-500' : ''}
          ${className}
        `}
        {...props}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-2 text-sm text-red-500"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
});

Select.displayName = 'Select';

// Checkbox Component
export const Checkbox = forwardRef(({
  label,
  error,
  className = '',
  ...props
}, ref) => {
  return (
    <div className="flex items-start gap-3">
      <input
        ref={ref}
        type="checkbox"
        className={`
          w-5 h-5 mt-0.5
          rounded border-gray-300
          text-oryx-orange
          focus:ring-oryx-orange focus:ring-offset-0
          cursor-pointer
          ${className}
        `}
        {...props}
      />
      {label && (
        <label className="text-sm text-gray-600 cursor-pointer select-none">
          {label}
        </label>
      )}
    </div>
  );
});

Checkbox.displayName = 'Checkbox';

export default { Input, Textarea, Select, Checkbox };
