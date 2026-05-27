/* jshint esversion: 11 */
import { LitElement, html, css } from 'lit';

export class LinkCard extends LitElement {
  static get properties() {
    return {
      href: { type: String },
      iconClass: { type: String },
      title: { type: String },
      subtitle: { type: String },
      badge: { type: String },
      disabled: { type: Boolean }
    };
  }

  static get styles() {
    return css`
    :host {
      display: block;
    }
    .link-card {
      display: flex;
      align-items: center;
      gap: 0.875rem;
      padding: 0.875rem 1rem;
      background: var(--bg-card, #fff);
      border: 1px solid var(--border-color, rgba(0,0,0,0.22));
      border-radius: 12px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.08);
      text-decoration: none;
      color: var(--text-color, #1a1a1a);
      transition: border-color 0.15s, transform 0.15s;
    }
    .link-card:hover {
      border-color: var(--color-primary, #7A6BEC);
      transform: translateY(-1px);
    }
    .link-card:focus-visible {
      outline: 2px solid var(--color-primary-dark, #5445D6);
      outline-offset: 2px;
    }
    .link-card.disabled {
      opacity: 0.5;
      cursor: default;
      pointer-events: none;
    }
    .link-icon {
      width: 36px;
      height: 36px;
      border-radius: 8px;
      background: var(--icon-bg, linear-gradient(160deg, #7A6BEC, #5445D6));
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      font-size: 1rem;
      color: #fff;
    }
    .link-icon.neutral {
      background: var(--border-color, rgba(0,0,0,0.22));
    }
    .link-icon.i1 { background: linear-gradient(160deg, #7A6BEC, #5445D6); }
    .link-icon.i2 { background: linear-gradient(160deg, #957FEF, #6B5CE0); }
    .link-icon.i3 { background: linear-gradient(160deg, #A994F2, #7E70E6); }
    .link-icon.i4 { background: linear-gradient(160deg, #BCA9F5, #9485EC); }
    .link-icon.i5 { background: linear-gradient(160deg, #CFBEF8, #AA9AF2); }

    .link-text {
      flex: 1;
      min-width: 0;
    }
    .link-text strong {
      display: block;
      font-size: 0.9375rem;
      font-weight: 600;
    }
    .link-text span {
      display: block;
      font-size: 0.8125rem;
      color: var(--text-muted, #4A4A55);
      margin-top: 0.1rem;
    }
    .badge {
      font-size: 0.6875rem;
      font-weight: 600;
      padding: 0.2em 0.55em;
      border-radius: 99px;
      background: var(--border-color, rgba(0,0,0,0.22));
      color: var(--text-muted, #4A4A55);
      letter-spacing: 0.03em;
    }

    @media (prefers-color-scheme: dark) {
      .link-card {
        background: var(--bg-card, #1C1C1F);
        border-color: var(--border-color, rgba(255,255,255,0.18));
        color: var(--text-color, #F0F0F5);
        box-shadow: 0 2px 12px rgba(0,0,0,0.4);
      }
      .link-text span, .badge {
        color: var(--text-muted, #9999AA);
      }
      .badge, .link-icon.neutral {
        background: var(--border-color, rgba(255,255,255,0.18));
      }
    }
  `;
  }

  render() {
    const content = html`
      <div class="link-icon ${this.iconClass}" aria-hidden="true">
        <slot name="icon"></slot>
      </div>
      <div class="link-text">
        <strong>${this.title}</strong>
        <span>${this.subtitle}</span>
      </div>
      ${this.badge ? html`<span class="badge">${this.badge}</span>` : ''}
    `;

    if (this.disabled) {
      return html`
        <div class="link-card disabled">
          ${content}
        </div>
      `;
    }

    return html`
      <a href="${this.href}" class="link-card" target="_blank" rel="noopener noreferrer">
        ${content}
      </a>
    `;
  }
}

customElements.define('link-card', LinkCard);
