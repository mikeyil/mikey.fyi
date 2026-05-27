/* jshint esversion: 11 */
import { LitElement, html, css } from 'lit';

export class SocialLink extends LitElement {
  static get properties() {
    return {
      href: { type: String }
    };
  }

  static get styles() {
    return css`
    :host {
      display: inline-flex;
    }
    .social-link {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.625rem 0.875rem;
      background: var(--bg-card, #ffffff);
      border: 1px solid var(--border-color, rgba(0,0,0,0.22));
      border-radius: 10px;
      text-decoration: none;
      color: var(--text-muted, #4A4A55);
      font-size: 0.875rem;
      font-weight: 500;
      transition: color 0.15s, border-color 0.15s;
      flex-shrink: 1;
      min-width: 0;
      white-space: nowrap;
    }
    .social-link:hover {
      color: var(--text-color, #1a1a1a);
      border-color: var(--color-primary, #7A6BEC);
    }
    .social-link:focus-visible {
      outline: 2px solid var(--color-primary-dark, #5445D6);
      outline-offset: 2px;
    }
    @media (prefers-color-scheme: dark) {
      .social-link {
        background: var(--bg-card, #1C1C1F);
        border-color: var(--border-color, rgba(255,255,255,0.18));
        color: var(--text-muted, #9999AA);
      }
      .social-link:hover {
        color: var(--text-color, #F0F0F5);
      }
    }
  `;
  }

  render() {
    return html`
      <a href="${this.href}" class="social-link" target="_blank" rel="noopener noreferrer">
        <slot></slot>
      </a>
    `;
  }
}

customElements.define('social-link', SocialLink);
