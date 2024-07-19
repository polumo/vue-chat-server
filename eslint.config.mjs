import { antfu } from '@antfu/eslint-config'

export default antfu({
  rules: {
    'antfu/top-level-function': 'off',
    'ts/no-redeclare': 'off',
    'no-console': 'warn',
    'node/prefer-global/process': 'off',
    'style/brace-style': ['error', '1tbs'],
  },
})
