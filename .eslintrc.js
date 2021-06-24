module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  parser: '@typescript-eslint/parser', // 둘중 확인 필요
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module', // 모듈 시스템
    ecmaFeatures: {
      jsx: true // 리액트 jsx 파싱
    }
  },
  extends: [
    'plugin:react/recommended', // 리액트 추천 룰셋
    'plugin:react-hooks/recommended', // 훅 룰셋 적용
    'plugin:@typescript-eslint/recommended', // 타입스크립트 추천 룰셋
    'plugin:prettier/recommended' // eslint-plugin-prettier(가장 마지막에 와야함)
  ],
  plugins: ['import'],
  rules: {
    // 룰 정의
    'prettier/prettier': 'off',
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
    'react/prop-types': 'off',
    'no-var': 'error',
    'no-dupe-keys': 'error'
  }
};
