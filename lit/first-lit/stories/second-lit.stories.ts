import { html, TemplateResult } from 'lit'
import '../src/SecondLit.js'

export default {
  title: 'Second',
  component: 'second-lit',
  argTypes: {
    backgroundColor: { control: 'color' },
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
}

const Template: Story<ArgTypes> = ({ title, backgroundColor = 'white' }: ArgTypes) => 
html`
<second-lit style="--first-lit-background-color: ${backgroundColor}" .title=${title}></second-lit>
`

export const App = Template.bind({})
App.args = {
  title: 'My app'
}
