/* jshint esversion: 11 */
import { LitElement, html, css } from 'lit';
import './link-card.js';
import './social-link.js';

export class MikeyProfile extends LitElement {
  static get styles() {
    return css`
    :host {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      width: 100%;
      max-width: 480px;
    }

    .profile {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .profile h1 {
      font-family: Rockwell, "Rockwell Extra Bold", Georgia, serif;
      font-size: 2rem;
      font-weight: 700;
      letter-spacing: -0.02em;
      line-height: 1.1;
      margin: 0;
    }

    .profile p {
      color: var(--text-muted, #4A4A55);
      font-size: 1rem;
      line-height: 1.5;
      margin: 0;
    }

    .section-label {
      font-size: 0.7rem;
      font-weight: 600;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--text-muted, #4A4A55);
      margin: 0 0 0.5rem 0;
    }

    .links {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .social {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      align-items: flex-start;
    }
    
    .pricing-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.875rem;
      background: var(--bg-card, #fff);
      border-radius: 12px;
      overflow: hidden;
      border: 1px solid var(--border-color, rgba(0,0,0,0.22));
    }
    .pricing-table th, .pricing-table td {
      padding: 0.75rem 1rem;
      text-align: left;
      border-bottom: 1px solid var(--border-color, rgba(0,0,0,0.22));
    }
    .pricing-table th {
      background: rgba(0,0,0,0.02);
      font-weight: 600;
    }
    .pricing-table tr:last-child td {
      border-bottom: none;
    }

    footer {
      margin-top: 1rem;
      font-size: 0.8125rem;
      color: var(--text-muted, #4A4A55);
      text-align: center;
    }

    @media (prefers-color-scheme: dark) {
      .profile p, .section-label, footer {
        color: var(--text-muted, #9999AA);
      }
      .pricing-table {
        background: var(--bg-card, #1C1C1F);
        border-color: var(--border-color, rgba(255,255,255,0.18));
      }
      .pricing-table th, .pricing-table td {
        border-bottom-color: var(--border-color, rgba(255,255,255,0.18));
      }
      .pricing-table th {
        background: rgba(255,255,255,0.02);
      }
    }
  `;
  }

  render() {
    return html`
      <div class="profile">
        <h1>Mikey Ilagan</h1>
        <p>Accessibility specialist. Twenty years in UX, frontend, and product. Ten years all-in on accessibility. Coaching, auditing, and building open source tools for the people doing the work.</p>
        <p><strong>Available for consulting!</strong> Claude called my writing "warm, self-aware, a little chaotic-in-a-charming-way, deeply human-centered, and grounded in your cross-functional accessibility brain."</p>
      </div>

      <section aria-labelledby="projects-heading">
        <h2 id="projects-heading" class="section-label">Projects</h2>
        <ul class="links">
          <li>
            <link-card href="https://a11yfred.app" iconClass="i1" title="A11yFred" subtitle="WCAG defect descriptions for accessibility auditors">
              <span slot="icon">A</span>
            </link-card>
          </li>
          <li>
            <link-card href="https://github.com/a11yfred/neighbor" iconClass="i2" title="neighbor" subtitle="ESLint + Stylelint rules for accessibility">
              <svg slot="icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
            </link-card>
          </li>
          <li>
            <link-card href="https://github.com/mikeyil/ulam" iconClass="i3" title="ulam" subtitle="Accessible UI primitives for React, Vue, and Angular">
              <svg slot="icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/></svg>
            </link-card>
          </li>
          <li>
            <link-card disabled iconClass="i5" title="rogers" subtitle="In-browser accessibility overlay debugger" badge="Soon">
              <svg slot="icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
            </link-card>
          </li>
        </ul>
      </section>

      <section aria-labelledby="consulting-heading">
        <h2 id="consulting-heading" class="section-label">Consulting & Pricing</h2>
        <table class="pricing-table">
          <thead>
            <tr>
              <th>Service</th>
              <th>Description</th>
              <th>Rate</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Accessibility Audits</strong></td>
              <td>Full WCAG 2.2 AA coverage for web and mobile</td>
              <td>$150/hr</td>
            </tr>
            <tr>
              <td><strong>ARC Retainer</strong></td>
              <td>Accessibility Resource Center ongoing support</td>
              <td>$2000/mo</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section aria-labelledby="writing-heading">
        <h2 id="writing-heading" class="section-label">Substack</h2>
        <link-card href="https://mikeyilagan.substack.com/" iconClass="i4" title="Thoughts on Accessibility" subtitle="Subscribe to my newsletter">
          <svg slot="icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
        </link-card>
      </section>

      <section aria-labelledby="connect-heading">
        <h2 id="connect-heading" class="section-label">Connect</h2>
        <div class="social">
          <social-link href="https://bsky.app/profile/mikey.fyi">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.242 1.364.84 3.418c-.306 1.566-.756 5.644-.756 6.867 0 4.229 2.943 5.667 5.836 5.667 1.04 0 2.04-.152 2.987-.434C7.082 19.103 5.316 21.93 3.65 23.341c-1.437 1.21.419 2.185 1.516 1.337C7.374 23.013 10.14 19.86 12 17.097c1.86 2.763 4.626 5.916 6.834 7.581 1.097.848 2.953-.127 1.516-1.337-1.666-1.41-3.432-4.238-5.257-7.823.947.282 1.947.434 2.987.434 2.893 0 5.836-1.438 5.836-5.667 0-1.223-.45-5.301-.756-6.867-.402-2.054-1.726-2.474-4.362-.617C15.046 4.747 13.087 8.686 12 10.8z"/></svg>
            Bluesky
          </social-link>
          <social-link href="https://www.linkedin.com/in/mikeyil">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            LinkedIn
          </social-link>
          <social-link href="https://github.com/sponsors/mikeyil">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 21.593c-.425-.244-8.947-5.158-8.947-11.171C3.053 6.545 5.564 4 8.638 4c1.73 0 3.286.893 4.362 2.287C14.076 4.893 15.632 4 17.362 4c3.074 0 5.585 2.545 5.585 6.422 0 6.013-8.522 10.927-8.947 11.171z"/></svg>
            Sponsor
          </social-link>
          <social-link href="https://github.com/mikeyil">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
            GitHub
          </social-link>
        </div>
      </section>

      <footer>mikey.fyi</footer>
    `;
  }
}

customElements.define('mikey-profile', MikeyProfile);
