import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from './app/store'
import { expect } from 'chai'
import App from './App'

describe('class App', function () {
  it('renders my name', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    )
    expect(screen.getByText(/Adrian L Flanagan/)).to.equal('fred')
  })
})
