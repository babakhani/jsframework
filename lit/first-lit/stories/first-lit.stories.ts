import { html, TemplateResult } from 'lit'
import '../src/FirstLit.js'

export default {
  title: 'FirstLit',
  component: 'first-lit',
  argTypes: {
    backgroundColor: { control: 'color' },
    src: { control: { type: "select", options: ["https://via.placeholder.com/350x15"] } },
  },
}

interface Story<T> {
  (args: T): TemplateResult
  args?: Partial<T>
  argTypes?: Record<string, unknown>
}

interface ArgTypes {
  title?: string
  backgroundColor?: string
  src?: string
}

const Template: Story<ArgTypes> = ({ title, backgroundColor = 'white', src }: ArgTypes) => html`
  <first-lit 
    style="--first-lit-background-color: ${backgroundColor}" src="${src}" title=${title}>
  </first-lit>
`

export const App = Template.bind({})

App.args = {
  title: 'My app',
  src: 'https://via.placeholder.com/350x15',
}

