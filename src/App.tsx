import { Component } from 'vue-property-decorator';
import { VNode } from 'vue';
import { VueComponent } from './vue-ts-component';
import './App.css';

@Component
export default class App extends VueComponent<{}> {
  render(): VNode {
    return (
      <div id="app">
        Hello World!
      </div>
    );
  }
}