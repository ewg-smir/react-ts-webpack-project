module.exports = {
  parser: '@typescript-eslint/parser', 
  
  parserOptions: {
    ecmaFeatures: {
      jsx: true, 
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },

  settings: {
    react: {
      version: 'detect', 
    },
  },

  extends: [
    'eslint:recommended',                        
    'plugin:react/recommended',                  
    'plugin:@typescript-eslint/recommended',    
    'prettier',                                 
    'plugin:prettier/recommended',             
  ],
  
  rules: {
    "@typescript-eslint/no-explicit-any": "off", 
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off" 
  },
};