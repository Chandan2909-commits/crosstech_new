# CrossTech Solutions — Master Website Brain / `brain.md`

> **Purpose:** This document is the single source of truth for designing and building the official CrossTech Solutions corporate website.
>
> **Status:** Initial IA/content specification based on the product information supplied by the business owner plus public inspection of the currently supplied product URLs.
>
> **Important:** This is a website/product-content blueprint, not legal advice. Legal pages must be reviewed and finalized with the business's actual legal entity details, jurisdiction, contracts, data practices, and applicable Indian laws/regulations.

---

# 0. Brand Definition

## Parent Company

**CrossTech Solutions**

CrossTech Solutions is the parent business/umbrella brand.

The website should communicate that CrossTech Solutions operates across **two distinct business branches**:

1. **CrossTech Applications**
   - Software products
   - Business applications
   - SaaS / operational systems
   - Productivity and enterprise workflow software
   - Industry-specific software

2. **Conscious Living**
   - Wellness
   - Lifestyle
   - Personal development
   - Habit and mindfulness products
   - Consumer-facing digital wellness experiences
   - Future physical wellness/lifestyle products

### Naming correction

The supplied business description spells the branch as `Concious living`.

The public product sites consistently use **`Conscious Living`**, so the official website should use:

> **Conscious Living**

unless the legal/trademark owner explicitly confirms another spelling.

---

# 1. Core Website Objective

The corporate website is **not** supposed to behave like one giant product landing page.

Its primary purpose is to:

- Establish CrossTech Solutions as the parent brand.
- Explain the two business branches immediately.
- Let visitors understand which branch is relevant to them.
- Showcase the products under the correct branch.
- Give every product a clear route to its own website/app.
- Explain the company's philosophy and capabilities.
- Build trust.
- Provide contact/business inquiry routes.
- Provide legal, privacy, security and other mandatory/supporting information.
- Make the architecture expandable as more products are added.

The website should feel like a **parent company + portfolio ecosystem**, not a random collection of unrelated SaaS landing pages.

---

# 2. High-Level Information Architecture

```text
CrossTech Solutions
│
├── Home
│
├── Company
│   ├── About CrossTech Solutions
│   ├── Our Vision
│   ├── Our Approach
│   ├── Our Businesses
│   └── Contact
│
├── CrossTech Applications
│   ├── Overview
│   ├── EmployeeOS
│   ├── CROS
│   ├── UplyCRM
│   ├── Synergy
│   ├── SiteOS / BuildLedger
│   └── CollaborationOS
│
├── Conscious Living
│   ├── Overview
│   ├── Mind Space
│   ├── HoneyTrack
│   └── Mivo
│
├── Insights / Resources
│   ├── Articles
│   ├── Product Updates
│   └── Company News
│
├── Careers
│
├── Contact
│
└── Legal
    ├── Privacy Policy
    ├── Terms of Service
    ├── Cookie Policy
    ├── Accessibility
    ├── Security / Responsible Disclosure
    ├── Data Processing / Data Rights
    └── Disclaimer
```

Not every page must launch on day one. The IA is intentionally designed for expansion.

---

# 3. The Most Important Homepage Requirement

## Homepage must contain a visual business-bifurcation flowchart

The homepage should explicitly show the structure:

```text
                         CROSS TECH SOLUTIONS
                                  │
                    ┌─────────────┴─────────────┐
                    │                           │
                    ▼                           ▼
          CROSS TECH APPLICATIONS         CONSCIOUS LIVING
                    │                           │
          Business & Software             Wellness & Lifestyle
                    │                           │
       ┌────────────┼────────────┐       ┌──────┼──────┐
       │            │            │       │      │      │
       ▼            ▼            ▼       ▼      ▼      ▼
   EmployeeOS     CROS        UplyCRM  Mind    Honey   Mivo
                                      Space   Track
       │            │            │
       ├── Synergy  │
       ├── SiteOS   │
       └── CollaborationOS
```

### Preferred visual implementation

Use a sophisticated animated flow diagram rather than a boring organizational chart.

The visitor should be able to:

1. Arrive at CrossTech Solutions.
2. Understand the parent company.
3. See two business branches.
4. Hover/click **CrossTech Applications**.
5. See the business software portfolio.
6. Hover/click **Conscious Living**.
7. See the wellness/lifestyle portfolio.
8. Click any product to open its product page or external product website.

### Interaction model

Desktop:

- Central CrossTech Solutions node.
- Two large branch nodes.
- Products expand outward/downward.
- Subtle animated connecting lines.
- Hover state highlights the selected branch.
- Product cards become interactive.
- Motion should be elegant and restrained.

Mobile:

- Convert the diagram into a vertical tree/step flow.
- Do not force a desktop graph into a tiny viewport.
- Each branch becomes an expandable accordion/card.
- Product cards remain tappable.

### Accessibility

The flowchart must not be the only way to understand the hierarchy.

Provide equivalent semantic text:

> CrossTech Solutions operates through two business branches: CrossTech Applications, focused on software and business solutions, and Conscious Living, focused on wellness and lifestyle products.

---

# 4. Homepage Specification

## 4.1 Navigation / Header

### Left

CrossTech Solutions logo.

### Main navigation

```text
Products
Businesses
About
Insights
Careers
Contact
```

Alternative:

```text
Applications
Conscious Living
Company
Insights
Contact
```

### Right-side CTA

Primary:

> Talk to us

Secondary optional:

> Explore Products

### Products mega-menu

The Products menu should be split visually:

```text
CROSSTECH APPLICATIONS
Business software and operational systems

EmployeeOS
CROS
UplyCRM
Synergy
SiteOS / BuildLedger
CollaborationOS

→ Explore CrossTech Applications


CONSCIOUS LIVING
Wellness and lifestyle experiences

Mind Space
HoneyTrack
Mivo

→ Explore Conscious Living
```

This reinforces the company's architecture everywhere.

---

# 5. Homepage Content Structure

## Section 1 — Hero

### Objective

Introduce the parent company without trying to describe every product in the hero.

### Suggested positioning

**Headline direction:**

> Technology for better businesses.  
> Products for better living.

Alternative:

> Building useful technology across work and life.

Alternative:

> One company. Two directions.  
> Software for how businesses work. Products for how people live.

### Supporting copy

CrossTech Solutions builds and operates digital products across business software, productivity, wellness and lifestyle.

### CTAs

```text
Explore our businesses
View products
```

Do not make the hero too text-heavy.

---

# 6. Homepage — Business Bifurcation Section

## Heading

> Two businesses. One vision.

Supporting text:

> CrossTech Solutions brings together two complementary product worlds — software that helps businesses operate better and experiences that help people live more consciously.

Then render the interactive flowchart.

### Branch 1

**CrossTech Applications**

Short description:

> Practical software systems designed to simplify operations, improve collaboration and help organizations work smarter.

CTA:

> Explore Applications

### Branch 2

**Conscious Living**

Short description:

> Digital products designed around mindfulness, habits, reflection, wellness and intentional living.

CTA:

> Explore Conscious Living

---

# 7. Homepage — Product Portfolio

Show a curated product grid.

Do NOT dump every feature onto the homepage.

Each card should contain:

- Product logo/name
- Branch badge
- One-line positioning
- 2–4 key capabilities
- Product status
- CTA

Example:

```text
EmployeeOS
CrossTech Applications

Employee operations platform for managing the employee lifecycle.

HR
Payroll
Attendance
Employee Self-Service

[Explore Product]
```

---

# 8. Product Portfolio Taxonomy

## CrossTech Applications

### 1. EmployeeOS

Supplied URL:

https://empos1.vercel.app/index.html

### Current publicly observed positioning

The public site presents EmployeeOS as a global employment/employee operations platform.

Observed concepts include:

- Employee lifecycle management
- Recruitment
- Onboarding
- Payroll
- Attendance
- Performance management
- Expense claims
- Employee exit/alumni
- Employee self-service
- Payslips
- Leave
- Claims
- Tax declarations
- AI HR assistant
- Integrations
- APIs
- Webhooks
- MCP/AI connectivity

### Important publication warning

The supplied public EmployeeOS page contains branding and claims that appear to belong to an EmployeeOS-branded entity, including references to:

- "EmployeeOS Technology, Inc."
- SOC 2
- ISO 27001
- GDPR alignment
- global employment infrastructure
- customer/company logos
- large company counts
- global employment/EOR claims

These claims **must not automatically be copied onto the CrossTech Solutions corporate site**.

Before publishing EmployeeOS as a CrossTech product, confirm:

1. Who legally owns EmployeeOS?
2. Is it an original CrossTech product, licensed product, white-label product, clone/demo, or separate product?
3. Which company owns its trademarks?
4. Which company owns customer relationships?
5. Whether certifications actually apply to CrossTech.
6. Whether customer logos/testimonials are authorized.
7. Whether global payroll/EOR/legal-entity claims are accurate.
8. Whether the product is actually production-ready.

### Corporate-site positioning

Until verified:

> **EmployeeOS**  
> A workforce and employee operations platform designed to bring core employee workflows into one connected system.

### CTA

> Visit EmployeeOS

External URL:

https://empos1.vercel.app/index.html

---

# 9. CROS

## Product

**CROS**

Supplied URL:

https://cros-three.vercel.app/

The public page could not be reliably text-extracted during inspection, so the corporate website must not invent features.

The page title identifies the product as:

> CROS — CrossTech Retail Operating System

### Safe positioning

> **CROS**  
> A retail operating system built to bring day-to-day retail operations into one connected platform.

### Product detail page should eventually contain

- Product overview
- Who it is for
- Core modules
- Dashboard screenshots
- Workflow
- Benefits
- Integrations
- Pricing/contact
- Demo CTA
- Product login
- Security
- FAQ

### Data required from product team

Confirm:

- Full name of CROS.
- Exact target market.
- Main modules.
- Supported business types.
- Key differentiators.
- Pricing.
- Deployment model.
- User roles.
- Integrations.
- Product screenshots.
- Current production URL.
- Support/contact URL.

---

# 10. UplyCRM

## Product

**UplyCRM**

Supplied URL:

https://uplycrmapp.crosstechsolutions.in/

The URL currently redirects to a login page during inspection.

### Corporate-site positioning

Until more product information is confirmed:

> **UplyCRM**  
> A customer relationship management platform designed to help teams organize customer interactions, sales activity and business relationships.

Do not invent CRM modules.

### Product detail page should contain

- Problem
- Solution
- CRM overview
- Lead management
- Contact management — only if confirmed
- Sales pipeline — only if confirmed
- Follow-ups — only if confirmed
- Analytics — only if confirmed
- Team collaboration — only if confirmed
- Screenshots
- Product tour
- Login
- Request demo
- Pricing/contact

### URL

https://uplycrmapp.crosstechsolutions.in/

---

# 11. Synergy

## Product

**Synergy**

No public URL was supplied.

No reliable public product information was identified during this research.

### Website treatment

Create a product placeholder in the architecture but do not fabricate features.

Suggested temporary copy:

> **Synergy**  
> A CrossTech Applications product currently being developed/presented as part of the CrossTech software portfolio.

Replace this immediately when actual product positioning is supplied.

### Required product information

Collect:

- What is Synergy?
- Target user
- Problem solved
- Features
- Screenshots
- URL
- Pricing
- Product status
- Login/demo route
- Integrations
- Differentiators

---

# 12. SiteOS / BuildLedger

## Supplied URL

https://constructionos-xi.vercel.app/signup

The public page identifies the product as:

> BuildLedger

The page presents a construction workspace signup flow.

Visible fields:

- Full Name
- Organization Name
- Email
- Password

Visible navigation/actions:

- Sign In
- Register
- Terms & Conditions
- Privacy Policy
- Help

### Recommended corporate-site naming

Use:

> **BuildLedger (SiteOS)**

only if "SiteOS" is the internal/product family name and "BuildLedger" is the customer-facing product name.

If BuildLedger is now the official name, use BuildLedger consistently.

### Safe positioning

> **BuildLedger**  
> A construction operations workspace designed to help teams organize and manage project activity in one place.

### Product detail page should eventually cover

- Construction project management
- Workspace management
- Project tracking
- Team access
- Site operations
- Financial/project records
- Documentation
- Tasks
- Reports
- User permissions

Only publish modules after confirming they exist.

### CTA

> Open BuildLedger

URL:

https://constructionos-xi.vercel.app/signup

---

# 13. CollaborationOS

## Product

**CollaborationOS**

Supplied URL:

https://collaboration-os.vercel.app/

The URL currently routes through Clerk authentication during automated inspection, so the public product surface could not be fully inspected.

### Safe positioning

> **CollaborationOS**  
> A collaborative workspace designed to help organizations structure teams, departments, work and communication in one system.

This positioning is consistent with the supplied product concept but must be finalized against the live product.

### Expected corporate-site sections

- Organizations
- Departments
- Teams
- Role-based access
- Kanban/work management
- Communication
- Collaboration
- Permissions
- Notifications
- Workspace administration

These are **candidate features**, not verified public claims.

### Required verification

Confirm:

- Organization hierarchy
- Roles
- Permissions
- Kanban functionality
- Chat/communication
- File sharing
- Notifications
- Integrations
- Authentication
- Pricing
- Public demo
- Product screenshots

---

# 14. Conscious Living

## Branch positioning

**Conscious Living**

> Digital and lifestyle products designed to help people reflect, build healthier routines, understand themselves and live more intentionally.

This branch should visually differ from CrossTech Applications.

### Design direction

CrossTech Applications:

- Precision
- Technology
- Enterprise
- Structured grids
- Dark/neutral palette
- Technical visual language

Conscious Living:

- Warm
- Calm
- Human
- Soft gradients
- Organic shapes
- Generous whitespace
- Wellness-oriented imagery

However, both must clearly belong to the same parent company.

---

# 15. Mind Space

## Product

**Mind Space**

Supplied URL:

https://mindspace.crosstechsolutions.in/

The public site identifies it as:

> Mind Space by Conscious Living

### Positioning observed publicly

> An AI-powered journaling and memory app that helps users capture thoughts, track wellness and build a second brain.

### Verified/publicly described capabilities

- Voice dictation
- Text capture
- AI summarization
- Mood tracking
- Semantic search
- Activity calendar
- Weather insights
- Memory archive
- Code snippets
- Categories/tags
- Optional cloud sync
- Data export
- Guest mode
- Local-first storage
- Wellness insights
- Daily quotes
- Wellness tips
- Curated wellness content

### Privacy positioning observed

The product site says:

- Local storage by default
- Cloud sync is optional
- Data export is available
- Guest mode exists
- User can clear data
- Data is not sold/shared according to the product page

### Technology/third-party references observed

The page mentions:

- Groq / Whisper for voice transcription
- LLaMA 3.1 for summarization
- Firebase for optional sync
- Open-Meteo for weather

These should only be included on the corporate website if they remain technically accurate.

### Corporate product-card copy

> **Mind Space**  
> A private digital sanctuary for journaling, reflection, memory and personal growth.

CTA:

> Explore Mind Space

URL:

https://mindspace.crosstechsolutions.in/

---

# 16. HoneyTrack

## Product

**HoneyTrack**

Supplied URL:

https://honeytrack.crosstechsolutions.in/

The public site identifies it as:

> HoneyTrack by Conscious Living

### Public positioning

> An AI-native habit and wellness tracker that helps users stay consistent, understand themselves and grow.

### Verified/publicly described capabilities

- Habit tracking
- Streak tracking
- Streak Freezes
- Hero Tasks
- Routine Tasks
- Task notes
- Mood diary
- Mood calendar
- Timeline view
- AI Letters
- Habit analytics
- 365-day/YTD contribution grid
- AI habit insights
- Carry-forward AI
- Multiple themes
- Dark mode
- Local-first architecture
- Optional sync
- Data export
- Android APK
- Web/PWA access

### Publicly referenced AI

The site says AI Letters are powered through Groq.

Do not publish any stronger privacy/security claim than the actual product architecture supports.

### Product-card copy

> **HoneyTrack**  
> A habit and wellness companion designed to turn intentions into consistent daily action.

CTA:

> Explore HoneyTrack

URL:

https://honeytrack.crosstechsolutions.in/

---

# 17. Mivo

## Product

**Mivo**

No URL or reliable public product information was supplied.

### Website treatment

Keep Mivo in the Conscious Living product portfolio.

Do not invent its purpose.

Temporary card:

> **Mivo**  
> A Conscious Living product.

CTA:

> Discover Mivo

### Required information

Collect:

- What is Mivo?
- Product category
- Target user
- Problem solved
- Features
- Screenshots
- URL
- Download route
- Pricing
- Product status
- Privacy model

---

# 18. CrossTech Applications Overview Page

Route:

```text
/applications
```

### Hero

> Software built around the way businesses actually work.

Supporting text:

> CrossTech Applications brings together purpose-built software for workforce operations, retail, CRM, construction and organizational collaboration.

### Product sections

1. EmployeeOS
2. CROS
3. UplyCRM
4. Synergy
5. BuildLedger / SiteOS
6. CollaborationOS

### Secondary section

> Built for real workflows.

Explain that products focus on:

- Operational efficiency
- Centralized information
- Role-based workflows
- Automation
- Collaboration
- Visibility
- Decision support

Do not overclaim AI, automation or integrations unless verified for each product.

---

# 19. Conscious Living Overview Page

Route:

```text
/conscious-living
```

### Hero

> Technology for a more conscious everyday life.

Supporting text:

> Conscious Living creates digital experiences for reflection, habits, wellness and intentional living.

### Product sections

1. Mind Space
2. HoneyTrack
3. Mivo

### Philosophy section

Use three conceptual pillars:

```text
Awareness
Consistency
Growth
```

Explain each with short copy.

---

# 20. Individual Product Page Template

Every product should follow a consistent structure.

```text
Product Hero
│
├── Product name
├── Branch
├── One-line positioning
├── Primary CTA
├── Secondary CTA
└── Product visual

Problem
│
└── What problem does this product solve?

Solution
│
└── How the product approaches the problem

Core Features
│
├── Feature 1
├── Feature 2
├── Feature 3
└── Feature 4+

Workflow
│
└── Step-by-step explanation

Who it's for
│
├── Persona 1
├── Persona 2
└── Persona 3

Product Screenshots
│
└── UI showcase

Benefits
│
└── Outcome-focused copy

Security / Privacy
│
└── Product-specific facts

Integrations
│
└── Only verified integrations

FAQ
│
└── Product questions

CTA
│
└── Visit product / Start / Book demo

Footer
```

---

# 21. About Page

Route:

```text
/about
```

## Hero

> We build products that make work simpler and life more intentional.

### Company story

Do not invent a founding story.

The final page should be populated from confirmed company information:

- Founding year
- Founders
- Location
- Team
- Mission
- Business model
- Product philosophy

### What we build

Two cards:

```text
CrossTech Applications
Software for businesses.

Conscious Living
Products for people.
```

### Philosophy

Potential themes:

- Build useful things.
- Reduce unnecessary complexity.
- Respect user data.
- Design around real behavior.
- Build products that can evolve.

These are positioning principles and should be approved by the company.

---

# 22. Contact Page

Route:

```text
/contact
```

### Purpose selector

```text
General enquiry
Product enquiry
Business / partnership
Enterprise sales
Support
Careers
Press / media
Other
```

### Form fields

- Name
- Email
- Phone — optional
- Company — optional
- Enquiry type
- Message
- Consent checkbox

### Anti-spam

Use:

- Honeypot and/or CAPTCHA
- Rate limiting
- Server-side validation
- Email verification if necessary

### Success state

> Thanks for reaching out. We've received your message and will get back to you through the contact details you provided.

Do not promise response times until an SLA is defined.

---

# 23. Careers Page

Route:

```text
/careers
```

### Sections

- Why CrossTech
- Engineering
- Product
- Design
- Operations
- Open positions
- Internship opportunities
- Application process
- General application

Do not list fake vacancies.

---

# 24. Insights / Blog

Route:

```text
/insights
```

Potential categories:

```text
Company
Product
Engineering
Business Operations
AI
Wellness
Productivity
Lifestyle
```

Because CrossTech has two very different branches, category and branch filters are important.

Example filter:

```text
All | CrossTech Applications | Conscious Living | Company
```

---

# 25. Search

If the site has enough content, implement global search.

Search should cover:

- Products
- Product features
- Articles
- FAQs
- Company pages

Search results should show a branch label.

Example:

```text
HoneyTrack
Conscious Living · Product

Habit and wellness tracker...
```

---

# 26. Footer Specification

The footer should be substantial but clean.

## Column 1 — Brand

```text
CrossTech Solutions

Building useful technology across
business and everyday life.
```

Include:

- Logo
- Social links
- Email/contact
- Copyright

---

## Column 2 — CrossTech Applications

```text
CrossTech Applications
EmployeeOS
CROS
UplyCRM
Synergy
BuildLedger / SiteOS
CollaborationOS
```

---

## Column 3 — Conscious Living

```text
Conscious Living
Mind Space
HoneyTrack
Mivo
```

---

## Column 4 — Company

```text
About
Insights
Careers
Contact
```

---

## Column 5 — Resources

```text
Help / Support
Product Updates
Documentation
Security
```

Only include links that actually exist.

---

## Column 6 — Legal

```text
Privacy Policy
Terms of Service
Cookie Policy
Disclaimer
Data & Privacy Rights
Security
Accessibility
```

---

# 27. Footer Legal Requirements

The final footer should not merely contain a generic "Privacy Policy".

At minimum, evaluate whether the following pages are required:

## 27.1 Privacy Policy

Must accurately describe:

- Legal entity
- Contact details
- What personal data is collected
- Why it is collected
- How it is used
- Legal basis where applicable
- Cookies
- Analytics
- Third-party processors
- Cloud providers
- Authentication providers
- AI providers
- Payment processors
- Data retention
- Data deletion
- Data export
- User rights
- International transfers
- Security practices
- Children/minors
- Grievance/contact mechanism
- Changes to policy
- Effective date

For each product, determine whether:

```text
CrossTech corporate privacy policy
```

or

```text
product-specific privacy policy
```

is appropriate.

---

# 28. India-Specific Privacy Considerations

Because the business appears to operate from India, the legal team should evaluate applicability of Indian privacy/data laws, including the **Digital Personal Data Protection Act, 2023** and rules/regulations applicable at launch.

Do not simply paste a US/EU privacy template.

Determine:

- Data fiduciary/controller role
- Data processor relationships
- Consent requirements
- Notice requirements
- Children's data requirements
- Data principal rights
- Grievance handling
- Security safeguards
- Data retention
- Cross-border transfers
- Vendor processing
- Breach response
- Applicable sector-specific obligations

If products handle sensitive business, employee, wellness or journal data, the privacy architecture must be reviewed separately.

---

# 29. Product-Specific Privacy

This is especially important for:

## EmployeeOS

Potential data categories:

- Employee identity
- Employment information
- Payroll
- Attendance
- Tax information
- Benefits
- Documents
- Authentication
- Organization data

Potentially high-risk if mishandled.

## Mind Space

Potential data categories:

- Journal entries
- Voice recordings/transcripts
- Mood data
- Personal memories
- Location/weather data
- User-generated content
- Account data

## HoneyTrack

Potential data categories:

- Habits
- Diary entries
- Mood data
- Tasks
- Behavioral analytics
- AI-generated reflections

### Rule

Never market these products as "privacy-first", "zero tracking", "offline", "no third parties", etc. unless the actual current architecture supports the exact claim.

---

# 30. Terms of Service

Terms should cover, where applicable:

- Acceptance
- Eligibility
- Account creation
- User responsibilities
- Acceptable use
- Prohibited activities
- Product availability
- Subscriptions/payment
- Trials
- Cancellation
- Refunds
- User content
- Intellectual property
- AI-generated output
- Third-party services
- Integrations
- Beta features
- Disclaimers
- Limitation of liability
- Indemnification
- Suspension/termination
- Governing law
- Dispute resolution
- Changes to terms
- Contact

Product-specific terms may be required for SaaS products.

---

# 31. Wellness Disclaimer

Conscious Living products must have a carefully written wellness disclaimer.

Especially for:

- Mind Space
- HoneyTrack
- Mivo

The website must not imply that journaling, habit tracking, AI reflections or wellness content:

- Diagnose medical conditions
- Treat medical conditions
- Replace professional healthcare
- Replace therapy
- Provide medical diagnosis
- Provide emergency intervention

A disclaimer should clearly distinguish:

```text
Wellness / self-reflection tool
```

from:

```text
Medical device / medical advice
```

unless the company has actually obtained the required regulatory status.

---

# 32. AI Disclosure

For AI-powered products, disclose AI usage where appropriate.

Possible areas:

- Voice transcription
- Summarization
- AI-generated reflections
- Habit insights
- AI assistants
- Recommendations

The site should explain, where relevant:

- AI output may be inaccurate
- AI is not a human professional
- Users should review important outputs
- What data is sent to external AI providers
- Whether provider data is retained
- Whether data is used for training
- User controls

Do not claim "AI-powered" simply as marketing decoration.

---

# 33. Cookie Policy

If the corporate website uses:

- Analytics
- Advertising
- Marketing pixels
- Embedded media
- Third-party widgets
- Authentication
- Preference cookies

document them accurately.

If the website is genuinely cookie-light, keep the policy correspondingly simple.

Do not use unnecessary trackers.

---

# 34. Security Page

Route:

```text
/security
```

Recommended sections:

- Security overview
- Data encryption
- Authentication
- Authorization
- Access control
- Infrastructure
- Backups
- Monitoring
- Incident response
- Vulnerability management
- Responsible disclosure
- Contact security team

Only list certifications such as SOC 2 or ISO 27001 if CrossTech actually holds them.

---

# 35. Responsible Disclosure

Create:

```text
/security/report-vulnerability
```

or link from Security.

Include:

- What to report
- What not to report
- Contact email
- Safe-harbor language if approved by counsel
- Expected response process

Do not publish an email address until the company owns that inbox.

---

# 36. Accessibility

The website should target WCAG 2.2 AA where practical.

Requirements:

- Keyboard navigation
- Visible focus
- Semantic HTML
- Alt text
- Sufficient contrast
- Reduced-motion mode
- Screen-reader labels
- Accessible forms
- Accessible dialogs
- No animation-only information
- Flowchart has semantic fallback
- Video captions if used

---

# 37. SEO Structure

## Homepage

Title:

> CrossTech Solutions — Technology for Business and Everyday Life

Possible description:

> CrossTech Solutions builds software and lifestyle products through CrossTech Applications and Conscious Living.

## Applications

> CrossTech Applications — Business Software & Digital Solutions

## Conscious Living

> Conscious Living — Wellness, Habits & Lifestyle Products

Each product gets its own SEO metadata.

---

# 38. Product SEO Template

```text
<title>
[Product] — [Positioning] | CrossTech Solutions

<meta description>
[Product] helps [target user] [solve problem] with [core capability].
```

Do not stuff keywords.

---

# 39. Open Graph / Social Metadata

Every major page should define:

- OG title
- OG description
- OG image
- Twitter/X card
- Canonical URL

Product pages should have product-specific social images.

---

# 40. Structured Data

Consider:

- Organization
- WebSite
- BreadcrumbList
- SoftwareApplication for applicable software products
- Article for blog posts
- FAQPage only when FAQ content is genuinely present and eligible

Do not add fake structured data.

---

# 41. URL Structure

Recommended:

```text
/
 /about
 /applications
 /applications/employeeos
 /applications/cros
 /applications/uplycrm
 /applications/synergy
 /applications/buildledger
 /applications/collaboration-os

 /conscious-living
 /conscious-living/mind-space
 /conscious-living/honeytrack
 /conscious-living/mivo

 /insights
 /insights/[slug]

 /careers
 /contact

 /legal/privacy
 /legal/terms
 /legal/cookies
 /legal/disclaimer
 /legal/data-rights

 /security
 /accessibility
```

If product brands require independent domains, the corporate product page should link externally.

---

# 42. Navigation Behavior

## Desktop

Sticky navigation.

On scroll:

- Header becomes slightly more compact.
- Background gains opacity/blur.
- No aggressive shrinking.

## Mobile

Use:

```text
Logo
Menu
```

Menu hierarchy:

```text
Products
  CrossTech Applications
    EmployeeOS
    CROS
    UplyCRM
    Synergy
    BuildLedger
    CollaborationOS

  Conscious Living
    Mind Space
    HoneyTrack
    Mivo

Company
Insights
Careers
Contact
```

---

# 43. Visual Design Direction

The website should feel like a **premium technology holding/product company**.

Avoid:

- Generic corporate templates
- Excessive gradients
- Cheap glassmorphism
- Huge meaningless statistics
- Stock-business imagery everywhere
- Overly dense cards
- Excessive animations
- Fake "trusted by" logos

Use:

- Strong typography
- Large whitespace
- High-quality product UI
- Subtle motion
- Clear hierarchy
- Product screenshots
- Diagrammatic storytelling
- Micro-interactions
- Responsive layouts

---

# 44. Recommended Design System

## Typography

Use one primary sans-serif family.

Possible options:

- Inter
- Geist
- Manrope
- Plus Jakarta Sans

Choose one.

Avoid mixing five fonts.

## Radius

Use a consistent radius scale:

```text
sm
md
lg
xl
2xl
```

## Shadows

Very subtle.

Product UI should provide most visual interest.

## Motion

Use:

- Framer Motion / Motion
- CSS transitions
- SVG path animations
- Scroll reveal

Respect:

```css
prefers-reduced-motion
```

---

# 45. Branch Visual Identity

## CrossTech Applications

Visual language:

```text
Dark / neutral
Precision
Technical
Grid
Data
Systems
Infrastructure
```

Potential palette direction:

- Black / charcoal
- White
- Cool gray
- One electric accent

## Conscious Living

Visual language:

```text
Warm
Human
Calm
Organic
Soft
Reflective
```

Potential palette direction:

- Cream
- Warm white
- Amber
- Sage
- Soft brown
- Muted blue

Do not make the branches look like two unrelated companies.

The parent CrossTech brand should connect them.

---

# 46. Homepage Motion Strategy

The homepage should use motion to explain the architecture, not to show off.

Suggested sequence:

### On load

1. CrossTech Solutions logo/wordmark appears.
2. Hero text enters.
3. Central company node appears.
4. Two branches grow from the center.
5. Product nodes/cards gently appear.
6. Connecting lines animate.
7. Visitor can interact.

### Scroll

Flowchart transitions into product cards.

### Hover

Selected branch:

- increases contrast
- product nodes become brighter
- unrelated branch slightly de-emphasizes

### Accessibility

Reduced-motion mode:

- Show complete static flowchart.
- No essential content depends on animation.

---

# 47. Homepage Sections — Final Order

```text
1. Header
2. Hero
3. Business bifurcation / flowchart
4. CrossTech Applications overview
5. Conscious Living overview
6. Featured products
7. Why CrossTech
8. Product ecosystem / philosophy
9. Insights
10. Company CTA
11. Contact CTA
12. Footer
```

Do not put every product's detailed feature list on the homepage.

---

# 48. "Why CrossTech?" Section

This should be based on verified company principles rather than invented awards.

Possible framework:

### Product Thinking

We build around actual user workflows rather than adding features for the sake of features.

### Practical Technology

We focus on technology that solves concrete problems.

### Connected Portfolio

Our products cover both organizational productivity and personal wellbeing.

### Privacy & Responsibility

We design data practices intentionally and transparently.

These should be approved as official brand statements.

---

# 49. Product Status Labels

Every product should internally have a status:

```text
Live
Beta
Early Access
Coming Soon
Internal
Archived
```

Only show the status publicly when useful.

Recommended:

- EmployeeOS — Verify
- CROS — Verify
- UplyCRM — Live/login surface observed
- Synergy — Unknown
- BuildLedger — Live/signup surface observed
- CollaborationOS — Live/auth surface observed
- Mind Space — Live
- HoneyTrack — Live
- Mivo — Unknown

These statuses should be confirmed by the product owner before publication.

---

# 50. Product Data Model

The website CMS/data layer should model products like:

```ts
type Product = {
  id: string
  name: string
  slug: string
  branch: "applications" | "conscious-living"
  category: string
  shortDescription: string
  longDescription: string
  status: "live" | "beta" | "coming-soon" | "internal" | "archived"
  externalUrl?: string
  loginUrl?: string
  demoUrl?: string
  downloadUrl?: string
  logo?: string
  heroImage?: string
  screenshots?: string[]
  features: Feature[]
  audiences: string[]
  integrations?: string[]
  privacyUrl?: string
  termsUrl?: string
}
```

This allows future products to be added without rewriting the website.

---

# 51. Company Data Model

```ts
type BusinessBranch = {
  id: string
  name: string
  slug: string
  description: string
  philosophy: string
  visualTheme: string
  products: Product[]
}
```

Parent:

```ts
type Company = {
  name: "CrossTech Solutions"
  branches: BusinessBranch[]
}
```

---

# 52. Analytics

The corporate website should use privacy-conscious analytics.

Track:

- Page views
- Product page views
- Branch selection
- Product CTA clicks
- External product clicks
- Contact submissions
- Newsletter signup if introduced
- Search queries if search is implemented

Do not track sensitive user-generated content.

For Conscious Living products, be particularly cautious with behavioral analytics because wellness/journal data can be sensitive.

---

# 53. Events

Suggested analytics event names:

```text
branch_view
branch_select
product_view
product_cta_click
external_product_click
contact_form_start
contact_form_submit
career_application_start
career_application_submit
search
```

Event properties should avoid personal/sensitive data.

---

# 54. Technical Architecture Recommendation

Recommended stack for the corporate website:

```text
Next.js
TypeScript
Tailwind CSS
Motion / Framer Motion
MDX or headless CMS
Next/Image
Next/SEO metadata APIs
Vercel
```

Optional:

```text
Sanity / Contentful / Payload
```

if non-developers need to update products and articles.

For a small initial website, MDX/content files are sufficient.

---

# 55. Component Architecture

Suggested component tree:

```text
app/
├── page.tsx
├── about/
├── applications/
│   ├── page.tsx
│   └── [slug]/
├── conscious-living/
│   ├── page.tsx
│   └── [slug]/
├── insights/
├── careers/
├── contact/
├── legal/
└── security/

components/
├── navigation/
├── footer/
├── hero/
├── business-flow/
├── product-card/
├── product-grid/
├── branch-section/
├── product-hero/
├── feature-grid/
├── screenshot-gallery/
├── faq/
├── contact-form/
├── legal/
└── motion/
```

---

# 56. Performance Requirements

Target:

- Excellent Core Web Vitals
- Fast first load
- Optimized images
- Lazy-loaded below-the-fold visuals
- SVG where appropriate
- Minimal JavaScript
- Avoid giant animation libraries if unnecessary
- Avoid autoplay video on mobile
- Preload only critical assets
- Use modern image formats

The flowchart should not become a performance bottleneck.

---

# 57. External Product Links

External product links should be clearly labeled when leaving the corporate site.

Example:

> Open EmployeeOS ↗

or:

> Visit product ↗

For login pages:

> Open application ↗

Do not confuse:

```text
Corporate product information
```

with:

```text
Product application/login
```

---

# 58. Trust / Claims Governance

This is mandatory.

Create an internal content rule:

> **No unsupported claim goes live.**

Claims requiring verification:

- Number of customers
- Revenue
- User count
- Security certifications
- Government compliance
- International coverage
- Uptime
- Performance metrics
- AI accuracy
- "Best"
- "Only"
- "Zero"
- "100%"
- "No data leaves device"
- "No third parties"
- "No tracking"
- Customer logos
- Testimonials
- Awards
- Partnerships

A product landing page can contain impressive copy without making legally or commercially risky claims.

---

# 59. Existing Product-Site Content Reuse Rule

Do not blindly copy product websites into the corporate site.

Use existing product websites as source material for:

- Product names
- Positioning
- Feature discovery
- UI terminology
- Product screenshots
- Brand language
- CTAs

Then rewrite into a consistent CrossTech corporate voice.

The corporate site should answer:

> "What is this product and why is it part of CrossTech?"

The individual product site should answer:

> "Why should I use/buy this product?"

---

# 60. Legal Entity Information Required

Before legal pages are written, collect:

```text
Legal entity name
Registered office
Corporate identification / registration details
Country
State
Postal code
Official support email
Privacy email
Legal email
Security email
Grievance/contact officer
GST details if applicable
Applicable governing law
Dispute resolution venue
```

Do not invent these.

---

# 61. Contact Identity

Define separate addresses where appropriate:

```text
hello@...
support@...
privacy@...
legal@...
security@...
careers@...
```

Only publish addresses that actually exist.

If not available, use a controlled contact form.

---

# 62. Corporate vs Product Legal Architecture

Recommended model:

```text
CrossTech Solutions
│
├── Corporate Privacy Policy
├── Corporate Terms
│
├── CrossTech Applications
│   ├── Product-specific terms/privacy where necessary
│   └── SaaS agreements where necessary
│
└── Conscious Living
    ├── Product privacy policies
    ├── Product terms
    └── Wellness disclaimer
```

The legal team should determine whether one global policy or separate policies are appropriate.

---

# 63. Privacy Center

Recommended future page:

```text
/privacy
```

With:

```text
Privacy Policy
Cookie Policy
Data Rights
Data Export
Data Deletion
Security
Third-party processors
Contact
```

This is especially valuable because the portfolio contains products that may process employee, journal, mood and behavioral information.

---

# 64. Product Data Deletion

For products storing personal data, document:

- How users delete data
- Whether deletion is immediate or delayed
- Backup retention
- Account deletion
- Guest-mode deletion
- Cloud-sync deletion
- Export-before-delete process

Mind Space and HoneyTrack already publicly mention data export/deletion/local-first behavior; ensure the actual implementation matches the marketing copy.

---

# 65. Product-Specific CTA Strategy

## Business products

Primary CTA options:

```text
Book a demo
Request access
Start using
Open product
Talk to sales
```

## Conscious Living products

Primary CTA options:

```text
Get the app
Try it
Download
Start your journey
Open app
```

Do not use "Book a demo" for consumer wellness products unless appropriate.

---

# 66. CrossTech Applications CTA Hierarchy

On portfolio page:

```text
Explore product
```

On individual product:

```text
Primary: Get started / Book demo
Secondary: View product
```

If product is login-only:

```text
Open application
```

---

# 67. Conscious Living CTA Hierarchy

For Mind Space:

```text
Download Mind Space
Explore Mind Space
```

For HoneyTrack:

```text
Start HoneyTrack
Open web app
Download Android app
```

For Mivo:

Wait until product information is confirmed.

---

# 68. Homepage Product Selection

Do not show all products with equal visual weight.

Recommended featured products:

```text
EmployeeOS
CROS
BuildLedger
Mind Space
HoneyTrack
```

Then provide:

> View all products

This keeps the homepage clean while retaining the complete portfolio.

---

# 69. Product Card Design

Each card:

```text
[Product Logo]

CrossTech Applications

PRODUCT NAME

One-sentence explanation.

[Feature tag] [Feature tag] [Feature tag]

Explore →
```

For Conscious Living:

```text
Conscious Living

PRODUCT NAME

One-sentence explanation.

[Wellness] [AI] [Privacy] etc.

Explore →
```

---

# 70. About / Portfolio Relationship

The About page should not duplicate the Applications and Conscious Living pages.

About answers:

> Who are we?

Applications answers:

> What business software do we build?

Conscious Living answers:

> What wellness/lifestyle products do we build?

Product pages answer:

> What does this particular product do?

---

# 71. FAQ Architecture

Corporate FAQ:

- What is CrossTech Solutions?
- What are the two business branches?
- What products does CrossTech build?
- How can I contact CrossTech?
- Do you offer enterprise solutions?
- Where can I get product support?

Product FAQs:

- What is the product?
- Who is it for?
- How does it work?
- Is there a free version?
- Where can I access it?
- How is my data handled?
- How can I delete my account?

Only answer with confirmed facts.

---

# 72. Error Pages

Create:

```text
404
500
Maintenance
Product unavailable
```

404 copy:

> Looks like this page crossed paths with the wrong route.

Then:

```text
Go home
Explore products
Contact us
```

A little personality is acceptable.

---

# 73. Loading States

The website should feel fast.

Use:

- Skeletons for dynamic content
- Lightweight page transitions
- No full-screen loading animation unless necessary
- Preserve navigation immediately
- Optimize fonts

---

# 74. Mobile Requirements

The entire website must be designed mobile-first.

Especially test:

- Flowchart
- Mega menu
- Product cards
- Screenshot galleries
- Contact forms
- Footer
- Legal pages
- Product CTA
- Sticky navigation

Avoid horizontal scrolling.

---

# 75. Accessibility for Legal Pages

Legal pages should have:

- Table of contents
- Heading hierarchy
- Search/findability
- Effective date
- Last updated date
- Printable layout
- Good line length

---

# 76. Content Management

If CMS is used, create:

```text
Products
Branches
Articles
FAQs
Testimonials
Team
Jobs
Legal documents
```

Every product record should include a `verified` flag internally.

Example:

```ts
verifiedClaims: boolean
lastVerifiedAt: string
```

This is useful because product features will change frequently.

---

# 77. Product Verification Checklist

Before publishing each product:

```text
[ ] Product name verified
[ ] Product logo verified
[ ] Product URL verified
[ ] Product status verified
[ ] Description approved
[ ] Features verified
[ ] Screenshots approved
[ ] Pricing verified
[ ] CTA verified
[ ] Privacy policy verified
[ ] Terms verified
[ ] Support route verified
[ ] AI claims verified
[ ] Security claims verified
[ ] Third-party integrations verified
[ ] Customer logos authorized
[ ] Testimonials authorized
```

---

# 78. Current Research/Inspection Notes

## Successfully inspected

### EmployeeOS
Public landing page accessible.

Observed broad employee/global employment positioning and extensive feature/claim content.

### BuildLedger / SiteOS
Signup page accessible.

Observed product name "BuildLedger" and construction workspace signup.

### Mind Space
Public product landing page accessible.

Extensive product and privacy information available.

### HoneyTrack
Public product landing page accessible.

Extensive product, feature and privacy information available.

## Partially/inaccessibly inspected

### CROS
Page title available, but public text extraction returned no usable body content.

### UplyCRM
Redirects to login; public marketing content not accessible through the supplied URL.

### CollaborationOS
Redirects into Clerk authentication flow during inspection.

### Synergy
No URL supplied.

### Mivo
No URL supplied.

---

# 79. Important Branding / Ownership Verification

Before launch, verify whether each product is genuinely owned/operated by CrossTech Solutions.

Particularly verify:

```text
EmployeeOS
CROS
UplyCRM
Synergy
BuildLedger
CollaborationOS
Mind Space
HoneyTrack
Mivo
```

For each:

```text
Owner
Trademark owner
Developer
Operator
Data controller/fiduciary
Hosting entity
Billing entity
Support entity
```

This determines how the corporate website should phrase ownership.

---

# 80. Recommended Corporate Messaging

## Short company statement

> CrossTech Solutions builds practical technology for businesses and everyday life.

## Expanded

> CrossTech Solutions develops and operates a growing portfolio of digital products across two distinct businesses: CrossTech Applications, focused on business software and operational systems, and Conscious Living, focused on wellness, habits, reflection and lifestyle.

## Very short footer statement

> Technology for better businesses and more intentional living.

All statements should be approved by the business owner.

---

# 81. Homepage Copy Blueprint

```text
CROSS TECH SOLUTIONS

Technology for better businesses.
Products for better living.

We build practical digital products across business software,
wellness and lifestyle.

[Explore our businesses] [View products]


TWO BUSINESSES. ONE VISION.

CrossTech Solutions operates across two product worlds.

                    CROSS TECH SOLUTIONS
                           /       \
                          /         \
                         /           \
          CROSS TECH APPLICATIONS   CONSCIOUS LIVING
                  /   /   /   \          /   |   \
                 ... products ...       ... products ...


CROSS TECH APPLICATIONS

Software built around real business workflows.

EmployeeOS
CROS
UplyCRM
Synergy
BuildLedger
CollaborationOS

[Explore CrossTech Applications]


CONSCIOUS LIVING

Digital products for reflection, habits and intentional living.

Mind Space
HoneyTrack
Mivo

[Explore Conscious Living]


BUILT WITH PURPOSE

We focus on useful technology,
clear experiences and products that can grow with their users.


OUR PRODUCTS

[Featured product cards]


INSIGHTS

[Latest articles]


LET'S BUILD SOMETHING USEFUL.

[Contact CrossTech]
```

---

# 82. What NOT to Put on the Homepage

Do not:

- List every product feature.
- Put long legal text.
- Put giant fake statistics.
- Claim certifications without proof.
- Use random customer logos.
- Use unrelated stock images.
- Mix employee software and wellness features into one confusing grid.
- Make the visitor figure out the two-branch structure.
- Put product login buttons in the primary navigation.
- Overuse animations.

---

# 83. Homepage Conversion Paths

## Business visitor

```text
Home
 ↓
CrossTech Applications
 ↓
Product
 ↓
Product details
 ↓
Demo / Open Product / Contact
```

## Consumer/wellness visitor

```text
Home
 ↓
Conscious Living
 ↓
Mind Space / HoneyTrack / Mivo
 ↓
Product
 ↓
Download / Open App
```

## Potential partner

```text
Home
 ↓
About
 ↓
Contact
 ↓
Partnership enquiry
```

## Job seeker

```text
Home
 ↓
Careers
 ↓
Job
 ↓
Application
```

---

# 84. Search Engine / Brand Architecture

The corporate domain should rank for:

```text
CrossTech Solutions
CrossTech Applications
Conscious Living
CrossTech products
```

Individual product domains should remain responsible for product-specific SEO where applicable.

Do not create duplicate SEO pages that simply copy every product's existing landing page.

---

# 85. Social Proof

If the company has genuine proof, use:

- Customer logos
- Customer quotes
- Product metrics
- Case studies
- Awards
- Partnerships

But each must have:

```text
Source
Permission
Date
Owner
```

Do not copy proof from an unrelated product website.

---

# 86. Case Studies

Future route:

```text
/case-studies
/case-studies/[slug]
```

Structure:

```text
Customer
Challenge
Context
Solution
Implementation
Results
Screenshots
Technology
Quote
CTA
```

Use measurable results only when verified.

---

# 87. Product Comparison

For CrossTech Applications, consider a comparison page later:

```text
/applications/compare
```

Columns:

```text
EmployeeOS
CROS
UplyCRM
BuildLedger
CollaborationOS
```

Rows should be actual verified capabilities.

This page is useful for customers but not necessary for initial launch.

---

# 88. Enterprise Contact

For B2B products, add:

```text
Request a demo
```

Fields:

- Name
- Work email
- Company
- Company size
- Product of interest
- Role
- Message

Do not ask for unnecessary sensitive information.

---

# 89. Product Support Routing

The corporate site should not become the support dashboard for every product.

Use:

```text
Corporate contact
↓
Identify product
↓
Route to product support
```

Each product should eventually have its own:

```text
Support
Documentation
FAQ
Contact
```

---

# 90. Domain Strategy

Recommended long-term structure:

```text
crosstechsolutions.in
        │
        ├── Corporate website
        │
        ├── Product domains/subdomains
        │
        └── App/login domains
```

Keep the corporate website separate from authenticated application surfaces.

---

# 91. Authentication Boundary

Corporate website:

```text
Public
```

Product applications:

```text
Authenticated
```

Do not merge product authentication into the corporate marketing website unless there is a strong product/SSO reason.

---

# 92. Security Boundary

The corporate website should never expose:

- API keys
- Firebase config secrets
- Service account credentials
- Database credentials
- Private endpoints
- Admin routes
- Internal dashboards
- Environment variables

All secrets must remain server-side.

---

# 93. Form Security

Contact/career forms:

- Server-side validation
- Rate limiting
- CSRF protection where applicable
- Spam prevention
- Input sanitization
- Secure email handling
- No raw HTML injection
- Minimal data retention

---

# 94. Sitemap

Generate:

```text
/
 /about
 /applications
 /applications/employeeos
 /applications/cros
 /applications/uplycrm
 /applications/synergy
 /applications/buildledger
 /applications/collaboration-os
 /conscious-living
 /conscious-living/mind-space
 /conscious-living/honeytrack
 /conscious-living/mivo
 /insights
 /careers
 /contact
 /security
 /accessibility
 /legal/privacy
 /legal/terms
 /legal/cookies
 /legal/disclaimer
```

Only index pages intended for search engines.

---

# 95. Robots / Indexing

Do not index:

```text
/login
/signup
/admin
/dashboard
/private
/api
```

Product applications should handle indexing separately.

---

# 96. Canonicals

Every public marketing page needs a canonical URL.

Avoid:

```text
?utm_source=
```

creating duplicate canonical content.

---

# 97. Image Strategy

Corporate site should use:

1. Product UI screenshots
2. Product logos
3. Custom diagrams
4. Brand photography where appropriate
5. Abstract visual systems

Avoid generic "business people shaking hands" stock photography.

---

# 98. Product Screenshot Rules

Screenshots must:

- Use current UI
- Remove real personal data
- Remove API keys
- Remove internal customer information
- Use demo accounts
- Have consistent device frames
- Be optimized
- Have alt text

---

# 99. Legal Copy Versioning

Every legal page should have:

```text
Effective date
Last updated
Version
```

Example:

```text
Effective: October 5, 2026
Last updated: October 5, 2026
Version: 1.0
```

Use the actual publication date at launch.

---

# 100. Final Launch Checklist

## Brand

[ ] CrossTech Solutions name approved  
[ ] Logo approved  
[ ] Branch naming approved  
[ ] "Conscious Living" spelling confirmed  
[ ] Product ownership verified  

## Content

[ ] All product descriptions approved  
[ ] All URLs verified  
[ ] Product screenshots approved  
[ ] Product status verified  
[ ] No unsupported claims  
[ ] Contact information verified  

## Legal

[ ] Privacy Policy reviewed  
[ ] Terms reviewed  
[ ] Cookie policy reviewed  
[ ] Wellness disclaimer reviewed  
[ ] Data rights process defined  
[ ] Grievance/contact details defined  
[ ] Governing law confirmed  
[ ] Legal entity details confirmed  

## Security

[ ] HTTPS  
[ ] Security headers  
[ ] CSP  
[ ] Form validation  
[ ] Rate limiting  
[ ] Spam protection  
[ ] No exposed secrets  
[ ] Security contact established  

## SEO

[ ] Metadata  
[ ] Sitemap  
[ ] Robots.txt  
[ ] Canonicals  
[ ] OG images  
[ ] Structured data  
[ ] Search Console  
[ ] Analytics  

## Performance

[ ] Images optimized  
[ ] Fonts optimized  
[ ] JS minimized  
[ ] Core Web Vitals tested  
[ ] Mobile tested  
[ ] Reduced motion tested  

## Accessibility

[ ] Keyboard navigation  
[ ] Screen reader test  
[ ] Contrast  
[ ] Alt text  
[ ] Form labels  
[ ] Focus states  
[ ] Reduced motion  
[ ] Flowchart semantic alternative  

---

# 101. Immediate Product Information Still Needed

Before the website is considered content-complete, obtain this information from the business/product teams:

## EmployeeOS

- Ownership relationship
- Official CrossTech positioning
- Actual feature list
- Current URL
- Pricing
- Demo/contact route
- Certifications/claims approval

## CROS

- Full product description
- Feature list
- Screenshots
- Pricing
- Target users
- URL verification

## UplyCRM

- Marketing description
- Feature list
- Screenshots
- Target users
- Pricing
- Demo URL

## Synergy

- Everything

## BuildLedger / SiteOS

- Final brand name
- Feature list
- Target customers
- Screenshots
- Pricing
- Product URL

## CollaborationOS

- Feature list
- Screenshots
- Organization/team model
- Permissions
- Pricing
- Public landing page

## Mind Space

- Confirm AI providers
- Confirm privacy architecture
- Confirm current version
- Confirm download route
- Confirm product ownership

## HoneyTrack

- Confirm current features
- Confirm AI provider/data processing
- Confirm Android/web distribution
- Confirm privacy claims

## Mivo

- Everything

---

# 102. Recommended MVP Scope

Do not attempt to build every possible page immediately.

## Phase 1 — Corporate launch

```text
Home
About
CrossTech Applications
Conscious Living
Product detail pages
Contact
Privacy
Terms
Cookie Policy
Disclaimer
Security
```

## Phase 2

```text
Insights
Careers
Case Studies
FAQ
Privacy Center
Data Rights
```

## Phase 3

```text
Product comparison
Customer portal
Advanced search
CMS
Localization
Personalized product discovery
```

---

# 103. Final Mental Model

The entire website should communicate this simple idea:

```text
                         CROSS TECH SOLUTIONS
                                  │
                    "We build useful technology."
                                  │
                  ┌───────────────┴────────────────┐
                  │                                │
                  ▼                                ▼
       CROSS TECH APPLICATIONS             CONSCIOUS LIVING
          Technology for work               Technology for life
                  │                                │
        ┌─────────┼─────────┐              ┌───────┼───────┐
        │         │         │              │       │       │
        ▼         ▼         ▼              ▼       ▼       ▼
   EmployeeOS   CROS    UplyCRM        Mind Space HoneyTrack Mivo
        │
   BuildLedger
   CollaborationOS
   Synergy
```

The homepage is the **map**.

The branch pages are the **portfolio**.

The product pages are the **sales/product explanations**.

The individual product websites/apps are the **actual product experiences**.

The legal/security pages establish **trust and compliance**.

That separation should remain intact throughout the implementation.

---

# 104. Source URLs Used for Product Research

```text
EmployeeOS
https://empos1.vercel.app/index.html

CROS
https://cros-three.vercel.app/

UplyCRM
https://uplycrmapp.crosstechsolutions.in/

BuildLedger / SiteOS
https://constructionos-xi.vercel.app/signup

CollaborationOS
https://collaboration-os.vercel.app/

Mind Space
https://mindspace.crosstechsolutions.in/

HoneyTrack
https://honeytrack.crosstechsolutions.in/
```

Synergy:

```text
URL not supplied
```

Mivo:

```text
URL not supplied
```

---

# 105. Implementation Principle

When a future developer, designer, or AI coding agent reads this file, it should be able to answer:

```text
What is CrossTech Solutions?
What are its business branches?
What products belong to each branch?
What should appear in the navigation?
What should appear on the homepage?
How should the business flowchart work?
What pages need to exist?
What belongs in each page?
What should appear in the footer?
What legal pages are required?
What claims need verification?
What product information is missing?
How should products be modeled?
How should the site be structured technically?
What should NOT be invented?
```

If any of those questions cannot be answered, update this file before implementation.

**This file is the website's source-of-truth specification.**
