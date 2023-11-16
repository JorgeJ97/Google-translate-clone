import {test, expect} from 'vitest'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

test('My app works', async () => {
    const user = userEvent.setup()
    const app = render(<App/>)
    const textareaFrom = app.getByPlaceholderText('Ingresar texto')
    await user.type(textareaFrom, 'Hola, como estas?')

    const result = await app.findByDisplayValue(/Hello, how are you?/i, {}, {timeout: 2000})

    expect(result).toBeTruthy

})