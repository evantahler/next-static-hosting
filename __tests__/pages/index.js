import { shallow } from 'enzyme'
import init from 'jooks'
import IndexPage from '../../pages/index'

describe('Introcudtion Section', () => {
  const jooks = init(() => IndexPage())

  it('renders the section', async () => {
    const component = jooks.run()
    const wrapper = shallow(component)
    const header = wrapper.find('h1')
    expect(header.text()).toBe('Next Static Hosting')
  })
})
