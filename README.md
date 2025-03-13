# AGYAL - Fixed Income Investment Platform

## Project Overview

AGYAL is a comprehensive fixed-income investment platform designed to bridge the gap between investors and fixed-income markets, with a special focus on Islamic-compliant investment opportunities. The platform aims to democratize access to fixed-income securities while adhering to ethical and religious investment principles.

This repository contains the frontend codebase for the AGYAL platform, built with Next.js and other modern web technologies. It provides a sleek, responsive user interface for discovering, analyzing, and investing in various fixed-income opportunities.

### Vision and Mission

**Vision**: To become the leading global platform for accessible, ethical fixed-income investments.

**Mission**: To democratize access to fixed-income markets by leveraging technology to reduce barriers to entry, while ensuring all offerings adhere to the highest ethical and religious standards.

## Key Features

- Discover and compare fixed-income investment opportunities
- Detailed investment information with performance metrics
- User authentication and dashboard
- Issuer profiles and offerings
- Admin dashboard for platform management
- Islamic-compliant investment options
- Global yield comparisons
- Dark mode support
- Responsive design for all device sizes
- Multi-step registration with KYC integration
- Interactive data visualizations
- Self-custody options through DLT technology

## Project Structure
\`\`\`
agyal/
├── app/                           # Next.js App Router structure
│   ├── about/                     # About page
│   ├── admin-dashboard/           # Admin dashboard
│   ├── contact/                   # Contact page
│   ├── how-it-works/              # How the platform works
│   ├── investment/                # Individual investment details
│   │   └── [id]/                  # Dynamic route for investment details
│   ├── investments/               # Investment listings
│   ├── issuer/                    # Issuer-related pages
│   │   ├── [id]/                  # Issuer details page
│   │   ├── login/                 # Issuer login
│   │   └── register/              # Issuer registration
│   ├── issuer-dashboard/          # Issuer dashboard
│   ├── login/                     # User login
│   ├── management-team/           # Team information
│   ├── register/                  # User registration
│   ├── results/                   # Search results
│   ├── user-dashboard/            # User dashboard
│   ├── globals.css                # Global CSS styles
│   ├── layout.tsx                 # Root layout component
│   └── page.tsx                   # Landing page
├── components/                    # Reusable components
│   ├── ui/                        # UI components (shadcn/ui)
│   │   ├── button.tsx             # Button component
│   │   ├── card.tsx               # Card component
│   │   ├── dropdown-menu.tsx      # Dropdown menu component
│   │   ├── input.tsx              # Input component
│   │   ├── label.tsx              # Label component
│   │   ├── loading-error.tsx      # Loading and error states
│   │   ├── progress.tsx            # Progress indicator
│   │   ├── select.tsx              # Select dropdown
│   │   ├── stepper.tsx             # Multi-step process indicator
│   │   ├── table.tsx               # Table component
│   │   ├── tabs.tsx                # Tabs component
│   │   └── textarea.tsx            # Textarea component
├── components/                    # Reusable components
│   ├── Navbar.tsx                 # Navigation component
│   ├── theme-provider.tsx         # Theme provider for dark mode
│   ├── theme-toggle.tsx         # Theme toggle component
│   └── WorldMap.tsx               # World map visualization
├── lib/                           # Utility functions
│   └── utils.ts                   # Utility functions (includes cn for class merging)
├── public/                        # Static assets
├── next.config.js                 # Next.js configuration
├── package.json                   # Project dependencies
├── tailwind.config.js             # Tailwind CSS configuration
├── tsconfig.json                  # TypeScript configuration
└── README.md                      # Project documentation
\`\`\`

## Tech Stack

- **Framework**: Next.js 14 (App Router)
  - Server Components for improved performance
  - Client Components where interactivity is needed
  - App Router for file-based routing
  
- **Language**: TypeScript
  - Strict type checking enabled
  - Interface-based component props
  
- **Styling**: Tailwind CSS
  - Custom theme configuration
  - Dark mode support
  - Responsive design utilities
  
- **UI Components**: shadcn/ui
  - Accessible components based on Radix UI
  - Customizable with Tailwind CSS
  - Consistent design language
  
- **State Management**: React Hooks
  - useState for local component state
  - useEffect for side effects
  - Custom hooks for reusable logic
  
- **Icons**: Lucide React
  - Lightweight SVG icons
  - Consistent design language
  
- **Theming**: next-themes
  - System preference detection
  - Persistent theme selection
  - Dark mode toggle
  
- **Charts**: recharts
  - Responsive data visualization
  - Interactive charts
  - Customizable styling
  
- **Form Handling**: Native React forms
  - Controlled components
  - Form validation

## Dependencies

Key dependencies include:

- `next`: The React framework for production
- `react` & `react-dom`: React library
- `typescript`: TypeScript language support
- `tailwindcss`: Utility-first CSS framework
- `class-variance-authority`: For component styling variants
- `clsx` & `tailwind-merge`: For conditional class merging
- `lucide-react`: Icon library
- `next-themes`: Theme management
- `@radix-ui/*`: Accessible UI primitives
- `recharts`: Charting library

### Dev Dependencies

- `eslint`: JavaScript linting
- `prettier`: Code formatting
- `typescript`: TypeScript compiler
- `postcss`: CSS processing
- `autoprefixer`: CSS vendor prefixing

## Architecture Overview

### Component Design Philosophy

The application follows a component-based architecture with a focus on:

1. **Reusability**: Components are designed to be reusable across the application
2. **Separation of Concerns**: UI components are separated from business logic
3. **Accessibility**: All components are built with accessibility in mind
4. **Performance**: Server and Client components are used strategically

### Data Flow

1. **Server Components**: Fetch data on the server and render static HTML
2. **Client Components**: Handle user interactions and local state
3. **Form Submissions**: Handled through controlled components
4. **API Integration**: Currently mocked, but designed to be replaced with real API calls

### State Management Strategy

- **Local State**: React's useState for component-specific state
- **Shared State**: Can be implemented using React Context or a state management library
- **Server State**: Will be managed through data fetching in Server Components or SWR/React Query

## What's Missing (Backend Requirements)

To turn this frontend into a fully functional application, you'll need to implement the following backend components:

### 1. Authentication System
- User, issuer, and admin authentication services
- JWT or session-based authentication
- Role-based access control
- Password reset and email verification
- Multi-factor authentication
- Social login integration (optional)
- Session management and token refresh

### 2. Database Schema

#### Users Collection/Table
\`\`\`
{
  id: string,
  email: string,
  passwordHash: string,
  fullName: string,
  phoneNumber: string,
  country: string,
  kycStatus: enum['pending', 'verified', 'rejected'],
  kycDocuments: [
    { type: string, url: string, verificationStatus: string }
  ],
  createdAt: timestamp,
  updatedAt: timestamp,
  lastLogin: timestamp,
  role: enum['user', 'admin', 'issuer'],
  preferences: {
    notificationSettings: object,
    investmentPreferences: object
  }
}
\`\`\`

#### Investments Collection/Table
\`\`\`
{
  id: string,
  name: string,
  type: string,
  issuer: reference to Issuer,
  yield: number,
  term: string,
  minInvestment: number,
  rating: string,
  countryOfIssuance: string,
  regulator: string,
  description: string,
  maturityDate: date,
  interestPaymentFrequency: string,
  totalIssueSize: string,
  secondaryMarketLiquidity: string,
  callableDate: string,
  useOfProceeds: string,
  availableUnits: number,
  historicalPrices: [
    { date: date, price: number }
  ],
  status: enum['active', 'draft', 'closed'],
  createdAt: timestamp,
  updatedAt: timestamp
}
\`\`\`

#### Issuers Collection/Table
\`\`\`
{
  id: string,
  name: string,
  description: string,
  website: string,
  foundedYear: number,
  headquarters: string,
  regulatoryCompliance: string,
  totalRaised: number,
  financials: {
    revenue: string,
    netIncome: string,
    totalAssets: string,
    totalLiabilities: string
  },
  activeListings: [reference to Investments],
  verificationStatus: enum['pending', 'verified', 'rejected'],
  documents: [
    { type: string, url: string, verificationStatus: string }
  ],
  createdAt: timestamp,
  updatedAt: timestamp
}
\`\`\`

#### Transactions Collection/Table
\`\`\`
{
  id: string,
  user: reference to User,
  investment: reference to Investment,
  type: enum['purchase', 'sale', 'interest_payment'],
  amount: number,
  units: number,
  status: enum['pending', 'completed', 'failed', 'cancelled'],
  transactionDate: timestamp,
  settlementDate: timestamp,
  paymentMethod: string,
  fees: number,
  notes: string
}
\`\`\`

### 3. API Endpoints

#### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `POST /api/auth/refresh-token` - Refresh authentication token
- `POST /api/auth/forgot-password` - Password reset request
- `POST /api/auth/reset-password` - Password reset
- `POST /api/auth/verify-email` - Email verification

#### Users
- `GET /api/users/me` - Get current user profile
- `PUT /api/users/me` - Update user profile
- `POST /api/users/kyc` - Submit KYC documents
- `GET /api/users/investments` - Get user investments
- `GET /api/users/transactions` - Get user transactions

#### Investments
- `GET /api/investments` - List investments with filtering
- `GET /api/investments/:id` - Get investment details
- `POST /api/investments/:id/purchase` - Purchase investment
- `GET /api/investments/yields` - Get yield comparison data

#### Issuers
- `GET /api/issuers` - List issuers
- `GET /api/issuers/:id` - Get issuer details
- `POST /api/issuers/register` - Register as issuer
- `POST /api/issuers/offerings` - Create new offering
- `PUT /api/issuers/offerings/:id` - Update offering

#### Admin
- `GET /api/admin/users` - List all users
- `PUT /api/admin/users/:id/verify` - Verify user KYC
- `GET /api/admin/investments` - List all investments
- `PUT /api/admin/investments/:id/approve` - Approve investment listing
- `GET /api/admin/issuers` - List all issuers
- `PUT /api/admin/issuers/:id/verify` - Verify issuer

### 4. Financial Services Integration
- Payment processing services (Stripe, PayPal, etc.)
- Banking APIs for fund transfers
- Islamic finance compliance verification
- Yield calculation algorithms
- Risk assessment models
- DLT/Blockchain integration for self-custody
- Smart contract templates for automated settlements

### 5. Security Features
- Data encryption at rest and in transit
- Anti-fraud measures
- KYC/AML compliance
- GDPR and data protection compliance
- Rate limiting and brute force protection
- CSRF protection
- Input validation and sanitization
- Security headers
- Regular security audits

### 6. External Integrations
- Financial data providers for real-time yields (Bloomberg, Reuters)
- Credit rating agencies (Moody's, S&P, Fitch)
- Regulatory compliance systems
- Banking partners for settlements
- Identity verification services (Jumio, Onfido)
- Document verification services
- Blockchain networks for DLT features

### 7. Notification System
- Email notifications using a service like SendGrid or Mailgun
- In-app notifications with WebSockets
- SMS alerts for critical actions
- Push notifications for mobile users
- Notification preferences management
- Notification templates and localization

## Recommended Backend Implementation

For the backend implementation, we recommend:

### Core Technologies
- **API Framework**: Node.js with Express or Next.js API routes
  - TypeScript for type safety
  - Modular architecture with separation of concerns
  
- **Database**: 
  - PostgreSQL for relational data (users, transactions)
  - MongoDB for document storage (investment details, issuer profiles)
  - Redis for caching and session management
  
- **ORM/ODM**: 
  - Prisma for PostgreSQL
  - Mongoose for MongoDB
  
- **Authentication**: 
  - NextAuth.js for social and email authentication
  - JWT for API authentication
  - Passport.js for flexible authentication strategies
  
- **File Storage**: 
  - AWS S3 for document storage
  - Cloudinary for image optimization
  
- **Deployment**: 
  - Vercel for serverless functions
  - Docker containers for custom server deployment
  - Kubernetes for scaling (if needed)

### Architecture Recommendations
- **Microservices**: Consider splitting the backend into microservices:
  - Authentication Service
  - User Service
  - Investment Service
  - Issuer Service
  - Transaction Service
  - Notification Service
  
- **API Gateway**: Implement an API gateway for:
  - Request routing
  - Authentication
  - Rate limiting
  - Logging
  
- **Event-Driven Architecture**: Use message queues for:
  - Asynchronous processing
  - Service communication
  - Event sourcing

### Security Implementation
- **Authentication**: JWT with short expiry and refresh tokens
- **Authorization**: Role-based access control with fine-grained permissions
- **Data Protection**: Encryption at rest and in transit
- **Input Validation**: Server-side validation of all inputs
- **Output Encoding**: Prevent XSS by properly encoding output
- **Rate Limiting**: Prevent abuse with rate limiting
- **Audit Logging**: Log all sensitive operations

## Performance Optimization

### Frontend Optimizations
- Implement code splitting with dynamic imports
- Use Next.js Image component for optimized images
- Implement lazy loading for below-the-fold content
- Minimize JavaScript bundle size
- Use Server Components where possible
- Implement proper caching strategies

### Backend Optimizations
- Implement database indexing
- Use caching for frequently accessed data
- Optimize database queries
- Implement pagination for large data sets
- Use connection pooling
- Consider read replicas for scaling

## Testing Strategy

### Frontend Testing
- **Unit Tests**: Test individual components with Jest and React Testing Library
- **Integration Tests**: Test component interactions
- **E2E Tests**: Use Cypress or Playwright for end-to-end testing
- **Visual Regression**: Use Storybook and Chromatic for visual testing

### Backend Testing
- **Unit Tests**: Test individual functions and methods
- **Integration Tests**: Test API endpoints
- **Load Testing**: Use k6 or JMeter for load testing
- **Security Testing**: Regular security audits and penetration testing

## Internationalization (i18n)

The application should support multiple languages to serve a global audience:

- Implement using `next-intl` or similar library
- Support right-to-left (RTL) languages
- Localize dates, numbers, and currencies
- Store user language preference

## Accessibility Considerations

The application is built with accessibility in mind:

- All components use semantic HTML
- ARIA attributes are used where appropriate
- Color contrast meets WCAG standards
- Keyboard navigation is supported
- Screen reader compatibility

## Mermaid Diagram Renderer

The project includes support for Mermaid diagrams, allowing for the creation of various diagrams and charts using a simple markdown-like syntax. This is particularly useful for documenting system architecture, workflows, and data flows.

### Usage

Mermaid diagrams can be rendered in documentation and potentially in the application itself. To create a Mermaid diagram, use the following syntax:

\`\`\`mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
\`\`\`

### Examples

#### System Architecture

\`\`\`mermaid
graph TD;
    Client["Client Browser"]-->FE["Frontend (Next.js)"];
    FE-->API["API Gateway"];
    API-->Auth["Authentication Service"];
    API-->Invest["Investment Service"];
    API-->User["User Service"];
    API-->Issuer["Issuer Service"];
    API-->Compliance["Compliance Service"];
    Auth-->DB1["User Database"];
    Invest-->DB2["Investment Database"];
    User-->DB1;
    Issuer-->DB3["Issuer Database"];
    Compliance-->DB4["Compliance Database"];
\`\`\`

#### User Registration Flow

\`\`\`mermaid
sequenceDiagram
    participant User
    participant Frontend
    participant AuthService
    participant KYCService
    participant UserDB
    
    User->>Frontend: Fill registration form
    Frontend->>AuthService: Submit registration data
    AuthService->>UserDB: Create user account
    AuthService->>Frontend: Account created
    Frontend->>User: Request KYC documents
    User->>Frontend: Upload documents
    Frontend->>KYCService: Submit documents
    KYCService->>UserDB: Update KYC status
    KYCService->>Frontend: KYC submission confirmed
    Frontend->>User: Registration complete
\`\`\`

#### Investment Process

\`\`\`mermaid
stateDiagram-v2
    [*] --> Browse
    Browse --> Details: Select investment
    Details --> Risk: Review details
    Risk --> Disclosure: Acknowledge risks
    Disclosure --> Purchase: Accept terms
    Purchase --> Confirmation: Complete payment
    Confirmation --> [*]
\`\`\`

#### Data Model Relationships

\`\`\`mermaid
erDiagram
    USER ||--o{ INVESTMENT : invests
    USER {
        string id
        string email
        string fullName
        string kycStatus
    }
    INVESTMENT ||--|| ISSUER : issued_by
    INVESTMENT {
        string id
        string name
        float yield
        string term
        float minInvestment
    }
    ISSUER {
        string id
        string name
        string regulatoryCompliance
    }
    TRANSACTION }|--|| USER : belongs_to
    TRANSACTION }|--|| INVESTMENT : references
    TRANSACTION {
        string id
        float amount
        string status
        date transactionDate
    }
\`\`\`

### Integration

The Mermaid diagrams can be integrated into the project in several ways:

1. **Documentation**: Used in Markdown files like this README
2. **Admin Dashboard**: For visualizing data flows and system status
3. **User Education**: To explain investment processes and workflows
4. **Development Documentation**: For API endpoints and data models

To render Mermaid diagrams in the Next.js application, you can use libraries like:
- `@mermaid-js/mermaid-react`
- `react-mermaid`
- Or implement a custom renderer using the Mermaid JavaScript library

### Installation

If you want to use Mermaid in the application itself (beyond documentation), install the required package:

\`\`\`bash
npm install mermaid
# or
yarn add mermaid
\`\`\`

Then create a component to render the diagrams:

\`\`\`tsx
'use client';

import { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

interface MermaidProps {
  chart: string;
  className?: string;
}

export function MermaidDiagram({ chart, className }: MermaidProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      mermaid.initialize({
        startOnLoad: true,
        theme: 'neutral',
        securityLevel: 'loose',
      });
      mermaid.contentLoaded();
    }
  }, [chart]);

  return (
    <div className={className} ref={ref}>
      <pre className="mermaid">{chart}</pre>
    </div>
  );
}
\`\`\`

This component can then be used throughout the application to render diagrams dynamically.

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn
- Git

### Installation

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/yourusername/agyal.git
   cd agyal
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. Run the development server:
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment Variables

Create a `.env.local` file in the root directory with the following variables:

\`\`\`
# Authentication
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key

# API URLs
NEXT_PUBLIC_API_URL=http://localhost:3000/api

# External Services
NEXT_PUBLIC_MAPBOX_TOKEN=your-mapbox-token

# Feature Flags
NEXT_PUBLIC_ENABLE_BLOCKCHAIN=true
\`\`\`

## Development Guidelines

### Code Style and Standards

- Follow the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
- Use ESLint and Prettier for code formatting
- Use TypeScript for type safety
- Write meaningful commit messages following [Conventional Commits](https://www.conventionalcommits.org/)

### Component Development

1. Create components in the appropriate directories
2. Follow the existing design patterns and use UI components from shadcn/ui
3. Implement responsive design for all screens
4. Ensure dark mode compatibility
5. Write prop types and interfaces for all components
6. Document component usage with JSDoc comments

### State Management Best Practices

1. Keep state as local as possible
2. Use React Context for shared state
3. Consider using React Query for server state
4. Implement proper error handling
5. Use reducers for complex state logic

### API Integration

Currently, the application uses mock data. To integrate with a real backend:

1. Create API service files in a new `services` directory
2. Implement API clients for each resource
3. Use React Query or SWR for data fetching, caching, and synchronization
4. Implement proper error handling and loading states
5. Add retry logic for failed requests
6. Implement optimistic updates where appropriate

### Adding New Features

When adding new features:

1. Start with user stories and requirements
2. Design the UI and user flow
3. Implement the UI components
4. Connect to the backend API
5. Write tests
6. Document the feature

## Deployment

### Vercel Deployment

The application is configured for easy deployment on Vercel:

1. Push your code to a GitHub repository
2. Import the repository in Vercel
3. Configure environment variables
4. Deploy

### Custom Server Deployment

For custom server deployment:

1. Build the application:
   \`\`\`bash
   npm run build
   \`\`\`

2. Start the production server:
   \`\`\`bash
   npm start
   \`\`\`

### CI/CD Pipeline

Implement a CI/CD pipeline using GitHub Actions:

1. Run tests on pull requests
2. Build and deploy to staging on merge to develop
3. Build and deploy to production on merge to main

## Monitoring and Analytics

Implement monitoring and analytics:

1. Use Vercel Analytics or Google Analytics for user behavior
2. Implement error tracking with Sentry
3. Use LogRocket for session replay
4. Implement performance monitoring with Lighthouse CI

## Documentation

Maintain comprehensive documentation:

1. Keep this README up to date
2. Document API endpoints with Swagger or OpenAPI
3. Use JSDoc for code documentation
4. Create user guides and tutorials

## License

[Add your license information here]

## Contact

[Add contact information here]

