import {Component, Prop} from '@stencil/core';

@Component({
  tag: 'bento-river-of-news',
  styleUrl: 'bento-river-of-news.scss',
})
export class BentoRiverOfNews {
  @Prop() items: Array<any> = [];
  @Prop() title: string;

  render() {

    return (
      <section class="nova-component nc nc--river-of-news">
        <h2 class="nc__title nc--river-of-news__title">{this.title}</h2>

        {
          this.items.map(item =>
            (<article class="nc--river-of-news__item">

              <div class="nc--river-of-news__item-section--one">
                <img src={item.thumbnail} alt={item.title}
                     class="nc--river-of-news__item-thumbnail"/>
              </div>

              <div class="nc--river-of-news__item-section--two">
                <h3 class="nc--river-of-news__item-title">
                  {item.title}
                </h3>

                <div class="nc--river-of-news__item-summary">
                  {item.summary}
                </div>
              </div>
            </article>),
          )}
      </section>
    );
  }
}
