import { Component, Prop } from '@stencil/core';


@Component({
  tag: 'taavi-skeptic',
  styleUrl: 'taavi-skeptic.scss'
})
export class TaaviSkeptic {

  @Prop() first: string;

  @Prop() last: string;

  render() {
    return (

      <div class="container">
        <p>Hey {this.first} and {this.last}</p>
      </div>
    );
  }
}
